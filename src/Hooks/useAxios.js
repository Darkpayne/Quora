import {useState, useEffect} from 'react';
import useToastify from './useToastify'
 

const useAxios = () => {
    const {createToast}=useToastify();

    const [isLoading, setIsLoading] = useState(false)
    const [showToast, setShowToast] = useState(false)
    const [response, setResponse] = useState(null)
    const [fetchedData, setFetchData] = useState(false)
    
    
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
            setResponse(res)
            setFetchData(true);
            console.log(res);
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


  return {response,isLoading, axiosFetch,showToast,fetchedData}
}

export default useAxios