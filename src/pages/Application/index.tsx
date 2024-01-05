import { DefaultContainer } from "../../styles/global";

export default function ApplicationPage() {
    return (
        <DefaultContainer>
            <h1>Application</h1>
            <form action="/dashboard">
            <p>
                <label className='label'>Selecione o arquivo:</label>
                <br/>
                <input className='campo' id='selecao-arquivo' type='file'/>
            </p>
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
            <p>
                <label className='label'>Tamanho:</label>
                <br/>
                <input className='campo' type="number" name="tamanho" required />
            </p>
            <p>
                <label className='label'>Email:</label>
                <br/>
                <input className='campo' type="email" name="tamanho" required />
            </p>
            <p>
                <button id="sub_btn" type="submit">Rodar Algoritmo</button>
            </p>
        </form>
        </DefaultContainer>
    )
}
