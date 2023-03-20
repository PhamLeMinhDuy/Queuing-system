import { AuthAction, AuthState, SET_USER, SET_LOADING, SIGN_OUT, SET_ERROR,SET_SUCCES, NEED_VERIFICATION } from "../types";

const initialState: AuthState = {
    user: null,
    loading: false,
    error: '',
    needVerification: false,
    authenticated: false,
    success: '',
}

export default (state = initialState, action: AuthAction) => {
    switch (action.type) {
        case SET_USER:
            return {
              ...state,
                user: action.payload,
                authenticated: true,
            }
        
        case SET_LOADING:
            return {
              ...state,
                loading: action.payload,
            }
            
        case SET_ERROR:
            return {
             ...state,
                error: action.payload,
            }
            
        case SIGN_OUT:
            return {
              ...state,
                user: null,
                authenticated: false,
                loading: false,
            }
        case NEED_VERIFICATION:
            return {
            ...state,
                needVerification: true,
            }
        case SET_SUCCES:
            return {
                  ...state,
                    success: action.payload,
            }
            
        default:
            return state
    }
}