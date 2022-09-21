import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

async function passwordChangeHandler(passwordData) {
  const response = await fetch("/api/user/change-password", {
    method: "PATCH",
    body: JSON.stringify(passwordData),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  return data;
}

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(oldPassword, newPassword);
    const result = await passwordChangeHandler({ oldPassword, newPassword });
    console.log(result);
  };

  return (
    <>
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              id="inline-full-name"
              type="password"
              placeholder="old password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              id="inline-password"
              type="password"
              placeholder="new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
        </div>
        <input
          className="shadow bg-green-600 hover:bg-green-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="submit"
          value="Change Password"
        />
      </form>
    </>
  );
}

export default ChangePassword;
