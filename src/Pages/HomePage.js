import React from 'react'
import Navbar from '../Components/Navbar'
import Feed from '../Section/Feed'
import Main from '../Section/Main'
import Space from '../Section/Space'
import SpacesToFollow from '../Section/SpacesToFollow'

const HomePage = () => {
  const navigation = 'home'
  return (
    <>
     <Navbar navigation={navigation}/>  
        <body className='bg-gray-100'>
          <section className='flex bodySize bg-gray-100 mx-auto gap-x-5 py-8 px-5'>
            <article className='basis-2/12'><Space/></article>
            <article className='basis-7/12'><Main/></article>
            <article className='basis-3/12'><SpacesToFollow/></article>
          </section>
        </body>
    </>
  )
}

export default HomePage