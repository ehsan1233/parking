import { PrismaClient } from '../infrastructure/database/generated/prisma';

const prisma = new PrismaClient();
export default prisma;
