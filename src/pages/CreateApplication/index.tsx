import { useNavigate } from 'react-router-dom'
import { useForm, useFieldArray } from 'react-hook-form'
import { MinusCircle, PlusCircle } from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { Button } from '../../components/Button'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';

import {
    Container,
    ApplicationFormContainer,
    ParameterContainer, 
    Input, 
    Label, 
    ParameterSelect, 
    IconButton
} from './styles'

const newApplicationFormValidationSchema = zod.object({
    applicationName: zod.string().min(1, 'Informe o nome da aplicação'),
    applicationCall: zod.string().min(1, 'Informe o código para chamar a aplicação no terminal'),
    parameter: zod.array(
      zod.object({
        parameterName: zod.string().min(1, 'Informe o nome do parâmetro'),
        parameterTag: zod.string().length(3, 'Sua tag deve possuir 3 caracteres'),
        parameterType: zod.string().min(1, 'Selecione um tipo'),
      })
    ),
});

type NewApplicationFormData = zod.infer<typeof newApplicationFormValidationSchema>

export default function CreateApplicationPage() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const { register, handleSubmit, formState, control } = useForm({
        resolver:zodResolver(newApplicationFormValidationSchema),
        defaultValues: {
            applicationName: '',
            applicationCall: '',
            parameter: [{ parameterName: '', parameterTag: '', parameterType: '' }],
        }
    });

    const { fields, append, remove} = useFieldArray({
       control,
       name: "parameter",
    });

    const handleCreateApplication = async (data: NewApplicationFormData) => {
        const applicationRegistered = await auth.registerApplication(data.applicationName, data.applicationCall, data.parameter);
      
        if (applicationRegistered) {
            alert("Aplicação cadastrada com sucesso!");
            navigate("/dashboard");
        }
        else {
            alert("Algo deu errado!")
        }
    };

    // console.log(formState.errors)
    
    return (
        <Container>
            <h1>Crie uma Aplicação</h1>
            <ApplicationFormContainer onSubmit={handleSubmit(handleCreateApplication)} name='application' action=''>
                    <Label>Nome da aplicação:</Label>
                    <Input {...register('applicationName')}/>
                    <Label>Chamada da aplicação no terminal:</Label>
                    <Input placeholder='java -jar app.jar %=PARAM1=% %=PARAM2=%' {...register('applicationCall')}/>
                {fields.map((item, index) => (
                    <ParameterContainer key={item.id}>
                        <div>
                            <Label>Nome do parâmetro:</Label>
                            <Input {...register(`parameter.${index}.parameterName`)} />
                        </div>
                        <div>
                            <Label>Tag do parâmetro:</Label>
                            <Input {...register(`parameter.${index}.parameterTag`)} />
                        </div>
                        <div>
                            <Label>Tipo do parâmetro:</Label>
                            <ParameterSelect {...register(`parameter.${index}.parameterType`)} >
                                <option disabled value="">Escolha o tipo do parâmetro</option>
                                <option>Integer</option>
                                <option>Double</option>
                                <option>Date</option>
                                <option>String</option>
                                <option>Boolean</option>
                            </ParameterSelect>
                        </div>
                        <div>
                            <IconButton onClick={() => remove(index)}>
                                <MinusCircle size={40} color='red' alt='Remover parâmetro'/>
                            </IconButton>
                        </div>
                    </ParameterContainer>
                ))}
                <IconButton onClick={() => append({ parameterName: "", parameterTag:"", parameterType:"" })}>
                    <PlusCircle size={40} color='green' alt='Adicionar parâmetro' />
                </IconButton>
                <Button 
                    text='Criar Aplicação' 
                    type="submit"
                />
                <Button
                    text="Voltar"
                    onClick={() => navigate('/dashboard')}
                />
            </ApplicationFormContainer>
        </Container>
    )
}
