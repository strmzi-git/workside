import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "../../libs/prismadb";

export async function POST(request: Request) {
  const data = await request.json();

  const potentialUser = await prisma.user.findUnique({
    where: { email: data.email },
  });
  if (potentialUser) {
    throw new Error();
  }

  const hashedPassword = await bcrypt.hash(data.password, 8);
  const newUser = await prisma.user.create({
    data: {
      email: data.email,
      name: data.name,
      hashedPassword,
    },
  });
  return NextResponse.json(newUser);
}
