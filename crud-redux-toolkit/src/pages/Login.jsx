import { useAuth } from '../context/AuthContext';

const Login = () => {
    const { login } = useAuth();

    const handleLogin = () => {
        login(); // Inicia sesión y redirige a /dashboard
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="mb-4 text-2xl">Login</h1>
            <button
                onClick={handleLogin}
                className="px-4 py-2 text-white bg-blue-600 rounded"
            >
                Iniciar Sesión
            </button>
        </div>
    );
};

export default Login;