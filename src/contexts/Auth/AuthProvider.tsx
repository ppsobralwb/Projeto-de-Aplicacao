import { useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import { User } from "../../types/User"
import { useApi } from "../../hooks/useApi";

export const AuthProvider = ({ children }: { children: JSX.Element}) => {
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    useEffect(() => {
        const validateToken = async () => {
            const userToken = localStorage.getItem('authToken');
            
            if(userToken) {
                const data = await api.validateToken(userToken);
                if(data.user) {
                    setUser(data.user)
                }
            }
        }
        validateToken();
    }, [api]);
    
    // const signup = async (id: number, name: string, email: string, password: string): Promise<User | undefined> => {
    //     try {    
    //         const newUserResult = await api.signup(id, name, email, password);
    
    //         const newUser = newUserResult.user;
    //         const usersStorage = JSON.parse(localStorage.getItem('users_bd'));
    //         const updatedUsers = [...usersStorage, newUser];
    //         localStorage.setItem('users_bd', JSON.stringify(updatedUsers));
    
    //         return newUser;
    //     } catch (error) {
    //         console.error("Erro durante o registro:", error);
    //         throw new Error("Ocorreu um erro durante o registro. Tente novamente mais tarde.");
    //     }
    // };
    
    // const signup = async (id: number, name: string, email: string, password: string): Promise<User | undefined> => {
    //     try {
    //         // Chamar a API para criar o usuário
    //         const newUserResult = await api.signup(id, name, email, password);
    
    //         // Verificar se a resposta da API contém dados do usuário
    //             // Obter informações do usuário da resposta
    //             const newUser: User = newUserResult.user;
    
    //             // Obter usuários existentes do localStorage
    //             const usersStorageString = localStorage.getItem('users_bd');
    //             const usersStorage: User[] = usersStorageString ? JSON.parse(usersStorageString) : [];
    
    //             // Atualizar a lista de usuários com o novo usuário
    //             const updatedUsers: User[] = [...usersStorage, newUser];
    
    //             // Armazenar a lista atualizada no localStorage
    //             localStorage.setItem('users_bd', JSON.stringify(updatedUsers));
    
    //             // Retornar as informações do novo usuário
    //             return newUser;
    //     } catch (error) {
    //         console.error("Erro durante o registro:", error);
    //         throw new Error("Ocorreu um erro durante o registro. Tente novamente mais tarde.");
    //     }
    // };


    // const signup = async ( name: string, email: string, password: string) => {
    //     // Chamar a função signup da API
    //     const newUser = await api.signup(name, email, password);
    
    //     // Armazenar o novo usuário no localStorage ou onde for apropriado no seu aplicativo
    //     localStorage.setItem('users_bd', JSON.stringify(newUser));

    //     const usersStorageString = localStorage.getItem('users_bd');
    //     const usersStorage = JSON.parse(usersStorageString);
        
    //     console.log(usersStorage);
    //     // Atualizar a lista de usuários com o novo usuário
    //     //const updatedUsers = [...usersStorage, newUser];
    
    //     // Armazenar a lista atualizada no localStorage
    //     //localStorage.setItem('users_bd', JSON.stringify(updatedUsers));
    
    //     // Retornar o novo usuário
    //     return true;
    // };

    const register = async (name: string, email: string, password: string) => {
        try {
            await api.register(name, email, password);
            return true;
        } catch (error) {
            console.error("Erro durante o registro:", error);
            throw new Error("Ocorreu um erro durante o registro. Tente novamente mais tarde.");
        }
    };

    const signin = async (email: string, password: string) => {
        const data = await api.signin(email, password);
        if(data.user && data.token) {
            setUser(data.user);
            setToken(data.token);
            return true;
        }
        return false;
    };

    const signout = async () => {
        setUser(null);
        setToken('');
        await api.logout();
    };

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token);
    }
    
    return(
        <AuthContext.Provider value={{ user, register, signin, signout }}>
            {children}
        </AuthContext.Provider>
    )
}