import { createContext } from 'react'
import { User } from '../../types/User';

export type AuthContextType = {
    user: User | null;
    register: (name: string, email: string, password: string) => Promise<User[] | undefined>;
    signin: (email: string, password: string) => Promise<boolean>;
    signout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);
