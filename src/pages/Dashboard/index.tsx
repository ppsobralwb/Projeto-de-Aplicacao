import { Link } from "react-router-dom";
import { Container, Header } from "./styles";

export default function DashboardPage() {
    return(
        <Container>
            <Header>
                <h2>Bem vindo ao sistema, Pedro! 👋</h2>
                <div>
                    <button>Criar nova aplicação</button>
                    <button><Link to="/">Sair</Link></button>
                </div>
            </Header>
            <br/>
            <br/>
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