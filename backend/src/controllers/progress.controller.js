const prisma = require('../utils/prisma');

const getMyProgress = async (req, res) => {
  try {
    const progress = await prisma.lessonProgress.findMany({
      where: { studentId: req.user.id },
      include: { lesson: { select: { courseId: true } } }
    });
    res.json(progress);
  } catch (error) {
    res.status(500).json({ error: 'Server error fetching progress' });
  }
};

module.exports = { getMyProgress };
