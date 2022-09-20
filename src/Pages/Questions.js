import React from 'react'
import Navbar from '../Components/Navbar'
import Main from '../Section/Main'
import QuestionsMain from '../Section/QuestionsMain'
import QuestionsTab from '../Section/QuestionsTab'
import Topics from '../Section/Topics'


const Questions = () => {
    const navigation = 'answer'
  return (
    <>
        <>
        <Navbar navigation={navigation}/>
        <body className='bg-gray-100'>
          <section className='flex bodySize mx-auto gap-x-5 py-8 px-5'>
            <article className='basis-2/12'><QuestionsTab/></article>
            <article className='basis-7/12'><QuestionsMain/></article>
            <article className='basis-3/12'><Topics/></article>
          </section>
        </body>
    </>
    </>
  )
}

export default Questions