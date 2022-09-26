import React, { useState } from 'react'
import Error from '../Components/Error'

const ProfileOptions = () => {

    const [showModal, setShowModal] = useState(false);
    const [showEducational, setShowEducational] = useState(false);
    const [showLocation, setShowLocation] = useState(false);
    const [addTopics, setAddTopics] = useState(false);

  return (
    <>
        <section className=''>
            <div className="credentials">
                <div className="flex justify-between items-center  border-b py-2 ">
                    <h1 className=' font-bold text-gray-500'>Credentials & Highlights</h1>
                    <span className='bg-gray-100 text-xl px-1 text-gray-700 border-gray-400 border rounded-full'><ion-icon name="color-wand-outline"></ion-icon></span>
                </div>
                <div className="mt-3">
                    <div className="flex items-center mb-2">
                        <span className='mr-3 flex text-lg'><ion-icon name="briefcase-outline"></ion-icon></span>
                        <span onClick={()=>setShowModal(true)} className='text-blue-800 hover:underline cursor-pointer'>Add employment credential</span>
                    </div>
                    
                    <div className="flex items-center mb-2">
                        <span className='mr-3 flex text-lg'><ion-icon name="school-outline"></ion-icon></span>
                        <span
                         onClick={()=>setShowEducational(true)} 
                        className='text-blue-800 hover:underline cursor-pointer'>Add eductional credential</span>
                    </div>

                    <div className="flex items-center mb-2">
                        <span className='mr-3 flex text-lg'><ion-icon name="location-outline"></ion-icon></span>
                        <span
                         onClick={()=>setShowLocation(true)}
                        className='text-blue-800 hover:underline cursor-pointer'>Add location credential</span>
                    </div>

                    <div className="flex items-center mb-2">
                        <span className='mr-3 flex text-lg'><ion-icon name="calendar-clear-outline"></ion-icon></span>
                        <span className=''>Joined September 2022</span>
                    </div>

                </div>
            </div>

            <section className='mt-8'>
            <div className="flex justify-between items-center  border-b py-2 ">
                    <h1 className=' font-bold text-gray-500'>Knows about</h1>
                    <span className='bg-gray-100 text-xl px-1 text-gray-700 border-gray-400 border rounded-full'><ion-icon name="color-wand-outline"></ion-icon></span>
                </div>
            </section>
            <section>
            <div className="mt-10">
            <div className="group mb-3 h-72 w-[100%]">
                <div className="items-center justify-center flex ">
                    <img src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.dormant_lightmode.png-26-c4532c98034818a0.png" alt="" className={`h-16 mt-5`} />
                </div>
                <div className="text-center">
                    <h1 className='font-medium my-4'>
                    You haven't added any topic yet.
                        </h1>
                        <button
                         onClick={()=>setAddTopics(true)}
                        className="text-blue-500 bg-blue-100 border-blue-300 border rounded-full  px-3">
                        Add topics
                </button>
                </div>
            </div>
         </div>
                
            </section>
        </section>


{/* overflow-scroll to scroll the modals */}

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

{/* cover */}
          <section className="my-3">
            <div className="mx-5 mb-3">
                <h1 className='font-bold text-lg'>Edit credentials</h1>
                <p className='text-gray-500'>Credentials add credebility to your content</p>
            </div>

            <main className=''>
                <div className="border-x border-t mx-5 border-b">
                    <div className="my-3 mx-5 flex items-center">
                        <span className='flex justify-center items-center mr-3 h-8 w-8 bg-gray-200 rounded-full'><ion-icon name="briefcase-outline"></ion-icon></span>
                        <span>Add employment credential</span>
                    </div>
                </div>
                {/* form  */}
                
                <form>
                    <div className="border-x border-b mx-5 mb-5">
                            <div className="mb-6 px-5 pt-3">
                                <label htmlFor="name" className="block mb-2 font-medium  text-gray-900 ">Position</label>
                                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='Accountant' autoComplete='off' required/>
                            </div>
                            <div className="mb-6 px-5 ">
                                <label htmlFor="company" className="block mb-2 font-medium  text-gray-900 ">Company/Organization</label>
                                <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Type to search" autoComplete='off' required/>
                            </div>
                            <div className="mb-6 px-5 mt-5">
                                <label htmlFor="name" className="block mb-2 font-medium  text-gray-900 ">Start Year</label>
                                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                    <option selected></option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                    </select>
                            </div>
                    
                            <div className="mb-6 px-5 mt-5">
                                <label htmlFor="name" className="block mb-2 font-medium  text-gray-900 ">End Year</label>
                                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                    <option selected></option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                    </select>
                            </div>
                    
                            <div className="flex items-center mb-4 px-5 mt-5">
                                <input id="default-checkbox" type="checkbox" value="" className="w-5 h-5 text-blue-600 "/>
                                <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I currently work here</label>
                            </div>
                    </div>
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


        {/* MODAL ADD TOPICS*/}
<div id="defaultModal" tabIndex="-1" aria-hidden="true" data-modal-show="true" className={`${!addTopics ? 'hidden': ''} bg-slate-800 bg-opacity-90 flex justify-center items-center transition-all ease-in-out top-0 right-0 bottom-0 left-0 z-50 h-screen fixed`}>
    <div className={`relative p-4 w-full max-w-3xl h-full md:h-auto transition-all ease-in-out ${!addTopics?'opacity-0 ':'opacity-100 '}`}>
       
        <div className="relative bg-white rounded-lg shadow">
            
            <div className="flex px-3 space-x-2 items-center rounded-t pt-3">
                <button onClick={()=>setAddTopics(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 inline-flex items-center" data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>

{/* cover */}
          <section className="my-3">
            <div className="mx-5 mb-3">
                <h1 className='font-bold text-lg'>Topics you know about</h1>
                <p className='text-gray-500'>Topics are how Quora knowa what questions to send your way. Be as comprehensive and specific as possible to get the most relevant questions.</p>
            </div>

            <main className=''>
               
                {/* form  */}
                
                <form>
                    <div className="">
                            <div className="mb-6 px-5 pt-3">
                                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='Add Topic' autoComplete='off' required/>
                            </div>
                    </div>
                </form>
                <div className="h-44">
                    <Error height={16}  mainText={'No topics yet'}/>
                </div>
            </main>
          </section>
          <div className=" flex justify-end items-center rounded-b border-t space-x-2 py-2 px-4">
                            <button 
                            type="button" className="cursor-none  focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-4 text-center"></button>
                        
                        </div>

        </div>
    </div>
</div>

        {/* MODAL LOCATION*/}
<div id="defaultModal" tabIndex="-1" aria-hidden="true" data-modal-show="true" className={`${!showLocation ? 'hidden': ''} bg-slate-800 bg-opacity-90 flex justify-center items-center transition-all ease-in-out top-0 right-0 bottom-0 left-0 z-50 h-screen fixed`}>
    <div className={`relative p-4 w-full max-w-xl h-full md:h-auto transition-all ease-in-out ${!showLocation?'opacity-0 ':'opacity-100 '}`}>
       
        <div className="relative bg-white rounded-lg shadow">
            
            <div className="flex px-3 space-x-2 items-center rounded-t pt-3">
                <button onClick={()=>setShowLocation(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 inline-flex items-center" data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>

{/* cover */}
          <section className="my-3">
            <div className="mx-5 mb-3">
                <h1 className='font-bold text-lg'>Edit credentials</h1>
                <p className='text-gray-500'>Credentials add credebility to your content</p>
            </div>

            <main className=''>
                <div className="border-x border-t mx-5 border-b">
                    <div className="my-3 mx-5 flex items-center">
                        <span className='flex justify-center items-center mr-3 h-8 w-8 bg-gray-200 rounded-full'><ion-icon name="location-outline"></ion-icon></span>
                        <span>Add location credential</span>
                    </div>
                </div>
                {/* form  */}
                
                <form>
                    <div className="border-x border-b mx-5 mb-5">
                            <div className="mb-6 px-5 pt-3">
                                <label htmlFor="name" className="block mb-2 font-medium  text-gray-900 ">Location (required)</label>
                                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='Accountant' autoComplete='off' required/>
                            </div>
                            
                            <div className="mb-6 px-5 mt-5">
                                <label htmlFor="name" className="block mb-2 font-medium  text-gray-900 ">Start Year</label>
                                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                    <option selected></option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                    </select>
                            </div>
                    
                            <div className="mb-6 px-5 mt-5">
                                <label htmlFor="name" className="block mb-2 font-medium  text-gray-900 ">End Year</label>
                                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                    <option selected></option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                    </select>
                            </div>
                    
                            <div className="flex items-center mb-4 px-5 mt-5">
                                <input id="default-checkbox" type="checkbox" value="" className="w-5 h-5 text-blue-600 "/>
                                <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I currently live here</label>
                            </div>
                    </div>
                        {/* Buttons */}
                        <div className=" flex justify-end items-center rounded-b border-t space-x-2 py-2 px-4">
                            <button 
                             onClick={()=>setShowLocation(false)} 
                            type="button" className="  focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Cancel</button>
                            <button type="button" className="text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Save</button>
                        </div>
                            
                </form>
            </main>
          </section>


        </div>
    </div>
</div>


        {/* MODAL EDUCATIONAL*/}
<div id="defaultModal" tabIndex="-1" aria-hidden="true" data-modal-show="true" className={`${!showEducational ? 'hidden': ''} bg-slate-800 bg-opacity-90 flex justify-center items-center transition-all ease-in-out top-0 right-0 bottom-0 left-0 z-50 h-screen fixed`}>
    <div className={`relative p-4 w-full max-w-2xl h-full md:h-auto transition-all ease-in-out ${!showEducational?'opacity-0 ':'opacity-100 '}`}>
       
        <div className="relative bg-white rounded-lg shadow">
            
            <div className="flex px-3 space-x-2 items-center rounded-t pt-3">
                <button onClick={()=>setShowEducational(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 inline-flex items-center" data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>

{/* cover */}
          <section className="my-3">
            <div className="mx-5 mb-3">
                <h1 className='font-bold text-lg'>Edit credentials</h1>
                <p className='text-gray-500'>Credentials add credebility to your content</p>
            </div>
            <div className="border-x border-t mx-5 border-b">
                <div className="my-3 mx-5 flex items-center">
                    <span className='flex justify-center items-center mr-3 h-8 w-8 bg-gray-200 rounded-full'><ion-icon name="school-outline"></ion-icon></span>
                    <span>Add educational credential</span>
                </div>
            </div>
            {/* form  */}
            
                <form>
                    <div className="border-x border-b mx-5 mb-5">
                            <div className="mb-6 px-5 pt-3">
                                <label htmlFor="name" className="block mb-2 font-medium  text-gray-900 ">School</label>
                                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='Select a school' autoComplete='off' required/>
                            </div>
                            <div className="mb-6 px-5 ">
                                <label htmlFor="company" className="block mb-2 font-medium  text-gray-900 ">Primary major</label>
                                <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Type to search" autoComplete='off' required/>
                            </div>
                            <div className="mb-6 px-5 ">
                                <label htmlFor="company" className="block mb-2 font-medium  text-gray-900 ">Secondary major</label>
                                <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Type to search" autoComplete='off' required/>
                            </div>
                            <div className="mb-6 px-5 ">
                                <label htmlFor="company" className="block mb-2 font-medium  text-gray-900 ">Degree type</label>
                                <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="M.F.A." autoComplete='off' required/>
                            </div>
                            <div className="mb-6 px-5 mt-5">
                                <label htmlFor="name" className="block mb-2 font-medium  text-gray-900 ">Graduation Year</label>
                                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                    <option selected></option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                    </select>
                            </div>
                    
                            
                    </div>
                        {/* Buttons */}
                        <div className=" flex justify-end items-center rounded-b border-t space-x-2 py-2 px-4">
                            <button
                             onClick={()=>setShowEducational(false)} 
                             type="button" className="  focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Cancel</button>
                            <button
                            type="button" className="text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Save</button>
                        </div>
                            
                </form>
            
          </section>


        </div>
    </div>
</div>
    </>
  )
}

export default ProfileOptions