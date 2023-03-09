import bcrypt from "bcryptjs";
import { db } from "./db.server";

type LoginForm = {
  username: string;
  password: string;
};

export const login = async ({ username, password }: LoginForm) => {
  const user = db.user.findUnique({
    where: { username },
  });
  if (!user) return null;

  const isValidPassword = await bcrypt.compare(password, user.passwordHash);
  if (!isValidPassword) return null;

  return { id: user.id, username };
};
