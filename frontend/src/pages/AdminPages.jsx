import React, { useState, useEffect } from 'react';
import api from '../services/api';

export const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/admin/stats').then(res => setStats(res.data));
    api.get('/admin/users').then(res => setUsers(res.data));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Admin Dashboard</h1>
      {stats && (
        <div>
          <h3>Platform Stats</h3>
          <p>Users: {stats.totalUsers} | Courses: {stats.totalCourses} | Enrollments: {stats.totalEnrollments}</p>
        </div>
      )}
      <h3>Users List</h3>
      <table border="1" cellPadding="5">
        <thead>
          <tr><th>Name</th><th>Email</th><th>Role</th></tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}><td>{u.name}</td><td>{u.email}</td><td>{u.role}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
