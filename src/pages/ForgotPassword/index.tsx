import { Link } from 'react-router-dom'
import { DefaultContainer, FormContainer } from '../../styles/global'
import { Button } from '../../components/Button'

export default function ForgotPasswordPage() {
    return (
        <DefaultContainer>
            <h1>Redefina sua senha</h1>
            <br/>
            <h4>Digite seu email e enviaremos uma nova senha</h4>
            <FormContainer action="/login">
                <p>
                    <label id="reset_pass_lbl">Endereço de email</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <Button 
                        text="Enviar email" 
                        // onClick={handleChangePassword}
                    />
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
