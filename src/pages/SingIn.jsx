import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { postRequestSend } from "../api/RequestSendMethod";
import Button from "../components/Sing in-up/Button";
import InputBox from "../components/Sing in-up/InputBox";
import localStorageSetToken from "../hooks/setLocalStore";

const SingIn = () => {
  const [fromData, setFromData] = useState({
    email: "",
    password: "",
  });
  const [login, setLogin] = useState(false);
  const token = useSelector((state) => state.auth.token);

  const inputHendler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFromData({
      ...fromData,
      [name]: value,
    });
  };

  const submitHendler = (e) => {
    e.preventDefault();
    postRequestSend(
      "https://trello-apps.herokuapp.com/api/v1/auth/login",
      {},
      fromData
    ).then((response) => {
      if (response.status === 200) {
        toast.success("Successfuly Login");
        localStorageSetToken({ token: response.data.token });
        setLogin(true);
        setFromData({
          email: "",
          password: "",
        });
      }
      if (response.status === 400) {
        toast.error(response.data.message);
      }
      if (response.status === 500) {
        toast.error(response.data.message);
      }
    });
  };

  if (login || token?.token) {
    return <Navigate replace to="/dashboard" />;
  } else {
    return (
      <div className="container mx-auto p-4 pb-2 bg-white">
        <ToastContainer />
        <div className="w-full md:w-1/2 lg:w-1/3 mx-auto my-8">
          <h1 className="text-lg font-bold text-center">Sing In</h1>

          <form className="flex flex-col mt-1">
            <InputBox
              title={""}
              name={"email"}
              placeholder={"Email"}
              type={"email"}
              action={inputHendler}
              value={fromData.email}
            />

            <InputBox
              title={""}
              name={"password"}
              placeholder={"Password"}
              type={"password"}
              action={inputHendler}
              value={fromData.password}
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
    );
  }
};

export default SingIn;
