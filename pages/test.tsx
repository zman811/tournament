import type { NextPage } from 'next'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Head from 'next/head'

const Test: NextPage = () => {
  return (
    <div>
      Hello, testing page 2!
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>
    </div>
  )
}

export default withPageAuthRequired(Test)
