import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "../../../lib/db";
import { verifyPassword } from "../../../lib/encryptPassword";

const authOptions = {
  session: {
    // strategy: "jwt",
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      // type: "credentials",
      // credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials;
        // if (email !== "kk@gmail.com" || password !== "1234") {

        //   throw Error("Invalid Credentials")
        // }
        // // * Is everything is fine
        // return { id: 123, email, password };
        const client = await connectToDB();

        const userCollection = client.db().collection("users");
        const user = await userCollection.findOne({ email });
        if (!user) {
          client.close();
          throw new Error("Invalid Email Adderss!!");
        }

        const isValid = await verifyPassword(password, user.password);

        if (!isValid) {
          client.close();
          throw new Error("Invalid password!!");
        }

        return { name: user.name, email: user.email };

        client.close();
      },
    }),
  ],
  // pages: {
  //   signIn: "/login",
  // },
};

export default NextAuth(authOptions);
