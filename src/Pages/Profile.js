import React from 'react'
import Navbar from '../Components/Navbar'
import MainProfile from '../Section/MainProfile'
import ProfileOptions from '../Section/ProfileOptions'
import useAxiosGet from '../Hooks/useAxiosGet'

const Profile = () => {
  const {isLoading, response, error} = useAxiosGet('/api/auth/get-user');
  return (
    <>
        <Navbar/>
        <body className=''>
          <section className='flex bodySize mx-auto gap-x-5 py-8 px-5'>
            
            <article className='basis-7/12'><MainProfile isLoading={isLoading} response={response}/></article>
            <article className='basis-1/12'></article>
            <article className='basis-4/12'><ProfileOptions  isLoading={isLoading} response={response}/></article>
            
          </section>
        </body>
    </>
  )
}

export default Profile