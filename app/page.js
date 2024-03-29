'use client'

import { useSession, signOut } from 'next-auth/react'

const Home = () => {
    const { data:session } = useSession()
    console.log(session)
  return (
    <div>
        <h1>Dashboard</h1>
        <p>Hi {session?.user?.email}</p>
        <p>Hi {session?.user?.role}</p>


        <pre> {JSON.stringify(session)} </pre>

        
        <button onClick={() => signOut()}>Sign Out</button>
    </div>
  )
}

export default Home