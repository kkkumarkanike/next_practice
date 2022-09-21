import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(null);
    const result = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    });
    console.log(result);
    if (!result.error) {
      router.replace("/");
    }else{
      setErrorMsg(result.error);
    }
  };

  return (
    <>
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <p className="text-xl mb-4">Sign In</p>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              id="inline-full-name"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              id="inline-password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <input
          className="shadow bg-green-600 hover:bg-green-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="submit"
          value="Login"
        />
      </form>
      <div className="mt-3">
        <p className="text-red-500">{errorMsg}</p>
      </div>
    </>
  );
}

export default LoginForm;
