import React, { useCallback, useContext, useState } from 'react'
import Error from '../Components/Error'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import axios from 'axios'
import AuthContext from '../ContextApi/AuthContext'
import useToastify from '../Hooks/useToastify'
import { ToastContainer } from 'react-toastify';

const AnotherUserProfileOptions =({isLoading, response, getEmployment,getEducation,getLocation}) => {
    // console.log(getEmployment?.response?.data);
    // console.log(getEducation?.response?.data);
    // console.log(getLocation?.response?.data);
    // console.log(response);
    const {user} = useContext(AuthContext);
    // console.log(user);


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


    const date = new Date(response?.data?.created_at);

    // checkbox to see if he still works there
    const [stillWorkingThere, setStillWorkingThere] = useState(false);


    // SUBMITING THE FORM OF EMPLOYMENT CREDENTIALS  *******************************************************************************************************
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


    // SUBMITING THE FORM OF LOCATION CREDENTIAL *******************************************************************************************************
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

    // UPDATE THE PROFILE CREDENTIAL *******************************************************************************************************
    const updateProfileCredentialsValue = {
        name : "",
        profile_credential:""
    }

    const [updateProfileCredential, setUpdateProfileCredential] = useState(updateProfileCredentialsValue);

    const updateProfileCredentialsFunction = useCallback(
        (type) => (event) => {
            setUpdateProfileCredential({ ...updateProfileCredential, [type]: event.target.value });
        },
        [updateProfileCredential]
      );

      const handleUpdateProfileCredentials = async (e) =>{
        e.preventDefault();
        try {
            const res = await axios.post('http://10.0.0.229/Interns/JonLee/QuoraBlog/public/api/user/update-profile', {
                name: response?.name,
                profile_credential:updateProfileCredential.profile_credential
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

    // UPDATE WORK/EMPLOYMENT CREDENTIAL *******************************************************************************************************
    const [updateStillWorking, setUpdateStillWorking] = useState(getEmployment?.response?.data?.end_year == 2023)

   
    const updateEmploymentCredentialsValue = {
        position : "",
        company : "",
        start_year: 0,
        end_year: 0
    }

     const [updateEmployment, setUpdateEmployment] = useState(updateEmploymentCredentialsValue);

     const updateEmploymentFunction = useCallback((type) => (event)=>{
        setUpdateEmployment({...updateEmployment , [type]: event.target.value })
     }, [updateEmployment]);

    const handleEmploymentUpdateForm = async (e) =>{
        e.preventDefault();
        try {
            const res = await axios.post(`http://10.0.0.229/Interns/JonLee/QuoraBlog/public/api/credential/employment/${user?.user?.id}`, {
                position : updateEmployment.position || getEmployment?.response?.data?.position,
                company : updateEmployment.company || getEmployment?.response?.data?.company,
                start_year: updateEmployment.start_year || getEmployment?.response?.data?.start_year,
                end_year: updateEmployment.end_year === 0 ?  getEmployment?.response?.data?.end_year : updateEmployment.end_year,
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
            console.log(res);
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (error) {
            setShowToast(true)
            createToast({
                msg: error?.response?.data.message,
                dataType: false
            })
            console.log(error);
        }
    
    }

        // This logic is to get the years option to the Select Input fields
        let maxOffset = 50;
        let thisYear = (new Date()).getFullYear();
        let allYears = [];
        for(let x = 0; x <= maxOffset; x++) {
            allYears.push(thisYear - x)
        }
        // This logic is to get the end year option to the Select Input fields
        let maxremainingOffset = 2022 - Number(updateEmployment.start_year == 0 ? getEmployment?.response?.data?.start_year: updateEmployment.start_year);
        let thisremainingYear =  Number(updateEmployment.start_year == 0 ? getEmployment?.response?.data?.start_year: updateEmployment.start_year);
        let remainingYears = [];
        for(let x = 0; x <= maxremainingOffset; x++) {
            remainingYears.push(Number(thisremainingYear) + x)
        }

    // UPDATE EDUCATION CREDENTIAL *******************************************************************************************************
    const updateEducationCredentialsValue = {
        school: "",
        primary_major: "",
        secondary_major: "",
        degree_type: "",
        graduation_year: 0
    }

     const [updateEducation, setUpdateEducation] = useState(updateEducationCredentialsValue);

     const updateEducationFunction = useCallback((type) => (event)=>{
        setUpdateEducation({...updateEducation , [type]: event.target.value })
     }, [updateEducation]);

    const handleEducationUpdateForm = async (e) =>{
        e.preventDefault();
            try {
            const res = await axios.post(`http://10.0.0.229/Interns/JonLee/QuoraBlog/public/api/credential/education/${user?.user?.id}`, {
                school: updateEducation.school|| getEducation?.response?.data?.school,
                primary_major: updateEducation.primary_major || getEducation?.response?.data?.primary_major,
                secondary_major: updateEducation.secondary_major || getEducation?.response?.data?.secondary_major,
                degree_type: updateEducation.degree_type || getEducation?.response?.data?.degree_type,
                graduation_year: updateEducation.graduation_year === 0 ? getEducation?.response?.data?.graduation_year : updateEducation.graduation_year
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
            console.log(res);
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (error) {
            setShowToast(true)
            createToast({
                msg: error?.response?.data.message,
                dataType: false
            })
            console.log(error);
        }
    }


    // UPDATE LOCATION CREDENTIAL *******************************************************************************************************
    const [updateStillLiving, setUpdateStillLiving] = useState(Number(getLocation?.response?.data?.end_year) == 5000)

    const updateLocationCredentialsValue = {
        location: "",
        start_year: 0,
        end_year: 0
    }

     const [updateLocation, setUpdateLocation] = useState(updateLocationCredentialsValue);

     const updateLocationFunction = useCallback((type) => (event)=>{
        setUpdateLocation({...updateLocation , [type]: event.target.value })
     }, [updateLocation]);

    const handleLocationUpdateForm = async (e) =>{
        e.preventDefault();
        try {
            const res = await axios.post(`http://10.0.0.229/Interns/JonLee/QuoraBlog/public/api/credential/location/${user?.user?.id}`, {
                location: updateLocation.location || getLocation?.response?.data.location,
                start_year: updateLocation.start_year || getLocation?.response?.data.start_year,
                end_year: updateLocation.end_year == 0 ? getLocation?.response?.data.end_year : updateLocation.end_year
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

    // This logic is to get the end year option to the Select Input fields
    let maxlivingOffset = 2022 - Number(updateLocation.start_year == 0 ? getLocation?.response?.data?.start_year: updateLocation.start_year);
    let thislivingYear =  Number(updateLocation.start_year == 0 ? getLocation?.response?.data?.start_year: updateLocation.start_year);
    let livingYears = [];
    for(let x = 0; x <= maxlivingOffset; x++) {
        livingYears.push(Number(thislivingYear) + x)
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
                    {getEmployment?.response?.data 
                    &&
                    <div className="flex items-center mb-1.5">
                        <span className='mr-3 flex text-lg bg-slate-100 h-8 w-8 items-center justify-center rounded-full'><ion-icon name="briefcase-outline"></ion-icon></span>
                        <span className='text-gray-700 font-semibold text-base'>
                            {getEmployment?.response?.data?.position} at {getEmployment?.response?.data?.company} <span className='font-light'>{getEmployment?.response?.data?.start_year} - {Number(getEmployment?.response?.data?.end_year) === 2023 ? 'present' : getEmployment?.response?.data?.end_year}</span>
                        </span>
                    </div>
                    }
                    {getEducation?.response?.data
                    &&
                    <div className="flex items-center mb-1.5">
                        <span className='mr-3 flex text-lg bg-slate-100 h-8 w-8 items-center justify-center rounded-full'><ion-icon name="school-outline"></ion-icon></span>
                        <span className='text-gray-700 font-medium'>{getEducation?.response?.data?.degree_type} from {getEducation?.response?.data?.school} <span className='font-light'>Graduated {getEducation?.response?.data?.graduation_year}</span></span>
                    </div>
                    }
                    {getLocation.response?.data 
                    &&
                    <div className="flex items-center mb-1.5">
                        <span className='mr-3 flex text-lg bg-slate-100 h-8 w-8 items-center justify-center rounded-full'><ion-icon name="location-outline"></ion-icon></span>
                       
                        <span className='text-gray-700 font-medium'>Lives in  {getLocation?.response?.data?.location} <span className='font-light'>{getLocation?.response?.data?.start_year} - {getLocation?.response?.data?.end_year === 5000 ? 'present ' : getLocation?.response?.data?.end_year}</span></span>
                    </div>
                    }
                    <div className="flex items-center mb-1">
                        <span className='mr-3 flex text-lg bg-slate-100 h-8 w-8 items-center justify-center rounded-full'><ion-icon name="calendar-clear-outline"></ion-icon></span>
                        <span className=''>Joined {date.toDateString()}</span>
                    </div>

                </div>
            </div>
        }
            <section className='mt-8'>
         {isLoading ?  <Skeleton count={4}/> :
            <div className="flex justify-between items-center  border-b py-2 ">
                    <h1 className=' font-bold text-gray-500'>Knows about</h1>
                    
                </div>
        }
            </section>

            <section className="mt-5">
         {isLoading ?  <Skeleton count={4}/> :
            <div >
                {getEducation?.response?.data?.primary_major || getEducation?.response?.data?.secondary_major || getEmployment?.response?.data?.company 
                    ?
                <div className="">
                    {getEmployment?.response?.data?.company 
                    &&
                    <div className="flex items-center mb-1.5">
                        <span className='mr-3 flex items-center justify-center'>
                            <img src={`https://www.xtrafondos.com/thumbs/1_${Math.floor(Math.random() * 10)}031.jpg`} alt="" className=' h-6 w-6 rounded' />
                        </span>
                        <span className='text-gray-700 font-bold text-sm'>
                            {getEmployment?.response?.data?.company} 
                        </span>
                    </div>
                    }
                    {getEducation?.response?.data 
                    &&
                    <div className="flex items-center my-4">
                        <span className='mr-3 flex items-center justify-center'>
                            <img src={`https://www.xtrafondos.com/thumbs/1_${Math.floor(Math.random() * 10)}071.jpg`} alt="" className=' h-6 w-6 rounded' />
                        </span>
                        <span className='text-gray-700 font-bold text-sm'>
                            {getEducation?.response?.data?.school} 
                        </span>
                    </div>
                        }
                    {
                        getEducation?.response?.data?.primary_major 
                    &&
                    <div className="flex items-center my-4">
                        <span className='mr-3 flex items-center justify-center'>
                            <img src={`https://www.xtrafondos.com/thumbs/1_${Math.floor(Math.random() * 10)}081.jpg`} alt="" className=' h-6 w-6 rounded' />
                        </span>
                        <span className='text-gray-700 font-bold text-sm'>
                            {getEducation?.response?.data?.primary_major} 
                        </span>
                    </div>
                    }
                    {getEducation?.response?.data?.secondary_major &&
                    <div className="flex items-center my-4">
                        <span className='mr-3 flex items-center justify-center'>
                            <img src={`https://www.xtrafondos.com/thumbs/1_${Math.floor(Math.random() * 10)}011.jpg`} alt="" className=' h-6 w-6 rounded' />
                        </span>
                        <span className='text-gray-700 font-bold text-sm'>
                            {getEducation?.response?.data?.secondary_major} 
                        </span>
                    </div>
                    }

                </div>
                    :
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
                    }
            </div>
            }   
            </section>
            
        </section>
{/* overflow-scroll to scroll the modals */}

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
                        <h1 className='font-bold text-lg'>{response?.data?.name}'s credentials</h1>
                    </div>
                    <main>
                
                    <div className="border-b mt-5">
                    </div>
                    {
                    response && 
                    <div className="border-b flex items-center py-2">
                        <span className='ml-5 h-7 w-7 flex justify-center items-center bg-slate-200 rounded-full mr-2 text-gray-600'><ion-icon name="person-outline"></ion-icon></span>
                        <span className='mr-2  font-medium'>
                        {response?.data?.profile_credential}  
                        </span>
                    </div>
                    }
                    {
                    getEmployment?.response?.data?.position && 
                    <div className="border-b flex items-center py-2">
                        <span className='ml-5 h-7 w-7 flex justify-center items-center bg-slate-200 rounded-full mr-2 text-gray-600'><ion-icon name="briefcase-outline"></ion-icon></span>
                        <span className='mr-2  font-medium'>
                        {getEmployment?.response?.data?.position} at {getEmployment?.response?.data?.company} .  
                        <span className='text-sm text-gray-500 capitalize font-normal'> {getEmployment?.response?.data?.start_year} - {Number(getEmployment?.response?.data?.end_year) === 2023 ? 'present' : getEmployment?.response?.data?.end_year}</span>
                        </span>
                    </div>
                    }
                    {
                    getEducation?.response?.data && 
                    <div className="border-b flex items-center py-2">
                        <span className='ml-5 h-7 w-7 flex justify-center items-center bg-slate-200 rounded-full mr-2 text-gray-600'><ion-icon name="school-outline"></ion-icon></span>
                        <span className='mr-2   font-medium'>
                        {getEducation?.response?.data?.degree_type} from {getEducation?.response?.data?.school} . <span className='text-sm text-gray-500 capitalize font-normal'>Graduated {getEducation?.response?.data?.graduation_year} </span>
                        </span>
                    </div>
                    }
                    {
                    getLocation?.response?.data && 
                    <div className="border-b flex items-center py-2">
                        <span className='ml-5 h-7 w-7 flex justify-center items-center bg-slate-200 rounded-full mr-2 text-gray-600'><ion-icon name="location-outline"></ion-icon></span>
                        <span className='mr-2  font-medium'>
                        Lives in  {getLocation?.response?.data?.location} . <span className='text-sm text-gray-500 capitalize font-normal'>{getLocation?.response?.data?.start_year} - {getLocation?.response?.data?.end_year === 5000 ? 'present ' : getLocation?.response?.data?.end_year}</span>
                        </span>
                    </div>
                    }
                    
                    <div className="h-7"></div>
                    </main>
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
    </>
  )
}

export default AnotherUserProfileOptions