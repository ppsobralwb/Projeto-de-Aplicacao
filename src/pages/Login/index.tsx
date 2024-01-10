import { Link, useNavigate } from 'react-router-dom'
import { DefaultContainer, FormContainer } from '../../styles/global'
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { Button } from '../../components/Button';

export default function LoginPage() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // api.get('/').then( response => {
    //     console.log(response.data)
    // })
    
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if(email && password) {
            const isLogged = await auth.signin(email,password);
            if(isLogged) {
                navigate('/dashboard')
            }
            else {
                alert("Deu errado")
            }
        }
    }

    return (
        <DefaultContainer>
            <h1>Página de Login</h1>
            <FormContainer action=''>
                <p>
                    <label className='label'>Email</label><br/>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} required />
                </p>
                <p>
                    <label className='label'>Senha </label>
                    <Link to="/forgot-password"><label className="right-label">Esqueceu a senha?</label></Link>
                    <br/>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                </p>
                <Button 
                    text="Login" 
                    onClick={handleLogin}
                />
            </FormContainer>
            <footer>
                <p>Primeira vez? <Link to="/register">Crie uma conta</Link>.</p>
            </footer>
        </DefaultContainer>
    )
}
