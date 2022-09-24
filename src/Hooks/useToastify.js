import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useToastify = () => {

    const createToast=(toastConfigObj)=>{
        const {msg,dataType} = toastConfigObj

            dataType || toast.error(msg , {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
            

            dataType && toast.success(msg , {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });

      
    }
    
  return {createToast}
}

export default useToastify
