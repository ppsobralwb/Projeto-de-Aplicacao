import { Container, Header, MenuContainer } from "./styles";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export default function DashboardPage() {
    const auth = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogout = async () => {
        await auth.signout();
        navigate('/');
    }

    return(
        <Container>
            <Header>
                <h2>Bem vindo ao sistema, Pedro! 👋</h2>
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
            <table>
                <caption>
                    <h1>Aplicações</h1>
                </caption>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Criador</th>
                        <th>Data</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Nome da aplicação</td>
                    <td>
                        Pedro Paulo
                    </td>
                    <td>
                        08/01/2024
                    </td>
                    <td>
                        <button>Rodar</button>
                        <button>Editar</button>
                        <button>Excluir</button>
                    </td>
                    </tr>
                    <tr>
                        <td>Nome da aplicação</td>
                        <td>
                            Pedro Paulo
                        </td>
                        <td>
                            08/01/2024
                        </td>
                        <td>
                        <button>Rodar</button>
                        <button>Editar</button>
                        <button>Excluir</button>
                    </td>
                    </tr>
                    <tr>
                        <td>Nome da aplicação</td>
                        <td>
                            Pedro Paulo
                        </td>
                        <td>
                            08/01/2024
                        </td>
                        <td>
                        <button>Rodar</button>
                        <button>Editar</button>
                        <button>Excluir</button>
                    </td>
                    </tr>
                    <tr>
                        <td>Nome da aplicação</td>
                        <td>
                            Pedro Paulo
                        </td>
                        <td>
                            08/01/2024
                        </td>
                        <td>
                        <button>Rodar</button>
                        <button>Editar</button>
                        <button>Excluir</button>
                    </td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}