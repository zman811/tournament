import type { NextPage } from "next";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Link from "next/link";

const Test: NextPage = () => {
  return (
    <div>
      Hello, testing page 2!
      <Link href="/api/auth/login">Login</Link>
      <Link href="/api/auth/logout">Logout</Link>
    </div>
  );
};

export default withPageAuthRequired(Test);

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async ({ req, res }) => {
    const user = getSession(req, res);
    console.log(user);

    return {
      props: {},
    };
  },
});
