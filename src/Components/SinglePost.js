import React, { useEffect, useState } from 'react'
import SingleComment from './SingleComment'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import useAxiosGet from '../Hooks/useAxiosGet'
import axios from 'axios'
import AuthContext from '../ContextApi/AuthContext'
import { useContext } from 'react'

const SinglePost = ({post}) => {
    const { response } = useAxiosGet(`/api/user/userProfile/${post?.user_id}`);
    const { response:GetComment, fetchData } = useAxiosGet(`api/user/comments/${post?.id}`);

    // useEffect(() => {
    //   fetchData();
    // }, [GetComment])
    const {user}  = useContext(AuthContext);
    const [showComment, setShowComment] = useState(false)

    const toggleComments = (e) =>{
      e.preventDefault();
      setShowComment(!showComment);
    }
    const [showMore, setShowMore] = useState(true);

    const truncateString = (string = '', maxLength = 100) => showMore && string.length > maxLength ? `${string.substring(0, maxLength)}` : string ;

    // HANDLING THE COMMENTS
    const [comment, setComment] = useState('')

    const handleCommentButton =async (e) =>{
      e.preventDefault();
      if (comment === "") return alert('error');
      try {
          const res = await axios.post('http://10.0.0.229/Interns/JonLee/QuoraBlog/public/api/user/add-comment', {
              post_id : post?.id,
              user_id : user?.user?.id,
              body : comment
          },{
              headers: {
              'Authorization': `Bearer ${user?.token}`,
          },
        })
        setComment('');
        fetchData();
        // setShowToast(true)
        // createToast({
        //     msg: res.data.message,
        //     dataType: true
        // })
        // setTimeout(() => {
        //     window.location.reload();
        // }, 1000);
        console.log(res);
    } catch (error) {
        // setShowToast(true)
        // createToast({
        //     msg: error?.response?.data.message,
        //     dataType: false
        // })
        console.log(error);
    }
    }

  return (
    <div>
      <main className='my-3 bg-white border'>
        <div className="relative">
            <div className="flex items-center px-4 pt-4">
              <img  src={response?.data?.profile_photo ? `http://10.0.0.229/Interns/JonLee/QuoraBlog/public/uploads/profile_images/${response?.data?.profile_photo}` : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png'} alt="" className='h-10 w-10 rounded-full mr-4' />
              <div className="grow">
                  <h6 className='text-sm font-semibold capitalize'>{post?.title} ∙  <span className='text-sm text-blue-500'>Follow</span></h6>
                  <h6 className='text-sm text-gray-500'>Posted by <span className='hover:underline cursor-pointer'> {response?.data?.name} </span>∙ <span className='text-sm'>{new Date(post?.created_at).toDateString()}</span></h6>
              </div>
              <div className="absolute top-4 right-5 hover:bg-gray-100 rounded-full">
                  <span className='text-2xl h-10 w-10 cursor-pointer flex items-center justify-center'>
                      <ion-icon name="close-outline"></ion-icon>
                  </span>
              </div>
            </div>
        </div>
        <div className="my-3 px-4 ">
          <div className=''>{truncateString(post?.body)} {post?.body.length > 100 && showMore && <span onClick={()=>setShowMore(false)} className='text-blue-500 text-sm hover:underline cursor-pointer'>(....more)</span>}</div>
        </div>
        <div className="flex justify-center">
          <img
          src={post?.post_image ? `http://10.0.0.229/Interns/JonLee/QuoraBlog/public/uploads/post_images/${post?.post_image}` : 'https://www.xtrafondos.com/thumbs/1_4912.jpg'} 
          alt="" 
          className='object-cover grow'/>
        </div>


        <div id='controls' className="px-4 py-1 flex justify-between border-b">
          <div className="flex">
          <div className="inline-flex rounded-full ">
              <a href="#" className="py-2 px-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-l rounded-l-full border-gray-200 hover:bg-gray-100 hover:text-blue-700  focus:text-blue-700 flex">
                <div className='-rotate-90'><span className='text-lg flex'><ion-icon name="arrow-redo-outline"></ion-icon></span></div>
              </a>
              <a href="#" className="py-2 px-2 text-sm font-medium text-gray-900 bg-white rounded-r-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700">
              <div className='rotate-90'><span className='text-lg flex'><ion-icon name="arrow-redo-outline"></ion-icon></span></div> 
              </a>
            </div>
              <button href="#" className="py-2 px-2 text-sm font-medium text-gray-900 bg-white  border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 flex rounded-full">
                <div className='mr-2'><span className='text-lg flex'><ion-icon name="sync-outline"></ion-icon></span></div> 
            </button>

              <button onClick={toggleComments} href="#" className="py-2 px-2 text-sm font-medium text-gray-900 bg-white  border-gray-200 hover:bg-gray-100 hover:text-blue-700  focus:text-blue-700 flex rounded-full">
                <div className=' mr-2'><span className='text-lg flex'><ion-icon name="chatbubble-ellipses-outline"></ion-icon></span></div> {GetComment?.length === 0 ? '' : GetComment?.length}
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
            {/* Comment Input field */}
            <div className="relative bg-gray-100">
                <div className="flex items-center px-4 py-4">
                    <img  src={user?.user?.profile_photo ? `http://10.0.0.229/Interns/JonLee/QuoraBlog/public/uploads/profile_images/${user?.user?.profile_photo}` : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png'} alt="" className='h-10 w-10 rounded-full mr-4' />
                    <form className='grow flex' onSubmit={handleCommentButton}>
                      <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="w-full flex  items-center">
                            <textarea rows="1" id="simple-search" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl outline-none block w-full pl-5 p-2 " onChange={e=>setComment(e.target.value)} value={comment} placeholder="Add comment . . ." required></textarea>
                            <button type="submit" className="px-3 py-2 ml-2 font-medium text-white bg-blue-700 shrink-0 rounded-full border border-blue-700 hover:bg-blue-800 focus:outline-none text-xs ">
                            Add comment
                        </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* Comment Input field end */}
          {GetComment?.length !== 0 && <SingleComment GetComment={GetComment} /> }
        </section>
         }
      </main>
    </div>
  )
}

export default SinglePost