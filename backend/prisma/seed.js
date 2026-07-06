const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.homestay.createMany({
    data: [
      {
        name: "Mountain View Cottage",
        location: "Kasol",
        price: 2500,
        rating: 4.8,
        image: "🏔️",
      },
      {
        name: "Forest Retreat",
        location: "Manali",
        price: 3200,
        rating: 4.7,
        image: "🌲",
      },
      {
        name: "Lake Paradise",
        location: "Nainital",
        price: 2800,
        rating: 4.6,
        image: "🏞️",
      },
    ],
    skipDuplicates: true,
  });

  console.log("✅ Homestays seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });