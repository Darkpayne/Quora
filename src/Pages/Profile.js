import { useContext } from 'react'
import Navbar from '../Components/Navbar'
import MainProfile from '../Section/MainProfile'
import ProfileOptions from '../Section/ProfileOptions'
import useAxiosGet from '../Hooks/useAxiosGet'
import AuthContext from '../ContextApi/AuthContext'


const Profile = () => {
  const {user} = useContext(AuthContext)
  console.log(user);
  const {isLoading, response} = useAxiosGet('/api/auth/get-user');
  const getEmployment = useAxiosGet(`api/credential/employment/${user?.user?.id}`);
  return (
    <>
        <Navbar/>
        <body className=''>
          <section className='flex bodySize mx-auto gap-x-5 py-8 px-5'>
            
            <article className='basis-7/12'><MainProfile isLoading={isLoading} response={response}/></article>
            <article className='basis-1/12'></article>
            <article className='basis-4/12'><ProfileOptions getEmployment={getEmployment} isLoading={isLoading} response={response}/></article>
            
          </section>
        </body>
    </>
  )
}

export default Profile