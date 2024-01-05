import { useForm } from "react-hook-form"


interface Props {
    name: string
    parameter: [
        name: string,
        type: string
    ]
}


export default function Parameter(){
    return(
            <div>
                <p>
                    <label className='label'>Nome do Parâmetro:</label>
                    
                    <input className='campo' type="text" name="name" required/>
                </p>
                <p>
                    <label className='label'>Tag:</label>
                    <input className='campo' type="text" name="tag" required/>
                </p>
                <p>
                    <label className='label'>Tipo</label>
                    <select className='campo' name="tipo" required>
                        <option disabled selected value="">Escolha o tipo do parâmetro</option>
                        <option>Integer</option>
                        <option>Double</option>
                        <option>Date</option>
                        <option>String</option>
                        <option>Boolean</option>
                    </select>
                </p>
            </div>      
    )
}