import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm";

function login() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace("/");
      } else {
        setIsLoading(false);
      }
    });
  },[router]);

  if (isLoading) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default login;
