import { useContext } from 'react'
import Navbar from '../Components/Navbar'
import useAxiosGet from '../Hooks/useAxiosGet'
import AuthContext from '../ContextApi/AuthContext'
import AnotherUserMainProfile from '../Section/AnotherUserMainProfile'
import AnotherUserProfileOptions from '../Section/AnotherUserProfileOptions'
import { useParams } from 'react-router'

const AnotherUserProfile = () => {
    const { id:userId } = useParams();
    const { response:Followers , fetchData:fetchFollower } = useAxiosGet(`/api/user/allfollowers/${userId}`);

    // const {user} = useContext(AuthContext)
    const { response:ValidPost } = useAxiosGet(`/api/user/allposts/${userId}`);
    const {isLoading, response } = useAxiosGet(`/api/user/userProfile/${userId}`);
    const getEmployment = useAxiosGet(`api/credential/employment/${userId}`);
    const getEducation = useAxiosGet(`api/credential/education/${userId}`);
    const getLocation = useAxiosGet(`api/credential/location/${userId}`);

    return (
      <>
          <Navbar/>
          <body className=''>
            <section className='flex bodySize mx-auto gap-x-5 py-8 px-5'>
              <article className='basis-7/12'><AnotherUserMainProfile fetchFollower={fetchFollower} Followers={Followers} ValidPost={ValidPost} isLoading={isLoading} response={response}/></article>
              <article className='basis-1/12'></article>
              <article className='basis-4/12'><AnotherUserProfileOptions getEmployment={getEmployment} isLoading={isLoading} response={response} getEducation={getEducation} getLocation={getLocation}/></article>
              
            </section>
          </body>
      </>
    )
}

export default AnotherUserProfile