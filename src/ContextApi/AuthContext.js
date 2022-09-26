import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

// A function that checks the value of the item stored in the local storage and returns it
function getLocalStorageItem(item){
    var dataStored = localStorage.getItem(item)
    if (dataStored !== undefined || null || ''){ 
        return JSON.parse(dataStored)
    }else{return null}
}

// the initial state of the STATE!
const INITIAL_STATE = {
    user: getLocalStorageItem('quorauser'),
    emailOTP: getLocalStorageItem('emailOTP')
}

// AuthContext is used to call out the values in the authcontext.provider
const AuthContext = createContext(INITIAL_STATE)


// authProvider is wrapped around the index.js to serve the VALUES to every Component
export const AuthProvider = ({children}) => {

    // this is useReducer function dynamically changes the INITIAL STATE!
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE)

    // this function is to always update the user on the local storage after every change.
    useEffect(() => {
        localStorage.setItem("quorauser", JSON.stringify(state.user))
      }, [state.user])
    useEffect(() => {
        localStorage.setItem("emailOTP", JSON.stringify(state.emailOTP))
      }, [state.emailOTP])

  return (
    <AuthContext.Provider value={{
        user:state.user,
        emailOTP:state.emailOTP,
        dispatch
        }}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;
