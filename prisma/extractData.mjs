import { PrismaClient } from '@prisma/client';
 import fs from 'fs';

const prisma = new PrismaClient();

async function main() {
  const consultancies = await prisma.consultancy.findMany({include:{User:{select:{id:true, name: true}}, tags:{select:{ id:true, name: true }}}});
  const selectedFields = consultancies.map(consultancy => ({
    id:consultancy.id,
    title: consultancy.title,
    long_description: consultancy.long_description,
    short_description: consultancy.short_description,
    tags: consultancy.tags,
    user:consultancy.User
  }));

  fs.writeFileSync('data-consultancies.json', JSON.stringify(selectedFields, null, 
    2));

    console.log('Data has been saved to output.json');
    }
    
    main()
    .catch((error) => {
    console.error(error);
    process.exit(1);
    })
    .finally(async () => {
    await prisma.$disconnect();
    });