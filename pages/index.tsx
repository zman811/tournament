import type { NextPage } from "next";
import NavbarEle from "./components/Navbar";
import Head from "next/head";
import Link from "next/link";
import { Anchor, Center, Container, Space, Title } from "@mantine/core";
import { useUser } from "@auth0/nextjs-auth0";

const Home: NextPage = () => {
  const { user } = useUser();
  // Want to make this a page for log in and showing the name of the app and a description
  return (
    <>
      <NavbarEle />
      <Space h="xl" />
      <Center style={{ textAlign: "center" }}>
        <Container>
          <Title order={2}>Name of the app here,</Title>
          {!user?.email && (
            <Link href="/api/auth/login">
              <Title order={3}>
                <Anchor>Login</Anchor>
              </Title>
            </Link>
          )}
          <Space h="lg" />
          {/* Maybe add in a picture here or something to make the page more appeling */}
          This is a WIP app for creating and finding teams for tournaments!
        </Container>
      </Center>
    </>
  );
};

export default Home;
