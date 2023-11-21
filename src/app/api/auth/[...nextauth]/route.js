import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const {
    GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET
  } = process.env;

  //console.log(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET)

 const handlers = NextAuth({
        providers: [
            GoogleProvider({
              clientId: GOOGLE_CLIENT_ID,
              clientSecret: GOOGLE_CLIENT_SECRET
            },
            
            )
    ]
})

export const {GET, POST} = handlers 