import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const { count } = await prisma.product.createMany({
    data: [
      { name: "Product A", price: 100.0, quantity: 5 },
      { name: "Product B", price: 150.0, quantity: 5 },
      { name: "Product C", price: 200.0, quantity: 5 },
    ],
  });

  console.log(`${count} products added to database.`);
};

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
