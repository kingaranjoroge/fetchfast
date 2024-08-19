import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import connectMongoDB from '@/libs/mongodb';
import EmailUser from "@/models/emailusers";
import { server } from '@/config';

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
    })
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account }: { user: any, account: any }) {
      if (account.provider === "google") {
        const { name, email } = user;
        try {
          await connectMongoDB();
          const userExists = await EmailUser.findOne({ email });

          if (!userExists) {
            const res = await fetch(`${server}/api/emailusers`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                email,
              }),
            });

            if (res.ok) {
              return user;
            }
          }
        } catch (error) {
          console.log(error);
        }
      }

      return user;
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }