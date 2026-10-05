const prisma = require('../utils/prisma');

const getAllCourses = async (req, res) => {
  try {
    const courses = await prisma.course.findMany({
      include: { instructor: { select: { name: true } } }
    });
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Server error fetching courses' });
  }
};

const getCourseById = async (req, res) => {
  try {
    const course = await prisma.course.findUnique({
      where: { id: req.params.id },
      include: { instructor: { select: { name: true } }, lessons: { orderBy: { order: 'asc' } } }
    });
    if (!course) return res.status(404).json({ error: 'Course not found' });
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: 'Server error fetching course' });
  }
};

const createCourse = async (req, res) => {
  const { title, description, category, thumbnail } = req.body;
  try {
    const course = await prisma.course.create({
      data: {
        title,
        description,
        category,
        thumbnail,
        instructorId: req.user.id
      }
    });
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ error: 'Server error creating course' });
  }
};

const updateCourse = async (req, res) => {
  try {
    const course = await prisma.course.findUnique({ where: { id: req.params.id } });
    if (!course) return res.status(404).json({ error: 'Course not found' });
    if (course.instructorId !== req.user.id && req.user.role !== 'ADMIN') {
      return res.status(403).json({ error: 'Forbidden' });
    }

    const updatedCourse = await prisma.course.update({
      where: { id: req.params.id },
      data: req.body
    });
    res.json(updatedCourse);
  } catch (error) {
    res.status(500).json({ error: 'Server error updating course' });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const course = await prisma.course.findUnique({ where: { id: req.params.id } });
    if (!course) return res.status(404).json({ error: 'Course not found' });
    if (course.instructorId !== req.user.id && req.user.role !== 'ADMIN') {
      return res.status(403).json({ error: 'Forbidden' });
    }

    await prisma.course.delete({ where: { id: req.params.id } });
    res.json({ message: 'Course deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error deleting course' });
  }
};

const enrollInCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const existingEnrollment = await prisma.enrollment.findFirst({
      where: { studentId: req.user.id, courseId }
    });

    if (existingEnrollment) {
      return res.status(400).json({ error: 'Already enrolled in this course' });
    }

    const enrollment = await prisma.enrollment.create({
      data: {
        studentId: req.user.id,
        courseId
      }
    });
    res.status(201).json(enrollment);
  } catch (error) {
    res.status(500).json({ error: 'Server error enrolling in course' });
  }
};

const getMyCourses = async (req, res) => {
  try {
    if (req.user.role === 'STUDENT') {
      const enrollments = await prisma.enrollment.findMany({
        where: { studentId: req.user.id },
        include: { course: true }
      });
      res.json(enrollments.map(e => e.course));
    } else if (req.user.role === 'INSTRUCTOR') {
      const courses = await prisma.course.findMany({
        where: { instructorId: req.user.id }
      });
      res.json(courses);
    } else {
      res.json([]);
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error fetching my courses' });
  }
};

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
  enrollInCourse,
  getMyCourses
};
