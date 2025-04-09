import { z } from "zod";

export const signupSchema = z.object({
  body: z.object({
    email: z.string().email({ message: "Invalid email format" }),
    password: z
      .string()
      .min(6, { message: "Password must be atleast 6 characters" }),
    name: z.string(),
    role: z.string().refine((val) => ["ADMIN", "USER", "GUEST"].includes(val), {
      message: "Invalid role. Must be one of: ADMIN, USER, or GUEST",
    }),
    restaurantId: z.string().uuid(),
  }),
});

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string(),
  }),
});
