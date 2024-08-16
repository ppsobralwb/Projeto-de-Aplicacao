import { createContext } from 'react'
import { User } from '../../types/User';
import { Application } from '../../types/Application';

export type AuthContextType = {
    user: User | null;
    application: Application | null;
    getApplicationById: (id: string) => Promise<Application>;
    register: (name: string, email: string, password: string) => Promise<boolean>;
    registerApplication: (name: string, applicationCall: string, parameters:[]) => Promise<boolean>;
    updateApplication: (id: string, name: string, applicationCall: string, parameters:[]) => Promise<boolean>;
    deleteApplication: (id: string) => Promise<boolean>;
    signin: (email: string, password: string) => Promise<boolean>;
    signout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);
