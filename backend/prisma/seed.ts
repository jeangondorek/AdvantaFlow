import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const exists = await prisma.user.findUnique({ where: { email: 'jean@teste.com' } });

  if (!exists) {
    await prisma.user.create({
      data: {
        name: 'jean',
        email: 'jean@teste.com',
        password: await bcrypt.hash('1', 10),
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
