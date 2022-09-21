import Link from "next/link";
import React from "react";
import { useSession, signOut } from "next-auth/react";

function Nav() {
  const { data: session, loading } = useSession();

  const handleLogout = () => {
    signOut();
  };
  return (
    <nav className="flex h-12 items-center p-7 justify-between shadow">
      <Link href="/">
        <a className="text-lg font-bold">Auth</a>
      </Link>
      {session ? (
        <div>
          <Link href="/profile">
            <a className="p-2">Profile</a>
          </Link>
          <button
            className="shadow bg-green-600 hover:bg-green-500 focus:shadow-outline focus:outline-none text-white text-sm py-1 px-3 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link href="/signup">
            <a className="p-2">Sing up</a>
          </Link>
          <Link href="/login">
            <a className="p-2">Login</a>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Nav;
