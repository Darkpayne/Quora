import React, { useContext, useState } from 'react'
import Error from '../Components/Error'
import AuthContext from '../ContextApi/AuthContext'

const MainProfile = () => {
    const {user} = useContext(AuthContext); 
    const [isShown, setIsShown] = useState(false)
    
    const [showModal, setShowModal] = useState(false);
    const [editName, setEditName] = useState(false);
    const [editCredential, setEditCredential] = useState(false);
    const [showDescForm, setShowDescForm] = useState(true)

    const handleNameEdit = () =>{
        setShowModal(true);
        setEditName(true);
        setEditCredential(false);
    }
    const handleAddCredential = () =>{
        setShowModal(true);
        setEditCredential(true);
        setEditName(false);
    }

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
                            <label htmlFor="img-upload" className={`cursor-pointer text-2xl w-10 h-10 flex justify-center items-center text-white bg-blue-600 rounded-full`}>
                                <ion-icon name="pencil-outline"></ion-icon>
                            </label>
                        </form>
                    </div>
                </div>
                <div className="grow">
                    <div className="flex group justify-between items-center">
                        <h1 className='text-3xl font-bold  cursor-pointer'>{user?.user?.name}
                        <span 
                        onClick={handleNameEdit} 
                        className='text-xs font-thin group-hover:inline hidden cursor-pointer hover:underline'>
                            edit
                        </span>
                        </h1>
                        <span className='bg-gray-100 text-xl px-1 text-gray-700 border-gray-400 border rounded-full'><ion-icon name="arrow-redo-outline"></ion-icon></span>
                    </div>
                    
                    <p 
                    onClick={handleAddCredential}
                    className='text-sm text-gray-500 my-2  cursor-pointer hover:underline'>Add profile credential</p>
                    <p className='text-sm text-gray-600'>0 followers . 1 following</p>
                </div>
            </div>
            {showDescForm
            ?
            <p 
            onClick={()=>setShowDescForm(false)}
            className='text-sm text-gray-400 mt-4 cursor-pointer hover:underline'>Write a description about yourself</p>

            :
            <section className='mt-10'>
                <main className=''>
                <div className="border-x border-t mx-5 border-b">
                    <div className="my-3 mx-5 flex items-center">
                    <button data-modal-toggle="defaultModal" type="button" className="text-gray-500 bg-white focus:outline-none  border-white hover:border-black text-sm font-medium px-2 "><span className='text-2xl font-bold '><ion-icon name="text-outline"></ion-icon></span></button>
                  <button data-modal-toggle="defaultModal" type="button" className="text-gray-500 bg-whitefocus:outline-none  border-hidden hover:border-solid text-sm font-medium px-2 "><span className='text-2xl font-bold '><ion-icon name="images-outline"></ion-icon></span></button>
                    </div>
                </div>
                {/* form  */}
                
                <form>
                    <div className="border-x border-b mx-5 mb-5">
                            <div className="">
                                
                            <textarea 
                            id="message" rows="7" className="block p-2.5 w-full text-sm text-gray-900 border-none outline-none resize-none" placeholder="Your message..."></textarea>
                            </div>
                            
                            {/* Buttons */}
                        <div className=" flex items-center rounded-b border-t space-x-2 py-2 px-4 bg-gray-100">
                            <button type="button" className="text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-1 text-center">Update</button>
                            <button
                             onClick={()=>setShowDescForm(true)} 
                            type="button" className="  focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-1 text-center">Cancel</button>
                        </div>
                    </div>
                            
                </form>
            </main>
            </section>
            }
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

                {/* MODAL EMPLYMENT*/}
<div id="defaultModal" tabIndex="-1" aria-hidden="true" data-modal-show="true" className={`${!showModal ? 'hidden': ''} bg-slate-800 bg-opacity-90 flex justify-center items-center transition-all ease-in-out top-0 right-0 bottom-0 left-0 z-50 h-screen fixed`}>
    <div className={`relative p-4 w-full max-w-2xl h-full md:h-auto transition-all ease-in-out ${!showModal?'opacity-0 ':'opacity-100 '}`}>
       
        <div className="relative bg-white rounded-lg shadow">
            
            <div className="flex px-3 space-x-2 items-center rounded-t pt-3">
                <button onClick={()=>setShowModal(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 inline-flex items-center" data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>

        {/* EDIT NAME */}
          <section className={`${editName ? 'block' : 'hidden'} my-3`}>
            <div className="mx-5 mb-3">
                <h1 className='font-bold text-lg'>Edit Name</h1>
                <p className='text-gray-500'>You can change your name up to 10 times.</p>
            </div>

            <main className=''>
                {/* form  */}
                <form>
                   
                            <div className="mb-6 px-5 pt-3">
                                <label htmlFor="name" className="block mb-2 font-medium  text-gray-900 ">Name</label>
                                <input 
                                type="text"
                                id="name" 
                                value="Joshua Clifford"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                autoComplete='off' 
                                required/>
                            </div>
                    <div className="h-24"></div>
                        {/* Buttons */}
                        <div className=" flex justify-end items-center rounded-b border-t space-x-2 py-2 px-4">
                            <button
                             onClick={()=>setShowModal(false)} 
                            type="button" className="  focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Cancel</button>
                            <button type="button" className="text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Done</button>
                        </div>
                            
                </form>
            </main>
          </section>

        {/* EDIT CREDENTIAL */}
          <section className={`${editCredential ? 'block' : 'hidden'} my-3`}>
            <div className="mx-5 mb-3">
                <h1 className='font-bold text-lg'>Edit credential</h1>
                <p className='text-gray-500'>Credentials add credibility to your content</p>
            </div>

            <main className=''>
                <div className="border-x border-t mx-5 flex justify-between items-center border-b">
                    <div className="my-3 mx-5 flex items-center">
                        <span className='flex justify-center items-center mr-3 h-8 w-8 bg-gray-200 rounded-full'><ion-icon name="person"></ion-icon></span>
                        <span>Add Profile credential</span>
                    </div>
                    <div className="text-xs space-x-3 mx-3">
                        <button className='py-1 bg-gray-200 px-3 rounded-full text-gray-400 font-medium'>Default</button>
                        <button className='py-1 bg-gray-100 px-3 rounded-full text-gray-700 border border-gray-600 font-medium'>Delete</button>
                    </div>
                </div>
                {/* form  */}
                
                <form>
                    <div className="border-x border-b mx-5 mb-5">
                            <div className="mb-6 px-5 pt-3">
                                <input 
                                type="text" 
                                id="name" 
                                value="WALEXBIZ"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='Accountant' autoComplete='off' required/>
                            </div>
                    </div>
                    <div className="h-24"></div>
                        {/* Buttons */}
                        <div className=" flex justify-end items-center rounded-b border-t space-x-2 py-2 px-4">
                            <button
                             onClick={()=>setShowModal(false)} 
                            type="button" className="  focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Cancel</button>
                            <button type="button" className="text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Save</button>
                        </div>
                            
                </form>
            </main>

          </section>


        </div>
    </div>
</div>
    </>
  )
}

export default MainProfile