export const SET_USER = 'SET_USER';
export const SIGN_OUT = 'SIGN_OUT';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const NEED_VERIFICATION = 'SET_VERIFICATION';
export const SET_SUCCES = 'SET_SUCCES';

export interface User {
    id: string;
    userName: string;
    account: string;
    password: string;
    phone: number;
    email: string;
    role: string;

}

export interface AuthState {
    user: User | null;
    loading: boolean;
    error: string ;
    needVerification: boolean;
    authenticated: boolean;
    success: string;
}

export interface SignInData {
    account: string;
    password: string;
}

interface SetUserAction {
    type: typeof SET_USER;
    payload: User;
}

interface SetLoadingAction {
    type: typeof SET_LOADING;
    payload: boolean;
}

interface SignOutAction {
    type: typeof SIGN_OUT;
}

interface SetErrorAction {
    type: typeof SET_ERROR;
    payload: string;
}

interface NeedVerificationAction {
    type: typeof NEED_VERIFICATION;
}

interface SetSuccessAction{
    type: typeof SET_SUCCES;
    payload: string;
}
export type AuthAction = SetUserAction | SetLoadingAction | SignOutAction | SetErrorAction | NeedVerificationAction | SetSuccessAction;