import React from 'react'
import Navbar from '../Components/Navbar'
import useAxiosGet from '../Hooks/useAxiosGet'
import Feed from '../Section/Feed'
import Main from '../Section/Main'
import Space from '../Section/Space'
import SpacesToFollow from '../Section/SpacesToFollow'

const HomePage = () => {
  const { response:loggedInUser } = useAxiosGet('/api/auth/get-user');
  const { response:getPost, error, isLoading} = useAxiosGet('/api/user/allposts');
  console.log(getPost);
  console.log(error);

  const navigation = 'home'
  return (
    <>
     <Navbar navigation={navigation}/>  
        <body className='bg-gray-100'>
          <section className='flex bodySize bg-gray-100 min-h-screen mx-auto gap-x-5 py-8 px-5'>
            <article className='basis-2/12'><Space/></article>
            <article className='basis-7/12'><Main getPost={getPost} loggedInUser={loggedInUser} isLoading={isLoading}/></article>
            <article className='basis-3/12'><SpacesToFollow/></article>
          </section>
        </body>
    </>
  )
}

export default HomePage