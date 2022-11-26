import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router';
import { ToastContainer } from 'react-toastify';
import AuthContext from '../ContextApi/AuthContext';
import useToastify from '../Hooks/useToastify'



const Login = () => {
    // calling the dispatch function from the auth context
    const {dispatch,user, emailOTP} = useContext(AuthContext)
    // useToast is a custom hook to display notifications
    const {createToast}=useToastify();
    // 
    const navigate = useNavigate();


    // MODAL SWITCHES
    const [showModal, setShowModal] = useState(false)
    const [showSignup, setShowSignup] = useState(false)
    const [showEmailVerification, setShowEmailVerification] = useState(false)
    const [showPassVerification, setShowPassVerification] = useState(false)
    const [forgetPassword, setForgetPassword] = useState(false)


    // SIGNUP LOGIC STARTS HERE **********************************************************
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [showToast, setShowToast] = useState(false)

    // OnSubmit function to the first form to be submitted
    const NextVerification = async (e) =>{
        e.preventDefault();
        setIsLoading(true)
        try {
            const res = await axios.post("http://10.0.0.229/Interns/JonLee/QuoraBlog/public/api/auth/register", {
                name,
                email
            });
            // console.log(res.data);
            setShowSignup(false);
            setShowEmailVerification(true)
            setShowPassVerification(false)
            dispatch({type:"FORM_START", payload:res.data})
            setShowToast(true)
            createToast({
                msg: 'OTP sent!',
                dataType: true
            })
         
        } catch (error) {
            console.log(error.response.data.message);
            setShowToast(true)
            createToast({
                msg: error.response.data.message,
                dataType: false
            })
        }finally{
            setIsLoading(false);
        }
    }


    // OTP VERIFICATION STARTS HERE *****************************************************
    const [OTP, setOTP] = useState('');

    const ShowlastModal = async (e)=>{
        e.preventDefault();
        setIsLoading(true);
        try {
             await axios.post('http://10.0.0.229/Interns/JonLee/QuoraBlog/public/api/auth/verify',{
                otp:OTP,
                id:emailOTP?.id
            });
            setShowEmailVerification(false);
            setShowPassVerification(true);
            setShowToast(true)
            createToast({
                msg: 'Great! Input Password!',
                dataType: true
            })
        } catch (error) {
            console.log(error.response.data.message);
            setShowToast(true)
            createToast({
                msg: error.response.data.message,
                dataType: false
            })
        } finally{
            setIsLoading(false)
        }
    }
    


    // PASSWORD SETTING LOGIC STARTS HERE ************************************************

    // showpassword toggles the input type to show hidden passsword
    const [showPassword, setShowPassword] = useState(false)
    // password saves the password input to this state
    const [password, setPassword] = useState('')
    // this checks if the password is valid after passing the REGEX TEST.
    const [validPass, setValidPass] = useState(false)
    useEffect(() => {
        const result = PWD_REGEX.test(password)
        setValidPass(result);
     }, [password])
    //  this checks wheather the password field is focused or not
    const [passFocus, setPassFocus] = useState(false)
    // this activates the passfocus when the component loads
    const passRef = useRef();
    useEffect(() => {
        passRef.current.focus();
     }, [])
    //  this REFRENCE targets the error paragraph
    const errRef = useRef();
    // State value that stores the error message
    const [errorMessage, setErrorMessage] = useState('');
    useEffect(() => {
        setErrorMessage('');
    }, [password, showModal])
    // Password regex that checks if the conditions stated in the regex has been met.
    const PWD_REGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    useEffect(() => {
        const result = PWD_REGEX.test(password)
        setValidPass(result);
        }, [password])


    const LoginCompleted = async (e) =>{
        e.preventDefault();
        setIsLoading(true)
        try {
            const res = await axios.post('http://10.0.0.229/Interns/JonLee/QuoraBlog/public/api/auth/password',{
                password : password,
                id: emailOTP?.id
            });
            dispatch({type:"LOGIN_SUCCESS", payload:res.data})
            window.location.replace("/");
        navigate('/');
        } catch (error) {
            console.log(error.response.data.message);
            setShowToast(true)
            createToast({
                msg: error.response.data.message,
                dataType: false
            })
        }finally{
            setIsLoading(false);
        }

    }


    // LOGIN FORM STARTS HERE **********************************************************

    // state values for the login form
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    const handleLogin = async (e) =>{
        e.preventDefault();

        if (loginEmail === '' || loginPassword === ''){
            setShowToast(true)
            createToast({
                msg: 'please input credentials',
                dataType: false
            })
        }else{
            try {
                const res = await axios.post('http://10.0.0.229/Interns/JonLee/QuoraBlog/public/api/auth/login',{
                    email:loginEmail,
                    password: loginPassword
                });
                console.log(res);
                dispatch({type:"LOGIN_SUCCESS", payload:res.data})
                // window.location.replace("/");
                navigate('/');
            } catch (error) {
                console.log(error.response.data.message);
                setShowToast(true)
                createToast({
                msg: error.response.data.message,
                dataType: false
            })
            }
        }
    }
    
    const ForgetPassword =(e)=>{
        e.preventDefault();
        setShowModal(!showModal) 
        setShowEmailVerification(false)
        setShowPassVerification(false)
        setShowSignup(false)
        setForgetPassword(true)
    }

  return (
    <div className="min-h-screen w-screen flex justify-center items-center" style={{backgroundImage:"url('./assets/bg-image.png')"}}>

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
                    <form onSubmit={handleLogin}>
                        <div className="mb-6">
                            <label htmlFor="email1" className="block mb-2 text-sm text-gray-600 font-bold">Email</label>
                            <input 
                            type="email"  
                            id="email1" 
                            value={loginEmail}
                            onChange={(e)=>setLoginEmail(e.target.value)}
                            placeholder="you@company.com" 
                            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none" />
                        </div>

                        <div className="mb-6">
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm text-gray-600 font-bold">Password</label>
                            </div>
                            <input 
                            type="password"  
                            id="password1" 
                            value={loginPassword}
                            onChange={(e)=>setLoginPassword(e.target.value)}
                            placeholder="Your Password" 
                            className="w-full outline-none px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none" />
                        </div>
                        <div className="mb-6 flex justify-between items-center">
                        <span onClick={ForgetPassword} className="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 cursor-pointer dark:hover:text-indigo-300">Forgot password?</span>
                            <button type="submit" className=" px-5 py-1 text-white bg-indigo-500 rounded-full focus:bg-indigo-600 focus:outline-none">Login</button>
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
        <div id="defaultModal" tabIndex="-1" aria-hidden="true" data-modal-show="true" className={`${!showModal ? 'hidden': ''} bg-slate-800 bg-opacity-90 flex justify-center items-center transition-all ease-in-out top-0 right-0 bottom-0 left-0 z-50 h-screen fixed`}>
            <div className={`relative p-4 w-full max-w-2xl h-full md:h-auto transition-all ease-in-out ${!showModal?'opacity-0 ':'opacity-100 '}`}>
            
                <div className="relative bg-white rounded-lg shadow">
                    
                    <div className="flex px-3 pt-2 space-x-2 items-center rounded-t ">
                        <button onClick={()=>setShowModal(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-xl p-1.5 inline-flex items-center " data-modal-toggle="defaultModal">
                            <svg aria-hidden="true" className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <section className={`${showSignup && !isLoading   ? 'block' : 'hidden'}`}>
                        <h2 className='px-5 mt-3 text-2xl'>Sign Up</h2>
                        <form onSubmit={NextVerification}>
                        <div className="mb-6 px-5 mt-5">
                            <label htmlFor="1name" className="block mb-2 font-medium  text-gray-900 ">Your Name</label>
                            <input 
                            type="text" 
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            id="1name" 
                            className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " 
                            placeholder='What would you like to be called?' 
                            autoComplete='off' 
                            required/>
                        </div>
                        <div className="mb-6 px-5 ">
                            <label htmlFor="1email" className="block mb-2 font-medium  text-gray-900 ">Your email</label>
                            <input 
                            type="email" 
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            id="1email" 
                            className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " 
                            placeholder="Your email" 
                            autoComplete='off' 
                            required/>
                        </div>
                    {/* Buttons */}
                   
                            <div className=" flex justify-end items-center rounded-b border-t space-x-2 py-2 px-4">
                        

                        
                
                        <button  
                        // onClick={NextVerification} 
                        type="submit" className="text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Next</button>
                            </div>
                        
                            </form>
                    </section>


                    <section className={`${showEmailVerification && !isLoading ? 'block' : 'hidden'}`}>
                        <h2 className='px-5 mt-3 text-2xl'>Confirm your email</h2>
                        <p className='px-5 mt-3 text-sm'>Please enter the code we sent to {emailOTP?.email}! {`Your OTP is ${emailOTP?.otp}`}.</p>
                        
                        <form onSubmit={ShowlastModal}>
                        <div className="mb-6 px-5 mt-5">
                            <label htmlFor="name" className="block mb-2 font-medium  text-gray-900 "></label>
                            <input 
                            type="text"
                            value={OTP}
                            onChange={(e)=>setOTP(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none  block w-full p-2.5 " 
                            placeholder='Enter OTP' autoComplete='off' 
                            required/>

                        </div>    
                        <p className='text-xs px-5 mb-10 text-gray-500 hover:underline cursor-pointer'>Didn't recieve an email or something went wrong? Resend Code</p>
                    {/* Buttons */}
                    
                   
                            <div className="flex justify-end items-center rounded-b border-t space-x-2 py-2 px-4">
                                <button data-modal-toggle="defaultModal" type="submit" className="text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Next</button>
                            </div>
                            </form>
                    </section>

                    <section className={`${isLoading ? 'block' : 'hidden'} flex justify-center items-center`}>
                       <img src="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=82a1493b26cxzncu0dda6cfx2j74jkxhq9c2ikqd2vugnog0&rid=200w.gif&ct=g" alt="" />
                    </section>


                    <section className={`${forgetPassword && !isLoading  ? 'block' : 'hidden'}`}>
                        <h2 className='px-5 mt-3 text-2xl'>Find Your Account</h2>
                        <p className='px-5 mt-3 text-sm'>Please enter your email to reset your password</p>
                        <form>
                        <div className="mb-6 px-5 mt-5">
                            <label htmlFor="email" className="block mb-2 font-medium  text-gray-900 "></label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 " placeholder='Your email' autoComplete='off' required/>

                        </div>    
                        <div className="h-32"></div>
                    {/* Buttons */}
                   
                            <div className="flex justify-end items-center rounded-b border-t space-x-2 py-2 px-4">
                                <button  data-modal-toggle="defaultModal" type="button" className="text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Submit</button>
                            </div>
                        
                            </form>
                    </section>

                    <section className={`${showPassVerification && !isLoading  ? 'block' : 'hidden'}`}>
                        <h2 className='px-5 mt-3 text-2xl'>Sign Up</h2>
                        <form onSubmit={LoginCompleted}>
                        <div className="mb-8  mt-5">
                            <label htmlFor="password" className=" mb-2 font-medium  text-gray-900 flex justify-between px-5"> 
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
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5" autoComplete='off' required/>
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
                   
                            <div className="flex justify-end items-center rounded-b border-t space-x-2 py-2 px-4">
                                <button 
                                data-modal-toggle="defaultModal" 
                                type="submit" 
                                className="text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Finish</button>
                            </div>
                        
                            </form>
                    </section>

                </div>
            </div>
        </div>
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

export default Login