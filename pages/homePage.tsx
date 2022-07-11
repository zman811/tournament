import { useUser } from "@auth0/nextjs-auth0";
import {
  Card,
  Center,
  Container,
  Stack,
  Title,
  Text,
  Button,
  Modal,
  Badge,
  Group,
  Space,
} from "@mantine/core";
import type { NextPage } from "next";
import NavbarEle from "./components/Navbar";
import { useState } from "react";

const HomePage: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(-1);
  const { user } = useUser();
  if (!user?.email) {
    return <div>Loading...</div>;
  }
  return (
    <>
    <NavbarEle />
    <Space h="xl"/>
    <Center>
      {isOpen && (
        <Modal
          overlayBlur={2}
          opened={true}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          Hello, {current}
          {/* current is a placeholder for the current tournament that will be selected whenever the modal is opened */}
        </Modal>
      )}
      <Container>
        <Title order={2}>Hello, {user?.name}</Title>
        <Stack>
          {[...Array(5)].map((_, i) => {
            // Here is maping over each tournament
            return (
              <Card key={i} style={{ width: "500px" }} onClick={() => {}}>
                <Group position="apart">
                  <Text size="xl" weight="bold">
                    This is a tournament
                  </Text>
                  <Badge>Game</Badge>
                </Group>
                <Text>
                  It will have a picture of the game that it is for and you will
                  be able to click on it
                </Text>
                <Center>
                  {/* This button will take you to the page for that tournament, by opening a modal with more info and a link to see the page for it */}
                  <Button
                    onClick={() => {
                      setIsOpen(true);
                      setCurrent(i);
                    }}
                  >
                    See more info
                  </Button>
                </Center>
              </Card>
            );
          })}
        </Stack>
      </Container>
    </Center>
    </>
  );
};

export default HomePage;
