import { createWrapper } from "next-redux-wrapper";
import React, { useCallback, useState } from "react";
import { Provider, useDispatch } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import GetLocalStoreData from "../Hooks/GetLocalStoreData";
import { add_token } from "../Redux/actions/auth";
import store from "../Redux/store";
import '../styles/globals.css';

const MyApp = ({ Component, pageProps}) => {

  const [tokens,setTokens]=useState(GetLocalStoreData())
  const dispatch = useDispatch()

  useCallback(()=>{
    setTokens(GetLocalStoreData())
    dispatch(add_token(tokens))
  },[tokens])

  return(
    <Provider store={store}>
      <Component {...pageProps} /> 
    </Provider>
  )
}


const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);