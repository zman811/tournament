import { useUser } from "@auth0/nextjs-auth0";
import { Card, Center, Container, Stack, Title, Text, Button } from "@mantine/core";
import type { NextPage } from "next";

const HomePage: NextPage = () => {
  const { user } = useUser();
  if (!user?.email) {
    return <div>Loading...</div>;
  }
  return (
    <Center>
      <Container>
        <Title order={2}>Hello, {user?.name}</Title>
        <Stack>
          {/* Will get an array of tournaments and map over them here */}
          <Card style={{ width: "500px" }} onClick={() => {}}>
            <Text>This is a tournament</Text>
            <Text>
              It will have a picture of the game that it is for and you will be
              able to click on it
            </Text>
            <Center>
              {/* This button will take you to the page for that tournament, OR open a modal with more info and a link to see the page for it */}
              <Button>See more info</Button>
            </Center>
          </Card>
        </Stack>
      </Container>
    </Center>
  );
};

export default HomePage;
