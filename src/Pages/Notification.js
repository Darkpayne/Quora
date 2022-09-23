import React from 'react'
import Navbar from '../Components/Navbar'
import Filters from '../Section/Filters';
import Notifications from '../Section/Notifications';

const Notification = () => {
    const navigation = 'notification';

  return (
    <>
        <Navbar  navigation={navigation}/>
        <body className=''>
          <section className='flex bodySize mx-auto gap-x-5 py-8 px-5'>
            <article className='basis-2/12'><Filters/></article>
            <article className='basis-7/12'><Notifications/></article>
            <article className='basis-3/12'></article>
          </section>
        </body>
    </>
  )
}

export default Notification