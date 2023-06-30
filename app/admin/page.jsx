'use client'

import { useSession, signOut } from 'next-auth/react'

const Admin = () => {
    const { data:session } = useSession()
    console.log(session)
  return (
    <div>
        <h1>Dashboard</h1>
        <p>Hi {session?.user?.email}</p>

        {session?.user?.Role ==="Admin" ? ( <div className="flex">hello admin</div> ):( <div className="flex">hello user</div> )} 


        <pre> {JSON.stringify(session)} </pre>

        
        <button onClick={() => signOut()}>Sign Out</button>
    </div>
  )
}

export default Admin