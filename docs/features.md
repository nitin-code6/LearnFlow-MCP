# Feature List

This document outlines the MVP features for the LearnFlow-MCP Learning Management System.

## User Roles

1. **Student**: Can view, enroll in, and progress through courses.
2. **Instructor**: Can create and manage courses and lessons.
3. **Admin**: Can oversee users and platform statistics.

## Authentication & Authorization

- User registration (Student/Instructor)
- Login / Logout functionality
- JWT-based authentication
- Protected routes requiring authentication
- Role-based authorization middleware (Student, Instructor, Admin)

## Student Features

- View available courses
- View detailed course information
- Enroll in a course
- View enrolled courses (My Courses)
- View lessons within a course
- Mark a lesson as completed
- View learning progress (completion percentage)

## Instructor Features

- Create new courses
- Update existing course details
- Delete courses
- Add lessons to a course
- Update existing lessons
- Delete lessons
- View enrolled students for their courses

## Admin Features

- View all users in the system
- View all courses
- Disable or delete users if appropriate
- View basic system statistics (e.g., total users, total courses, enrollment count)

## Core Entities

- **Course**: Contains id, title, description, instructor, category, thumbnail, createdAt, updatedAt.
- **Lesson**: Contains id, courseId, title, description, content, order.
- **Enrollment**: Contains id, studentId, courseId, enrolledAt, progress.
- **Lesson Progress**: Contains studentId, lessonId, completed, completedAt.
