import React from 'react'

const Topics = () => {
  return (
    <>
    <aside className='sticky top-16'>
        <h1 className='px-2 py-3 font-medium mb-2 flex justify-between border-b'>
           <span>Topics you know about</span> 
           <span className='bg-gray-100 text-lg px-1 text-gray-700 border-gray-400 border rounded-full'><ion-icon name="color-wand-outline"></ion-icon></span>
        </h1>

        <div className="group mb-3 bg-white h-72 w-[100%]">
            <div className="items-center justify-center flex ">
                <img src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.dormant_lightmode.png-26-c4532c98034818a0.png" alt="" className='h-16 mt-5' />
            </div>
            <div className="text-center">
                <h1 className='font-medium my-2'>No topics yet</h1>
                <p className='text-sm text-gray-500 mb-6'>You'll get better questions if you add more specific topics.</p>
            <button className="text-blue-500 bg-blue-100 border-blue-300 border rounded-full py-2 px-3">
                Add topics
            </button>
            </div>
        </div>
        
    </aside>
    </>
  )
}

export default Topics