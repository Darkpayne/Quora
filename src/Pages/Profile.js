import React from 'react'
import Navbar from '../Components/Navbar'
import MainProfile from '../Section/MainProfile'
import ProfileOptions from '../Section/ProfileOptions'

const Profile = () => {
  return (
    <>
        <Navbar/>
        <body className=''>
          <section className='flex bodySize mx-auto gap-x-5 py-8 px-5'>
            
            <article className='basis-7/12'><MainProfile/></article>
            <article className='basis-1/12'></article>
            <article className='basis-4/12'><ProfileOptions/></article>
            
          </section>
        </body>
    </>
  )
}

export default Profile