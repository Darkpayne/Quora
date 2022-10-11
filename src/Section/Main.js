import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import SinglePost from '../Components/SinglePost'
import useToastify from '../Hooks/useToastify'
import { ToastContainer } from 'react-toastify';
import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';
import axios from 'axios';
import AuthContext from '../ContextApi/AuthContext';


const Main = ({loggedInUser}) => {
  const {user} = useContext(AuthContext)
  const {createToast}=useToastify();

  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const [showModal, setShowModal] = useState(false)
  const [askQuestion, setAskQuestion] = useState(true)
  const [createPost, setCreatePost] = useState(false)

  const askQuestionValue = () =>{
    setAskQuestion(true);
    setCreatePost(false);
  }

  const createPostValue = () =>{
    setAskQuestion(false);
    setCreatePost(true);
  }

  const AskButton = () =>{
    setShowModal(true)
    setAskQuestion(true);
    setCreatePost(false);
  }
  const PostButton = () =>{
    setShowModal(true)
    setAskQuestion(false);
    setCreatePost(true);
  }

  const [showToast, setShowToast] = useState(false) 
  const [value, setValue] = useState('');


  const handlePost = async (e) =>{
    console.log('done');
    e.preventDefault();
    try {
        const res = await axios.post('http://10.0.0.229/Interns/JonLee/QuoraBlog/public/api/user/create-post', {
           title : 'hello',
           body : JSON.stringify(value)
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


  return (
    <>
      <main className='bg-white pt-2 px-1 border'>
        <div className="flex items-center gap-x-2 px-3 ">

          <div>
            <img src={loggedInUser?.profile_photo ? `http://10.0.0.229/Interns/JonLee/QuoraBlog/public/uploads/profile_images/${loggedInUser?.profile_photo}` : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png'} alt="" className=' h-10 w-10 rounded-full'/>
          </div>

            <button onClick={()=>setShowModal(!showModal)} className='grow bg-gray-100 text-start py-1 px-3 rounded-full border text-gray-400 border-gray-300'>What do you want to ask or share?</button>

        </div>
        <div className="flex my-2 px-3">
            <button onClick={AskButton} className='basis-1/3 text-gray-500 flex items-center justify-center  hover:rounded-full  hover:bg-gray-100 border-gray-300'>
               <span className='flex mr-2'><ion-icon name="help-outline"></ion-icon></span> <span className='py-1'>Ask</span>
            </button>
            <span className='text-gray-200 px-2'>|</span>
            <Link to="/questions" className='basis-1/3 text-gray-500 flex items-center justify-center  hover:rounded-full  hover:bg-gray-100 border-gray-300 '>
               <span className='flex mr-2'><ion-icon name="create-outline"></ion-icon></span> <span className='py-1'>Answer</span>
            </Link>
            <span className='text-gray-200 px-2'>|</span>
            <button onClick={PostButton} className='basis-1/3 text-gray-500 flex items-center justify-center  hover:rounded-full  hover:bg-gray-100 border-gray-300'>
               <span className='flex mr-2'><ion-icon name="pencil-outline"></ion-icon></span> <span className='py-1'>Post</span>
            </button>
        </div>
      </main>

        {/* EACH POST */}
        <SinglePost/>
        <SinglePost/>
        <SinglePost/>
        <SinglePost/>


{/* MODAL */}
<div id="defaultModal" tabIndex="-1" aria-hidden="true" data-modal-show="true" className={`${!showModal ? 'hidden': ''} bg-slate-800 bg-opacity-90 flex justify-center items-center transition-all ease-in-out top-0 right-0 bottom-0 left-0 z-50 h-screen fixed`}>
    <div className={`relative p-4 w-full max-w-3xl h-full md:h-auto transition-all ease-in-out ${!showModal?'opacity-0 ':'opacity-100 '}`}>
       
        <div className="relative bg-white rounded-lg shadow">
            
            <div className="flex px-3 space-x-2 items-center rounded-t border-b">
                <button onClick={()=>setShowModal(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 inline-flex items-center" data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Close modal</span>
                </button>
               <div className="grow flex ">
                
                  <div onClick={askQuestionValue} className={`basis-1 grow text-center py-4 px-2  cursor-pointer ${askQuestion && "activeModal"} font-semibold text-sm`}>Ask Question</div>

                  <div onClick={createPostValue} className={`basis-1 cursor-pointer grow text-center py-4 px-2  ${createPost && "activeModal"} font-semibold text-sm`}>Create Post</div>  
                
               </div>
            </div>

          <section className={`${createPost && 'hidden'}`}>
           <div id="questions" className="px-4 py-5" >

              <div className="bg-blue-100 p-2 px-4 text-indigo-700 mb-5">
                <h1 className='font-bold'>Tips on getting good answer quickly</h1>
                <ul className='list-disc list-inside '>
                  <li>Make sure your question has been asked already</li>
                  <li>Keep your question short and to the point</li>
                  <li>Double-check grammer and spelling</li>
                </ul>
              </div>
              <div className="my-4 flex items-center">
                <img src="https://www.xtrafondos.com/thumbs/1_4058.jpg" alt="" className='h-6 w-6 rounded-full mr-2'/>
                <div className="flex items-center text-gray-500">
                  <span className='text-sm flex mr-2'><ion-icon name="play"></ion-icon></span>
                    <div className="">
                    <button id="dropdownDefault" data-dropdown-toggle="dropdown" className=" bg-gray-200 rounded-full focus:outline-none font-medium text-sm px-3 py-1 text-center inline-flex items-center" type="button">
                      <span className='flex mr-2'><ion-icon name="people-outline"></ion-icon></span>
                      <span>Public </span>
                      <span>
                      <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </span>
                      </button>

                      <div id="dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                            <li>
                              <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                              <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                              <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                            </li>
                            <li>
                              <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                            </li>
                          </ul>
                      </div>
                    </div>
                </div>
              </div>
              <textarea id="message" rows="1" className="block  outline-none p-2.5 w-full text-sm text-gray-900 border-b rounded-lg border-gray-300 resize-none" placeholder={`Start your question with "What", "How", "Why", etc.`}></textarea>
           </div>
           {/* Search Component */}
<div className="h-36"></div>
            {/* Buttons */}
            <div className="flex justify-end items-center rounded-b border-t space-x-2 py-2 px-4">
            

             
                  <button onClick={()=>setShowModal(false)}  data-modal-toggle="defaultModal" type="button" className="text-gray-500 bg-white focus:outline-none hover:bg-gray-100 rounded-full py-2.5 px-5  text-sm font-medium  "><span className=' '>Cancel</span></button>
             
                  <button data-modal-toggle="defaultModal" type="button" className="text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Post</button>
              </div>
          </section>

          <section className={`${askQuestion && 'hidden'}`}>
          
                <div className="mb-4 flex items-center  px-4 py-3">
                  <img src="https://www.xtrafondos.com/thumbs/1_4058.jpg" alt="" className='h-6 w-6 rounded-full mr-2'/>
                  <div className="flex items-center text-gray-700">
                    <span className='text-sm flex mr-2'><ion-icon name="play"></ion-icon></span>
                      <div className="">
                      <button id="dropdownDefault" data-dropdown-toggle="dropdown" className=" bg-gray-200 rounded-full focus:outline-none font-medium text-sm px-3 py-1 text-center inline-flex items-center" type="button">
                        <span className='flex mr-2'><ion-icon name="globe-outline"></ion-icon></span>
                        <span className=''>Everyone </span>
                        <span>
                        {/* <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg> */}
                        </span>
                        </button>

                        <div id="dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                              <li>
                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                              </li>
                              <li>
                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                              </li>
                              <li>
                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                              </li>
                              <li>
                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                              </li>
                            </ul>
                        </div>
                      </div>
                  </div>
                </div>

                {/* <textarea id="message" rows="15" className="block p-2.5 w-full text-sm text-gray-900  outline-none rounded-lg placeholder:text-base resize-none" placeholder={`Say something....`}></textarea> */}

                {/* <FroalaEditor tag='textarea'/> */}
                <div id="createPost" className=" px-4" >
                  <form onSubmit={handlePost} action="">
                  <Editor
                    apiKey='6p3s10ba2nu1o64j67x6hvnusqgz28iaidgs39b0t061s2q7'
                    onInit={(evt, editor) => editorRef.current = editor}
                    initialValue=""
                    value={value}
                    onEditorChange={(newValue, editor) => setValue(newValue)}
                    
                    init={{
                      height: 400,
                      menubar: false,
                      plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'code', 'help','quickbars', 'image', 'editimage'
                      ],
                      quickbars_image_toolbar: false,
                      toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help | link | image |underline ',
                        automatic_uploads: true,
                        image_uploadtab: false,
                        file_picker_types: 'image',
                        file_picker_callback: (cb, value, meta) => {
                        const input = document.createElement('input');
                        input.setAttribute('type', 'file');
                        input.setAttribute('accept', 'image/*');
                    
                        input.addEventListener('change', (e) => {
                          const file = e.target.files[0];
                          const reader = new FileReader();
                          reader.addEventListener('load', () => {
                            const id = 'blobid' + (new Date()).getTime();
                            const blobCache =  this.activeEditor.editorUpload.blobCache;
                            const base64 = reader.result.split(',')[1];
                            const blobInfo = blobCache.create(id, file, base64);
                            blobCache.add(blobInfo);
                            cb(blobInfo.blobUri(), { title: file.name });
                          });
                          reader.readAsDataURL(file);
                        });
                    
                        input.click();
                      },
                      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                     
                    }}
                  />
                  {/* <div className="myTextarea" contentEditable>hello</div> */}
                  {/* <Editor
                    editorState={EditorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={this.onEditorStateChange}
                  /> */}
              <div className="flex justify-between items-center rounded-b py-2 px-4">
                <div className="flex space-x-2 ">
                    <button  type="button" className="text-gray-500 bg-white focus:outline-none border border-transparent hover:border-blue-400 hover:border text-sm font-medium px-2 ">
                      <span className='text-2xl font-bold '><ion-icon name="text-outline"></ion-icon></span>
                    </button>
                    <button  type="button" className="text-gray-500 bg-whitefocus:outline-none border border-transparent hover:border-blue-400 hover:border text-sm font-medium px-2 "><span className='text-2xl font-bold '><ion-icon name="images-outline"></ion-icon></span></button>
                </div>
                    <button  type="submit" className="text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Post</button>
              </div>
            </form>
            </div>
          </section>
          


        </div>
    </div>
</div>

    </>
  )
}

export default Main