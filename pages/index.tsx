import type { NextPage } from "next";
import NavbarEle from "./components/Navbar";
import Head from "next/head";
import Link from "next/link";
import { Anchor, Center, Container, Space, Title } from "@mantine/core";

const Home: NextPage = () => {
  // Want to make this a page for log in and showing the name of the app and a description
  return (
    <>
      <NavbarEle />
      <Space h="xl" />
      <Center style={{ textAlign: "center" }}>
        <Container>
          <Title order={2}>Name of the app here,</Title>
          <Link href="/api/auth/login">
            <Title order={3}>
              <Anchor>Login</Anchor>
            </Title>
          </Link>
          {/* Maybe add in a picture here or something to make the page more appeling */}
        </Container>
      </Center>
    </>
  );
};

export default Home;
