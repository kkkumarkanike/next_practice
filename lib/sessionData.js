import { useSession } from "next-auth/react";

function useSessionData() {
  const { data: session, loading } = useSession();
  return {session};
}

export {useSessionData};
