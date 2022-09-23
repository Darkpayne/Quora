import React from 'react'

const Filters = () => {
  return (
    <>
    <aside className='sticky top-16'>
        <h1 className='px-2 py-3 font-medium mb-2 border-b'>Filters</h1>
        <div className=" mb-1 flex w-[100%]">
            <button className='flex items-center bg-red-100 text-sm  grow h-5'>
                <span className=' grow py-2 px-2 text-red-600 font-medium text-start'>All Notifications</span> 
            </button>
        </div>

        <div className=" mb-1 flex w-[100%]">
            <button className='flex items-center hover:bg-gray-200 text-sm font-thin grow h-6'>
                <span className=' grow  px-2    text-start'>Stories</span> 
            </button>
        </div>

        <div className=" mb-1 flex w-[100%]">
            <button className='flex items-center hover:bg-gray-200 text-sm font-thin grow h-6'>
                <span className=' grow  px-2  py-1 text-start'>Questions</span> 
            </button>
        </div>
        

        <div className=" mb-1 flex w-[100%]">
            <button className='flex items-center hover:bg-gray-200 text-sm font-thin grow h-6'>
                <span className=' grow  px-2    text-start'>Spaces</span> 
            </button>
        </div>

        <div className=" mb-1 flex w-[100%]">
            <button className='flex items-center hover:bg-gray-200 text-sm font-thin grow h-6'>
                <span className=' grow  px-2  py-1 text-start'>People updates</span> 
            </button>
        </div>

        <div className=" mb-1 flex w-[100%]">
            <button className='flex items-center hover:bg-gray-200 text-sm font-thin grow h-6'>
                <span className=' grow  px-2    text-start'>Comments and mentions</span> 
            </button>
        </div>

        <div className=" mb-1 flex w-[100%]">
            <button className='flex items-center hover:bg-gray-200 text-sm font-thin grow h-6'>
                <span className=' grow  px-2  py-1 text-start'>Upvotes</span> 
            </button>
        </div>

        <div className=" mb-1 flex w-[100%]">
            <button className='flex items-center hover:bg-gray-200 text-sm font-thin grow h-6'>
                <span className=' grow  px-2    text-start'>Your content</span> 
            </button>
        </div>

        <div className=" mb-1 flex w-[100%]">
            <button className='flex items-center hover:bg-gray-200 text-sm font-thin grow h-6'>
                <span className=' grow  px-2  py-1 text-start'>Your Profile</span> 
            </button>
        </div>

        <div className=" mb-1 flex w-[100%]">
            <button className='flex items-center hover:bg-gray-200 text-sm font-thin grow h-6'>
                <span className=' grow  px-2    text-start'>Announcemnts</span> 
            </button>
        </div>

        <div className=" mb-1 flex w-[100%]">
            <button className='flex items-center hover:bg-gray-200 text-sm font-thin grow h-6'>
                <span className=' grow  px-2  py-1 text-start'>Earings</span> 
            </button>
        </div>

        <div className=" mb-1 flex w-[100%]">
            <button className='flex items-center hover:bg-gray-200 text-sm font-thin grow h-6'>
                <span className=' grow  px-2    text-start'>Subscriptions</span> 
            </button>
        </div>

    </aside>
    </>
  )
}

export default Filters