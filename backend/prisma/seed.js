const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: 'admin@learnflow.com' },
    update: {},
    create: {
      email: 'admin@learnflow.com',
      name: 'System Admin',
      password: 'hashed_password_here', // In a real app, hash this!
      role: 'ADMIN',
    },
  });

  const instructor = await prisma.user.upsert({
    where: { email: 'instructor@learnflow.com' },
    update: {},
    create: {
      email: 'instructor@learnflow.com',
      name: 'John Doe',
      password: 'hashed_password_here',
      role: 'INSTRUCTOR',
    },
  });

  const student = await prisma.user.upsert({
    where: { email: 'student@learnflow.com' },
    update: {},
    create: {
      email: 'student@learnflow.com',
      name: 'Jane Smith',
      password: 'hashed_password_here',
      role: 'STUDENT',
    },
  });

  console.log('Seed data inserted successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
