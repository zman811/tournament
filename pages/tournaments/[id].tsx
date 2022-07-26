import { Badge, Center, Container, SimpleGrid, Text, Title, Space } from "@mantine/core";
import type { NextPage } from "next";
import NavbarEle from "@/components/Navbar";
import { useRouter } from "next/router";

const TournamentPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <>
    <NavbarEle />
    <Space h='lg' />
    <Center>
      <Container style={{textAlign: 'center'}}>
        <Title order={2}>Tournament name will go here</Title>
        <Text>Here will be the details of the tournament, id={id}</Text>
        <Text>Players: </Text>
        <SimpleGrid cols={3}>
          <Badge>Name</Badge>
          <Badge>Name</Badge>
          <Badge>Name</Badge>
          <Badge>Name</Badge>
          {/* This will show each players name and possibly later on allow you to click the name to go to the profile of that player */}
        </SimpleGrid>
      </Container>
    </Center>
    </>
  );
};

export default TournamentPage;
