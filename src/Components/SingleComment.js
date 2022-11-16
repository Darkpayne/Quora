import React from 'react'
import useAxiosGet from '../Hooks/useAxiosGet';

const SingleComment = ({comment}) => {

    const { response,isLoading } = useAxiosGet(`/api/user/userProfile/${comment?.user_id}`);

  return (
    <>
        <section>
            <div className="flex items-start px-4 pt-4 border-b">
                <img src={response?.data?.profile_photo ? `http://10.0.0.229/Interns/JonLee/QuoraBlog/public/uploads/profile_images/${response?.data?.profile_photo}` : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png'} alt="" className='h-10 w-10 rounded-full mr-4' />
                <div className="grow">
                    <h2> <span className='text-sm font-bold'>{response?.data?.name}</span>  <span className='text-xs text-gray-400'>3y</span></h2>
                    <p>{comment?.body}</p>
                    <div id='controls' className="py-2 flex justify-between">
                        <div className="flex items-center">
                    <div className="inline-flex rounded-full ">
                        <a href="#" className="py-1 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-l rounded-l-full border-gray-200 hover:bg-gray-100 hover:text-blue-700  focus:text-blue-700 flex">
                            <div className='-rotate-90'><span className='text-lg flex'><ion-icon name="arrow-redo-outline"></ion-icon></span></div>
                        </a>
                        <a href="#" className="py-1 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700">
                        <div className='rotate-90'><span className='text-lg flex'><ion-icon name="arrow-redo-outline"></ion-icon></span></div> 
                        </a>
                    </div>
                        <span className='ml-3 text-sm font-medium cursor-pointer'>Reply</span>
                    </div>

                    <div className="flex items-center">
                        <img src="https://www.xtrafondos.com/thumbs/1_3917.jpg" alt="" className='h-6 w-6 rounded-full' />
                        <button href="#" className="py-2 px-4 text-sm font-medium text-gray-900 rounded-full hover:bg-gray-100 hover:text-blue-700 focus:z-10 ">
                            <div className=''><span className='text-lg flex'><ion-icon name="ellipsis-horizontal-outline"></ion-icon></span></div> 
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default SingleComment


            {/* comments with reply */}
            {/* <div className="flex items-start px-4 pt-4 border-b">
                <img src="https://www.xtrafondos.com/thumbs/1_3917.jpg" alt="" className='h-10 w-10 rounded-full mr-4' />
                <div className="">
                    <h2> <span className='text-sm font-bold'>Jonathan Audu .</span>  <span className='text-xs text-gray-400'>3y</span></h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis dolorum blanditiis, in tempora quis voluptas eaque a reiciendis, laborum reprehenderit doloremque voluptatem, assumenda illum adipisci velit nihil praesentium dicta nesciunt?</p>
                    <div id='controls' className="py-2 flex justify-between">
                        <div className="flex items-center">
                        <div className="inline-flex rounded-full ">
                            <a href="#" className="py-1 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-l rounded-l-full border-gray-200 hover:bg-gray-100 hover:text-blue-700  focus:text-blue-700 flex">
                                <div className='-rotate-90'><span className='text-lg flex'><ion-icon name="arrow-redo-outline"></ion-icon></span></div> 24
                            </a>
                            <a href="#" className="py-1 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700">
                            <div className='rotate-90'><span className='text-lg flex'><ion-icon name="arrow-redo-outline"></ion-icon></span></div> 
                            </a>
                        </div>
                            <span className='ml-3 text-sm font-medium'>Reply</span>
                        </div>

                        <div className="flex items-center">
                            <img src="https://www.xtrafondos.com/thumbs/1_3917.jpg" alt="" className='h-6 w-6 rounded-full' />
                            <button href="#" className="py-2 px-4 text-sm font-medium text-gray-900 rounded-full hover:bg-gray-100 hover:text-blue-700 focus:z-10 ">
                                <div className=''><span className='text-lg flex'><ion-icon name="ellipsis-horizontal-outline"></ion-icon></span></div> 
                            </button>
                            
                        </div>

                    </div>

                        <div className="flex items-start px-4 pt-4">
                            <img src="https://www.xtrafondos.com/thumbs/1_3917.jpg" alt="" className='h-10 w-10 rounded-full mr-4' />
                            <div className="">
                                <h2> <span className='text-sm font-bold'>Jonathan Audu .</span>  <span className='text-xs text-gray-400'>3y</span></h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis dolorum blanditiis, in tempora quis voluptas eaque a reiciendis, laborum reprehenderit doloremque voluptatem, assumenda illum adipisci velit nihil praesentium dicta nesciunt?</p>
                                <div id='controls' className="py-2 flex justify-between">
                                    <div className="flex items-center">
                                    <div className="inline-flex rounded-full ">
                                        <a href="#" className="py-1 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-l rounded-l-full border-gray-200 hover:bg-gray-100 hover:text-blue-700  focus:text-blue-700 flex">
                                            <div className='-rotate-90'><span className='text-lg flex'><ion-icon name="arrow-redo-outline"></ion-icon></span></div> 24
                                        </a>
                                        <a href="#" className="py-1 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700">
                                        <div className='rotate-90'><span className='text-lg flex'><ion-icon name="arrow-redo-outline"></ion-icon></span></div> 
                                        </a>
                                    </div>
                                        <span className='ml-3 text-sm font-medium'>Reply</span>
                                    </div>

                                    <div className="flex items-center">
                                        <img src="https://www.xtrafondos.com/thumbs/1_3917.jpg" alt="" className='h-6 w-6 rounded-full' />
                                        <button href="#" className="py-2 px-4 text-sm font-medium text-gray-900 rounded-full hover:bg-gray-100 hover:text-blue-700 focus:z-10 ">
                                            <div className=''><span className='text-lg flex'><ion-icon name="ellipsis-horizontal-outline"></ion-icon></span></div> 
                                        </button>
                                        
                                    </div>

                                    </div>
                            </div>
                        </div>

                </div>
                
            </div> */}