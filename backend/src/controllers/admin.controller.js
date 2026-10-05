const prisma = require('../utils/prisma');

const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: { id: true, name: true, email: true, role: true, createdAt: true }
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Server error fetching users' });
  }
};

const getStats = async (req, res) => {
  try {
    const totalUsers = await prisma.user.count();
    const totalCourses = await prisma.course.count();
    const totalEnrollments = await prisma.enrollment.count();

    res.json({ totalUsers, totalCourses, totalEnrollments });
  } catch (error) {
    res.status(500).json({ error: 'Server error fetching stats' });
  }
};

module.exports = { getAllUsers, getStats };
