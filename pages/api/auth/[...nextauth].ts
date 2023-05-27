import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

import prisma from "../../../app/libs/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcrypt";
import NextAuth from "next-auth/next";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID as string,
    //   clientSecret: process.env.GOOGLE_SECRET as string,
    // }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error("Invalid credentials provided.");
        }

        const currentUser = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!currentUser) {
          throw new Error("Invalid credentials provided");
        }

        const truthyPassword = await bcrypt.compare(
          credentials.password,
          currentUser.hashedPassword!
        );

        if (!truthyPassword) {
          throw new Error("Invalid credentials provided");
        }
        return currentUser;
      },
    }),
  ],
  secret: process.env.NEXAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
  pages: {
    signIn: "/",
  },
};

export default NextAuth(authOptions);
