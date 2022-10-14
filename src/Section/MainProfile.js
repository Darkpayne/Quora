import React, { useContext, useState } from 'react'
import Error from '../Components/Error'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import axios from 'axios'
import AuthContext from '../ContextApi/AuthContext'
import useToastify from '../Hooks/useToastify'
import { ToastContainer } from 'react-toastify';
import SingleComment from '../Components/SingleComment'

const MainProfile = ({isLoading, response}) => {
    const [showPost, setshowPost] = useState(false)
    const [showComment, setShowComment] = useState(false)

    const toggleComments = (e) =>{
      e.preventDefault();
      setShowComment(!showComment);
    }


    const {user} = useContext(AuthContext)

    const {createToast}=useToastify();
    const [showToast, setShowToast] = useState(false)

    const [isShown, setIsShown] = useState(false)
    const [isShownDesc, setIsShownDesc] = useState(false)
    const [isShownCre, setIsShownCre] = useState(false)
    
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

    // UPDATING NAME
    const [newName, setNewName] = useState('');
    const [profileCredential, setprofileCredential] = useState('');
    const [profileDesc, setprofileDesc] = useState('');
    
    const handleUpdate = async (e) =>{
        console.log('done');
        e.preventDefault();
        try {
            const res = await axios.post('http://10.0.0.229/Interns/JonLee/QuoraBlog/public/api/user/update-profile', {
                name:newName || response?.name,
                profile_credential: profileCredential.length >= 1 ? profileCredential : response?.profile_credential || null,
                profile_desc: profileDesc.length >= 1 ? profileDesc : response?.profile_desc || null,
            },{
                headers: {
                'Authorization': `Bearer ${user?.token}`,

            },
            })
            setShowModal(false);
            setShowToast(true)
            createToast({
                msg: res.data.message,
                dataType: true
            })

            setTimeout(() => {
                window.location.reload();
            }, 1000);

            console.log(res);
        } catch (error) {
            setShowToast(true)
            createToast({
                msg: error?.response?.data.message,
                dataType: false
            })
            console.log(error);
        }
    }

    const uploadImage = async (e) =>{
        const profilePicture = e.target.files[0]
        try {
            const res = await axios.post('http://10.0.0.229/Interns/JonLee/QuoraBlog/public/api/user/update-profile', {
                name: response?.name,
                profile_photo : profilePicture,
                profile_credential: profileCredential.length >= 1 ? profileCredential : response?.profile_credential || null,
                profile_desc: profileDesc.length >= 1 ? profileDesc : response?.profile_desc || null,

            }
            ,{
                headers: {
                'Authorization': `Bearer ${user?.token}`,
                'Content-Type': 'multipart/form-data'
            },
            })
            setShowToast(true)
            createToast({
                msg: res.data.message,
                dataType: true
            })
            setTimeout(() => {
                window.location.reload();
            }, 1000);
            console.log(res);
        } catch (error) {
            setShowToast(true)
            createToast({
                msg: error?.response?.data.message,
                dataType: false
            })
            console.log(error);
        }
    }



  return (
    <>
       <SkeletonTheme  highlightColor="white">
            <section onMouseLeave={() => setIsShown(false)} className='flex flex-col'>
                <div className="flex ">

                    <div className="mr-7 relative" >
                    {
                        isLoading ? <Skeleton circle='true' height='120px' width='120px'/> :
                        <img
                        onMouseEnter={() => setIsShown(true)}
                        src={response?.profile_photo ? `http://10.0.0.229/Interns/JonLee/QuoraBlog/public/uploads/profile_images/${response?.profile_photo}` : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png'}
                        alt="" 
                        className='h-[120px] w-[120px] rounded-full'/>
                        }           
                        <div className={`${isShown ? 'block' : 'hidden'} absolute top-9 right-9 `}>
                            <form>
                                <input 
                                type="file" 
                                id="img-upload"
                                onChange={uploadImage}
                                hidden />
                                <label htmlFor="img-upload" className={`cursor-pointer text-2xl w-10 h-10 flex justify-center items-center text-white bg-blue-600 rounded-full`}>
                                    <ion-icon name="pencil-outline"></ion-icon>
                                </label>
                            </form>
                        </div>
                    </div>

                    <div className="grow">
                       
                        <div className="flex group justify-between items-center">
                                {isLoading ?  <Skeleton /> :
                            <h1 className='text-3xl font-bold  cursor-pointer'>
                                 {response?.name }
                            <span 
                            onClick={handleNameEdit} 
                            className='text-xs text-gray-400 font-thin group-hover:inline hidden cursor-pointer hover:underline'>
                                edit
                            </span>
                            </h1>
                            }
                            <span className='bg-gray-100 text-xl px-1 text-gray-700 border-gray-400 border rounded-full'>
                                { isLoading ?  <Skeleton circle='true' height='20px' width='20px'/> :<ion-icon name="arrow-redo-outline"></ion-icon>}
                            </span>
                        </div>
                            
                       <div className="">

                       <div className="my-2">
                            {response?.profile_credential ? 
                            <p 
                            onMouseEnter={()=>setIsShownCre(true)}
                            onMouseLeave={()=>setIsShownCre(false)}
                            className='text-xl text-gray-800  font-normal'>
                                {isLoading ?  <Skeleton /> : response?.profile_credential || 'Write a description about yourself'} {isShownCre && <span onClick={handleAddCredential} className='inline-block text-xs mt-0 cursor-pointer hover:underline p-0 text-gray-400 font-extralight'>edit</span>}
                            </p>
                            :
                            <p 
                            onClick={handleAddCredential}
                            className='text-sm text-gray-400 mt-4 cursor-pointer hover:underline'>
                                {isLoading ?  <Skeleton /> : response?.profile_credential  || 'Add profile credential'}
                            </p>
                            }
                            </div>
                        </div>

                        <p className='text-sm text-gray-600'>{isLoading ?  <Skeleton /> :'0 followers . 1 following'}</p>
                         
                    </div>
                </div>
                {showDescForm
                ?
               <div className="">
                {response?.profile_desc ? 
                <p 
                onMouseEnter={()=>setIsShownDesc(true)}
                onMouseLeave={()=>setIsShownDesc(false)}
                className='text-base text-gray-800 mt-4'>
                    {isLoading ?  <Skeleton /> : response?.profile_desc || 'Write a description about yourself'} {isShownDesc && <span onClick={()=>setShowDescForm(false)} className='inline-block text-xs mt-0 cursor-pointer hover:underline p-0 text-gray-400 font-extralight'>edit</span>}
                </p>
                :
                <p 
                onClick={()=>setShowDescForm(false)}
                className='text-sm text-gray-400 mt-4 cursor-pointer hover:underline'>
                    {isLoading ?  <Skeleton /> : response?.profile_desc || 'Write a description about yourself'}
                </p>
                }
                </div>
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
                    
                    <form onSubmit={handleUpdate}>
                        <div className="border-x border-b mx-5 mb-5">
                                <div className="">
                                    
                                <textarea 
                                id="message" 
                                defaultValue={response?.profile_desc}
                                onChange={e=>setprofileDesc(e.target.value)}
                                rows="7" 
                                className="block p-2.5 w-full text-sm text-gray-900 border-none outline-none resize-none" 
                                placeholder="Your message..."></textarea>
                                </div>
                                
                                {/* Buttons */}
                            <div className=" flex items-center rounded-b border-t space-x-2 py-2 px-4 bg-gray-100">
                                <button type="submit" className="text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-1 text-center">Update</button>
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
                        {isLoading ?  <Skeleton /> :
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
                    }
                </nav>
            </section>

            <section>
                {isLoading ?  <Skeleton /> :
                <div className="flex justify-between py-2 border-b">
                    <h1 className='font-bold text-gray-500'>Profile</h1>
                    <h1  onClick={()=>setshowPost(!showPost)} className='px-2 hover:bg-gray-100 rounded-full text-sm font-medium flex items-center  cursor-pointer text-gray-500'>
                        <span> Most recent</span> <span className='ml-1 flex'> <ion-icon name="chevron-down-outline"></ion-icon></span>
                    </h1>
                </div>
}
            </section>

            <section>
                {showPost
                ?
                <main className='my-3 bg-white '>
        <div className="relative">
            <div className="flex items-center px-4 pt-4">
              <img src={response?.profile_photo ? `http://10.0.0.229/Interns/JonLee/QuoraBlog/public/uploads/profile_images/${response?.profile_photo}` : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png'} alt="" className='h-10 w-10 rounded-full mr-4' />
              <div className="grow">
                  <h6 className='text-sm font-semibold'> {response?.name } &#183;</h6>
                  <h6 className='text-sm text-gray-500'>{response?.profile_credential} · <span>Sep 16</span></h6>
              </div>
            </div>
        </div>
        <div className="my-3 px-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias  reprehenderit fugiat tenetur iste quia, 
        </div>
        <div className="flex justify-center">
          <img src="https://qph.cf2.quoracdn.net/main-qimg-99ba8dc3b31374e753c17a93203f04a6-pjlq" alt="" className='object-cover grow'/>
        </div>


        <div id='controls' className="px-4 py-1 flex justify-between border-b">
          <div className="flex py-1 space-x-2">
            <div className="inline-flex rounded-full ">
              <a href="#" className="py-2 px-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-l rounded-l-full border-gray-200 hover:bg-gray-100 hover:text-blue-700  focus:text-blue-700 flex">
                <div className='-rotate-90'><span className='text-lg flex mx-2'><ion-icon name="arrow-redo-outline"></ion-icon></span></div> 
              </a>
              <a href="#" className="py-2 px-2 text-sm font-medium text-gray-900 bg-white rounded-r-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700">
              <div className='rotate-90'><span className='text-lg flex mx-2'><ion-icon name="arrow-redo-outline"></ion-icon></span></div> 
              </a>
            </div>
            <button href="#" className="py-2 px-2 text-sm font-medium text-gray-900 bg-white  border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 flex rounded-full">
                <div className=''><span className='text-lg flex justify-center items-center'><ion-icon name="sync-outline"></ion-icon></span></div>
            </button>

            <button onClick={toggleComments} href="#" className="py-2 px-2 text-sm font-medium text-gray-900 bg-white  border-gray-200 hover:bg-gray-100 hover:text-blue-700  focus:text-blue-700 flex  justify-center items-center rounded-full">
                <div className=''><span className='text-lg flex justify-center text-center items-center'><ion-icon name="chatbubble-ellipses-outline"></ion-icon></span></div> 
            </button>
          </div>

          <div className="flex justify-center items-center">
            <button href="#" className="py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 rounded-full">
                <div className=''><span className='text-lg flex justify-center items-center'><ion-icon name="ellipsis-horizontal-outline"></ion-icon></span></div> 
            </button>
          </div>

        </div>
        {showComment &&
       
        <section>
            {/* Comment INput field */}
            <div className="relative bg-gray-100">
                <div className="flex items-center px-4 py-4">

                    <img src="https://www.xtrafondos.com/thumbs/1_3617.jpg" alt="" className='h-10 w-10 rounded-full mr-4' />
                
                
                    <form className='grow flex'>
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="simple-search" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 " placeholder="Search" required/>
                        </div>
                        <button type="submit" className="px-2 py-1 ml-2 font-medium text-white bg-blue-700 shrink-0 rounded-full border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-xs">
                            Add comment
                        </button>
                    </form>
                </div>
            </div>
            {/* Comment INput field end */}

            {/* Comments */}
            <SingleComment />
            
            
            {/* Comments end */}
        </section>
         }
                </main>
                :
                <div className="">
                { isLoading ?  <Skeleton /> : <section>
                <Error height={28} btnText={'Answer Question'} mainText={"You haven't shared, answered or posted anything yet."} link={"/questions"}/>
                    </section>}
                </div>
                }
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

                            <form onSubmit={handleUpdate}>
                                <div className="mb-6 px-5 pt-3">
                                    <label htmlFor="name" className="block mb-2 font-medium  text-gray-900 ">Name</label>
                                    <input 
                                    type="text"
                                    id="name" 
                                    defaultValue={response?.name}
                                    onChange={(e)=>setNewName(e.target.value)}
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
                                        <button type="submit" className="text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Done</button>
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
                            
                            <form onSubmit={handleUpdate}>
                                <div className="border-x border-b mx-5 mb-5">
                                        <div className="mb-6 px-5 pt-3">
                                            <input 
                                            type="text" 
                                            id="name"
                                            defaultValue={response?.profile_credential} 
                                            onChange={(e)=>setprofileCredential(e.target.value)}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " autoComplete='off' required/>
                                        </div>
                                </div>
                                <div className="h-24"></div>
                                    {/* Buttons */}
                                    <div className=" flex justify-end items-center rounded-b border-t space-x-2 py-2 px-4">
                                        <button
                                        onClick={()=>setShowModal(false)} 
                                        type="button" className="  focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Cancel</button>
                                        <button type="submit" className="text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Save</button>
                                    </div>
                                        
                            </form>
                        </main>

                    </section>


                    </div>
                </div>
            </div>


        </SkeletonTheme>
        {showToast && 
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />}
    </>
  )
}

export default MainProfile