import {useState} from 'react';
import useToastify from './useToastify'
 

const useAxios = ({url}) => {
    const {createToast}=useToastify();

    const [isLoading, setIsLoading] = useState(false)
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
            setResponse(res.data)
            console.log(res.data);
        } catch (error) {
            console.log(error.response.data.message);
            createToast({
                msg: error.response.data.message,
                dataType: false
            })
        }finally{
            setIsLoading(false);
        }
    }


  return {response,isLoading, axiosFetch,fetchedData}
}

export default useAxios