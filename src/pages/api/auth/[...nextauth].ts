import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ? process.env.GITHUB_ID : "",
      clientSecret: process.env.GITHUB_SECRET ? process.env.GITHUB_SECRET : "",
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ? process.env.GOOGLE_CLIENT_ID : "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ? process.env.GOOGLE_CLIENT_SECRET : "",
    }),
    CredentialsProvider({
			// The name to display on the sign in form (e.g. "Sign in with...").
			name: "Credentials",
			
			// Credentials needed.
			credentials: {
				email: { label: "Email", type: "text", placeholder: "email@email.com" },
				password: {  label: "Password", type: "password", placeholder: "Password..." }
			},
			async authorize(credentials, req) {
				// API Request.
				if(credentials) {
					const res = await fetch("http://localhost:3000/api/user/login", {
						method: 'POST',
						body: JSON.stringify(credentials),
						headers: { "Content-Type": "application/json" }
					})
				var user = await res.json();
				}
				// If API Works.
				if(user.error === "") {
					return user.user;
				} 
				else {
					// Returning null displays a error advising the user to check their details.
					return null
				}
			}
		}),
  ],
})