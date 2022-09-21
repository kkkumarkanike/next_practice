import { getSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useSessionData } from "../lib/sessionData";
import ChangePassword from "./ChangePassword";

function Profile() {
  const [isLoading, setIsLoading] = useState(true);
  const { session } = useSessionData();
  //   useEffect(() => {
  //     getSession().then((session) => {
  //       if (!session) {
  //         window.location.href = "/login";
  //       } else {
  //         setIsLoading(false);
  //       }
  //     });
  //   }, []);

  //   if (isLoading) {
  //     return <p className="mt-5 text-center">Loading...</p>;
  //   }
  return (
    <>
      <p className="text-lg mt-3 mb-2">Profile</p>
      <p className="text-gray-500">{session && session.user.email}</p>
      <p className="text-lg mt-3 mb-2">Change Password</p>
      <ChangePassword />
    </>
  );
}

export default Profile;
