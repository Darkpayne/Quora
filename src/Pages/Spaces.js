import React from 'react'
import Navbar from '../Components/Navbar'
import Invites from '../Section/Invites'
import MainSpaces from '../Section/MainSpaces'

const Spaces = () => {
    const navigation = 'spaces'
  return (
    <>
        <Navbar navigation={'spaces'}/>
        <body className='bg-gray-100'>
          <section className='flex bodySize mx-auto  py-8 px-5 space-x-5'>
            <article className='basis-8/12'><MainSpaces/></article>
            <article className='basis-3/12'><Invites/></article>
          </section>
        </body>
    </>
  )
}

export default Spaces