import React, { useState } from 'react'
import Error from '../Components/Error'

const MainProfile = () => {

    const [isShown, setIsShown] = useState(false)
  return (
    <>
        <section onMouseLeave={() => setIsShown(false)} className='flex flex-col'>
            <div className="flex ">
                <div className="mr-7 relative" >
                    <img
                    onMouseEnter={() => setIsShown(true)}
                    
                    src="https://www.xtrafondos.com/thumbs/vertical/1_4079.jpg" alt="" className='h-[120px] w-[120px] rounded-full'/>
                    <div className={`${isShown ? 'block' : 'hidden'} absolute top-9 right-9 `}>
                        <form action="">
                            <input type="file" id="img-upload" hidden />
                            <label for="img-upload" className={`cursor-pointer text-2xl w-10 h-10 flex justify-center items-center text-white bg-blue-600 rounded-full`}>
                                <ion-icon name="pencil-outline"></ion-icon>
                            </label>
                        </form>
                    </div>
                </div>
                <div className="grow">
                    <div className="flex justify-between items-center"><h1 className='text-3xl font-bold'>Joshua Clifford</h1><span className='bg-gray-100 text-xl px-1 text-gray-700 border-gray-400 border rounded-full'><ion-icon name="arrow-redo-outline"></ion-icon></span></div>
                    
                    <p className='text-sm text-gray-500 my-2'>Add profile credential</p>
                    <p className='text-sm text-gray-600'>0 followers . 1 following</p>
                </div>
            </div>
            <p className='text-sm text-gray-400 mt-4'>Write a description about yourself</p>
        </section>

        <section className='mt-8'>
            <nav>
                <ul className='flex justify-between text-gray-400 text-sm font-medium border-b'>
                    <li className='py-4 px-2 text-red-700 border-b-red-700 border-b-4'>Profile</li>
                    <li className='py-4 px-2'>0 Answer</li>
                    <li className='py-4 px-2'>0 Questions</li>
                    <li className='py-4 px-2'>0 Post</li>
                    <li className='py-4 px-2'>0 Followers</li>
                    <li className='py-4 px-2'>Following</li>
                    <li className='py-4 px-2'>Edits</li>
                    <li className='py-4 px-2'>Activity</li>
                </ul>
            </nav>
        </section>

        <section>
            <div className="flex justify-between py-3 border-b">
                <h1 className='font-bold text-gray-500'>Profile</h1>
                <h1 className='px-2 hover:bg-gray-100 rounded-full text-sm font-medium flex items-center  cursor-pointer text-gray-500'><span> Most recent</span> <span className='ml-1 flex'> <ion-icon name="chevron-down-outline"></ion-icon></span></h1>
            </div>
        </section>
        <section>
            <Error height={28} btnText={'Answer Question'} mainText={"You haven't shared, answered or posted anything yet."} link={"/questions"}/>
        </section>
    </>
  )
}

export default MainProfile