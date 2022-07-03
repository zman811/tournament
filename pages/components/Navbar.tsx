import Link from "next/link";
import { Navbar } from '@mantine/core';

export default function NavbarEle() {
  return (
      <Navbar height={600} p="xs" width={{ base: 300 }}>
        <Navbar.Section>test</Navbar.Section>
        <Navbar.Section grow mt="md">test</Navbar.Section>
        <Navbar.Section>test</Navbar.Section>
      </Navbar>
  )
}