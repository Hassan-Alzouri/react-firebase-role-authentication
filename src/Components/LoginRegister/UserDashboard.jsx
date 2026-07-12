import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import "./LoginRegister.css";
import { useAuth } from '../../context/AuthContext';

const UserDashboard = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const getNameFromEmail = (email) => {
    if (!email) return '';
    const namePart = email.split('@')[0];
    return namePart.charAt(0).toUpperCase() + namePart.slice(1);
  };

  if (!currentUser) return <p>Loading...</p>;

  return (
    <div className="dashboard-user">
      <h1>Welcome, {getNameFromEmail(currentUser.email)}!</h1>
      <p>This is your dashboard with dummy user info.</p>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserDashboard;
