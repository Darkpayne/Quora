import React, { useCallback, useContext, useState } from 'react'
import Error from '../Components/Error'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import axios from 'axios'
import AuthContext from '../ContextApi/AuthContext'
import useToastify from '../Hooks/useToastify'
import { ToastContainer } from 'react-toastify';

const ProfileOptions = ({isLoading, response, getEmployment,getEducation,getLocation}) => {
    console.log(getEmployment?.response?.data);
    console.log(getEducation?.response?.data);
    console.log(getLocation?.response?.data);
    console.log(response);
    const {user} = useContext(AuthContext);
    console.log(user);


    const [showToast, setShowToast] = useState(false)
    const {createToast}=useToastify();

    const [showModal, setShowModal] = useState(false);
    const [showEducational, setShowEducational] = useState(false);
    const [showLocation, setShowLocation] = useState(false);
    const [addTopics, setAddTopics] = useState(false);
    const [editCredentials, setEditCredentials] = useState(false)

    // INSIDE MODALS OF GENERAL CREDENTIAL UPDATE
    const [generalCredential, setGeneralCredential] = useState(true)
    const [showCredential, setShowCredential] = useState(false)
    const [showWorkCredential, setShowWorkCredential] = useState(false)
    const [showEducationCredential, setShowEducationCredential] = useState(false)
    const [showLocationCredential, setShowLocationCredential] = useState(false)

    // logic for the update FIRST credential
    const firstCredential = () =>{
        setGeneralCredential(false);
        setShowCredential(true);
        setShowWorkCredential(false)
        setShowEducationCredential(false)
        setShowLocationCredential(false)
    }

    const backHome =() =>{
        setEditCredentials(true) 
        setGeneralCredential(true) 
        setShowCredential(false);
        setShowWorkCredential(false)
        setShowEducationCredential(false)
        setShowLocationCredential(false)
    }

    const secondCredential = () =>{
        setGeneralCredential(false);
        setShowCredential(false);
        setShowWorkCredential(true)
        setShowEducationCredential(false)
        setShowLocationCredential(false)
    }

    const thirdCredential = () =>{
        setGeneralCredential(false);
        setShowCredential(false);
        setShowWorkCredential(false)
        setShowEducationCredential(true)
        setShowLocationCredential(false)
    }

    
    const fouthCredential = () =>{
        setGeneralCredential(false);
        setShowCredential(false);
        setShowWorkCredential(false)
        setShowEducationCredential(false)
        setShowLocationCredential(true)
    }

    const [finalModal, setfinalModal] = useState(false)

    const finalModalButton = (id) =>{
        setfinalModal(true);
    }


    const date =new Date(response?.created_at);

    // checkbox to see if he still works there
    const [stillWorkingThere, setStillWorkingThere] = useState(false);

    // This logic is to get the years option to the Select Input fields
    let maxOffset = 50;
    let thisYear = (new Date()).getFullYear();
    let allYears = [];
    for(let x = 0; x <= maxOffset; x++) {
        allYears.push(thisYear - x)
    }

    // the Submit to the Update Employment Credentials  *******************************************************************************************************
    const [position, setPosition] = useState('')
    const [company, setCompany] = useState('')
    const [startYear, setStartYear] = useState(0)
    const [endYear, setEndYear] = useState(0)

    const handleEmploymentUpdate = async (e) =>{
        e.preventDefault();
       
            try {
                const res = await axios.post('http://10.0.0.229/Interns/JonLee/QuoraBlog/public/api/credential/employment', {
                    position,
                    company,
                    start_year: startYear,
                    end_year: stillWorkingThere ? 2023 : endYear
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

    // SUBMITING THE FORM OF EDUCATION CREDENTIALS *******************************************************************************************************
    const educationCredentialsForm = {
        school: "",
        primary_major: "",
        secondary_major: "",
        degree_type: "",
        graduation_year: 0
    }

    const [educationCredentials, setEducationCredentials] = useState(educationCredentialsForm)

    const updateEducationCredentials = useCallback(
        (type) => (event) => {
            setEducationCredentials({ ...educationCredentials, [type]: event.target.value });
        },
        [educationCredentials]
      );

      const handleEducationCredentials = async (e)=>{
        e.preventDefault();
       
        try {
            const res = await axios.post(`http://10.0.0.229/Interns/JonLee/QuoraBlog/public/api/credential/education`, {
                school: educationCredentials.school,
                primary_major: educationCredentials.primary_major,
                secondary_major: educationCredentials.secondary_major,
                degree_type: educationCredentials.degree_type,
                graduation_year: educationCredentials.graduation_year
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


    //   Set LOCATION CREDENTIAL *******************************************************************************************************
    const [stillLivingThere, setStillLivingThere] = useState(true)

    const locationCredentialsForm = {
        location: "",
        start_year: 0,
        end_year: 0
    }

    const [locationCredentials, setLocationCredentials] = useState(locationCredentialsForm)

    const updateLocationCredentials = useCallback(
        (type) => (event) => {
            setLocationCredentials({ ...locationCredentials, [type]: event.target.value });
        },
        [locationCredentials]
      );

      const handleLivingCredentials = async (e) =>{
        e.preventDefault();
        console.log(locationCredentials);
        try {
            const res = await axios.post(`http://10.0.0.229/Interns/JonLee/QuoraBlog/public/api/credential/location`, {
                location: locationCredentials.location,
                start_year: locationCredentials.start_year,
                end_year: !stillLivingThere ? 5000 :locationCredentials.end_year
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
                
        <section className=''>
        {isLoading ?  <Skeleton count={4}/> :
            <div className="credentials">
                <div className="flex justify-between items-center  border-b py-2 ">
                    <h1 className=' font-bold text-gray-500'>Credentials & Highlights</h1>
                    <span 
                    onClick={backHome} 
                    className='hover:bg-gray-100 text-lg flex items-center justify-center h-6 w-6 font-thin p-1 text-gray-700 border-gray-400 border rounded-full cursor-pointer '><ion-icon name="pencil-outline"></ion-icon></span>
                </div>
             
                <div className="mt-3">
                    <div className="flex items-center mb-1.5">
                        <span className='mr-3 flex text-lg bg-slate-100 h-8 w-8 items-center justify-center rounded-full'><ion-icon name="briefcase-outline"></ion-icon></span>
                       {getEmployment?.response?.data 
                       ?
                        <span className='text-gray-700 font-medium'>
                            {getEmployment?.response?.data?.position} at {getEmployment?.response?.data?.company} <span className='font-light'>{getEmployment?.response?.data?.start_year} - {getEmployment?.response?.data?.end_year === 2023 ? 'present' : getEmployment?.response?.data?.end_year}</span></span>
                        :
                        <span onClick={()=>setShowModal(true)} className='text-blue-800 hover:underline cursor-pointer'>Add employment credential</span>}
                    </div>
                    
                    <div className="flex items-center mb-1.5">
                        <span className='mr-3 flex text-lg bg-slate-100 h-8 w-8 items-center justify-center rounded-full'><ion-icon name="school-outline"></ion-icon></span>
                        {getEducation?.response?.data
                        ?
                        <span className='text-gray-700 font-medium'>{getEducation?.response?.data?.degree_type} from {getEducation?.response?.data?.school} <span className='font-light'>Graduated {getEducation?.response?.data?.graduation_year}</span></span>
                        :
                        <span
                         onClick={()=>setShowEducational(true)} 
                        className='text-blue-800 hover:underline cursor-pointer'>Add eductional credential</span>
                        }
                    </div>

                    <div className="flex items-center mb-1.5">
                        <span className='mr-3 flex text-lg bg-slate-100 h-8 w-8 items-center justify-center rounded-full'><ion-icon name="location-outline"></ion-icon></span>
                        {getLocation.response?.data 
                        ?
                        <span className='text-gray-700 font-medium'>Lives in  {getLocation?.response?.data?.location} <span className='font-light'>{getLocation?.response?.data?.start_year} - {getLocation?.response?.data?.end_year === 5000 ? 'present ' : getLocation?.response?.data?.end_year}</span></span>
                        :
                        <span
                            onClick={()=>setShowLocation(true)}
                        className='text-blue-800 hover:underline cursor-pointer'>Add location credential</span>
                        }
                        </div>

                    <div className="flex items-center mb-1">
                        <span className='mr-3 flex text-lg bg-slate-100 h-8 w-8 items-center justify-center rounded-full'><ion-icon name="calendar-clear-outline"></ion-icon></span>
                        <span className=''>{date.toDateString()}</span>
                    </div>

                </div>
            </div>
        }
            <section className='mt-8'>
         {isLoading ?  <Skeleton count={4}/> :
            <div className="flex justify-between items-center  border-b py-2 ">
                    <h1 className=' font-bold text-gray-500'>Knows about</h1>
                    <span className='bg-gray-100 text-xl px-1 text-gray-700 border-gray-400 border rounded-full'><ion-icon name="color-wand-outline"></ion-icon></span>
                </div>
        }
            </section>
            <section className="mt-10">
         {isLoading ?  <Skeleton count={4}/> :
            <div >
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
            }   
            </section>
        </section>



{/* overflow-scroll to scroll the modals */}

        {/* MODAL EMPLYMENT*/}
<div id="defaultModal" tabIndex="-1" aria-hidden="true" data-modal-show="true" className={`${!showModal ? 'hidden': ''} bg-slate-800 bg-opacity-90 flex justify-center items-center transition-all ease-in-out top-0 right-0 bottom-0 left-0 z-50 h-screen fixed`}>
    <div className={`relative p-4 w-full max-w-xl h-full md:h-auto transition-all ease-in-out ${!showModal?'opacity-0 ':'opacity-100 '}`}>
       
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
                
                <form onSubmit={handleEmploymentUpdate}>
                    <div className="border-x border-b mx-5 mb-5">
                            <div className="mb-6 px-5 pt-3">
                                <label htmlFor="name" className="block mb-2 font-medium  text-gray-900 ">Position</label>
                                <input 
                                type="text" 
                                id="name" 
                                value={position}
                                onChange={e=>setPosition(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 " 
                                placeholder='Accountant' 
                                autoComplete='off' 
                                required/>
                            </div>
                            <div className="mb-6 px-5 ">
                                <label htmlFor="company" className="block mb-2 font-medium  text-gray-900 ">Company/Organization</label>
                                <input 
                                type="text" 
                                id="company"
                                value={company}
                                onChange={e=>setCompany(e.target.value)} 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 " 
                                placeholder="Type to search" 
                                autoComplete='off' 
                                required/>
                            </div>
                            <div className="mb-6 px-5 mt-5">
                                <label htmlFor="name" className="block mb-2 font-medium  text-gray-900 ">Start Year</label>
                                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 " required   onChange={e=>setStartYear(e.target.value)} >
                                    {
                                        allYears.map((x,ind)=>(
                                            <option key={ind}>{x}</option>
                                        ))
                                    }
                                    
                                </select>
                            </div>
                    { !stillWorkingThere &&
                        <div className="mb-6 px-5 mt-5">
                                <label htmlFor="name" className="block mb-2 font-medium  text-gray-900 ">End Year</label>
                                <select 
                                id="countries" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 "
                                 onChange={e=>setEndYear(e.target.value)} >
                                    <option selected></option>
                                    {
                                        allYears.map((x,ind)=>(
                                            <option key={ind}>{x}</option>
                                        ))
                                    }
                                    </select>
                            </div>
                    }
                            <div className="flex items-center mb-4 px-5 mt-5">
                                <input 
                                id="default-checkbox" 
                                type="checkbox" 
                                onClick={()=>setStillWorkingThere(!stillWorkingThere)} 
                                className="w-5 h-5 text-blue-600"/>
                                <label 
                                htmlFor="default-checkbox" 
                                className="ml-2 text-sm font-medium text-gray-900"
                                >I currently work here</label>
                            </div>
                    </div>
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


        {/* MODAL ADD TOPICS*/}
<div id="defaultModal" tabIndex="-1" aria-hidden="true" data-modal-show="true" className={`${!addTopics ? 'hidden': ''} bg-slate-800 bg-opacity-90 flex justify-center items-center transition-all ease-in-out top-0 right-0 bottom-0 left-0 z-50 h-screen fixed`}>
    <div className={`relative p-4 w-full max-w-xl h-full md:h-auto transition-all ease-in-out ${!addTopics?'opacity-0 ':'opacity-100 '}`}>
       
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
                                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 " placeholder='Add Topic' autoComplete='off' required/>
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
                
                <form onSubmit={handleLivingCredentials}>
                    <div className="border-x border-b mx-5 mb-5">
                            <div className="mb-6 px-5 pt-3">
                                <label htmlFor="location" className="block mb-2 font-medium  text-gray-900 ">Location (required)</label>
                                <input 
                                type="text" 
                                id="location" 
                                value={locationCredentials.location}
                                onChange={updateLocationCredentials("location")}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 " placeholder='Location' autoComplete='off' 
                                required/>
                            </div>
                            
                            <div className="mb-6 px-5 mt-5">
                                <label htmlFor="start_year" className="block mb-2 font-medium  text-gray-900 ">Start Year</label>
                                <select 
                                id="start_year" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 "
                                onChange={updateLocationCredentials("start_year")}  value={locationCredentials.start_year}>
                                    <option selected></option>
                                    {
                                        allYears.map((x,ind)=>(
                                            <option className='py-2 text-lg' key={ind}>{x}</option>
                                        ))
                                    }
                                    </select>
                            </div>
                            {stillLivingThere && 
                            <div className="mb-6 px-5 mt-5">
                                <label htmlFor="name" className="block mb-2 font-medium  text-gray-900 ">End Year</label>
                                <select 
                                id="start_year" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 "
                                onChange={updateLocationCredentials("end_year")}>
                                    <option selected></option>
                                    {
                                        allYears.map((x,ind)=>(
                                            <option className='py-2 text-lg' key={ind}>{x}</option>
                                        ))
                                    }
                                    </select>
                            </div>
                            }
                            <div className="flex items-center mb-4 px-5 mt-5">
                                <input 
                                id="default-checkbox" 
                                type="checkbox" 
                                onClick={()=>setStillLivingThere(!stillLivingThere)}
                                className="w-5 h-5 text-blue-600 "/>
                                <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900">I currently live here</label>
                            </div>
                    </div>
                        {/* Buttons */}
                        <div className=" flex justify-end items-center rounded-b border-t space-x-2 py-2 px-4">
                            <button 
                             onClick={()=>setShowLocation(false)} 
                            type="button" className="  focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Cancel</button>
                            <button type="submit" className="text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Save</button>
                        </div>
                            
                </form>
            </main>
          </section>


        </div>
    </div>
</div>


        {/* MODAL EDUCATIONAL*/}
<div id="defaultModal" tabIndex="-1" aria-hidden="true" data-modal-show="true" className={`${!showEducational ? 'hidden': ''} bg-slate-800 bg-opacity-90 flex justify-center items-center transition-all ease-in-out top-0 right-0 bottom-0 left-0 z-50 h-screen fixed`}>
    <div className={`relative p-4 w-full max-w-xl h-full md:h-auto transition-all ease-in-out ${!showEducational?'opacity-0 ':'opacity-100 '}`}>
       
        <div className="relative bg-white rounded-lg shadow">
        <section className="my-3">
            <div className="sticky top-0 bg-white">
                <div className="flex px-3 space-x-2 items-center rounded-t pt-3">
                    <button onClick={()=>setShowEducational(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 inline-flex items-center" data-modal-toggle="defaultModal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                <h1 className='font-bold text-lg mx-5 '>Edit credentials</h1>
                <p className='text-gray-500 mx-5 pb-3'>Credentials add credebility to your content</p>
            </div>
            
            <article className='overflow-y-auto h-[500px]'>
                <div className="border-x border-t mx-5 border-b">
                    <div className="my-3 mx-5 flex items-center">
                        <span className='flex justify-center items-center mr-3 h-8 w-8 bg-gray-200 rounded-full'><ion-icon name="school-outline"></ion-icon></span>
                        <span>Add educational credential</span>
                    </div>
                </div>
                {/* form  */}
                <form onSubmit={handleEducationCredentials}>
                    <div className="border-x border-b mx-5 mb-5">
                            <div className="mb-6 px-5 pt-3">
                                <label htmlFor="name" className="block mb-2 font-medium  text-gray-900 ">School</label>
                                <input 
                                type="text" 
                                id="name" 
                                value={educationCredentials.school}
                                onChange={updateEducationCredentials("school")}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 " 
                                placeholder='Select a school' autoComplete='off' 
                                required/>
                            </div>
                            <div className="mb-6 px-5 ">
                                <label htmlFor="primary_major" className="block mb-2 font-medium  text-gray-900 ">Primary major</label>
                                <input 
                                type="text" 
                                id="primary_major" 
                                value={educationCredentials.primary_major}
                                onChange={updateEducationCredentials("primary_major")}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 " 
                                placeholder="Type to search" autoComplete='off'
                                required/>
                            </div>
                            <div className="mb-6 px-5 ">
                                <label htmlFor="secondary_major" className="block mb-2 font-medium  text-gray-900 ">Secondary major</label>
                                <input 
                                type="text" 
                                id="secondary_major" 
                                value={educationCredentials.secondary_major}
                                onChange={updateEducationCredentials("secondary_major")}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 "
                                placeholder="Type to search" autoComplete='off' 
                                required/>
                            </div>
                            <div className="mb-6 px-5 ">
                                <label htmlFor="company" className="block mb-2 font-medium  text-gray-900 ">Degree type</label>
                                <input 
                                type="text" 
                                id="company"
                                value={educationCredentials.degree_type}
                                onChange={updateEducationCredentials("degree_type")} 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 " 
                                placeholder="M.F.A." 
                                autoComplete='off' 
                                required/>
                            </div>
                            <div className="mb-6 px-5 mt-5">
                                <label htmlFor="graduation_year" className="block mb-2 font-medium  text-gray-900 ">Graduation Year</label>
                                <select 
                                id="graduation_year" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 "
                                value={educationCredentials.graduation_year}
                                onChange={updateEducationCredentials("graduation_year")} >
                                    <option selected></option>
                                    {
                                        allYears.map((x,ind)=>(
                                            <option key={ind}>{x}</option>
                                        ))
                                    }
                                    </select>
                            </div>
                    
                            
                    </div>
                        {/* Buttons */}
                        <div className="sticky bottom-0 bg-white flex justify-end items-center rounded-b border-t space-x-2 py-2 px-4">
                            <button
                                onClick={()=>setShowEducational(false)} 
                                type="button" className="  focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Cancel</button>
                            <button
                            type="submit" className="text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Save</button>
                        </div>
                            
                </form>
            </article>
          </section>


        </div>
    </div>
</div>

        {/* General Edit*/}
<div id="defaultModal" tabIndex="-1" aria-hidden="true" data-modal-show="true" className={`${!editCredentials ? 'hidden': ''} bg-black bg-opacity-90 flex justify-center items-center transition-all ease-in-out top-0 right-0 bottom-0 left-0 z-50 h-screen fixed`}>
    <div className={`relative p-4 w-full max-w-2xl h-full md:h-auto transition-all ease-in-out ${!editCredentials?'opacity-0 ':'opacity-100 '}`}>
       
        <div className="relative bg-white rounded-lg shadow">

        {/* HOME */}
        <section className={`${generalCredential ? 'block' : 'hidden'}`}>

        <div className="flex px-3 space-x-2 items-center rounded-t pt-3">
            <button onClick={()=>setEditCredentials(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 inline-flex items-center" data-modal-toggle="defaultModal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
            </button>
        </div>
        <div className="mx-5 mb-3 my-3">
            <h1 className='font-bold text-lg'>Edit credentials</h1>
            <p className='text-gray-500'>Credentials add credebility to your content</p>
        </div>
        <main>
        <div className="mx-5">
            <button className='text-blue-700 border border-blue-500 rounded-full px-3 py-1 flex items-center justify-center'>
                <span className='flex text-xl mr-2'><ion-icon name="add-circle-outline"></ion-icon></span> 
                    Add a credential 
                <span className='flex text-xl ml-2'><ion-icon name="chevron-down-outline"></ion-icon></span></button>
        </div>
        <div className="border-b mt-5">
            <p className='mx-5 text-xs text-gray-500 mb-2'>YOUR CREDENTIALS</p>
        </div>
        
        {
        response && 
        <div className="border-b flex items-center py-2">
            <span className='ml-5 h-7 w-7 flex justify-center items-center bg-slate-200 rounded-full mr-2 text-gray-600'><ion-icon name="person-outline"></ion-icon></span>
            <span className='mr-2  font-medium  '>
            {response?.profile_credential} .  
            </span>
            <span onClick={firstCredential} className='text-sm text-gray-500 cursor-pointer hover:underline pt-1'>Edit</span>
        </div>
        }
        {
        getEmployment?.response?.data?.position && 
        <div className="border-b flex items-center py-2">
            <span className='ml-5 h-7 w-7 flex justify-center items-center bg-slate-200 rounded-full mr-2 text-gray-600'><ion-icon name="briefcase-outline"></ion-icon></span>
            <span className='mr-2  font-medium'>
            {getEmployment?.response?.data?.position} at {getEmployment?.response?.data?.company} .  
            <span className='text-sm text-gray-500 capitalize font-normal'> {getEmployment?.response?.data?.start_year} - {getEmployment?.response?.data?.end_year === 2023 ? 'present' : getEmployment?.response?.data?.end_year} . </span>
            </span>
            <span onClick={secondCredential} className='text-sm text-gray-500 cursor-pointer hover:underline pt-1'>Edit</span>
        </div>
        }
        {
        getEducation?.response?.data && 
        <div className="border-b flex items-center py-2">
            <span className='ml-5 h-7 w-7 flex justify-center items-center bg-slate-200 rounded-full mr-2 text-gray-600'><ion-icon name="school-outline"></ion-icon></span>
            <span className='mr-2   font-medium'>
            {getEducation?.response?.data?.degree_type} from {getEducation?.response?.data?.school} . <span className='text-sm text-gray-500 capitalize font-normal'>Graduated {getEducation?.response?.data?.graduation_year} . </span>
            </span>
            <span onClick={thirdCredential} className='text-sm text-gray-500 cursor-pointer hover:underline pt-1'>Edit</span>
        </div>
        }
        {
        getLocation?.response?.data && 
        <div className="border-b flex items-center py-2">
            <span className='ml-5 h-7 w-7 flex justify-center items-center bg-slate-200 rounded-full mr-2 text-gray-600'><ion-icon name="location-outline"></ion-icon></span>
            <span className='mr-2  font-medium'>
            Lives in  {getLocation?.response?.data?.location} . <span className='text-sm text-gray-500 capitalize font-normal'>{getLocation?.response?.data?.start_year} - {getLocation?.response?.data?.end_year === 5000 ? 'present ' : getLocation?.response?.data?.end_year} . </span>
            </span>
            <span onClick={fouthCredential} className='text-sm text-gray-500 cursor-pointer hover:underline pt-1'>Edit</span>
        </div>
        }
        
        <div className="h-7"></div>
        </main>
        </section>

        {/* EDIT CREDENTIAL */}
        <section className={`${showCredential ? 'block' : 'hidden'} `}>
            <div className="flex px-3 space-x-2 items-center rounded-t pt-3">
                <button 
                onClick={backHome} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-xl p-1.5 inline-flex items-center" data-modal-toggle="defaultModal">
                <ion-icon name="chevron-back-outline"></ion-icon>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="mx-5 my-3">
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
                        <span onClick={finalModalButton} className='cursor-pointer py-1 bg-gray-100 px-3 rounded-full text-gray-700 border border-gray-600 font-medium'>Delete</span>
                    </div>
                </div>
                {/* form  */}
                
                <form >
                    <div className="border-x border-b mx-5 mb-5">
                            <div className="mb-6 px-5 pt-3">
                                <input 
                                type="text" 
                                id="name"
                                defaultValue={response?.profile_credential} 
                                // onChange={(e)=>setprofileCredential(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " autoComplete='off' required/>
                            </div>
                    </div>
                    <div className="h-24"></div>
                        {/* Buttons */}
                        <div className=" flex justify-end items-center rounded-b border-t space-x-2 py-2 px-4">
                            <button
                                onClick={backHome}
                            type="button" className="  focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Cancel</button>
                            <button type="submit" className="text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Save</button>
                        </div>
                            
                </form>
            </main>
        </section>

        {/* EDIT WORK CREDENTIAL */}
        <section className={`${showWorkCredential ? 'block' : 'hidden'} `}>
            <div className="flex px-3 space-x-2 items-center rounded-t pt-3">
                <button 
                onClick={backHome} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-xl p-1.5 inline-flex items-center" data-modal-toggle="defaultModal">
                <ion-icon name="chevron-back-outline"></ion-icon>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="mx-5 my-3">
                <h1 className='font-bold text-lg'>Edit credentials</h1>
                <p className='text-gray-500'>Credentials add credebility to your content</p>
            </div>

            <main className=''>
                <div className="border-x border-t mx-5 border-b">
                <div className="flex justify-between items-center ">
                    <div className="my-3 mx-5 flex items-center">
                        <span className='flex justify-center items-center mr-3 h-8 w-8 bg-gray-200 rounded-full'><ion-icon name="person"></ion-icon></span>
                        <span>Add Profile credential</span>
                    </div>
                    <div className="text-xs space-x-3 mx-3">
                        <button className='py-1 bg-gray-200 px-3 rounded-full text-gray-400 font-medium'>Default</button>
                        <span  onClick={finalModalButton}  className='py-1 bg-gray-100 px-3 rounded-full text-gray-700 border border-gray-600 font-medium'>Delete</span>
                    </div>
                </div>
                </div>
                {/* form  */}
                
                <form>
                    <div className="border-x border-b mx-5 mb-5">
                            <div className="mb-6 px-5 pt-3">
                                <label htmlFor="name" className="block mb-2 font-medium  text-gray-900 ">Position</label>
                                <input 
                                type="text" 
                                id="name" 
                                value={getEmployment?.response?.data?.position}
                                // onChange={e=>setPosition(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 " 
                                placeholder='Accountant' 
                                autoComplete='off' 
                                required/>
                            </div>
                            <div className="mb-6 px-5 ">
                                <label htmlFor="company" className="block mb-2 font-medium  text-gray-900 ">Company/Organization</label>
                                <input 
                                type="text" 
                                id="company"
                                value={getEmployment?.response?.data?.company}
                                // onChange={e=>setCompany(e.target.value)} 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 " 
                                placeholder="Type to search" 
                                autoComplete='off' 
                                required/>
                            </div>
                            <div className="mb-6 px-5 mt-5">
                                <label htmlFor="name" className="block mb-2 font-medium  text-gray-900 ">Start Year</label>
                                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 " required  value={getEmployment?.response?.data?.start_year} onChange={e=>setStartYear(e.target.value)} >
                                    {
                                        allYears.map((x,ind)=>(
                                            <option key={ind}>{x}</option>
                                        ))
                                    }
                                    
                                </select>
                            </div>
                    { getEmployment?.response?.data?.end_year === 2023 ||
                        <div className="mb-6 px-5 mt-5">
                                <label htmlFor="name" className="block mb-2 font-medium  text-gray-900 ">End Year</label>
                                <select 
                                id="countries" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 "
                                 onChange={e=>setEndYear(e.target.value)} >
                                    <option selected></option>
                                    {
                                        allYears.map((x,ind)=>(
                                            <option key={ind}>{x}</option>
                                        ))
                                    }
                                    </select>
                            </div>
                    }
                            <div className="flex items-center mb-4 px-5 mt-5">
                                <input 
                                id="default-checkbox" 
                                type="checkbox" 
                                // onClick={()=>setStillWorkingThere(!stillWorkingThere)} 
                                // defaultChecked={getEmployment?.response?.data?.end_year === 2023}
                                checked={getEmployment?.response?.data?.end_year === 2023}
                                className="w-5 h-5 text-blue-600"/>
                                <label 
                                htmlFor="default-checkbox" 
                                className="ml-2 text-sm font-medium text-gray-900"
                                >I currently work here</label>
                            </div>
                    </div>
                        {/* Buttons */}
                        <div className=" flex justify-end items-center rounded-b border-t space-x-2 py-2 px-4">
                            <button
                             onClick={backHome} 
                            type="button" className="  focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Cancel</button>
                            <button type="submit" className="text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Save</button>
                        </div>
                            
                </form>
            </main>
        </section>

        {/* EDIT EDUCATION CREDENTIAL */}
        <section className={`${showEducationCredential ? 'block' : 'hidden'} `}>
            <div className="flex px-3 space-x-2 items-center rounded-t pt-3">
                <button 
                onClick={backHome} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-xl p-1.5 inline-flex items-center" data-modal-toggle="defaultModal">
                <ion-icon name="chevron-back-outline"></ion-icon>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="mx-5 mb-3">
                <h1 className='font-bold text-lg'>Edit credentials</h1>
                <p className='text-gray-500'>Credentials add credebility to your content</p>
            </div>

            <article className='overflow-y-auto h-[500px]'>
                <div className="border-x border-t mx-5 border-b">
                <div className="flex justify-between items-center ">
                    <div className="my-3 mx-5 flex items-center">
                        <span className='flex justify-center items-center mr-3 h-8 w-8 bg-gray-200 rounded-full'><ion-icon name="school"></ion-icon></span>
                        <span>Add Educational credential</span>
                    </div>
                    <div className="text-xs space-x-3 mx-3">
                        <button className='py-1 bg-gray-200 px-3 rounded-full text-gray-400 font-medium'>Default</button>
                        <span  onClick={finalModalButton}  className='py-1 bg-gray-100 px-3 rounded-full text-gray-700 border border-gray-600 font-medium'>Delete</span>
                    </div>
                </div>
                </div>
                {/* form  */}
                <form onSubmit={handleEducationCredentials}>
                    <div className="border-x border-b mx-5 mb-5">
                            <div className="mb-6 px-5 pt-3">
                                <label htmlFor="name" className="block mb-2 font-medium  text-gray-900 ">School</label>
                                <input 
                                type="text" 
                                id="name" 
                                value={getEducation?.response?.data?.school}
                                // onChange={updateEducationCredentials("school")}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 " 
                                placeholder='Select a school' autoComplete='off' 
                                required/>
                            </div>
                            <div className="mb-6 px-5 ">
                                <label htmlFor="primary_major" className="block mb-2 font-medium  text-gray-900 ">Primary major</label>
                                <input 
                                type="text" 
                                id="primary_major" 
                                value={getEducation?.response?.data?.primary_major}
                                onChange={updateEducationCredentials("primary_major")}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 " 
                                placeholder="Type to search" autoComplete='off'
                                required/>
                            </div>
                            <div className="mb-6 px-5 ">
                                <label htmlFor="secondary_major" className="block mb-2 font-medium  text-gray-900 ">Secondary major</label>
                                <input 
                                type="text" 
                                id="secondary_major" 
                                value={getEducation?.response?.data?.secondary_major}
                                onChange={updateEducationCredentials("secondary_major")}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 "
                                placeholder="Type to search" autoComplete='off' 
                                required/>
                            </div>
                            <div className="mb-6 px-5 ">
                                <label htmlFor="company" className="block mb-2 font-medium  text-gray-900 ">Degree type</label>
                                <input 
                                type="text" 
                                id="company"
                                value={getEducation?.response?.data?.degree_type}
                                onChange={updateEducationCredentials("degree_type")} 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 " 
                                placeholder="M.F.A." 
                                autoComplete='off' 
                                required/>
                            </div>
                            <div className="mb-6 px-5 mt-5">
                                <label htmlFor="graduation_year" className="block mb-2 font-medium  text-gray-900 ">Graduation Year</label>
                                <select 
                                id="graduation_year" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 "
                                value={getEducation?.response?.data?.graduation_year}
                                onChange={updateEducationCredentials("graduation_year")} >
                                    <option selected></option>
                                    {
                                        allYears.map((x,ind)=>(
                                            <option key={ind}>{x}</option>
                                        ))
                                    }
                                    </select>
                            </div>
                    
                            
                    </div>
                        {/* Buttons */}
                        <div className="sticky bottom-0 bg-white flex justify-end items-center rounded-b border-t space-x-2 py-2 px-4">
                            <button
                                onClick={backHome} 
                                type="button" className="  focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Cancel</button>
                            <button
                            type="submit" className="text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Save</button>
                        </div>
                            
                </form>
            </article>
        </section>

        {/* EDIT LOCATION CREDENTIAL */}
        <section className={`${showLocationCredential ? 'block' : 'hidden'} `}>
            <div className="flex px-3 space-x-2 items-center rounded-t pt-3">
                <button 
                onClick={backHome} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-xl p-1.5 inline-flex items-center" data-modal-toggle="defaultModal">
                <ion-icon name="chevron-back-outline"></ion-icon>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="mx-5 mb-3">
                <h1 className='font-bold text-lg'>Edit credentials</h1>
                <p className='text-gray-500'>Credentials add credebility to your content</p>
            </div>

            <main className=''>
                <div className="border-x border-t mx-5 border-b">
                <div className="flex justify-between items-center ">
                    <div className="my-3 mx-5 flex items-center">
                        <span className='flex justify-center items-center mr-3 h-8 w-8 bg-gray-200 rounded-full'><ion-icon name="location"></ion-icon></span>
                        <span>Add Location credential</span>
                    </div>
                    <div className="text-xs space-x-3 mx-3">
                        <button className='py-1 bg-gray-200 px-3 rounded-full text-gray-400 font-medium'>Default</button>
                        <span  onClick={finalModalButton}  className='py-1 bg-gray-100 px-3 rounded-full text-gray-700 border border-gray-600 font-medium'>Delete</span>
                    </div>
                </div>
                </div>
                {/* form  */}
                
                <form onSubmit={handleLivingCredentials}>
                    <div className="border-x border-b mx-5 mb-5">
                            <div className="mb-6 px-5 pt-3">
                                <label htmlFor="location" className="block mb-2 font-medium  text-gray-900 ">Location (required)</label>
                                <input 
                                type="text" 
                                id="location" 
                                value={getLocation?.response?.data.location}
                                onChange={updateLocationCredentials("location")}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 " placeholder='Location' autoComplete='off' 
                                required/>
                            </div>
                            
                            <div className="mb-6 px-5 mt-5">
                                <label htmlFor="start_year" className="block mb-2 font-medium  text-gray-900 ">Start Year</label>
                                <select 
                                id="start_year" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 "
                                onChange={updateLocationCredentials("start_year")}  value={getLocation?.response?.data.start_year}>
                                    <option selected></option>
                                    {
                                        allYears.map((x,ind)=>(
                                            <option className='py-2 text-lg' key={ind}>{x}</option>
                                        ))
                                    }
                                    </select>
                            </div>
                            {!getLocation?.response?.data?.end_year === 5000 && 
                            <div className="mb-6 px-5 mt-5">
                                <label htmlFor="name" className="block mb-2 font-medium  text-gray-900 ">End Year</label>
                                <select 
                                id="start_year" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 "
                                onChange={updateLocationCredentials("end_year")}>
                                    <option selected></option>
                                    {
                                        allYears.map((x,ind)=>(
                                            <option className='py-2 text-lg' key={ind}>{x}</option>
                                        ))
                                    }
                                    </select>
                            </div>
                            }
                            <div className="flex items-center mb-4 px-5 mt-5">
                                <input 
                                id="default-checkbox" 
                                type="checkbox" 
                                // onClick={()=>setStillLivingThere(!stillLivingThere)}
                                checked={getLocation?.response?.data?.end_year === 5000}
                                className="w-5 h-5 text-blue-600 "/>
                                <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900">I currently live here</label>
                            </div>
                    </div>
                        {/* Buttons */}
                        <div className=" flex justify-end items-center rounded-b border-t space-x-2 py-2 px-4">
                            <button 
                             onClick={backHome}
                            type="button" className="  focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Cancel</button>
                            <button type="submit" className="text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Save</button>
                        </div>
                            
                </form>
            </main>
        </section>

        

        </div>
    </div>
</div>

<div id="defaultModal" tabIndex="-1" aria-hidden="true" data-modal-show="true" className={`${finalModal ? 'block': 'hidden'} bg-slate-50 bg-opacity-90 flex justify-center items-center transition-all ease-in-out top-0 right-0 bottom-0 left-0 z-[55] h-screen fixed`}>
                <div className={`relative p-4 w-full max-w-xl h-full md:h-auto transition-all ease-in-out`}>
                
                    <div className="relative bg-white rounded-lg shadow">
                        {/* EDIT CREDENTIAL */}

            
            <div className="mx-5  py-5">
                <h1 className='font-bold text-lg  my-2'>Delete credential?</h1>
                <p className='text-gray-500'>Are you sure you want to delete this credential? This cannot be undone.</p>
            </div>

            <main className='shadow-xl'>
                
                        {/* Buttons */}
                        <div className=" flex justify-end items-center rounded-b space-x-2 py-2 px-4">
                            <button
                                onClick={()=>setfinalModal(false)}
                            type="button" className="  focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Cancel</button>
                            <button type="submit" className="text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Ok</button>
                        </div>
            </main>
 
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
    </>
  )
}

export default ProfileOptions