import React from 'react'

const Invites = () => {
  return (
    <>
        <aside className="border border-gray-300 bg-white">
            <div className="border-b border-gray-300">
                <h1 className='py-2 pl-4 font-medium text-gray-400'>Pending Invites</h1>
            </div>
            <div className="h-44 flex justify-center items-center text-gray-400">
                <div className="">
                    <span className='flex justify-center text-3xl'><ion-icon name="mail-outline"></ion-icon></span>
                    <p className='text-sm '>No invites</p>
                </div>
            </div>
        </aside>
    </>
  )
}

export default Invites