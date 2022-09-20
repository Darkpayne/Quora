import React, { useEffect, useRef, useState } from 'react'


const Login = () => {

    const PWD_REGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

    const [showModal, setShowModal] = useState(false)
    const [showSignup, setShowSignup] = useState(false)
    const [showEmailVerification, setShowEmailVerification] = useState(false)
    const [showPassVerification, setShowPassVerification] = useState(false)
    const [forgetPassword, setForgetPassword] = useState(false)


    const [showPassword, setShowPassword] = useState(false)

    const [password, setPassword] = useState('')
    const [validPass, setValidPass] = useState(false)
    const [passFocus, setPassFocus] = useState(false)

    const errRef = useRef();
    const passRef = useRef();

    const [showError, setShowError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');

    const NextVerification = (e) =>{
        e.preventDefault();
        setShowSignup(false);
        setShowEmailVerification(true)
        setShowPassVerification(false)
    }

    const ShowlastModal =(e)=>{
        e.preventDefault();
        setShowEmailVerification(false);
        setShowPassVerification(true);
    }
    const ForgetPassword =(e)=>{
        e.preventDefault();
        setShowModal(!showModal) 
        setShowEmailVerification(false)
        setShowPassVerification(false)
        setShowSignup(false)
        setForgetPassword(true)
    }


    useEffect(() => {
       passRef.current.focus();
    }, [])

    useEffect(() => {
       const result = PWD_REGEX.test(password)
       setValidPass(result);
    }, [password])

    useEffect(() => {
        setErrorMessage('');
    }, [password, showModal])

  return (
    <div className="h-screen flex justify-center items-center" style={{backgroundImage:"url('./assets/bg-image.png')"}}>

       <div className="bg-white w-[700px] h-[548px]">

        <div className="p-4 mb-2">
            <h1 className='headingQuoras text-3xl text-center text-red-700 my-5'>Quora</h1>
            <p className='text-center font-bold text-gray-500'>A place to share knowledge and better understand the world</p>
        </div>

        <div className="flex border-b">
{/* sign up email */}
            <div className="basis-1/2 grow" >
                <div className="flex flex-col">
                    <p className='text-sm p-4 text-gray-400'>By continuing you indicate that you agree to Quora's <span className='text-blue-500 cursor-pointer'> Terms of Service</span> and <span className='text-blue-500 cursor-pointer'> Privacy Policy</span>.
                    </p>
                    <div className="px-4">
                        <button className='py-3 my-3 border px-5 w-full text-start flex items-center'>
                            <img src="./assets/google.png" alt="" className='w-5 mr-4'/>
                            Continue with Google
                        </button>
                        <button className='py-3 my-3 border px-5 w-full text-start flex items-center'>
                            <img src="./assets/facebook.png" alt="" className='w-5 mr-4'/>
                            Continue with Facebook
                        </button>
                        
                        <button onClick={()=>{
                             setShowModal(!showModal) 
                             setShowEmailVerification(false)
                             setShowPassVerification(false)
                             setShowSignup(true)
                             setForgetPassword(false)
                        }} className='py-2 my-1 text-sm font-bold text-gray-500 px-5 w-full'>
                            Sign up with email
                        </button>
                    </div>
                </div>
            </div>

            <div className="basis-1/2 px-5 border-l mb-5" >
                <h2 className='font-bold text-gray-500 border-b pb-2 mb-3'>Login</h2>
                    <form >
                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-sm text-gray-600 font-bold">Email</label>
                            <input type="email" name="email" id="email" placeholder="you@company.com" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none " />
                        </div>
                        <div class="mb-6">
                            <div class="flex justify-between mb-2">
                                <label for="password" class="text-sm text-gray-600 font-bold">Password</label>
                                
                            </div>
                            <input type="password" name="password" id="password" placeholder="Your Password" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none" />
                        </div>
                        <div class="mb-6 flex justify-between items-center">
                        <span onClick={ForgetPassword} class="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 cursor-pointer dark:hover:text-indigo-300">Forgot password?</span>
                            <button type="button" class=" px-5 py-1 text-white bg-indigo-500 rounded-full focus:bg-indigo-600 focus:outline-none cursor-not-allowed">Login</button>
                        </div>
                    </form>
            </div>
            
        </div>

        <div className="text-sm  py-4 text-center">
            <h1>New: 
            <span className='text-blue-700 hover:underline cursor-pointer'>العربية</span>
            <span className='text-blue-700 hover:underline cursor-pointer'> עברית, </span> 
            <span className='text-blue-700 hover:underline cursor-pointer'> polski,</span> 
            <span className='text-blue-700 hover:underline cursor-pointer'> ગુજરાતી, </span> 
            <span className='text-blue-700 hover:underline cursor-pointer'>ಕನ್ನಡ,  </span> 
            <span className='text-blue-700 hover:underline cursor-pointer'> മലയാളം </span> and 
            <span className='text-blue-700 hover:underline cursor-pointer'> తెలుగు</span></h1>
        </div>

        <div className="text-sm text-center p-3 bg-gray-100">
            
            <span className='hover:underline cursor-pointer text-gray-500'>About </span> . 
            <span className='hover:underline cursor-pointer text-gray-500'>Careers </span> . 
            <span className='hover:underline cursor-pointer text-gray-500'>Privacy </span> . 
            <span className='hover:underline cursor-pointer text-gray-500'>Terms </span> . 
            <span className='hover:underline cursor-pointer text-gray-500'>Contract </span> . 
            <span className='hover:underline cursor-pointer text-gray-500'>Languages </span> . 
            <span className='hover:underline cursor-pointer text-gray-500'>Your Ad Choices </span> . 
            <span className='hover:underline cursor-pointer text-gray-500'>Press </span>
           
        </div>

       </div>

       {/* MODAL */}
        <div id="defaultModal" tabindex="-1" aria-hidden="true" data-modal-show="true" class={`${!showModal ? 'hidden': ''} bg-slate-800 bg-opacity-90 flex justify-center items-center transition-all ease-in-out top-0 right-0 bottom-0 left-0 z-50 h-screen fixed`}>
            <div class={`relative p-4 w-full max-w-2xl h-full md:h-auto transition-all ease-in-out ${!showModal?'opacity-0 ':'opacity-100 '}`}>
            
                <div class="relative bg-white rounded-lg shadow">
                    
                    <div class="flex px-3 pt-2 space-x-2 items-center rounded-t ">
                        <button onClick={()=>setShowModal(false)} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-xl p-1.5 inline-flex items-center " data-modal-toggle="defaultModal">
                            <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>

                    <section className={`${showSignup ? 'block' : 'hidden'}`}>
                        <h2 className='px-5 mt-3 text-2xl'>Sign Up</h2>
                        <form>
                        <div class="mb-6 px-5 mt-5">
                            <label for="name" class="block mb-2 font-medium  text-gray-900 ">Your Name</label>
                            <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='What would you like to be called?' autoComplete='off' required/>
                        </div>
                        <div class="mb-6 px-5 ">
                            <label for="email" class="block mb-2 font-medium  text-gray-900 ">Your email</label>
                            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Your email" autoComplete='off' required/>
                        </div>
                    {/* Buttons */}
                   
                            <div class=" flex justify-end items-center rounded-b border-t space-x-2 py-2 px-4">
                        

                        
                
                        <button onClick={NextVerification} type="button" class="text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Next</button>
                            </div>
                        
                            </form>
                    </section>


                    <section className={`${showEmailVerification ? 'block' : 'hidden'}`}>
                        <h2 className='px-5 mt-3 text-2xl'>Confirm your email</h2>
                        <p className='px-5 mt-3 text-sm'>Please enter the code we sent to info@vivian.com</p>
                        <form>
                        <div class="mb-6 px-5 mt-5">
                            <label for="name" class="block mb-2 font-medium  text-gray-900 "></label>
                            <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='What would you like to be called?' autoComplete='off' required/>

                        </div>    
                        <p className='text-xs px-5 mb-10 text-gray-500 hover:underline cursor-pointer'>Didn't recieve an email or something went wrong? Resend Code</p>
                    {/* Buttons */}
                   
                            <div class="flex justify-end items-center rounded-b border-t space-x-2 py-2 px-4">
                                <button onClick={ShowlastModal} data-modal-toggle="defaultModal" type="button" class="text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Next</button>
                            </div>
                        
                            </form>
                    </section>


                    <section className={`${forgetPassword ? 'block' : 'hidden'}`}>
                        <h2 className='px-5 mt-3 text-2xl'>Find Your Account</h2>
                        <p className='px-5 mt-3 text-sm'>Please enter your rmail to rest your password</p>
                        <form>
                        <div class="mb-6 px-5 mt-5">
                            <label for="email" class="block mb-2 font-medium  text-gray-900 "></label>
                            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='Your email' autoComplete='off' required/>

                        </div>    
                        <div className="h-32"></div>
                    {/* Buttons */}
                   
                            <div class="flex justify-end items-center rounded-b border-t space-x-2 py-2 px-4">
                                <button  data-modal-toggle="defaultModal" type="button" class="text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Submit</button>
                            </div>
                        
                            </form>
                    </section>

                    <section className={`${showPassVerification ? 'block' : 'hidden'}`}>
                        <h2 className='px-5 mt-3 text-2xl'>Sign Up</h2>
                        <form>
                        <div class="mb-8  mt-5">
                            <label for="password" class=" mb-2 font-medium  text-gray-900 flex justify-between px-5"> 
                                <span className='flex'>
                                    <span className='first-letter:'>
                                        Password 
                                    </span>

                                    <span className={`text-red-500 text-2xl flex font-extrabold ${validPass || !password ? 'hidden' : 'inline'}`}>
                                        <ion-icon name="close-outline"></ion-icon>
                                    </span> 

                                    <span className={`text-green-500 text-2xl flex font-extrabold ${validPass ? 'valid' : 'hidden'}`}>
                                        <ion-icon name="checkmark-outline"></ion-icon>
                                    </span>

                                </span> 
                                <span 
                                onClick={()=>setShowPassword(!showPassword)} className='cursor-pointer text-sm text-gray-500'>Show Password</span>
                            </label>
                            <div className="px-5">
                            <input 
                            type={`${showPassword ? "text" : "password"}`} 
                            id="password"
                            ref={passRef}
                            onFocus={()=>setPassFocus(true)}
                            onChange={(e)=>setPassword(e.target.value)}
                            value={password}
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" autoComplete='off' required/>
                            </div>
                        {/* display error message */}
                        <p ref={errRef} className={`mt-2 text-sm font-semibold text text-red-600 px-5 mb-10  ${passFocus && !validPass ? 'flex':'hidden'} flex items-start`}>
                             <span 
                             className='flex mr-2 mt-1  font-semibold'><ion-icon name="ban-outline"></ion-icon></span>
                             <span>
                                8 to 24 characters <br/>
                                Must include uppercase and lowercase letters, a number and a special character. <br/>
                                
                            </span> 
                        </p>

                        </div>    

                        

                    {/* Buttons */}
                   
                            <div class="flex justify-end items-center rounded-b border-t space-x-2 py-2 px-4">
                                <button data-modal-toggle="defaultModal" type="button" class="text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Finish</button>
                            </div>
                        
                            </form>
                    </section>



                </div>
            </div>
        </div>
    </div>

  )
}

export default Login