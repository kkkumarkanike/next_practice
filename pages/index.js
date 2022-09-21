import Head from "next/head";
import Image from "next/image";
import LoginForm from "../components/LoginForm";
import Nav from "../components/Nav";
import { useSessionData } from "../lib/sessionData";
import styles from "../styles/Home.module.css";

export default function Home() {
  const {session} = useSessionData();
  return (
    <div className="grid grid-cols-3 gap-4 content-end">
      <div></div>
      <div>
       {!session ?<LoginForm />: <p className="text-center ">Welcome back <b>{session.user.name}</b> !!</p>} 
      </div>
    </div>
  );
}
