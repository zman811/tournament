import type { NextPage } from "next";
import Navbar from "./components/Navbar";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div>
        Hello!
        <a href="/api/auth/login">Login</a>
        <a href="/api/auth/logout">Logout</a>
      </div>
    </>
  );
};

export default Home;
