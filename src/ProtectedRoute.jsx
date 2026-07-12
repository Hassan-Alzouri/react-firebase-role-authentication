import { Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

const ProtectedRoute = ({ children, role }) => {
  const { currentUser } = useAuth();

  if (currentUser === undefined) {
    return <p>Loading...</p>;
  }

  if (!currentUser) return <Navigate to="/" />;

  if (role === 'admin' && currentUser.email !== 'admin@gmail.com') {
    return <Navigate to="/user" />;
  }

  if (role !== 'admin' && currentUser.email === 'admin@gmail.com') {
    return <Navigate to="/admin" />;
  }

  return children;
};

export default ProtectedRoute;
