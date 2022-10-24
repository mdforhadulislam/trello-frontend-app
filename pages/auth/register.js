import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { postRequestSend } from "../../Api/RequestMethod";
import { REGISTER_URL } from "../../Api/Urls";
import Layout from "../../Components/Layout";
import Button from "../../Components/utils/Button";
import InputBox from "../../Components/utils/InputBox";
import { run_spinner, stop_spinner } from "../../Redux/actions/spinner";

const Register = () => {
  const [registationData,setRegistationData]= useState({
    username:"",
    name:"",
    email:"",
    password:"",
  })
  const token = useSelector(state=>state.auth)
  const dispatch = useDispatch()
  const router = useRouter()

  const changeHendler =(e)=>{
    setRegistationData({
     ...registationData,
      [e.target.name]: e.target.value,
    })
  }

  const submitHendler = (e)=>{
    e.preventDefault()
    dispatch(run_spinner())
    setTimeout(()=>{
      if(registationData.name ==="" || registationData.username  ===""|| registationData.email ==="" || registationData.password ===""){
        dispatch(stop_spinner())
          toast.error("Enter Your Valid Data")
      }
    },1000)
    if(registationData.name && registationData.username && registationData.email && registationData.password){
      postRequestSend(REGISTER_URL,{},registationData).then(respons=>{
        dispatch(stop_spinner())
        toast.success("Successfuly Register")
        router.push("/auth/login")
      }).catch(error=>{
        dispatch(stop_spinner())
        toast.error("Failed to Register") 
      })
    }
    
  }

  if(token.token) router.push("/dashboard")


  return (
    <Layout title={"Create Account"}>
      <div className="container mx-auto p-4 pb-2 bg-white">
        <div className="w-full md:w-1/2 lg:w-1/3 mx-auto my-8">
          <h1 className="text-2xl font-bold text-left pb-1">Create Account</h1>

          <form className="flex flex-col mt-1">
            <InputBox
              title={""}
              name={"username"}
              placeholder={"Username"}
              type={"text"}
              action={changeHendler}
              value={registationData.username}
            />

            <InputBox
              title={""}
              name={"name"}
              placeholder={"Full-name"}
              type={"text"}
              action={changeHendler}
              value={registationData.name}
            />

            <InputBox
              title={""}
              name={"email"}
              placeholder={"Email"}
              type={"email"}
              action={changeHendler}
              value={registationData.email}
            />

            <InputBox
              title={""}
              name={"password"}
              placeholder={"Password"}
              type={"password"}
              action={changeHendler}
              value={registationData.password}
              styles={{ fontWeight: "900", letterSpacing: "3px" }}
            />

            <Button title={"Register"} action={submitHendler} />

            <div className="flex flex-col items-center mt-5">
              <p className="mt-1 text-xs font-light text-gray-500">
                Register already?
                <a
                  href="/auth/singin"
                  className="ml-1 font-medium text-blue-400"
                >
                  Sign in now
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
