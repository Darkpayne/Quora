const Reducer = (state,action)=>{
    switch (action.type) {
        case 'FORM_START':
            return{ 
                ...state,
                emailOTP:action.payload,
                user: null
            }
        case 'LOGIN_SUCCESS':
            return{ 
                ...state,
                emailOTP:null,
                user:action.payload
            }
        case 'LOGOUT':
            return{ 
                ...state,
                emailOTP:null,
                user:null
            }

        default:
            break;
    }
}

export default Reducer;