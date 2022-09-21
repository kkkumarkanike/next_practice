import { getSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useSessionData } from "../lib/sessionData";
import ChangePassword from "./ChangePassword";

function Profile() {
  const [isLoading, setIsLoading] = useState(true);
  const { session } = useSessionData();
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
