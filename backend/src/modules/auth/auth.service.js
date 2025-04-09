import bcrypt from "bcryptjs";
import prisma from "../../config/db.js";
import { generateToken } from "../../middlewares/authMiddleware.js";

export async function signup({ email, password, name, role, restaurantId }) {
  const passwordHash = await bcrypt.hash(password, 10);
  return prisma.user.create({
    data: { email, passwordHash, name, role, restaurantId },
    select: { id: true, email: true, role: true },
  });
}

export async function login({ email, password }) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    throw new Error("Invalid credentials");
  }

  const token = generateToken({ userId: user.id, role: user.role });
  return token;
}
