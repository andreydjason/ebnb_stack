// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

declare global {
  // para evitar criar múltiplas instâncias no hot reload do dev
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export default prisma;