import { Container, Header, MenuContainer, ContentContainer } from "./styles";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useApi } from "../../hooks/useApi";
import { format } from 'date-fns';

interface Application {
    _id: string;
    name: string;
    applicationCall: string;
    parameters: {parameterName: string, parameterTag: string, parameterType:string }[];
    createdBy: string;
    createdAt: Date;
}

export default function DashboardPage() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const api = useApi();
    const [applications, setApplications] = useState<Application[]>([]);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const data = await api.getApplications();
                setApplications(data);
            } catch (error) {
                console.error("Erro ao buscar as aplicações:", error);
            }
        };
        fetchApplications();
    }, [api])

    const handleLogout = async () => {
        const confirmed = window.confirm('Você tem certeza que deseja sair?')

        if (confirmed){
            await auth.signout();
            navigate('/');
        }
    }

    const handleRunApplication = async (id: string) => {
        navigate(`/application/${id}`);
    }

    const handleEditApplication = async (id: string) => {
        navigate(`/updateApplication/${id}`);
    }

    const handleDeleteApplication = async (id: string) => {
        const confirmed = window.confirm('Você tem certeza que deseja deletar esta aplicação?')

        if (confirmed) {
            const deleteApplication = await auth.deleteApplication(id);

            if (deleteApplication) {
                alert("Aplicação deletada com sucesso!");
                setApplications(prev => prev.filter(app => app._id !== id));
            } else {
                alert("Erro ao deletar a aplicação.")
            }
        }
    };

    return(
        <Container>
            <Header>
                <h2>Bem-vindo ao sistema, {auth.user?.name}! 👋</h2>
                <MenuContainer>
                    <Button 
                        text='Criar nova aplicação'
                        onClick={() => navigate('/createApplication')}
                    />
                    <Button 
                        text='Sair'
                        onClick={handleLogout}
                    />
                </MenuContainer>
            </Header>
            <ContentContainer>
                <table>
                    <caption>
                        <h1>Aplicações Criadas</h1>
                    </caption>
                    <thead>
                        <tr>
                            <th><strong>Título</strong></th>
                            <th><strong>Criador</strong></th>
                            <th><strong>Data</strong></th>
                            <th><strong>Opções</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                    {applications.map(application =>(
                        <tr key={application._id}>

                            <td>
                                {application.name}
                            </td>
                            <td>
                                {application.createdBy}
                            </td>
                            <td>
                                {format(new Date(application.createdAt), 'dd/MM/yyyy')}
                            </td>
                            <td>
                                <button onClick={() => handleRunApplication(application._id)}>Rodar</button>
                                <button onClick={() => handleEditApplication(application._id)}>Editar</button>
                                <button onClick={() => handleDeleteApplication(application._id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </ContentContainer>
        </Container>
    )
}