import { Routes, Route } from 'react-router-dom'
import CreateApplicationPage  from './pages/CreateApplication'
import DashboardPage  from './pages/Dashboard'
import ForgotPasswordPage  from './pages/ForgotPassword'
import RegisterPage  from './pages/Register'
import LoginPage from './pages/Login'
import ApplicationPage from './pages/Application'
import { RequireAuth } from './contexts/Auth/RequireAuth'

export function Router() {
  return (
    <Routes>
        <Route path="/" element={ <LoginPage /> } />
        <Route path="/register" element={ <RegisterPage /> } />
        <Route path="/forgot-password" element={ <ForgotPasswordPage /> } />
        <Route path="/dashboard" element={< RequireAuth><DashboardPage /></RequireAuth> } />
        <Route path="/createApplication" element={<RequireAuth><CreateApplicationPage /></RequireAuth>  } />
        <Route path="/application" element={ <RequireAuth><ApplicationPage /></RequireAuth> } />
    </Routes>
  )
}