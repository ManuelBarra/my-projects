
import { useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';

const Dashboard = () => {
    const dispatch = useDispatch();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold">Bienvenido al Dashboard</h1>
            <button
                onClick={() => dispatch(logout())}
                className="px-4 py-2 mt-4 text-white bg-red-500 rounded hover:bg-red-600"
            >
                Cerrar Sesión
            </button>
        </div>
    );
};

export default Dashboard;