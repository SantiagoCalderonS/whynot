//import NextAuth from "next-auth";
import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

const {
    GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET , GITHUB_ID, GITHUB_SECRET
  } = process.env;

const providers ={
        providers: [
            GoogleProvider({
              clientId: GOOGLE_CLIENT_ID,
              clientSecret: GOOGLE_CLIENT_SECRET,
            })
    ]
}


export async function GET(req, res) {
  return NextAuth(req, res, providers);
}

export async function POST(req, res) {
  return NextAuth(req, res, providers);
}
