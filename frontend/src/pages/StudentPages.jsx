import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../services/api';

export const StudentDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    api.get('/my-courses').then(res => setCourses(res.data));
    api.get('/my-progress').then(res => setProgress(res.data));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Student Dashboard</h1>
      <h2>My Enrolled Courses</h2>
      <ul>
        {courses.map(c => (
          <li key={c.id}>
            <Link to={`/student/course/${c.id}`}>{c.title}</Link>
          </li>
        ))}
      </ul>
      <h2>My Progress</h2>
      <p>Completed {progress.length} lessons</p>
    </div>
  );
};

export const CourseLearning = () => {
  const { id } = useParams();
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    api.get(`/courses/${id}/lessons`).then(res => setLessons(res.data));
  }, [id]);

  const markComplete = async (lessonId) => {
    await api.post(`/lessons/${lessonId}/complete`);
    alert('Lesson marked complete!');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Course Lessons</h1>
      {lessons.map(l => (
        <div key={l.id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
          <h3>{l.title}</h3>
          <p>{l.content}</p>
          <button onClick={() => markComplete(l.id)}>Mark Complete</button>
        </div>
      ))}
    </div>
  );
};
