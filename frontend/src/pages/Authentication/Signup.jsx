import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import emailIcon from "../../assets/icons/ic_baseline-mark-email-unread.svg";
import passwordIcon from "../../assets/icons/ri_lock-password-fill.svg";
import googleIcon from "../../assets/icons/GoogleIcon.svg";
import closeIcon from "../../assets/icons/close.svg";
import useSignUp from "../../hooks/useSignUp";

const Signup = () => {
  const { register, getValues } = useForm();
  const { loading, insideSignUp } = useSignUp();

  const signUpButton = async () => {
    const data = getValues();
    console.log("SignUp Data", data);

    insideSignUp(data);
  };

  return (
    <div className="p-4 h-screen w-screen flex  items-center justify-center bg-[#fefefed3]">
      <div className="p-10 pb-8 rounded-2xl w-[450px] flex flex-col bg-[#fefefe]">
        <div className="contents">
          <button className="head flex justify-between items-center">
            <p className="font-gilroy500 text-[32px] mb-3 text-[#626262]">
              Signup
            </p>
            <img
              src={closeIcon}
              alt=""
              className="w-[42px] p-2 border-[3px] rounded-full"
            />
          </button>
          <div className="flex">
            <div className="bar1 w-[45px] h-[6px] mr-2 rounded-2xl bg-[#FFC700]"></div>
            <div className="bar2 w-[20px] h-[6px] mr-2 rounded-2xl bg-[#FFC700]"></div>
            <div className="bar3 w-[8px] h-[6px] mr-2 rounded-2xl bg-[#FFC700]"></div>
          </div>

          {/* Form */}
          <div className="formSection my-8">
            {/* Email Field */}
            <div className="email flex my-4">
              <div className="leftEmail bg-[#f1f1f1]  w-[85px]  h-[56px] rounded-l-full border border-[#e9e8e8] flex items-center">
                <img src={emailIcon} alt="" className="ml-6" />
              </div>
              <div className="rightEmail px-4 font-productSans100 h-[56px] w-full rounded-r-full border border-[#e9e8e8] flex items-center">
                <input
                  type="text"
                  placeholder="Enter email "
                  className="focus:outline-none text-[#aaa] w-full tracking-wide"
                  {...register("signUp.email")}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="email flex my-4">
              <div className="leftEmail bg-[#f1f1f1]  w-[85px]  h-[56px] rounded-l-full border border-[#e9e8e8] flex items-center">
                <img src={passwordIcon} alt="" className="ml-6" />
              </div>
              <div className="rightEmail px-4 font-productSans100 h-[56px] w-full rounded-r-full border border-[#e9e8e8] flex items-center">
                <input
                  type="password"
                  placeholder="Enter password "
                  className="focus:outline-none text-[#aaa] w-full tracking-wide"
                  {...register("signUp.password")}
                />
              </div>
            </div>
            <div className="formButtons flex justify-center mt-8 mb-4 max-[420px]:flex-col max-[420px]:items-center">
              <button
                onClick={signUpButton}
                className="h-[50px] w-[136px] max-[420px]:w-[180px] bg-[#FFC700] text-[#2b2b2b] rounded-full font-productSans200 tracking-widest uppercase"
              >
                Signup
              </button>
            </div>
          </div>

          <div className="font-productSans100 tracking-wide text-[#aaa] text-[15px] mt-14 max-[420px]: text-center">
            Already have account ?{" "}
            <Link
              to="/logIn"
              className="font-productSans200 tracking-widest uppercase text-[#626262] min-[371px]:ml-2"
            >
              Login Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
