import type { NextPage } from "next";
import NavbarEle from "./components/Navbar";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  // Want to make this a page for log in and showing the name of the app and a description
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
