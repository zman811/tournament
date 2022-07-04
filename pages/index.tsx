import type { NextPage } from "next";
import NavbarEle from "./components/Navbar";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <NavbarEle />
      <div>
        Hello!
        <Link href="/api/auth/login">Login</Link>
        <Link href="/api/auth/logout">Logout</Link>
      </div>
    </>
  );
};

export default Home;
