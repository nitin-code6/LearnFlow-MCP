import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import { Home, Login, Register, CourseDetail } from './pages/PublicPages';
import { StudentDashboard, CourseLearning } from './pages/StudentPages';
import { InstructorDashboard } from './pages/InstructorPages';
import { AdminDashboard } from './pages/AdminPages';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Public */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses/:id" element={<CourseDetail />} />

          {/* Student */}
          <Route path="/student" element={<ProtectedRoute allowedRoles={['STUDENT']}><StudentDashboard /></ProtectedRoute>} />
          <Route path="/student/course/:id" element={<ProtectedRoute allowedRoles={['STUDENT']}><CourseLearning /></ProtectedRoute>} />

          {/* Instructor */}
          <Route path="/instructor" element={<ProtectedRoute allowedRoles={['INSTRUCTOR']}><InstructorDashboard /></ProtectedRoute>} />

          {/* Admin */}
          <Route path="/admin" element={<ProtectedRoute allowedRoles={['ADMIN']}><AdminDashboard /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
