# API Plan

This document outlines the REST API endpoints to be implemented in Node.js/Express for the LearnFlow-MCP LMS.

## Authentication endpoints

| Method | Endpoint | Description | Roles |
|--------|----------|-------------|-------|
| POST | `/api/auth/register` | Register a new user | Public |
| POST | `/api/auth/login` | Authenticate user & get JWT | Public |

## Course endpoints

| Method | Endpoint | Description | Roles |
|--------|----------|-------------|-------|
| GET | `/api/courses` | List all available courses | Public / All |
| GET | `/api/courses/:id` | Get specific course details | Public / All |
| POST | `/api/courses` | Create a new course | Instructor |
| PUT | `/api/courses/:id` | Update a course | Instructor (owner) |
| DELETE | `/api/courses/:id` | Delete a course | Instructor (owner) / Admin |
| POST | `/api/courses/:id/enroll` | Enroll current user in course | Student |
| GET | `/api/my-courses` | Get enrolled/created courses | Student / Instructor |

## Lesson endpoints

| Method | Endpoint | Description | Roles |
|--------|----------|-------------|-------|
| GET | `/api/courses/:id/lessons` | List lessons for a course | Enrolled Student / Instructor |
| POST | `/api/courses/:id/lessons` | Add a lesson to a course | Instructor (owner) |
| PUT | `/api/lessons/:id` | Update a lesson | Instructor (owner) |
| DELETE | `/api/lessons/:id` | Delete a lesson | Instructor (owner) |
| POST | `/api/lessons/:id/complete`| Mark lesson as complete | Enrolled Student |

## Progress & Stats endpoints

| Method | Endpoint | Description | Roles |
|--------|----------|-------------|-------|
| GET | `/api/my-progress` | Get overall learning progress | Student |

## Admin endpoints

| Method | Endpoint | Description | Roles |
|--------|----------|-------------|-------|
| GET | `/api/admin/users` | List all users | Admin |
| GET | `/api/admin/stats` | Get basic platform statistics | Admin |
