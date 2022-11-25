import React, { useContext, useState } from 'react'
import Error from '../Components/Error'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import AuthContext from '../ContextApi/AuthContext'
import useToastify from '../Hooks/useToastify'
import { ToastContainer } from 'react-toastify';
import SingleComment from '../Components/SingleComment'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import UniquePost from '../Components/UniquePost'
import useAxiosGet from '../Hooks/useAxiosGet'
import axios from 'axios'

const AnotherUserMainProfile = ({isLoading, response,ValidPost,Followers, fetchFollower}) => {
    // obj = arr.find(o => o.name === 'string 1');
    const [showPost, setshowPost] = useState(false)
    
    const {createToast}=useToastify();
    const [showToast, setShowToast] = useState(false)
    const {user} = useContext(AuthContext)
    let isFollowing = Followers?.following?.some((f)=>f.id = user?.user?.id) 

    console.log(Followers?.following);
    console.log(user);
    // function to follow user
    const followUser = async (e) =>{
        e.preventDefault();
        try {
            const res = await axios.post('http://10.0.0.229/Interns/JonLee/QuoraBlog/public/api/user/create-follower', {
              following_id : response?.data?.id,
              follower_id: user?.user?.id
            },{
                headers: {
                'Authorization': `Bearer ${user?.token}`,
            },
          })
          fetchFollower();
          setShowToast(true)
          createToast({
              msg: res.data.message,
              dataType: true
          })
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
            <section className='flex flex-col'>
                <div className="flex ">

                    <div className="mr-7 relative" >
                    {
                        isLoading ? <Skeleton circle='true' height='120px' width='120px'/> :
                        <img
                        src={response?.data?.profile_photo ? `http://10.0.0.229/Interns/JonLee/QuoraBlog/public/uploads/profile_images/${response?.data?.profile_photo}` : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png'}
                        alt="" 
                        className='h-[120px] w-[120px] rounded-full'/>
                        }           
                        
                    </div>

                    <div className="grow">
                       
                        <div className="flex group justify-between items-center">
                                {isLoading ?  <Skeleton /> :
                            <h1 className='text-3xl font-bold  cursor-pointer'>
                                 {response?.data?.name }
                            </h1>
                            }
                            <span className='bg-gray-100 text-xl px-1 text-gray-700 border-gray-400 border rounded-full'>
                                { isLoading ?  <Skeleton circle='true' height='20px' width='20px'/> :<ion-icon name="arrow-redo-outline"></ion-icon>}
                            </span>
                        </div>
                            
                       <div className="">

                       <div className="my-1">
                            {response?.data?.profile_credential &&
                            <p 
                            className='text-xl text-gray-800  font-normal'>
                                {response?.data?.profile_credential}
                            </p>
                            }
                            </div>
                        </div>

                        <p className='text-sm text-gray-600'>{isLoading ?  <Skeleton /> : `${Followers?.following?.length} followers . 0 following`}</p>

                        {isLoading ?  <Skeleton /> :
                         <div className='flex space-x-1'>
                            <span onClick={followUser} className='cursor-pointer text-sm mt-2 flex items-center justify-center  rounded-full space-x-1'>
                                {
                                    Followers?.following?.some((f)=>f.id = user?.user?.id)  
                                    ?
                                    <div className="flex space-x-1 bg-white text-blue-600 border-blue-600 border  py-1  px-3 rounded-full">
                                <span className='flex text-base'><ion-icon name="git-merge-outline"></ion-icon></span>
                                <span>{'Following'}</span>
                                    </div>
                                    :
                                    <div className="flex space-x-1 bg-blue-600 text-white py-1  px-3">
                                        <span className='flex text-base'><ion-icon name="person-add-outline"></ion-icon></span>
                                    <span>{'Follow'}</span>
                                    </div>
                                }
                                
                            </span>
                            <button className='text-sm mt-2 flex items-center justify-center py-1 bg-slate-50 border border-gray-200 px-3 rounded-full space-x-1'>
                                <span className='flex text-base'><ion-icon name="notifications-outline"></ion-icon></span>
                                <span>Notify me</span>
                            </button>
                            <button className='text-sm mt-2 flex items-center justify-center py-1 bg-slate-50 border border-gray-200 px-3 rounded-full space-x-1'>
                                <span className='flex text-base'><ion-icon name="chatbubbles-outline"></ion-icon></span>
                                <span>Ask</span>
                            </button>
                            <button className='text-sm mt-2 flex items-center justify-center p-1 bg-slate-50 border border-gray-200  rounded-full'>
                                <span className='flex text-base'><ion-icon name="ellipsis-horizontal-outline"></ion-icon></span>
                            </button>
                         </div>
                         }
                    </div>
                </div>
                
               <div className="">
                {response?.data?.profile_desc &&
                <p 
                className='text-base text-gray-800 mt-4'>
                    { response?.data?.profile_desc}
                </p>
                }
                </div>
            </section>

            <section className='mt-8'>
                <nav>
                        {isLoading ?  <Skeleton /> :
                    <ul className='flex justify-between text-gray-400 text-sm font-medium border-b'>
                        <li className='py-4 px-2 text-red-700 border-b-red-700 border-b-4'>Profile</li>
                        <li className='py-4 px-2'>0 Answer</li>
                        <li className='py-4 px-2'>0 Questions</li>
                        <li className='py-4 px-2'>{ValidPost?.length} Post</li>
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
                {ValidPost?.length > 0
                ?
                <section>
                    {ValidPost?.map((post, index) =>(
                        <UniquePost key={index} post={post}/>
                    ))}
                </section>
                :
                <div className="">
                { isLoading ?  <Skeleton /> : <section>
                <Error height={28} btnText={'Answer Question'} mainText={"You haven't shared, answered or posted anything yet."} link={"/questions"}/>
                    </section>}
                </div>
                }
            </section>

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

export default AnotherUserMainProfile