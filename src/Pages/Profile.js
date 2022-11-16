import { useContext } from 'react'
import Navbar from '../Components/Navbar'
import MainProfile from '../Section/MainProfile'
import ProfileOptions from '../Section/ProfileOptions'
import useAxiosGet from '../Hooks/useAxiosGet'
import AuthContext from '../ContextApi/AuthContext'


const Profile = () => {
  const {user} = useContext(AuthContext)
  console.log(user)
  const { response:ValidPost } = useAxiosGet(`/api/user/allposts/${user?.user?.id}`);
  const {isLoading, response, fetchData:fetchUser} = useAxiosGet('/api/auth/get-user');
  const getEmployment = useAxiosGet(`api/credential/employment/${user?.user?.id}`);
  const getEducation = useAxiosGet(`api/credential/education/${user?.user?.id}`);
  const getLocation = useAxiosGet(`api/credential/location/${user?.user?.id}`);

  return (
    <>
        <Navbar/>
        <body className=''>
          <section className='flex bodySize mx-auto gap-x-5 py-8 px-5'>
            <article className='basis-7/12'><MainProfile fetchUser={fetchUser} ValidPost={ValidPost} isLoading={isLoading} response={response}/></article>
            <article className='basis-1/12'></article>
            <article className='basis-4/12'><ProfileOptions getEmployment={getEmployment} isLoading={isLoading} response={response} getEducation={getEducation} getLocation={getLocation}  fetchUser={fetchUser} /></article>
            
          </section>
        </body>
    </>
  )
}

export default Profile