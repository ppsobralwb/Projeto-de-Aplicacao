import { Routes, Route } from 'react-router-dom'
import CreateApplicationPage  from './pages/CreateApplication'
import DashboardPage  from './pages/Dashboard'
import ForgotPasswordPage  from './pages/ForgotPassword'
import RegisterPage  from './pages/Register'
import LoginPage from './pages/Login'
import ApplicationPage from './pages/Application'
import { RequireAuth } from './contexts/Auth/RequireAuth'
import UpdateApplicationPage from './pages/UpdateApplicationPage'

export function Router() {
  return (
    <Routes>
        <Route path="/" element={ <LoginPage /> } />
        <Route path="/register" element={ <RegisterPage /> } />
        <Route path="/forgot-password" element={ <ForgotPasswordPage /> } />
        <Route path="/dashboard" element={< RequireAuth><DashboardPage /></RequireAuth> } />
        <Route path="/createApplication" element={<RequireAuth><CreateApplicationPage /></RequireAuth>  } />
        <Route path="/updateApplication/:id" element={ <RequireAuth><UpdateApplicationPage /></RequireAuth> } />
        <Route path="/application/:id" element={ <RequireAuth><ApplicationPage /></RequireAuth> } />
    </Routes>
  )
}