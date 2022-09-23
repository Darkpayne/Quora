import {useState, useEffect} from 'react';
 

const useAxios = () => {
    const [response, setResponse] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)


    const axiosFetch = async (configObj)=>{
        const {
            axiosInstance,
            method,
            url,
            requestConfig = {}
        } = configObj

        try {
            setIsLoading(true)
            const res = await axiosInstance[method.toLowerCase()](url, {
                ...requestConfig,
            });
            console.log(res);
            setResponse(res)
        } catch (error) {
            console.log(error.message);
            setError(error.message);
        }finally{
            setIsLoading(false);
        }
    }

  return {response,isLoading, error, axiosFetch}
}

export default useAxios