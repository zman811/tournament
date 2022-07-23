import Link from "next/link";
import { Anchor, Button, Container, Divider, Grid, Menu, Space } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { useUser } from "@auth0/nextjs-auth0";

export default function NavbarEle() {
  // Route to all pages here in the menu
  const { user } = useUser();
  let name = "";
  if (user) {
    name = user.name || "";
  }

  return (
    <>
    <Container fluid>
      <Grid justify="center" align="flex-start">
        <Grid.Col span={4}>
          <Link href="/">
            <Anchor style={{ fontWeight: "bold" }}>Home</Anchor>
          </Link>
        </Grid.Col>
        <Grid.Col span={5} offset={3}>
          <Grid>
            <Grid.Col span={4}></Grid.Col>
            <Grid.Col span={4}>
              <Link href="/user/${name}">
                <Anchor>{name}</Anchor>
              </Link>
            </Grid.Col>
            <Grid.Col span={4}>
              <Menu control={<Button>Menu</Button>}>
                <Menu.Item component={NextLink} href="/test">
                  test
                </Menu.Item>
                {user?.email && (
                  <>
                  <Menu.Item component={NextLink} href="/homePage">
                    User Page
                  </Menu.Item>
                  <Menu.Item component={NextLink} href="/api/auth/logout">
                    logout
                  </Menu.Item>
                  </>
                )}
              </Menu>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </Container>
    <Space h="lg"/>
    <Divider />
    </>
  );
}
