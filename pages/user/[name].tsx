import NavbarEle from "@/components/Navbar";
import { Center, Container, Space, Text, Title } from "@mantine/core";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const UserPage: NextPage = () => {
  const router = useRouter();
  const { name } = router.query;
  return (
    <>
      <NavbarEle />
      <Space h="lg" />
      <Center style={{ textAlign: "center" }}>
        <Container>
          <Title order={2}>{name}s page!</Title>
          <Text size="lg">
            This is where you will be able to see info about your profile and
            possibly what other peoples would look like!
          </Text>
        </Container>
      </Center>
    </>
  );
};

export default UserPage;
