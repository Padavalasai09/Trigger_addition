import { PrismaClient } from "@prisma/client";

// Ensure Prisma client is initialized only once in development
declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma =
  globalThis.prisma || new PrismaClient();
  console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
  console.log("going ")
}
console.log("not going")
