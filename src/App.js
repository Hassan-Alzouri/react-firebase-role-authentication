import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginRegister from './Components/LoginRegister/LoginRegister';
import UserDashboard from './Components/LoginRegister/UserDashboard';
import AdminDashboard from './Components/LoginRegister/AdminDashboard';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      
        <Routes>
          <Route path="/" element={<LoginRegister />} />
          <Route path="/user" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
          <Route path="/admin" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />
        </Routes>
      
    </AuthProvider>
  );
}

export default App;