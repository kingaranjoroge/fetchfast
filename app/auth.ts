import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import connectMongoDB from '@/libs/mongodb';
import EmailUser from "@/models/emailusers";
import { server } from '@/config';

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
    })
  ],
  callbacks: {
    async signIn({ user, account }: { user: any, account?: any }) {
      if (account?.provider === "google") {
        const { name, email } = user;
        try {
          await connectMongoDB();
          const userExists = await EmailUser.findOne({ email });

          if (!userExists) {
            const res = await fetch(`${server}/api/emailusers`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ name, email }),
            });

            if (res.ok) return true;
          }
        } catch (error) {
          console.error(error);
        }
      }
      return true;
    },
  },
};

// Export handlers so routes can re-export them
export const { handlers, auth } = NextAuth(authOptions);
export default auth;