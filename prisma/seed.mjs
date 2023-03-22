import { Field, PrismaClient } from "@prisma/client"
import { faker } from "@faker-js/faker"

const prisma = new PrismaClient()
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

async function seed() {
  for (let i = 0; i < 10; i++) {
    let user = await prisma.user.create({
      data: {
        name: faker.internet.userName(),
        email: faker.internet.email(),
        role: "USER",
      },
    })
    for (let i = 0; i < 10; i++) {
      let consultancy = await prisma.consultancy.create({
        data: {
          title: faker.lorem.sentence(),
          short_description: faker.lorem.sentences(2),
          long_description: faker.lorem.sentences(5),
          max_time_minuets: parseInt(faker.random.numeric(1)),
          max_attachment_count: parseInt(faker.random.numeric(1)),
          enable_video_by_provider: faker.datatype.boolean(),
          allow_enable_video_by_requester: faker.datatype.boolean(),
          allow_name_surname: ["INCLUDE", "EXCLUDE", "REQUIRED"][
            randomIntFromInterval(1, 3) - 1
          ],
          allow_profession_check: ["INCLUDE", "EXCLUDE", "REQUIRED"][
            randomIntFromInterval(1, 3) - 1
          ],
          allow_age_check: ["INCLUDE", "EXCLUDE", "REQUIRED"][
            randomIntFromInterval(1, 3) - 1
          ],
          allow_gender_check: ["INCLUDE", "EXCLUDE", "REQUIRED"][
            randomIntFromInterval(1, 3) - 1
          ],
          allow_previous_consultancy_experience_check: [
            "INCLUDE",
            "EXCLUDE",
            "REQUIRED",
          ][randomIntFromInterval(1, 3) - 1],
          allow_email_check: ["INCLUDE", "EXCLUDE", "REQUIRED"][
            randomIntFromInterval(1, 3) - 1
          ],
          allow_ongoing_support_check: ["INCLUDE", "EXCLUDE", "REQUIRED"][
            randomIntFromInterval(1, 3) - 1
          ],
          allow_expectations_check: ["INCLUDE", "EXCLUDE", "REQUIRED"][
            randomIntFromInterval(1, 3) - 1
          ],
          allow_time_spent_issue_resolution_check: [
            "INCLUDE",
            "EXCLUDE",
            "REQUIRED",
          ][randomIntFromInterval(1, 3) - 1],
          allow_expertise_in_problem_field_check: [
            "INCLUDE",
            "EXCLUDE",
            "REQUIRED",
          ][randomIntFromInterval(1, 3) - 1],
          isActive: faker.datatype.boolean(),
          userId: user.id,
        },
      })
      for (let i = 0; i < 10; i++) {
        let tag = await prisma.tag.create({
          data: {
            name: faker.random.word(),
            consultancyId: consultancy.id,
          },
        })
      }
    }
  }
}

seed()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
