import { PrismaClient } from "../generated/prisma/client";
import {PrismaNeon} from "@prisma/adapter-neon"

const adapter = new PrismaNeon({connectionString:"postgresql://neondb_owner:npg_Itz8fMZg2pil@ep-gentle-flower-amt0bmjy-pooler.c-5.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"})

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
