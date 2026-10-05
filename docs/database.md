# Database Schema

The database for LearnFlow-MCP uses PostgreSQL, managed via Prisma ORM.

## ER Diagram

```mermaid
erDiagram
    User {
        String id PK
        String email UK
        String password
        String name
        Role role "STUDENT, INSTRUCTOR, ADMIN"
        DateTime createdAt
        DateTime updatedAt
    }

    Course {
        String id PK
        String title
        String description
        String instructorId FK
        String category
        String thumbnail
        DateTime createdAt
        DateTime updatedAt
    }

    Lesson {
        String id PK
        String courseId FK
        String title
        String description
        Text content
        Int order
        DateTime createdAt
        DateTime updatedAt
    }

    Enrollment {
        String id PK
        String studentId FK
        String courseId FK
        Int progress
        DateTime enrolledAt
    }

    LessonProgress {
        String id PK
        String studentId FK
        String lessonId FK
        Boolean completed
        DateTime completedAt
    }

    User ||--o{ Course : "instructs"
    Course ||--o{ Lesson : "contains"
    User ||--o{ Enrollment : "has"
    Course ||--o{ Enrollment : "has"
    User ||--o{ LessonProgress : "tracks"
    Lesson ||--o{ LessonProgress : "tracked_by"
```

## Tables Overview

- **User**: Stores authentication details and roles.
- **Course**: Courses created by instructors.
- **Lesson**: Individual learning modules within a course.
- **Enrollment**: Tracks which student is taking which course and their overall progress.
- **LessonProgress**: Tracks the completion status of individual lessons for a student.
