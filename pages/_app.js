import { createWrapper } from 'next-redux-wrapper';
import React, { useEffect, useState } from "react";
import { Provider, useDispatch } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import getLocalStoreData from '../Hooks/GetLocalStoreData';
import { add_token } from '../Redux/actions/auth';
import store from "../Redux/store";
import '../styles/globals.css';

const MyApp = ({ Component, pageProps}) => {
  const [token,setToken] =useState(getLocalStoreData())
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(add_token(token))
  },[dispatch, token])
  
    return(
      <Provider store={store} >
        <Component {...pageProps} /> 
      </Provider>
    )
  
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);