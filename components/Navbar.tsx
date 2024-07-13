"use client";

import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import {
  MdArrowBack,
  MdArrowBackIos,
  MdArrowDownward,
  MdArrowDropDown,
  MdClose,
} from "react-icons/md";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cryptos } from "@/data/data";
import BuyCrypto from "./BuyCrypto";
import OutsideClickHandler from "react-outside-click-handler";
import { useAppContext } from "@/context";
const listStyle: string =
  "text-sm min-h-max hover:text-[#46127B] hidden   leading-[24px] text-[#333333] relative cursor-pointer duration-200  lg:flex  items-center my-[14px] lg:mb-0 mt-[40px] lg:mt-0  lg:leading-[24px]  font-semibold";

const Navbar = () => {
  // --------------------------------------------VARIABLES
  const [isOpen, setIsOpen] = useState(false);
  const [sub, showSub] = useState(false);
  const [lang, showlang] = useState(false);
  const { dark, changeTheme } = useAppContext();
  const router = usePathname();

  //-----------------------------------------------------------FUNCTIONS
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //
  return (
    <div className='relative     shadow-sm w-full shadow-slate-300 z-20   flex items-center justify-between px-[2vw] lg:px-[7vw] bg-white h-[9vh] '>
      <div
        onClick={toggleMenu}
        className={`lg:hidden flex absolute left-2  items-center justifiy-center `}
      >
        <div className='hover:bg-[#f8f8f8] w-[32px] h-[31.6px] flex items-center justify-center border border-[#d8d8d8]'>
          {isOpen ? (
            <MdClose size={25} color={"#132238"} />
          ) : (
            <BiMenu size={25} color={"#132238"} />
          )}
        </div>
      </div>
      <Link className='relative left-[10vw] lg:left-0' href={"/"}>
        <svg
          viewBox='0 0 123.7 23.3'
          xmlns='http://www.w3.org/2000/svg'
          fill='#333'
          className='w-[85px] block'
        >
          <path d='M91.3 1.7V12c0 3.6 1.5 5 4.1 5s4.1-1.5 4.1-5V1.7h4.3v10.4c0 5.5-3.1 8.5-8.4 8.5-5.2 0-8.4-3-8.4-8.5V1.7zm-59.8 0l8.3 18.6h-4.5l-1.7-4H25l-1.7 4h-4.4l8.3-18.6zm49.7 0v3.5h-9.7v4.9H80v3.5h-8.5v6.8h-4.3V1.7zm32.8 0v15.1h9.7v3.5h-14V1.7zM8.1 1.7c4.9 0 8.1 2.5 8.1 6.8 0 4.1-3.1 6.7-8.1 6.7H4.3v5.2H0V1.7zm47 9.9l6.3 8.7h-4.1c-.6 0-1.2-.2-1.6-.7l-.1-.1-2.3-3.2c-.5-.8-.5-1.8 0-2.6l.1-.2zM29.3 6l-2.9 7.1h5.9zM7.9 5.2H4.3v6.5h3.5c2.7 0 4-1.2 4-3.2s-1.3-3.3-3.9-3.3zm39-3.5c.7 0 1.2.2 1.6.7l.1.1 1.2 1.7c.5.7.5 1.7.1 2.4l-.1.1-1.7 2.4-5.4-7.5z'></path>
          <path
            d='M63.1 0L41.5 23.2c-.2.3-.7-.1-.4-.4L56.7.8c.4-.5 1-.8 1.7-.8z'
            fill='#00a5ef'
          ></path>
        </svg>
      </Link>
      <ul
        // onClick={() => toggleMenu()}
        className={`w-full lg:w-[45vw] overflow-x-hidden lg:overflow-x-visible ${
          !isOpen
            ? "-translate-x-full opacity-0"
            : "translate-x-0 opacity-100 z-10"
        }  h-[91vh] overflow-y-scroll py-[6vh] lg:py-0 lg:overflow-y-visible lg:h-full  duration-300 lg:translate-x-0  lg:opacity-100 transition-all ease-linear  lg:flex-row items-start justify-start lg:justify-center lg:space-x-8 lg:items-center absolute lg:relative top-[9vh] lg:top-0 left-0 flex flex-col bg-white`}
      >
        <button
          onClick={() => showlang(!lang)}
          className={`flex w-[92vw] px-2  mx-auto rounded-[4px] items-center justify-between text-[.875rem] lg:hidden border ${
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
          <p>English</p>
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
        <div className='flex pt-[2vh] flex-col px-8 w-full lg:hidden'>
          {cryptos.map(({ name, src }) => {
            return (
              <div className='flex w-full py-5 justify-between items-center'>
                <p className='text-[16px]  leading-[16px] text-[#333]'>
                  Buy {name}
                </p>
                <Image src={src} width={32} height={32} alt='coin' />
              </div>
            );
          })}
          {cryptos.map(({ name, src }) => {
            return (
              <div className='flex w-full py-5 justify-between items-center'>
                <p className='text-[16px]  leading-[16px] text-[#333]'>
                  Sell {name}
                </p>
                <Image src={src} width={32} height={32} alt='coin' />
              </div>
            );
          })}
          <div className='flex w-full py-5 justify-between items-center'>
            <p className='text-[16px]  leading-[16px] text-[#333]'>
              Create an Offer
            </p>
            <Image src={"/bitcoin.svg"} width={32} height={32} alt='coin' />
          </div>
        </div>
        <div className='flex mt-[2vh] lg:hidden bg-appAsh/30 flex-col w-full'>
          <div className='flex items-center  hover:bg-gray-400/10 rounded-[4px] py-3 mx-1 w-full justify-between px-7'>
            <h4 className='text-base text-[#333]'>Wallet</h4>
            <div className='border min-w-[32px] flex items-center justify-center h-[32px] border-[#d8d8d8] border-opacity-50 rounded-[4px]'>
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='currentColor'
                className='reflect-element'
              >
                <path
                  fill-rule='evenodd'
                  d='M4.294 13.292l5.292-5.293-5.292-5.293a1 1 0 111.414-1.414l6 6a.99.99 0 01.277.53L12 7.94v.118a.996.996 0 01-.291.648l-6 6a1 1 0 11-1.414-1.414z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </div>
          </div>
          <div className='flex items-center  hover:bg-gray-400/10 rounded-[4px] py-3 mx-1 w-full justify-between px-7'>
            <h4 className='text-base text-[#333]'>Become a Vendor</h4>
            <div className='border min-w-[32px] flex items-center justify-center h-[32px] border-[#d8d8d8] border-opacity-50 rounded-[4px]'>
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='currentColor'
                className='reflect-element'
              >
                <path
                  fill-rule='evenodd'
                  d='M4.294 13.292l5.292-5.293-5.292-5.293a1 1 0 111.414-1.414l6 6a.99.99 0 01.277.53L12 7.94v.118a.996.996 0 01-.291.648l-6 6a1 1 0 11-1.414-1.414z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className='flex border-t lg:hidden mt-[3vh] justify-between py-3 w-full border-appAsh items-center px-7'>
          <div className='flex items-center'>
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='#d8d8d8'
              className='icon-16 text-muted d-inline-block mr-2'
            >
              <path d='M15.989 10.956a.652.652 0 00-.179-.355c-.21-.215-.455-.26-.734-.136a5.372 5.372 0 01-2.325.532 5.334 5.334 0 01-2.785-.76 5.593 5.593 0 01-2.02-2.064 5.634 5.634 0 01-.744-2.846c0-.799.154-1.558.464-2.277.31-.72.756-1.35 1.341-1.892.225-.215.276-.466.153-.75-.115-.285-.323-.42-.622-.407A7.66 7.66 0 005.58.715a7.799 7.799 0 00-2.402 1.714 7.954 7.954 0 00-1.592 2.518A8.076 8.076 0 001 7.995c0 1.084.207 2.12.622 3.106a8.09 8.09 0 001.673 2.554 7.9 7.9 0 002.5 1.71A7.482 7.482 0 008.833 16a7.541 7.541 0 004.217-1.266 7.823 7.823 0 002.892-3.383.68.68 0 00.046-.395z'></path>
            </svg>
            <p>Dark theme</p>
          </div>
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
        <li
          className={`${listStyle} ${
            router.includes("/about") ? "text-docBlue" : ""
          }`}
        >
          <Link href={"/create"}>Create an Offer</Link>
        </li>
        <li
          className={`${listStyle} ${
            router.includes("/wallet") ? "text-docBlue" : ""
          }`}
        >
          <Link href={"/media"}>Wallet</Link>
        </li>
        <OutsideClickHandler onOutsideClick={() => showSub(false)}>
          <li
            className={`${listStyle} relative  hover:text-[#333333] border h-max border-opacity-40 pl-2 justify-between border-[#626262] rounded-[4px] flex items-center ${
              router.includes("/volunteer") ? "text-docBlue" : ""
            }`}
          >
            <Link className='mx-2' href={"/gift"}>
              Gift Card Hub
            </Link>
            <div className='border-l active:shadow-sm active:shadow-black duration-200 transition-all px-1 hover:bg-slate-100 rounded-r-[4px] py-1 border-[#626262] flex items-center justify-center border-opacity-40 h-full'>
              <button
                className=''
                onClick={() => setTimeout(() => showSub(!sub), 0)}
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='#626262'
                  className={`${
                    sub ? "rotate-180" : ""
                  } duration-200 transition-all`}
                >
                  <path d='M12 15.8c-.2 0-.4-.1-.5-.2l-6-6c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l5.5 5.5 5.5-5.5c.3-.3.8-.3 1.1 0s.3.8 0 1.1l-6 6c-.3.1-.5.2-.7.2z'></path>
                </svg>
              </button>
            </div>
            {sub && (
              <div className='absolute z-[100] h-max min-w-full max-w-[580px] py-[1vh] left-0 top-full mt-3 bg-white border border-[#d8d8d8] rounded-[4px]'>
                {cryptos.map(({ name, src }) => {
                  return <BuyCrypto title={name} src={src} />;
                })}
              </div>
            )}
          </li>
        </OutsideClickHandler>
        <li
          className={`${listStyle} ${
            router.includes("/consultation") ? "text-docBlue" : ""
          }`}
        >
          <Link href={"/consultation"}>Become a Vendor</Link>
        </li>
      </ul>
      <div className='space-x-5 flex items-center'>
        <Link href={"/"} className='font-semibold text-[#333333]'>
          Log In
        </Link>
        <Link
          href={"/"}
          className='font-semibold text-white hover:bg-[#0091d2] bg-[#00a5ef] rounded-[4px] py-[.25rem] px-[1rem]'
        >
          Register
        </Link>
        <button className='min-h-[32px] hidden lg:flex items-center justify-center rounded-[4px] px-[.5rem] border border-[#d8d8d8]'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='#626262 '
            className='text-gray-700'
          >
            <path d='M16.4 14.4l-3-2c-.1-.1-.2-.1-.4-.1l-1.9-.1c-.2 0-.4.1-.6.2l-1.1 1.1c-.3.3-.3.6-.1.9l2 3c.1.2.4.3.6.3h3c.3 0 .5-.2.7-.4l1-2c.2-.3.1-.7-.2-.9zm-1.9 1.8h-2.1L11 14.1l.4-.4 1.4.1 2.2 1.5z'></path>
            <path d='M12 2.2c-5.4 0-9.8 4.4-9.8 9.8s4.4 9.8 9.8 9.8 9.8-4.4 9.8-9.8-4.4-9.8-9.8-9.8zm0 1.5c.4 0 .8 0 1.2.1l-.9 3.5-3.5 1c-.2 0-.4.2-.5.4l-.6 1.2-2.8-2.1C6.4 5.4 9 3.7 12 3.7zm0 16.5c-4.5 0-8.2-3.7-8.2-8.3 0-1 .2-2 .5-2.9l3.3 2.5c.1.1.3.1.4.1h.2c.2-.1.4-.2.5-.4l.8-1.7 3.7-.9c.3-.1.5-.3.5-.5l1-4c3.2 1.1 5.5 4.2 5.5 7.8 0 4.6-3.7 8.3-8.2 8.3z'></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
