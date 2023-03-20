import { combineReducers, applyMiddleware } from 'redux';
import authReducer from './reduces/authReducer';
import thunkMiddleware from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
const rootReducer = combineReducers ({
    account: authReducer

})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunkMiddleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;