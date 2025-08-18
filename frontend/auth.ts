import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma";
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks:{
    async signIn ({ profile }){
      if(profile?.email?.endsWith('@verafiles.org') || profile?.email === 'furbyte88@gmail.com'){
        return true;
      } else {
        return false;
      }
    }
},
})