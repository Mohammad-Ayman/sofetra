import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type TLogin = z.infer<typeof loginSchema>;
export { loginSchema };
