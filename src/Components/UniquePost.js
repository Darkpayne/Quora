import axios from 'axios';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../ContextApi/AuthContext';
import useAxiosGet from '../Hooks/useAxiosGet';
import SingleComment from './SingleComment';
import useToastify from '../Hooks/useToastify'
import { ToastContainer } from 'react-toastify';

const UniquePost = ({post}) => {
    // these two fetches the current logged in user. one stored in the localstorage and fetches the updated version of the logedin user.
  const {user}  = useContext(AuthContext);
  const { response:mainUser } = useAxiosGet(`/api/user/userProfile/${user?.user?.id}`);
    // the toast function to show notification
  const {createToast}=useToastify();
      // fetches the author's details of each post
  const { response } = useAxiosGet(`/api/user/userProfile/${post?.user_id}`);
    // this function operates the functuion block
    const commentFunction = (e) =>{
        e.preventDefault();
        setShowComment(!showComment);
        setTimeout(() => {
            setShowLoader(false)
        }, 1000);
    }

    const [showLoader, setShowLoader] = useState(true);
    const [showComment, setShowComment] = useState(false)



    const toggleComments = (e) =>{
      e.preventDefault();
      setShowComment(!showComment);
    }

     // This useState value shows the full body of the post..
     const [showMore, setShowMore] = useState(true);
     const [showToast, setShowToast] = useState(false)
 
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
    <div>
        <main className='my-3 bg-white border'>
        <div className="relative">
            <div className="flex items-center px-4 pt-4">
              <img  src={response?.data?.profile_photo ? `http://10.0.0.229/Interns/JonLee/QuoraBlog/public/uploads/profile_images/${response?.data?.profile_photo}` : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png'} alt="" className='h-10 w-10 rounded-full mr-4' />
              <div className="grow">
                  <h6 className='text-sm font-semibold capitalize'>{post?.title} {user?.user?.id === post?.user_id || <span className='text-sm text-blue-500 cursor-pointer'>∙ Follow</span>}</h6>
                  <h6 className='text-sm text-gray-500'>Posted by
                  <Link to={user?.user?.id === post?.user_id ? `/profile` : `/user-profile/${response?.data?.id}`} className='hover:underline cursor-pointer'> {response?.data?.name} </Link> 
                  <span className='text-sm'>{new Date(post?.created_at).toDateString()}</span></h6>
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

              <button onClick={commentFunction} href="#" className="py-2 px-2 text-sm font-medium text-gray-900 bg-white  border-gray-200 hover:bg-gray-100 hover:text-blue-700  focus:text-blue-700 flex rounded-full">
                <div className=' mr-2'><span className='text-lg flex'><ion-icon name="chatbubble-ellipses-outline"></ion-icon></span></div> {post?.comment?.length === 0 ? '' : post?.comment?.length}
            </button>
          </div>

          <div className="">
            <button href="#" className="py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 rounded-full">
                <div className=''><span className='text-lg flex'><ion-icon name="arrow-redo-outline"></ion-icon></span></div> 
            </button>
            
          </div>

        </div>

        
        {showComment &&
          <div className="">
          
              <section>
                  {/* Comment Input field */}
                  <div className="relative bg-gray-100">
                      <div className="flex items-center px-4 py-4">
                          <img  src={mainUser?.data?.profile_photo ? `http://10.0.0.229/Interns/JonLee/QuoraBlog/public/uploads/profile_images/${mainUser?.data?.profile_photo}` : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png'} alt="" className='h-10 w-10 rounded-full mr-4' />
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
                {
                  post?.comment?.length !== 0 
                  && 
                  <div>
                      {showLoader 
                      ? <div className="flex justify-center p-3"><img src="https://media.tenor.com/K2UGDd4acJUAAAAC/load-loading.gif" alt="" className='h-10' /></div>
                      :
                    <section className='border-x border-b'> 
                    {post?.comment?.map((comment,index)=>(
                      <SingleComment key={index} comment={comment}/> 
                    ))}
                    <div className="flex px-5 my-2">
                          <button className='rounded-full border-gray-300 border grow py-1 bg-gray-100 text-sm'>View more comments</button>
                      </div>
                    </section>
                      }
                  </div>
                }
              </section>
          
          </div>
         }
      </main>
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
    </div>
  )
}

export default UniquePost