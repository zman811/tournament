import type { NextPage } from "next";
import NavbarEle from "./components/Navbar";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <NavbarEle />
      <div>
        Hello!
        <a href="/api/auth/login">Login</a>
        <a href="/api/auth/logout">Logout</a>
      </div>
    </>
  );
};

export default Home;
