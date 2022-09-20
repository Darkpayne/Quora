import React from 'react'

const QuestionsTab = () => {
  return (
    <>
    <aside className='sticky top-16'>
        <h1 className='px-2 py-3 font-medium mb-2 border-b'>Questions</h1>
        <div className="group mb-3 flex w-[100%]">
            <button className='flex items-center bg-red-100 text-sm  grow h-6'>
                <span className=' grow  px-2  py-1 text-red-600 font-medium text-start'>Create Space</span> 
            </button>
        </div>
        <div className="group mb-3 flex w-[100%]">
            <button className='flex items-center hover:bg-gray-200 text-sm font-thin grow h-6'>
                <span className=' grow  px-2 py-1   text-start'>Answer Request</span> 
            </button>
        </div>
        <div className="group mb-3 flex w-[100%]">
            <button className='flex items-center hover:bg-gray-200 text-sm font-thin grow h-6'>
                <span className=' grow  px-2  py-1 text-start'>Answer drafts</span> 
            </button>
        </div>
    </aside>
    </>
  )
}

export default QuestionsTab