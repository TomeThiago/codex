import { PrismaAdapter } from "@auth/prisma-adapter";
import { compare } from "bcryptjs";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  providers: [CredentialsProvider({name:"Credentials",credentials:{email:{},password:{}},async authorize(c){if(!c?.email||!c.password)return null;const user=await prisma.user.findUnique({where:{email:c.email}});if(!user)return null;const ok=await compare(c.password,user.password);if(!ok)return null;return {id:user.id,email:user.email,name:user.name};}})],
  callbacks:{async jwt({token,user}){if(user)token.sub=user.id;return token;},async session({session,token}){if(session.user&&token.sub) (session.user as {id:string}).id=token.sub; return session;}}
};
