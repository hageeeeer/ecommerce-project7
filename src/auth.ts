import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";



export const authOptions: NextAuthOptions = {
    session: {
  strategy: "jwt",
},
    pages: {
        signIn: '/auth/login',
    },
    providers: [
        Credentials({
            name: 'credentials',
            credentials: {
                email: {},
                password: {}
            },
            authorize: async (credentials) => {

                const res = await fetch(`${process.env.API}/auth/signin`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password
                    })
                })
                const payload = await res.json()
                const decode = JSON.parse(Buffer.from(payload.token.split('.')[1], 'base64').toString());
                if (payload.message === 'success') {
                    return {
                        id: decode.id,
                        user: payload.user,
                        token: payload.token
                    }
                }
                else
                    throw new Error(payload.message)

            }

        }),
        Github({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET || '',
        })
    ]
    ,
    callbacks: {
        async jwt({ token, user,account }) {
            if (user) {

                if( account?.provider === 'github') {
                    token.user={
                        name: user.name||'',
                        email: user.email||'',
                        image: user.image||''
                    }
                }
               else
               { token.user = user.user
                token.token = user.token}
            }

            return token
        },
        async session({ session, token }) {
            if (token) {
                session.user = token.user
            }
            return session

        }
    }
}


// callback