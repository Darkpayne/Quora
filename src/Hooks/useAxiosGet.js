import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import AuthContext from '../ContextApi/AuthContext';


const useAxiosGet = (url) => {
    axios.defaults.baseURL = "http://10.0.0.229/Interns/JonLee/QuoraBlog/public";

    const {user} = useContext(AuthContext);

    const auth = user.token;
    const [isLoading, setIsLoading] = useState(true)
    const [response, setResponse] = useState(null)
    const [error, setError] = useState("")

    const fetchData = async () => {
        try {
            const res = await axios.get(url,
                 {
                headers: {
                'Authorization': auth ? `Bearer ${auth}` : undefined,
            },
            }
            );
            setResponse(res.data)
        } catch (error) {
                console.log(error?.message);
                setError(error);               
        } finally{
            setIsLoading(false);
        }
    }
        useEffect(() => {
            setTimeout(() => {
            fetchData();
            }, 500);

        }, [url])

  return {isLoading, response, error, fetchData}
}

export default useAxiosGet