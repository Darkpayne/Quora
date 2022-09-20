import React from 'react'
import Navbar from '../Components/Navbar'
import Feed from '../Section/Feed'
import Main from '../Section/Main'
import Space from '../Section/Space'

const Following = () => {
    const navigation = 'following'
  return (
    <>
        <Navbar navigation={navigation}/>
        <body className='bg-gray-100'>
          <section className='flex bodySize mx-auto gap-x-5 py-8 px-5'>
            <article className='basis-2/12'><Space/></article>
            <article className='basis-7/12'><Main/></article>
            <article className='basis-3/12'><Feed/></article>
          </section>
        </body>
    </>
  )
}

export default Following