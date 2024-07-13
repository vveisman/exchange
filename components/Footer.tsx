"use client";
import { useAppContext } from "@/context";
import { legal, sections } from "@/data/data";
import Link from "next/link";
import React, { useState } from "react";

const Footer = () => {
  const { dark, changeTheme } = useAppContext();
  const [lang, showlang] = useState(false);
  const [index, setIndex] = useState<null | number>(0);

  return (
    <div className='lg:pl-[8vw] lg:pr-[6vw]  border-t border-appAsh pt-[5vh]'>
      {/* Top Section Desktop */}
      <div className='lg:flex items-center hidden mb-5 justify-between'>
        <div className='flex items-center'>
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
          <div className='border lg:ml-4 border-appAsh rounded-[4px] px-7 py-1 flex items-center justify-between'>
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='#333'
              className='mr-2 reflect-element'
            >
              <path
                fill-rule='evenodd'
                d='M8 2a6 6 0 100 12A6 6 0 008 2zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zM7 3.5a1 1 0 00-.707.293l-.5.5a1 1 0 001.414 1.414l.207-.207h1.172l.393.393-1.426.713A1 1 0 007 7.5V8a1 1 0 001.993.122l1.454-.728A1 1 0 0011 6.5v-1a1 1 0 00-.293-.707l-1-1A1 1 0 009 3.5H7z'
                clip-rule='evenodd'
              ></path>
            </svg>
            <p className='font-semibold text-[#333]'>FAQ & Help Center</p>
          </div>
        </div>
        <div className='flex'>
          <div className='flex border-r  justify-between py-1 space-x-3 w-max border-appAsh items-center px-7'>
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='#d8d8d8'
              className='icon-16 text-muted d-inline-block mr-2'
            >
              <path d='M15.989 10.956a.652.652 0 00-.179-.355c-.21-.215-.455-.26-.734-.136a5.372 5.372 0 01-2.325.532 5.334 5.334 0 01-2.785-.76 5.593 5.593 0 01-2.02-2.064 5.634 5.634 0 01-.744-2.846c0-.799.154-1.558.464-2.277.31-.72.756-1.35 1.341-1.892.225-.215.276-.466.153-.75-.115-.285-.323-.42-.622-.407A7.66 7.66 0 005.58.715a7.799 7.799 0 00-2.402 1.714 7.954 7.954 0 00-1.592 2.518A8.076 8.076 0 001 7.995c0 1.084.207 2.12.622 3.106a8.09 8.09 0 001.673 2.554 7.9 7.9 0 002.5 1.71A7.482 7.482 0 008.833 16a7.541 7.541 0 004.217-1.266 7.823 7.823 0 002.892-3.383.68.68 0 00.046-.395z'></path>
            </svg>
            <p className='text-[#333]'>Dark theme</p>
            <button
              onClick={() => changeTheme(!dark)}
              className={`rounded-[16px] h-[16px] duration-150 flex items-center px-[2px] ${
                dark ? "bg-appBlue" : "bg-appAsh"
              } w-[28px] cursor-pointer relative`}
            >
              <div
                className={`bg-white duration-200 transition-all left-[2px] rounded-full absolute ${
                  dark ? "translate-x-full" : ""
                } w-[12px] h-[12px]`}
              ></div>
            </button>
          </div>
          <button
            onClick={() => showlang(!lang)}
            className={`flex w-max px-2  mx-auto rounded-[4px] items-center justify-between text-[.875rem] ml-5 border ${
              lang ? "border-appBlue" : "border-[#d8d8d8] duration-300"
            } min-h-[32px] font-semibold leading-[24px]`}
          >
            {/* <button className='min-h-[32px]  rounded-[4px] px-[.5rem] border border-[#d8d8d8]'> */}
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill={`${lang ? "#00a5ef" : "#626262"}`}
            >
              <path d='M16.4 14.4l-3-2c-.1-.1-.2-.1-.4-.1l-1.9-.1c-.2 0-.4.1-.6.2l-1.1 1.1c-.3.3-.3.6-.1.9l2 3c.1.2.4.3.6.3h3c.3 0 .5-.2.7-.4l1-2c.2-.3.1-.7-.2-.9zm-1.9 1.8h-2.1L11 14.1l.4-.4 1.4.1 2.2 1.5z'></path>
              <path d='M12 2.2c-5.4 0-9.8 4.4-9.8 9.8s4.4 9.8 9.8 9.8 9.8-4.4 9.8-9.8-4.4-9.8-9.8-9.8zm0 1.5c.4 0 .8 0 1.2.1l-.9 3.5-3.5 1c-.2 0-.4.2-.5.4l-.6 1.2-2.8-2.1C6.4 5.4 9 3.7 12 3.7zm0 16.5c-4.5 0-8.2-3.7-8.2-8.3 0-1 .2-2 .5-2.9l3.3 2.5c.1.1.3.1.4.1h.2c.2-.1.4-.2.5-.4l.8-1.7 3.7-.9c.3-.1.5-.3.5-.5l1-4c3.2 1.1 5.5 4.2 5.5 7.8 0 4.6-3.7 8.3-8.2 8.3z'></path>
            </svg>
            {/* </button> */}
            <p className='text-[#333]'>English</p>
            <svg
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
            </svg>
          </button>
        </div>
      </div>
      {/* Top Section Mobile */}
      <div className='flex flex-col lg:hidden items-center '>
        <div className='flex w-[90%] mb-7 justify-between mx-auto items-center'>
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
          <div className='flex  justify-between py-1 space-x-2 w-max border-appAsh items-center'>
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='#d8d8d8'
              className='icon-16 text-muted d-inline-block '
            >
              <path d='M15.989 10.956a.652.652 0 00-.179-.355c-.21-.215-.455-.26-.734-.136a5.372 5.372 0 01-2.325.532 5.334 5.334 0 01-2.785-.76 5.593 5.593 0 01-2.02-2.064 5.634 5.634 0 01-.744-2.846c0-.799.154-1.558.464-2.277.31-.72.756-1.35 1.341-1.892.225-.215.276-.466.153-.75-.115-.285-.323-.42-.622-.407A7.66 7.66 0 005.58.715a7.799 7.799 0 00-2.402 1.714 7.954 7.954 0 00-1.592 2.518A8.076 8.076 0 001 7.995c0 1.084.207 2.12.622 3.106a8.09 8.09 0 001.673 2.554 7.9 7.9 0 002.5 1.71A7.482 7.482 0 008.833 16a7.541 7.541 0 004.217-1.266 7.823 7.823 0 002.892-3.383.68.68 0 00.046-.395z'></path>
            </svg>
            <p className='text-[#333]'>Dark theme</p>
            <button
              onClick={() => changeTheme(!dark)}
              className={`rounded-[16px] h-[16px] duration-150 flex items-center px-[2px] ${
                dark ? "bg-appBlue" : "bg-appAsh"
              } w-[28px] cursor-pointer relative`}
            >
              <div
                className={`bg-white duration-200 transition-all left-[2px] rounded-full absolute ${
                  dark ? "translate-x-full" : ""
                } w-[12px] h-[12px]`}
              ></div>
            </button>
          </div>
        </div>
        <div className='flex flex-col space-y-3 w-full items-center'>
          <button
            onClick={() => showlang(!lang)}
            className={`flex  px-2  mx-auto rounded-[4px] items-center justify-between text-[.875rem] border ${
              lang ? "border-appBlue" : "border-[#d8d8d8] duration-300"
            } min-h-[32px] font-semibold w-[90%] mx-auto leading-[24px]`}
          >
            {/* <button className='min-h-[32px]  rounded-[4px] px-[.5rem] border border-[#d8d8d8]'> */}
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill={`${lang ? "#00a5ef" : "#626262"}`}
            >
              <path d='M16.4 14.4l-3-2c-.1-.1-.2-.1-.4-.1l-1.9-.1c-.2 0-.4.1-.6.2l-1.1 1.1c-.3.3-.3.6-.1.9l2 3c.1.2.4.3.6.3h3c.3 0 .5-.2.7-.4l1-2c.2-.3.1-.7-.2-.9zm-1.9 1.8h-2.1L11 14.1l.4-.4 1.4.1 2.2 1.5z'></path>
              <path d='M12 2.2c-5.4 0-9.8 4.4-9.8 9.8s4.4 9.8 9.8 9.8 9.8-4.4 9.8-9.8-4.4-9.8-9.8-9.8zm0 1.5c.4 0 .8 0 1.2.1l-.9 3.5-3.5 1c-.2 0-.4.2-.5.4l-.6 1.2-2.8-2.1C6.4 5.4 9 3.7 12 3.7zm0 16.5c-4.5 0-8.2-3.7-8.2-8.3 0-1 .2-2 .5-2.9l3.3 2.5c.1.1.3.1.4.1h.2c.2-.1.4-.2.5-.4l.8-1.7 3.7-.9c.3-.1.5-.3.5-.5l1-4c3.2 1.1 5.5 4.2 5.5 7.8 0 4.6-3.7 8.3-8.2 8.3z'></path>
            </svg>
            {/* </button> */}
            <p className='text-[#333]'>English</p>
            <svg
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
            </svg>
          </button>
          <div className='border  border-appAsh w-[90%] rounded-[4px] px-2 py-1 flex items-center justify-start'>
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='#333'
              className='mr-2 reflect-element'
            >
              <path
                fill-rule='evenodd'
                d='M8 2a6 6 0 100 12A6 6 0 008 2zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zM7 3.5a1 1 0 00-.707.293l-.5.5a1 1 0 001.414 1.414l.207-.207h1.172l.393.393-1.426.713A1 1 0 007 7.5V8a1 1 0 001.993.122l1.454-.728A1 1 0 0011 6.5v-1a1 1 0 00-.293-.707l-1-1A1 1 0 009 3.5H7z'
                clip-rule='evenodd'
              ></path>
            </svg>
            <p className='font-semibold text-[#333]'>FAQ & Help Center</p>
          </div>
        </div>
      </div>
      {/* Links / Navs */}
      <div className='flex  mx-auto lg:mx-0 flex-col lg:flex-row  px-1 lg:px-0 w-[93%]   justify-between'>
        {sections.map(({ name, links }, i) => {
          return (
            <div key={name} className='mt-6'>
              <button
                onClick={() => (index !== i ? setIndex(i) : setIndex(null))}
                className='flex py-[2px] w-full justify-between'
              >
                <h3 className='text-base text-[#333] font-bold mb-3'>{name}</h3>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill={`${index !== i ? "#a9a9a9" : "#333"}`}
                  className={`lg:hidden pf-3q ${
                    index !== i ? "rotate-0" : "rotate-180"
                  } transition-all duration-200 d-md-none`}
                >
                  <path
                    fill-rule='evenodd'
                    d='M2.707 4.293L8 9.585l5.293-5.292a1 1 0 111.414 1.414l-6 6a.996.996 0 01-.53.277l-.118.014h-.118a.997.997 0 01-.648-.29l-6-6a1 1 0 011.414-1.415z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </button>
              <div className=' hidden lg:flex flex-col'>
                {links.map((item) => (
                  <p key={item} className='text-[#333]  py-1'>
                    {item}
                  </p>
                ))}
              </div>
              {index === i && (
                <div className=' lg:hidden flex flex-col'>
                  {links.map((item) => (
                    <p key={item} className='text-[#333]  py-1'>
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className='flex flex-col lg:flex-row mx-auto lg:mx-0  px-1 lg:px-0 w-[93%]  justify-between'>
        {legal.map(({ name, links }, i) => {
          return (
            <div
              key={name}
              className='mt-6 flex  w-full flex-col lg:flex-row lg:justify-start'
            >
              <button
                onClick={() => (index !== 20 ? setIndex(20) : setIndex(null))}
                className='flex py-[2px] w-full lg:w-max lg:mr-10 justify-between'
              >
                <h3 className='text-base text-[#333] font-bold mb-3'>{name}</h3>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill={`${index !== 20 ? "#a9a9a9" : "#333"}`}
                  className={`lg:hidden pf-3q ${
                    index !== 20 ? "rotate-0" : "rotate-180"
                  } transition-all duration-200 d-md-none`}
                >
                  <path
                    fill-rule='evenodd'
                    d='M2.707 4.293L8 9.585l5.293-5.292a1 1 0 111.414 1.414l-6 6a.996.996 0 01-.53.277l-.118.014h-.118a.997.997 0 01-.648-.29l-6-6a1 1 0 011.414-1.415z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </button>
              <div className=' hidden lg:flex space-x-4 w-full'>
                {links.map((item) => (
                  <p key={item} className='text-[#333]  py-1'>
                    {item}
                  </p>
                ))}
              </div>
              {index === 20 && (
                <div className=' lg:hidden flex flex-col'>
                  {links.map((item) => (
                    <p key={item} className='text-[#333]  py-1'>
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      {/* Socials */}
      <div
        className='flex flex-col w-full justify-between
       mt-6 items-center lg:flex-row'
      >
        {/* Store */}
        <div className='flex w-max mb-6 lg:mb-0 space-x-6 h-max'>
          <Link href={"/"} className='bg-black rounded-[6px] h-max w-max'>
            <svg
              enableBackground='new 0 0 117.7 38'
              viewBox='0 0 117.7 38'
              fill='white'
              width={120}
              height={40}
            >
              <path d='m23.8 19.3c0-1.7.9-3.3 2.4-4.2-.9-1.3-2.4-2.1-4-2.2-1.7-.2-3.3 1-4.2 1s-2.2-1-3.6-1c-1.9.1-3.6 1.1-4.5 2.7-1.9 3.3-.5 8.3 1.4 11 .9 1.3 2 2.8 3.4 2.8 1.4-.1 1.9-.9 3.6-.9s2.1.9 3.6.9 2.4-1.3 3.3-2.7c.7-.9 1.2-2 1.5-3.1-1.8-.6-2.9-2.4-2.9-4.3z'></path>
              <path d='m21 11.2c.8-1 1.2-2.2 1.1-3.5-1.2.1-2.4.7-3.2 1.7-.8.9-1.2 2.1-1.1 3.4 1.3 0 2.4-.6 3.2-1.6z'></path>
              <path d='m41.3 26.1h-4.7l-1.1 3.4h-2l4.5-12.4h2l4.5 12.4h-2zm-4.2-1.5h3.8l-1.9-5.5h-.1z'></path>
              <path d='m54.2 25c0 2.8-1.5 4.6-3.8 4.6-1.2.1-2.3-.6-2.8-1.6v4.5h-1.9v-12h1.8v1.5c.6-1 1.7-1.6 2.9-1.6 2.2-.1 3.8 1.8 3.8 4.6zm-2 0c0-1.8-.9-3-2.4-3-1.4 0-2.4 1.2-2.4 3s1 3 2.4 3c1.5 0 2.4-1.2 2.4-3z'></path>
              <path d='m64.1 25c0 2.8-1.5 4.6-3.8 4.6-1.2.1-2.3-.6-2.8-1.6v4.5h-1.9v-12h1.8v1.5c.6-1 1.7-1.6 2.9-1.6 2.3-.1 3.8 1.8 3.8 4.6zm-1.9 0c0-1.8-.9-3-2.4-3-1.4 0-2.4 1.2-2.4 3s1 3 2.4 3c1.5 0 2.4-1.2 2.4-3z'></path>
              <path d='m70.7 26c.1 1.2 1.3 2 3 2 1.6 0 2.7-.8 2.7-1.9 0-1-.7-1.5-2.3-1.9l-1.6-.4c-2.3-.6-3.3-1.6-3.3-3.3 0-2.1 1.9-3.6 4.5-3.6s4.4 1.5 4.5 3.6h-1.9c-.1-1.2-1.1-2-2.6-2s-2.5.8-2.5 1.9c0 .9.7 1.4 2.3 1.8l1.4.3c2.5.6 3.6 1.6 3.6 3.4 0 2.3-1.9 3.8-4.8 3.8-2.8 0-4.6-1.4-4.7-3.7z'></path>
              <path d='m82.3 18.3v2.1h1.7v1.5h-1.7v5c0 .8.3 1.1 1.1 1.1h.6v1.5c-.3.1-.7.1-1 .1-1.8 0-2.5-.7-2.5-2.4v-5.2h-1.3v-1.5h1.3v-2.1h1.8z'></path>
              <path d='m85.1 25c0-2.8 1.7-4.6 4.3-4.6s4.3 1.8 4.3 4.6c0 2.9-1.7 4.6-4.3 4.6-2.7 0-4.3-1.8-4.3-4.6zm6.7 0c0-2-.9-3.1-2.4-3.1s-2.4 1.1-2.4 3.1.9 3.1 2.4 3.1 2.4-1.2 2.4-3.1z'></path>
              <path d='m95.2 20.4h1.8v1.6c.2-1 1.2-1.7 2.2-1.6.2 0 .4 0 .6.1v1.7c-.3-.1-.5-.2-.8-.2-1 0-1.9.8-1.9 1.8v.3 5.4h-1.9z'></path>
              <path d='m108.4 26.8c-.2 1.6-1.9 2.8-3.9 2.8-2.6 0-4.3-1.8-4.3-4.6s1.6-4.7 4.2-4.7c2.5 0 4.1 1.7 4.1 4.5v.6h-6.4v.1c-.1 1.3.8 2.4 2.1 2.6h.3c.9.1 1.8-.4 2.1-1.3zm-6.3-2.7h4.5c.1-1.2-.9-2.2-2.1-2.3-.1 0-.1 0-.2 0-1.2 0-2.2 1-2.2 2.3z'></path>
              <path d='m36.8 7.7c1.5-.1 2.7 1 2.8 2.4v.5c0 1.9-1 3-2.8 3h-2.2v-6h2.2zm-1.2 5.2h1.1c1 .1 1.9-.7 2-1.8 0-.1 0-.3 0-.4.1-1-.6-2-1.6-2.1-.1 0-.2 0-.4 0h-1.1z'></path>
              <path d='m40.7 11.4c-.1-1.2.7-2.2 1.9-2.3s2.2.7 2.3 1.9v.4c.1 1.2-.7 2.2-1.9 2.3s-2.2-.7-2.3-1.9c0-.1 0-.2 0-.4zm3.3 0c0-1-.4-1.5-1.2-1.5s-1.2.6-1.2 1.5c0 1 .4 1.6 1.2 1.6s1.2-.6 1.2-1.6z'></path>
              <path d='m50.6 13.7h-.9l-.9-3.3h-.1l-.9 3.3h-.9l-1.2-4.5h.9l.8 3.4h.1l.9-3.4h.9l.9 3.4h.1l.8-3.4h.9z'></path>
              <path d='m52.9 9.2h.9v.7h.1c.2-.5.8-.8 1.3-.8.8-.1 1.5.5 1.6 1.4v.3 2.9h-.9v-2.7c0-.7-.3-1.1-1-1.1-.6 0-1.1.4-1.1 1v.2 2.6h-.9z'></path>
              <path d='m58.1 7.4h.9v6.3h-.9z'></path>
              <path d='m60.2 11.4c-.1-1.2.7-2.2 1.9-2.3s2.2.7 2.3 1.9v.4c.1 1.2-.7 2.2-1.9 2.3s-2.2-.7-2.3-1.9c0-.1 0-.2 0-.4zm3.3 0c0-1-.4-1.5-1.2-1.5s-1.2.6-1.2 1.5c0 1 .4 1.6 1.2 1.6s1.2-.6 1.2-1.6z'></path>
              <path d='m65.4 12.4c0-.8.6-1.3 1.7-1.3l1.2-.1v-.4c0-.5-.3-.7-.9-.7-.5 0-.8.2-.9.5h-.9c.1-.8.8-1.3 1.8-1.3 1.1 0 1.8.6 1.8 1.5v3.1h-.9v-.6h-.1c-.3.5-.8.7-1.4.7-.7.1-1.4-.5-1.5-1.2.1-.1.1-.1.1-.2zm2.9-.4v-.4l-1.1.1c-.6 0-.9.3-.9.6 0 .4.4.6.8.6.6.2 1.1-.2 1.2-.9 0 .1 0 .1 0 0z'></path>
              <path d='m70.3 11.4c0-1.4.7-2.3 1.9-2.3.6 0 1.1.3 1.4.8h.1v-2.5h.9v6.3h-.9v-.7h-.1c-.3.5-.8.8-1.4.8-1.1 0-1.9-.9-1.9-2.4zm1 0c0 1 .5 1.5 1.2 1.5s1.2-.6 1.2-1.5-.5-1.5-1.2-1.5c-.8 0-1.2.6-1.2 1.5z'></path>
              <path d='m78.2 11.4c-.1-1.2.7-2.2 1.9-2.3s2.2.7 2.3 1.9v.4c.1 1.2-.7 2.2-1.9 2.3s-2.2-.7-2.3-1.9c0-.1 0-.2 0-.4zm3.4 0c0-1-.4-1.5-1.2-1.5s-1.2.6-1.2 1.5c0 1 .4 1.6 1.2 1.6.7 0 1.2-.6 1.2-1.6z'></path>
              <path d='m83.7 9.2h.9v.7h.1c.2-.5.8-.8 1.3-.8.8-.1 1.5.5 1.6 1.4v.3 2.9h-.9v-2.7c0-.7-.3-1.1-1-1.1-.6 0-1.1.4-1.1 1v.2 2.6h-.9z'></path>
              <path d='m92.5 8.1v1.1h1v.8h-1v2.3c0 .5.2.7.6.7h.3v.7c-.2 0-.3 0-.5 0-1 0-1.4-.3-1.4-1.2v-2.5h-.7v-.8h.7v-1.1z'></path>
              <path d='m94.7 7.4h.9v2.5h.1c.2-.5.8-.9 1.4-.8.8 0 1.5.6 1.6 1.4v.3 2.9h-.9v-2.7c0-.7-.3-1.1-1-1.1-.6 0-1.1.4-1.1 1v.2 2.6h-.9z'></path>
              <path d='m103.8 12.5c-.2.8-1.1 1.4-2 1.3-1.1 0-2.1-.9-2.1-2 0-.1 0-.2 0-.3-.2-1.1.6-2.2 1.8-2.3h.3c1.3 0 2 .9 2 2.3v.3h-3.2c-.1.7.4 1.2 1.1 1.3h.1c.4.1.9-.2 1.1-.5zm-3.2-1.5h2.3c0-.6-.4-1.1-1-1.2h-.1c-.6.1-1.2.6-1.2 1.2z'></path>
            </svg>
          </Link>
          <Link href={"/"} className='bg-black rounded-[6px] h-max w-max'>
            <svg
              enableBackground='new 0 0 133.4 38.4'
              viewBox='0 0 133.4 38.4'
              width={120}
              height={40}
              fill='white'
            >
              <linearGradient
                id='googlePlayIconIdA'
                gradientTransform='matrix(1 0 0 -1 0 180.4002)'
                gradientUnits='userSpaceOnUse'
                x1='20.9996'
                x2='4.2172'
                y1='172.4904'
                y2='155.708'
              >
                <stop offset='0' stop-color='#00a0ff'></stop>
                <stop offset='.00657445' stop-color='#00a1ff'></stop>
                <stop offset='.2601' stop-color='#00beff'></stop>
                <stop offset='.5122' stop-color='#00d2ff'></stop>
                <stop offset='.7604' stop-color='#00dfff'></stop>
                <stop offset='1' stop-color='#00e3ff'></stop>
              </linearGradient>
              <linearGradient
                id='googlePlayIconIdB'
                gradientTransform='matrix(1 0 0 -1 0 180.4002)'
                gradientUnits='userSpaceOnUse'
                x1='33.0343'
                x2='8.8374'
                y1='161.1987'
                y2='161.1987'
              >
                <stop offset='0' stop-color='#ffe000'></stop>
                <stop offset='.4087' stop-color='#ffbd00'></stop>
                <stop offset='.7754' stop-color='#ffa500'></stop>
                <stop offset='1' stop-color='#ff9c00'></stop>
              </linearGradient>
              <linearGradient
                id='googlePlayIconIdC'
                gradientTransform='matrix(1 0 0 -1 0 180.4002)'
                gradientUnits='userSpaceOnUse'
                x1='24.0269'
                x2='1.2686'
                y1='158.904'
                y2='136.1457'
              >
                <stop offset='0' stop-color='#ff3a44'></stop>
                <stop offset='1' stop-color='#googlePlayIconIdC31162'></stop>
              </linearGradient>
              <linearGradient
                id='googlePlayIconIdD'
                gradientTransform='matrix(1 0 0 -1 0 180.4002)'
                gradientUnits='userSpaceOnUse'
                x1='6.4972'
                x2='16.6598'
                y1='181.0239'
                y2='170.8614'
              >
                <stop offset='0' stop-color='#32a071'></stop>
                <stop offset='.0685' stop-color='#2da771'></stop>
                <stop offset='.4762' stop-color='#15cf74'></stop>
                <stop offset='.8009' stop-color='#06e775'></stop>
                <stop offset='1' stop-color='#00f076'></stop>
              </linearGradient>
              <path
                d='m46.6 9.4c0 .8-.2 1.5-.7 2-.6.6-1.3.9-2.2.9s-1.6-.3-2.2-.9-.9-1.3-.9-2.2.3-1.6.9-2.2 1.3-.9 2.2-.9c.4 0 .8.1 1.2.3s.7.4.9.7l-.5.5c-.4-.5-.9-.7-1.6-.7-.7-.1-1.2.1-1.7.6-.5.4-.7 1-.7 1.7s.2 1.3.7 1.7 1 .7 1.6.7c.7 0 1.2-.2 1.7-.7.3-.3.5-.7.5-1.2h-2.2v-.7h2.9c.1.1.1.3.1.4z'
                stroke='#fff'
                stroke-miterlimit='10'
                stroke-width='.2'
              ></path>
              <path
                d='m51.2 6.9h-2.7v1.9h2.5v.7h-2.5v1.9h2.7v.7h-3.5v-6h3.5z'
                stroke='#fff'
                stroke-miterlimit='10'
                stroke-width='.2'
              ></path>
              <path
                d='m54.5 12.2h-.8v-5.3h-1.7v-.7h4.1v.7h-1.7v5.3z'
                stroke='#fff'
                stroke-miterlimit='10'
                stroke-width='.2'
              ></path>
              <path
                d='m59.1 12.2v-6h.8v6z'
                stroke='#fff'
                stroke-miterlimit='10'
                stroke-width='.2'
              ></path>
              <path
                d='m63.3 12.2h-.8v-5.3h-1.7v-.7h4.2v.7h-1.7z'
                stroke='#fff'
                stroke-miterlimit='10'
                stroke-width='.2'
              ></path>
              <path
                d='m72.8 11.4c-.6.6-1.3.9-2.2.9s-1.6-.3-2.2-.9-.9-1.3-.9-2.2.3-1.6.9-2.2 1.3-.9 2.2-.9 1.6.3 2.2.9.9 1.3.9 2.2-.3 1.6-.9 2.2zm-3.8-.5c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.4-.4.7-1 .7-1.7s-.2-1.3-.7-1.7c-.4-.4-1-.7-1.6-.7s-1.2.2-1.6.7c-.4.4-.7 1-.7 1.7s.2 1.3.7 1.7z'
                stroke='#fff'
                stroke-miterlimit='10'
                stroke-width='.2'
              ></path>
              <path
                d='m74.8 12.2v-6h.9l2.9 4.7v-1.2-3.5h.8v6h-.8l-3.1-4.9v1.2 3.7z'
                stroke='#fff'
                stroke-miterlimit='10'
                stroke-width='.2'
              ></path>
              <path d='m67.3 21c-2.4 0-4.3 1.8-4.3 4.3 0 2.4 1.9 4.3 4.3 4.3s4.3-1.8 4.3-4.3c0-2.6-1.9-4.3-4.3-4.3zm0 6.8c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6 2.4 1 2.4 2.6c0 1.5-1.1 2.6-2.4 2.6zm-9.3-6.8c-2.4 0-4.3 1.8-4.3 4.3 0 2.4 1.9 4.3 4.3 4.3s4.3-1.8 4.3-4.3c0-2.6-1.9-4.3-4.3-4.3zm0 6.8c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6 2.4 1 2.4 2.6c0 1.5-1.1 2.6-2.4 2.6zm-11.1-5.5v1.8h4.3c-.1 1-.5 1.8-1 2.3-.6.6-1.6 1.3-3.3 1.3-2.7 0-4.7-2.1-4.7-4.8s2.1-4.8 4.7-4.8c1.4 0 2.5.6 3.3 1.3l1.3-1.3c-1.1-1-2.5-1.8-4.5-1.8-3.6 0-6.7 3-6.7 6.6s3.1 6.6 6.7 6.6c2 0 3.4-.6 4.6-1.9 1.2-1.2 1.6-2.9 1.6-4.2 0-.4 0-.8-.1-1.1zm45.4 1.4c-.4-1-1.4-2.7-3.6-2.7s-4 1.7-4 4.3c0 2.4 1.8 4.3 4.2 4.3 1.9 0 3.1-1.2 3.5-1.9l-1.4-1c-.5.7-1.1 1.2-2.1 1.2s-1.6-.4-2.1-1.3l5.7-2.4zm-5.8 1.4c0-1.6 1.3-2.5 2.2-2.5.7 0 1.4.4 1.6.9zm-4.7 4.1h1.9v-12.5h-1.9zm-3-7.3c-.5-.5-1.3-1-2.3-1-2.1 0-4.1 1.9-4.1 4.3s1.9 4.2 4.1 4.2c1 0 1.8-.5 2.2-1h.1v.6c0 1.6-.9 2.5-2.3 2.5-1.1 0-1.9-.8-2.1-1.5l-1.6.7c.5 1.1 1.7 2.5 3.8 2.5 2.2 0 4-1.3 4-4.4v-7.6h-1.8zm-2.2 5.9c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6 2.3 1.1 2.3 2.6-1 2.6-2.3 2.6zm24.4-11.1h-4.5v12.5h1.9v-4.7h2.6c2.1 0 4.1-1.5 4.1-3.9s-2-3.9-4.1-3.9zm.1 6h-2.7v-4.3h2.7c1.4 0 2.2 1.2 2.2 2.1-.1 1.1-.9 2.2-2.2 2.2zm11.5-1.8c-1.4 0-2.8.6-3.3 1.9l1.7.7c.4-.7 1-.9 1.7-.9 1 0 1.9.6 2 1.6v.1c-.3-.2-1.1-.5-1.9-.5-1.8 0-3.6 1-3.6 2.8 0 1.7 1.5 2.8 3.1 2.8 1.3 0 1.9-.6 2.4-1.2h.1v1h1.8v-4.8c-.2-2.2-1.9-3.5-4-3.5zm-.2 6.9c-.6 0-1.5-.3-1.5-1.1 0-1 1.1-1.3 2-1.3.8 0 1.2.2 1.7.4-.2 1.2-1.2 2-2.2 2zm10.5-6.6-2.1 5.4h-.1l-2.2-5.4h-2l3.3 7.6-1.9 4.2h1.9l5.1-11.8zm-16.8 8h1.9v-12.5h-1.9z'></path>
              <path
                d='m9.6 6.7c-.3.3-.4.8-.4 1.4v22.1c0 .6.2 1.1.5 1.4l.1.1 12.4-12.4v-.1-.1z'
                fill='url(#googlePlayIconIdA)'
              ></path>
              <path
                d='m26.2 23.5-4.1-4.1v-.1-.1l4.1-4.1.1.1 4.9 2.8c1.4.8 1.4 2.1 0 2.9z'
                fill='url(#googlePlayIconIdB)'
              ></path>
              <path
                d='m26.3 23.4-4.2-4.2-12.5 12.5c.5.5 1.2.5 2.1.1z'
                fill='url(#googlePlayIconIdC)'
              ></path>
              <path
                d='m26.3 15-14.6-8.3c-.9-.5-1.6-.4-2.1.1l12.5 12.5z'
                fill='url(#googlePlayIconIdD)'
              ></path>
              <path
                d='m26.2 23.3-14.5 8.2c-.8.5-1.5.4-2 0l-.1.1.1.1c.5.4 1.2.5 2 0z'
                opacity='.2'
              ></path>
              <path
                d='m9.6 31.5c-.3-.3-.5-.8-.5-1.4v.1c0 .6.2 1.1.5 1.4z'
                opacity='.12'
              ></path>
              <path
                d='m31.2 20.5-5 2.8.1.1 4.9-2.8c.7-.4 1-.9 1-1.4 0 .5-.4.9-1 1.3z'
                opacity='.12'
              ></path>
              <path
                d='m11.7 6.8 19.5 11.1c.6.4 1 .8 1 1.3 0-.5-.3-1-1-1.4l-19.5-11.1c-1.4-.8-2.5-.1-2.5 1.5v.1c0-1.6 1.1-2.3 2.5-1.5z'
                opacity='.25'
              ></path>
            </svg>
          </Link>
        </div>
        {/* Social Media Handles */}
        <nav className='flex'>
          <ul className='flex'>
            <li className='p-[.25rem] mr-3 border border-appAsh  rounded-[4px]'>
              <Link className='' href={"/"}>
                <svg width='16' height='16' viewBox='0 0 16 16' fill='#626262'>
                  <path d='M12.164 1.5h2.203L9.551 7.008l5.668 7.492H10.78L7.305 9.957 3.328 14.5h-2.21l5.155-5.89L.836 1.5h4.55l3.141 4.152zm-.777 11.68h1.222L4.723 2.75H3.41zm0 0'></path>
                </svg>
              </Link>
            </li>
            <li className='p-[.25rem] mr-3 border border-appAsh  rounded-[4px]'>
              <Link className='' href={"/"}>
                <svg width='16' height='16' viewBox='0 0 20 16' fill='#626262'>
                  <path d='M16.39 2.184a.035.035 0 00-.023-.024A15.146 15.146 0 0012.63 1a.058.058 0 00-.063.031c-.171.309-.324.63-.464.953a14.079 14.079 0 00-4.2 0c-.14-.324-.3-.644-.472-.953-.016-.023-.04-.035-.063-.031A15.095 15.095 0 003.63 2.16a.053.053 0 00-.027.024C1.222 5.738.566 9.21.887 12.637a.074.074 0 00.027.043A15.234 15.234 0 005.5 14.996a.06.06 0 00.066-.02c.352-.48.668-.992.938-1.527a.065.065 0 00.004-.047.077.077 0 00-.035-.035 9.625 9.625 0 01-1.434-.68.078.078 0 01-.031-.046c0-.02.008-.04.023-.051a7.87 7.87 0 00.285-.223c.02-.015.04-.02.059-.008 3.008 1.371 6.266 1.371 9.234 0a.059.059 0 01.063.004c.09.078.187.153.285.227.016.012.023.027.023.05 0 .02-.011.036-.027.047-.46.266-.937.497-1.437.68a.055.055 0 00-.032.035c-.007.016-.004.032 0 .047.278.531.59 1.043.942 1.528.011.02.039.027.062.02a15.206 15.206 0 004.598-2.317.093.093 0 00.023-.043c.383-3.961-.644-7.403-2.718-10.453zM6.954 10.55c-.906 0-1.652-.832-1.652-1.852s.73-1.851 1.652-1.851c.926 0 1.664.836 1.652 1.851 0 1.02-.734 1.852-1.652 1.852zm6.106 0c-.907 0-1.653-.832-1.653-1.852s.73-1.851 1.653-1.851c.925 0 1.664.836 1.652 1.851 0 1.02-.727 1.852-1.652 1.852zm0 0'></path>
                </svg>
              </Link>
            </li>
            <li className='p-[.25rem] mr-3 border border-appAsh  rounded-[4px]'>
              <Link className='' href={"/"}>
                <svg width='16' height='16' viewBox='0 0 16 16' fill='#626262'>
                  <path
                    fill-rule='evenodd'
                    d='M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42a3.918 3.918 0 00-1.417.923c-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.851.174 1.432.372 1.942.204.525.478.973.923 1.417a3.9 3.9 0 001.417.923c.51.197 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.851-.04 1.432-.175 1.942-.372a3.932 3.932 0 001.417-.923 3.9 3.9 0 00.923-1.417c.197-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.851-.175-1.433-.372-1.942a3.926 3.926 0 00-.923-1.417A3.897 3.897 0 0013.24.42c-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.135 0 2.39.01 3.233.047.78.037 1.204.166 1.485.277.375.145.64.318.921.597.28.28.453.546.598.921.109.281.24.705.275 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.05 3.233c-.04.78-.17 1.204-.28 1.485-.15.375-.32.64-.6.921-.279.28-.549.453-.92.598-.28.109-.71.24-1.49.275-.849.038-1.099.047-3.239.047-2.14 0-2.39-.01-3.24-.05-.78-.04-1.21-.17-1.49-.28a2.49 2.49 0 01-.92-.6 2.432 2.432 0 01-.6-.92c-.11-.28-.239-.71-.28-1.49-.03-.84-.04-1.099-.04-3.229s.01-2.39.04-3.24c.041-.78.17-1.21.28-1.49.14-.38.32-.64.6-.92.28-.28.54-.46.92-.6.28-.11.7-.24 1.48-.28.85-.03 1.1-.04 3.24-.04zm0 2.452a4.108 4.108 0 100 8.215 4.108 4.108 0 000-8.215zm0 6.775a2.666 2.666 0 110-5.334 2.666 2.666 0 110 5.334zm5.23-6.937a.96.96 0 11-1.92-.001.96.96 0 011.92.001z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </Link>
            </li>
            <li className='p-[.25rem] mr-3 border border-appAsh  rounded-[4px]'>
              <Link className='' href={"/"}>
                <svg width='16' height='16' viewBox='0 0 16 16' fill='#626262'>
                  <path d='M8 0C3.581 0 0 3.603 0 8.049 0 12.067 2.925 15.396 6.75 16v-5.625H4.719V8.05H6.75V6.276c0-2.017 1.194-3.132 3.022-3.132.875 0 1.79.157 1.79.157v1.981h-1.009c-.994 0-1.303.62-1.303 1.258v1.509h2.219l-.355 2.326H9.25V16c3.825-.604 6.75-3.933 6.75-7.951C16 3.603 12.419 0 8 0z'></path>
                </svg>
              </Link>
            </li>
            <li className='p-[.25rem] mr-3 border border-appAsh  rounded-[4px]'>
              <Link className='' href={"/"}>
                <svg width='16' height='16' viewBox='0 0 16 16' fill='#626262'>
                  <path
                    fill-rule='evenodd'
                    d='M15.663 4.137a2.005 2.005 0 00-1.392-1.392c-1.246-.334-6.264-.334-6.264-.334s-5.004-.007-6.264.334A2.005 2.005 0 00.351 4.137a20.844 20.844 0 00-.348 3.87 20.844 20.844 0 00.348 3.855 2.005 2.005 0 001.392 1.392c1.246.335 6.264.335 6.264.335s5.004 0 6.264-.335a2.004 2.004 0 001.392-1.392c.23-1.272.342-2.563.334-3.855a20.837 20.837 0 00-.334-3.87zM6.406 10.4V5.605l4.176 2.402z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </Link>
            </li>
            <li className='p-[.25rem] mr-3 border border-appAsh  rounded-[4px]'>
              <Link className='' href={"/"}>
                <svg width='16' height='16' viewBox='0 0 16 16' fill='#626262'>
                  <path
                    fill-rule='evenodd'
                    d='M7.984 13.02c-1.196 0-2.038-.26-2.575-.798a.3.3 0 010-.422.313.313 0 01.423 0c.42.42 1.124.629 2.152.629s1.728-.2 2.146-.62a.31.31 0 01.42 0c.11.12.11.31 0 .43-.54.54-1.377.8-2.575.8zM5.58 7.97a1.13 1.13 0 00-1.118 1.118c0 .607.51 1.1 1.118 1.1a1.1 1.1 0 001.101-1.1c0-.608-.493-1.118-1.1-1.118zm4.822 0c-.61 0-1.118.51-1.118 1.118 0 .607.509 1.1 1.118 1.1a1.1 1.1 0 001.1-1.1c0-.608-.492-1.118-1.1-1.118zM.812 9.96c0-.184.016-.363.046-.54A1.815 1.815 0 010 7.878c0-.998.818-1.809 1.817-1.809a1.8 1.8 0 011.198.455c1.237-.794 2.904-1.294 4.74-1.328l1.209-3.683.269.064.01.001 2.816.662a1.491 1.491 0 012.864.583 1.49 1.49 0 01-1.488 1.489 1.49 1.49 0 01-1.486-1.487l-2.567-.608-.978 2.985c1.766.07 3.364.57 4.562 1.347.33-.31.763-.48 1.222-.48A1.81 1.81 0 0116 7.878c0 .658-.36 1.257-.919 1.577.02.17.04.329.04.499-.01 2.625-3.204 4.762-7.147 4.762l-.022.006c-3.937 0-7.14-2.137-7.14-4.761z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Summary */}
      <div className='d-md-flex px-[4vw] lg:px-0 mt-8 mb-16'>
        <p className='text-[.75rem] leading-[18px] text-gray-700 text-left mb-0'>
          “PAXFUL” is a registered trademark of Paxful, Inc. Copyright © 2024
          Paxful, Inc. All Rights Reserved. Paxful Inc. has no relation to
          MoneyGram, Western Union, Payoneer, WorldRemit, Paxum, PayPal, Amazon,
          OkPay, Payza, Walmart, Reloadit, Perfect Money, WebMoney, Google
          Wallet, BlueBird, Serve, Square Cash, NetSpend, Chase QuickPay,
          Skrill, Vanilla, MyVanilla, OneVanilla, Neteller, Venmo, Apple,
          ChimpChange or any other payment method. We make no claims about being
          supported by or supporting these services. Their respective wordmarks
          and trademarks belong to them alone. Official mailing address: 4023
          Kennett Pike #50541, Wilmington, DE 19807
        </p>
      </div>
    </div>
  );
};

export default Footer;
