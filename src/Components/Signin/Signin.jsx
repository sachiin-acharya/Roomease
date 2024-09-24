import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";

function SignIn() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:center">
        <div className="  bg-white px-10 py-10 rounded-2xl border-2 border-gray shadow-md m-10  ">
          <h1 className="text-5xl font-semibold">Sign In</h1>
          <div className="mt-6">
            <div>
              <label htmlFor="" className="text-lg font-medium">
                Email Address
              </label>
              <input
                type="text"
                className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 mb-4 bg-transparent  "
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label htmlFor="" className="text-lg font-medium">
                Password
              </label>
              <input
                type="password"
                className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent mb-1"
                placeholder="Enter password"
              />
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div>
                <input type="checkbox" id="remember" />
                <label
                  htmlFor=""
                  for="remember"
                  className="ml-2 font-medium text-base"
                >
                  Remember me
                </label>
              </div>
              <button className="font-medium text-base text-[#0C6967]">
                FORGOT PASSWORD?
              </button>
            </div>
            <div className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out mt-4 py-2 rounded-xl bg-[#0C6967] text-center text-white  ">
              <button>CONTINUE</button>
            </div>

            <div className="flex items-center justify-center mt-6">
              <div className="w-full border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500">or</span>
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className=" mt-4 flex flex-col    ">
              <button className="flex items-center justify-center gap-2 border-2 border-gray-100 py-2 rounded-xl mt-3 gap-y-4 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out flex">
                {" "}
                <FiPhone />
                CONTINUE WITH PHONE NUMBER
              </button>
              <div className="flex item-center justify-center gap-2 border-2 border-gray-100 py-2 rounded-xl mt-3 gap-y-4 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out flex">
                <img
                  src={facebook}
                  alt="facebook logo"
                  className="rounded-sm w-6 h-auto"
                />
                <button>CONTINUE WITH FACEBOOK</button>
              </div>

              <div className=" flex item-center justify-center gap-2 border-2 border-gray-100 py-2 rounded-xl mt-3 gap-y-4 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out flex">
                <img
                  src={google}
                  alt="google logo"
                  className="rounded-sm w-6 h-auto"
                />
                <button>CONTINUE WITH GOOGLE</button>
              </div>
            </div>
            <div className="mt-8 flex justify-center items-center ">
              <p className="font-sm text-base ">Don't have an account? </p>
              <button className="font-medium text-base text-[#0C6967] ml-2">
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
