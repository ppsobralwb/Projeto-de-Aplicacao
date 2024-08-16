import { useNavigate, useParams } from "react-router-dom";
import { DefaultContainer } from "../../styles/global";
import { Button } from "../../components/Button";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useContext, useEffect, useState } from "react";
import { Application } from "../../types/Application";

export default function ApplicationPage() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [application, setApplication] = useState<Application | null>(null);

    useEffect(() => {
        const loadApplicationData = async () => {
            if (id) {
                try {
                    const applicationData = await auth.getApplicationById(id);
                    setApplication(applicationData);
                } catch (error) {
                    console.error('Erro ao carregar a aplicação:', error);
                    alert('Erro ao carregar a aplicação');
                    navigate('/dashboard');
                }
            }
        };

        loadApplicationData();
    }, [id, auth, navigate])

    const handleRunApplication = async (e: React.FormEvent) => {
        e.preventDefault();
        // código do amigo
    }
    
    return (
        <DefaultContainer>
            <h1>{application ? application.name: "Carregando..."}</h1>
            <br/>
            <form action="/dashboard">
            <p>
                <label className='label'>Selecione o arquivo:</label>
                <br/>
                <input className='campo' id='selecao-arquivo' type='file'/>
            </p>
            <br/>
            <p>
                <label className='label'>Máquina a ser utilizada:</label>
                <br/>
                <select className='campo' name="maquina" required>
                    <option disabled selected value="">Máquinas disponíveis</option>
                    <option>Máquina 1</option>
                    <option>Máquina 2</option>
                    <option>Máquina 3</option>
                </select>
            </p>
            <br/>
            <p>
                <label className='label'>Tamanho:</label>
                <br/>
                <input className='campo' type="number" name="tamanho" required />
            </p>
            <br/>
            <p>
                <label className='label'>E-mail:</label>
                <br/>
                <input className='campo' type="email" name="tamanho" required />
            </p>
            <br/>
            <Button
                text='Rodar Algoritmo'
                type="submit"
                onClick={() => handleRunApplication}
            />
            <Button
                text="Voltar"
                onClick={() => navigate('/dashboard')}
            />
        </form>
        </DefaultContainer>
    )
}
