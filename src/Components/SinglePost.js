import React, { useEffect, useState } from 'react'
import SingleComment from './SingleComment'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import useAxiosGet from '../Hooks/useAxiosGet'

const SinglePost = ({post}) => {
  const { response,isLoading } = useAxiosGet('/api/user/all-users');
  // console.log(response?.data);
  console.log(post);
    const [showComment, setShowComment] = useState(false)
    const [userInfo, setUserInfo] = useState([])

    useEffect(() => {
      setUserInfo(response?.data.filter(data => data.id === post.user_id));

    }, [])

    const toggleComments = (e) =>{
      e.preventDefault();
      setShowComment(!showComment);
    }


  return (
    <div>
      <main className='my-3 bg-white border'>
        <div className="relative">
            <div className="flex items-center px-4 pt-4">
              <img src="https://www.xtrafondos.com/thumbs/1_3617.jpg" alt="" className='h-10 w-10 rounded-full mr-4' />
              <div className="grow">
                  <h6 className='text-sm font-semibold capitalize'>{post?.title} ∙  <span className='text-sm text-blue-500'>Follow</span></h6>
                  <h6 className='text-sm text-gray-500'>Posted by {userInfo && userInfo[0]?.name} ∙ <span className='text-sm'>{new Date(post?.created_at).toDateString()}</span></h6>
              </div>
              <div className="absolute top-4 right-5 hover:bg-gray-100 rounded-full">
                  <span className='text-2xl h-10 w-10 cursor-pointer flex items-center justify-center'>
                      <ion-icon name="close-outline"></ion-icon>
                  </span>
              </div>
            </div>
        </div>
        <div className="my-3 px-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias reprehenderit fugiat tenetur iste quia, quo cumque sequi suscipit exercitationem aut doloribus nemo libero animi magni at dolorum illo! Fugit, natus!
        </div>
        <div className="flex justify-center">
          <img src="https://www.xtrafondos.com/thumbs/1_4912.jpg" alt="" className='object-cover grow'/>
        </div>


        <div id='controls' className="px-4 py-1 flex justify-between border-b">
          <div className="flex">
          <div className="inline-flex rounded-full ">
              <a href="#" className="py-2 px-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-l rounded-l-full border-gray-200 hover:bg-gray-100 hover:text-blue-700  focus:text-blue-700 flex">
                <div className='-rotate-90'><span className='text-lg flex'><ion-icon name="arrow-redo-outline"></ion-icon></span></div> 2.5K
              </a>
              <a href="#" className="py-2 px-2 text-sm font-medium text-gray-900 bg-white rounded-r-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700">
              <div className='rotate-90'><span className='text-lg flex'><ion-icon name="arrow-redo-outline"></ion-icon></span></div> 
              </a>
            </div>
              <button href="#" className="py-2 px-2 text-sm font-medium text-gray-900 bg-white  border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 flex rounded-full">
                <div className='mr-2'><span className='text-lg flex'><ion-icon name="sync-outline"></ion-icon></span></div> 58 
            </button>

              <button onClick={toggleComments} href="#" className="py-2 px-2 text-sm font-medium text-gray-900 bg-white  border-gray-200 hover:bg-gray-100 hover:text-blue-700  focus:text-blue-700 flex rounded-full">
                <div className=' mr-2'><span className='text-lg flex'><ion-icon name="chatbubble-ellipses-outline"></ion-icon></span></div> 38 
            </button>
          </div>

          <div className="">
            <button href="#" className="py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 rounded-full">
                <div className=''><span className='text-lg flex'><ion-icon name="arrow-redo-outline"></ion-icon></span></div> 
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
    </div>
  )
}

export default SinglePost