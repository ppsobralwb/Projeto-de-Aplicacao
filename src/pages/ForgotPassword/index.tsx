import { Link } from 'react-router-dom'
import { DefaultContainer, FormContainer } from '../../styles/global'

export default function ForgotPasswordPage() {
    return (
        <DefaultContainer>
            <h2>Redefina sua senha</h2>
            <h5>Digite seu email e enviaremos uma nova senha</h5>
            <FormContainer action="/login">
                <p>
                    <label id="reset_pass_lbl">Endereço de email</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Enviar email</button>
                </p>
            </FormContainer>
            <footer>
                <p>Primeira vez? <Link to="/register">Crie uma conta</Link>.</p>
            </footer>
            <br/>
            <p><Link to="/">Voltar para o Login</Link>.</p>
        </DefaultContainer>
    )
}
