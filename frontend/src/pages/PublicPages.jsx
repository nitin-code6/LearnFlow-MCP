import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from '../contexts/AuthContext';

export const Home = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    api.get('/courses').then(res => setCourses(res.data));
  }, []);
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Available Courses</h1>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {courses.map(c => (
          <div key={c.id} style={{ border: '1px solid #ccc', padding: '1rem', width: '200px' }}>
            <h3>{c.title}</h3>
            <p>{c.category}</p>
            <Link to={`/courses/${c.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '2rem' }}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required /><br/><br/>
      <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required /><br/><br/>
      <button type="submit">Login</button>
    </form>
  );
};

export const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'STUDENT' });
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData.name, formData.email, formData.password, formData.role);
      navigate('/login');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '2rem' }}>
      <h2>Register</h2>
      <input placeholder="Name" onChange={e=>setFormData({...formData, name: e.target.value})} required /><br/><br/>
      <input type="email" placeholder="Email" onChange={e=>setFormData({...formData, email: e.target.value})} required /><br/><br/>
      <input type="password" placeholder="Password" onChange={e=>setFormData({...formData, password: e.target.value})} required /><br/><br/>
      <select onChange={e=>setFormData({...formData, role: e.target.value})}>
        <option value="STUDENT">Student</option>
        <option value="INSTRUCTOR">Instructor</option>
      </select><br/><br/>
      <button type="submit">Register</button>
    </form>
  );
};

export const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    api.get(`/courses/${id}`).then(res => setCourse(res.data));
  }, [id]);

  const handleEnroll = async () => {
    try {
      await api.post(`/courses/${id}/enroll`);
      alert('Enrolled successfully!');
    } catch (err) {
      alert(err.response?.data?.error || 'Enrollment failed');
    }
  };

  if (!course) return <div>Loading...</div>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <p>Instructor: {course.instructor?.name}</p>
      {user?.role === 'STUDENT' && <button onClick={handleEnroll}>Enroll Now</button>}
    </div>
  );
};
