import { Link } from "react-router-dom";
import { DefaultContainer } from "../../styles/global";

export default function DashboardPage() {
    return(
        <DefaultContainer>
            <h1>DASHBOARD</h1>
            <button><Link to="/">Sair</Link></button>
        </DefaultContainer>
    )
}