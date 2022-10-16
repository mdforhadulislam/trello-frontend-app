import React from "react";
import Layout from "../../Components/Layout";
import Button from "../../Components/utils/Button";
import InputBox from "../../Components/utils/InputBox";

const register = () => {
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
              action={() => {}}
              value={""}
            />

            <InputBox
              title={""}
              name={"name"}
              placeholder={"Full-name"}
              type={"text"}
              action={() => {}}
              value={""}
            />

            <InputBox
              title={""}
              name={"email"}
              placeholder={"Email"}
              type={"email"}
              action={() => {}}
              value={""}
            />

            <InputBox
              title={""}
              name={"password"}
              placeholder={"Password"}
              type={"password"}
              action={() => {}}
              value={""}
              styles={{ fontWeight: "900", letterSpacing: "3px" }}
            />

            <Button title={"Register"} action={() => {}} />

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

export default register;
