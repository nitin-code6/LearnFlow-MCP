import React, { useState, useEffect } from 'react';
import api from '../services/api';

export const InstructorDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ title: '', description: '', category: '' });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = () => {
    api.get('/my-courses').then(res => setCourses(res.data));
  };

  const handleCreateCourse = async (e) => {
    e.preventDefault();
    await api.post('/courses', newCourse);
    fetchCourses();
    setNewCourse({ title: '', description: '', category: '' });
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Instructor Dashboard</h1>
      
      <h2>Create Course</h2>
      <form onSubmit={handleCreateCourse}>
        <input placeholder="Title" value={newCourse.title} onChange={e=>setNewCourse({...newCourse, title: e.target.value})} required /><br/>
        <input placeholder="Description" value={newCourse.description} onChange={e=>setNewCourse({...newCourse, description: e.target.value})} required /><br/>
        <input placeholder="Category" value={newCourse.category} onChange={e=>setNewCourse({...newCourse, category: e.target.value})} required /><br/>
        <button type="submit">Create</button>
      </form>

      <h2>My Courses</h2>
      <ul>
        {courses.map(c => <li key={c.id}>{c.title}</li>)}
      </ul>
    </div>
  );
};
