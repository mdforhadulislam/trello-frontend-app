import React, { useState } from "react";
import { postRequestSend } from "../../Api/RequestMethod";
import { LOGIN_URL } from "../../Api/Urls";
import Layout from "../../Components/Layout";
import Button from "../../Components/utils/Button";
import InputBox from "../../Components/utils/InputBox";

const Login = () => {

  const [loginData,setLoginData]= useState({
    email:"",
    password:"",
  })

  const changeHendler =(e)=>{
    setLoginData({
     ...loginData,
      [e.target.name]: e.target.value,
    })
  }

  const submitHendler = (e)=>{
    e.preventDefault()
    postRequestSend(LOGIN_URL,{},loginData).then(respons=>{
      console.log(respons);
    })
  }


  return (
    
    <Layout title={"Login Account"}>
      <div className="container mx-auto p-4 pb-2 bg-white">
        <div className="w-full md:w-1/2 lg:w-1/3 mx-auto my-8">
          <h1 className="text-2xl font-bold text-left pb-1">Login Account</h1>

          <form className="flex flex-col mt-1">
            <InputBox
              title={""}
              name={"email"}
              placeholder={"Email"}
              type={"email"}
              action={changeHendler}
              value={loginData.email}
            />

            <InputBox
              title={""}
              name={"password"}
              placeholder={"Password"}
              type={"password"}
              action={changeHendler}
              value={loginData.password}
              styles={{ fontWeight: "900", letterSpacing: "3px" }}
            />

            <Button title={"Sing In"} action={submitHendler} />

            <div className="flex flex-col items-center mt-5">
              <p className="mt-1 text-xs font-light text-gray-500">
                Sing In already?
                <a
                  href="/auth/singup"
                  className="ml-1 font-medium text-blue-400"
                >
                  Sign Up now
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
