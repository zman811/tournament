import Link from "next/link";
import { Button, Container, Grid, Menu } from "@mantine/core";
import { NextLink } from "@mantine/next";

export default function NavbarEle() {
  return (
    <Container fluid>
      <Grid justify="center" align="flex-start">
        <Grid.Col span={4}>Home</Grid.Col>
        <Grid.Col span={4} offset={4}>
          <Grid>
            <Grid.Col span={4}>test</Grid.Col>
            <Grid.Col span={4}>test</Grid.Col>
            <Grid.Col span={4}>
              <Menu control={<Button>Menu</Button>}>
                <Menu.Item component={NextLink} href="/api/auth/logout">
                  logout
                </Menu.Item>
              </Menu>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
