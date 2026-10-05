import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav style={{ padding: '1rem', background: '#333', color: '#fff', display: 'flex', gap: '1rem', justifyContent: 'space-between' }}>
      <div>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>LearnFlow MCP</Link>
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Courses</Link>
        {user ? (
          <>
            {user.role === 'STUDENT' && <Link to="/student" style={{ color: '#fff', textDecoration: 'none' }}>Dashboard</Link>}
            {user.role === 'INSTRUCTOR' && <Link to="/instructor" style={{ color: '#fff', textDecoration: 'none' }}>Instructor</Link>}
            {user.role === 'ADMIN' && <Link to="/admin" style={{ color: '#fff', textDecoration: 'none' }}>Admin</Link>}
            <button onClick={handleLogout} style={{ background: 'red', color: 'white', border: 'none', cursor: 'pointer' }}>Logout ({user.name})</button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link>
            <Link to="/register" style={{ color: '#fff', textDecoration: 'none' }}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
