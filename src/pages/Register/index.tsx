import { Link, useNavigate } from 'react-router-dom'
import { DefaultContainer, FormContainer } from '../../styles/global'
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';

export default function RegisterPage() {
    // const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = async () => {
          if (password !== passwordConfirmation) {
            alert("As senhas não são iguais!");
            return;
          }
      
          const registered = await auth.register(name, email, password);
      
          if (registered) {
            alert("Usuário cadatrado com sucesso!");
            navigate("/");
          }      
    };

    return (
        <DefaultContainer>
            <h1>Crie sua conta</h1>
            <FormContainer>
                {/* <input type='hidden' name='id' value={id}></input> */}
                <p>
                    <label className='label'>Nome</label><br/>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} required />
                </p>
                <p>
                    <label className='label'>Email</label><br/>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                </p>
                <p>
                    <label className='label'>Senha</label><br/>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                </p>
                <p>
                    <label className='label'>Confirmar Senha</label><br/>
                    <input type="password" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} required />
                </p>
                <p>
                    <button id="sub_btn" onClick={handleRegister}>Criar Conta</button>
                </p>
            </FormContainer>
            <footer>
                <p><Link to="/">Voltar para o Login</Link>.</p>
            </footer>
        </DefaultContainer>
    )
}


