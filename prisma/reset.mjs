import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function truncateTable() {
  try {
        await prisma.$executeRaw`SET FOREIGN_KEY_CHECKS = 0; `
    await prisma.$executeRaw`TRUNCATE TABLE Tag;`
    await prisma.$executeRaw`TRUNCATE TABLE User;`
    await prisma.$executeRaw`TRUNCATE TABLE Consultancy;`
    await prisma.$executeRaw`TRUNCATE TABLE Session;`
    await prisma.$executeRaw`SET FOREIGN_KEY_CHECKS = 1; `


    
    console.log('Tables truncated successfully.')
  } catch (error) {
    console.error(error)
  } finally {
    await prisma.$disconnect()
  }
}

truncateTable()
