"use client";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import Shop from "@/components/Shop";
import { useState } from "react";
import { Buy, sell } from "@/data/data";
import Images from "@/components/Images";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const serrat = Montserrat({
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
});

export default function Home() {
  const [buy, setBuy] = useState(false);
  return (
    <main className='w-full relative h-full'>
      <Navbar />
      <div className='bg-[#3db8f5] mt-[48px] lg:mt-0 p-[.5rem] center w-full lg:h-[60px]'>
        <Link href={"https://paxful.com/university/trade-gift-card-p2p-fee/"}>
          <h4
            style={serrat.style}
            className='mb-0 text-base font-semibold text-white text-center'
          >
            The best gift card deals are on Paxful:{" "}
            <strong>
              just 1% on <i>all</i> cards!
            </strong>
          </h4>
        </Link>
      </div>
      <section className='bg-appPurple px-[1rem] py-[20px] lg:py-[30px] flex flex-col lg:items-center  h-[75vh] lg:h-screen'>
        <h1
          style={serrat.style}
          className='text-lg lg:text-[75px] my-[.5rem] text-white font-[800] leading-[1.15]'
        >
          Trade Bitcoin On Paxful
        </h1>
        <div className='lg:text-[22px] mb-[.5rem] font-[300] leading-relaxed max-w-[960px] lg:text-center  text-white'>
          Join over 12 million people just like you on everyone&apos;s favorite
          peer-to-peer platform to buy and sell Bitcoin.
        </div>
        <Shop />
      </section>
      <section className='flex flex-col w-full  items-center py-[30px]'>
        <h2
          style={serrat.style}
          className='text-[#333] w-[85%] leading-snug lg:w-[540px] lg:text-center text-center text-[32px] font-bold mb-2 col-md-6 mx-auto'
        >
          Over 350 ways to buy and sell Bitcoin.
        </h2>
        <p className='small-text max-w-[680px] w-[85%] text-center text-[#333] mb-4 col-md-8 mx-auto'>
          Explore our Marketplace and start trading with your favorite payment
          methods or discover something new.
        </p>
        <div className='mt-4 flex justify-center items-center'>
          <button
            onClick={() => setBuy(false)}
            className={`px-[16px] py-[4px] border-b  ${
              !buy ? "border-appBlue" : "border-appAsh"
            } mr-[8px] text-[.857rem] text-[#626262] leading-[24px]  duration-200`}
          >
            Sell Bitcoin
          </button>
          <button
            onClick={() => setBuy(true)}
            className={`px-[16px] py-[4px] border-b  ${
              buy ? "border-appBlue" : "border-appAsh"
            } ml-[8px] text-[.857rem] text-[#626262] leading-[24px] duration-200 `}
          >
            Buy Bitcoin
          </button>
        </div>
        <div
          className={`mt-8 flex w-full lg:w-[80%] ${
            buy ? "justify-center lg:justify-start" : "justify-center"
          } mx-auto gap-[10px] lg:gap-[25px] px-[4.2%] flex-wrap `}
        >
          {!buy
            ? sell.map(({ title, desc, src }) => {
                return (
                  <Link
                    href={"/"}
                    key={title}
                    className='flex lg:flex-col items-center lg:items-start  lg:p-[24px] w-[98vw] lg:w-[344px] border h-[65.6] p-[16px] lg:h-[173.6px] rounded-[4px] border-appAsh'
                  >
                    <Images title={title} />
                    <strong
                      style={serrat.style}
                      className='text-[#494949] ml-4 lg:ml-0 my-2 text-base'
                    >
                      {title}
                    </strong>
                    <p className='text-xs hidden lg:flex  text-[#494949]'>
                      {desc}
                    </p>
                  </Link>
                );
              })
            : Buy.map(({ title, desc, src }) => {
                return (
                  <Link
                    key={title}
                    href={"/"}
                    className='flex lg:flex-col items-center lg:items-start  lg:p-[24px]  w-[98vw] lg:w-[344px] border h-[65.6] p-[16px] lg:h-[173.6px] rounded-[4px] border-appAsh'
                  >
                    <Images title={title} />
                    <strong
                      style={serrat.style}
                      className='text-[#494949] ml-4 lg:ml-0 my-2 text-base'
                    >
                      {title}
                    </strong>
                    <p className='text-xs hidden lg:flex text-[#494949]'>
                      {desc}
                    </p>
                  </Link>
                );
              })}
        </div>
        <Link
          href={"https://paxful.com/buy-bitcoin?hasScroll=true"}
          className='px-[16px] py-[12px] rounded-[8px] bg-appBlue hover:bg-[#0091d2] text-white font-semibold mt-8'
        >
          Start Trading
        </Link>
      </section>
      <section className='flex flex-col w-full  items-center py-[20px]'>
        <h2
          style={serrat.style}
          className='text-[#333] w-[85%] leading-normal lg:w-[540px] lg:text-center text-center text-[32px] font-bold mb-2 col-md-6 mx-auto'
        >
          Welcome to a financial system for the 100%.
        </h2>
        <div
          className={`mt-8 flex w-full lg:w-[80%] ${
            buy ? "justify-center lg:justify-start" : "justify-center"
          } mx-auto gap-[10px] lg:gap-[80px] px-[4.2%] flex-wrap `}
        >
          <div className='flex flex-col items-center'>
            <svg
              fill='none'
              viewBox='0 0 48 48'
              className='w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]'
            >
              <path
                fill='var(--icons-secondary, #454c59)'
                fillRule='evenodd'
                d='M27 19h2v2h2v-2h2v2.126a4.002 4.002 0 012.063 6.447A4 4 0 0133 35v2h-2v-2h-2v2h-2v-2h-2v-2h2V23h-2v-2h2v-2zm2 14h4a2 2 0 100-4h-4v4zm0-6h3a2 2 0 100-4h-3v4z'
                clipRule='evenodd'
              ></path>
              <path
                fill='var(--icons-secondary, #454c59)'
                fillRule='evenodd'
                d='M30 44c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zm0 2c9.941 0 18-8.059 18-18s-8.059-18-18-18-18 8.059-18 18 8.059 18 18 18z'
                clipRule='evenodd'
              ></path>
              <path
                fill='var(--icons-secondary, #454c59)'
                d='M4 8a2 2 0 012-2h20a2 2 0 012 2v18a2 2 0 01-2 2H6a2 2 0 01-2-2V8z'
                opacity='0.15'
              ></path>
              <path
                fill='var(--icons-bg-fill, #ffffff)'
                d='M1 5a2 2 0 012-2h20a2 2 0 012 2v18a2 2 0 01-2 2H3a2 2 0 01-2-2V5z'
              ></path>
              <path
                fill='#00A5EF'
                d='M25 6H6a2 2 0 00-2 2v17h21V6z'
                opacity='0.2'
              ></path>
              <path
                fill='var(--icons-primary, #0097db)'
                fillRule='evenodd'
                d='M0 5a3 3 0 013-3h20a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V5zm3-1a1 1 0 00-1 1v18a1 1 0 001 1h20a1 1 0 001-1V5a1 1 0 00-1-1H3z'
                clipRule='evenodd'
              ></path>
              <path
                fill='var(--icons-primary, #0097db)'
                d='M8 15a1 1 0 110-2h10a1 1 0 110 2H8z'
              ></path>
              <path
                fill='var(--icons-primary, #0097db)'
                fillRule='evenodd'
                d='M12.293 19.707a1 1 0 010-1.414L16.586 14l-4.293-4.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z'
                clipRule='evenodd'
              ></path>
            </svg>
            <strong
              style={serrat.style}
              className='text-[#494949] ml-4 lg:ml-0 my-2 text-base'
            >
              {"Buy Bitcoin"}
            </strong>
            <p className='mb-0 text-xs max-w-[296px] text-center text-[#333]'>
              <a
                className='text-appBlue2'
                href='https://paxful.com/buy-bitcoin'
              >
                Buy Bitcoin
              </a>{" "}
              from real people in our peer-to-peer Marketplace.
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <svg
              fill='none'
              viewBox='0 0 48 48'
              className='w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]'
            >
              <path
                fill='var(--icons-secondary, #454c59)'
                fillRule='evenodd'
                d='M27 19h2v2h2v-2h2v2.126a4.002 4.002 0 012.063 6.447A4 4 0 0133 35v2h-2v-2h-2v2h-2v-2h-2v-2h2V23h-2v-2h2v-2zm2 14h4a2 2 0 100-4h-4v4zm0-6h3a2 2 0 100-4h-3v4z'
                clipRule='evenodd'
              ></path>
              <path
                fill='var(--icons-secondary, #454c59)'
                fillRule='evenodd'
                d='M30 44c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zm0 2c9.941 0 18-8.059 18-18s-8.059-18-18-18-18 8.059-18 18 8.059 18 18 18z'
                clipRule='evenodd'
              ></path>
              <path
                fill='var(--icons-secondary, #454c59)'
                d='M4 8a2 2 0 012-2h20a2 2 0 012 2v18a2 2 0 01-2 2H6a2 2 0 01-2-2V8z'
                opacity='0.15'
              ></path>
              <path
                fill='var(--icons-bg-fill, #ffffff)'
                d='M1 5a2 2 0 012-2h20a2 2 0 012 2v18a2 2 0 01-2 2H3a2 2 0 01-2-2V5z'
              ></path>
              <path
                fill='#00A5EF'
                d='M25 6H6a2 2 0 00-2 2v17h21V6z'
                opacity='0.2'
              ></path>
              <path
                fill='var(--icons-primary, #0097db)'
                fillRule='evenodd'
                d='M0 5a3 3 0 013-3h20a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V5zm3-1a1 1 0 00-1 1v18a1 1 0 001 1h20a1 1 0 001-1V5a1 1 0 00-1-1H3z'
                clipRule='evenodd'
              ></path>
              <path
                fill='var(--icons-primary, #0097db)'
                d='M8 15a1 1 0 110-2h10a1 1 0 110 2H8z'
              ></path>
              <path
                fill='var(--icons-primary, #0097db)'
                fillRule='evenodd'
                d='M12.293 19.707a1 1 0 010-1.414L16.586 14l-4.293-4.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z'
                clipRule='evenodd'
              ></path>
            </svg>
            <strong
              style={serrat.style}
              className='text-[#494949] ml-4 lg:ml-0 my-2 text-base'
            >
              {"Sell Bitcoin"}
            </strong>
            <p className='mb-0 text-xs max-w-[296px] text-center text-[#333]'>
              Set your own rates and choose how you want to be paid.
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <svg
              fill='none'
              viewBox='0 0 48 48'
              className='w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]'
            >
              <path
                fill='var(--icons-secondary, #454c59)'
                fillRule='evenodd'
                d='M23.329 43.012l3.372 2.88a2 2 0 002.598 0l16-13.659A2 2 0 0046 30.712V9.76a2 2 0 00-1.663-1.972l-5.562-.95A2 2 0 0139 7.76v20.95a2 2 0 01-.702 1.522l-14.97 12.78z'
                clipRule='evenodd'
                opacity='0.15'
              ></path>
              <path
                fill='var(--icons-secondary, #454c59)'
                fillRule='evenodd'
                d='M21 1.985l16.505 2.818A3 3 0 0140 7.761v20.95a3 3 0 01-1.052 2.283l-16 13.658a3 3 0 01-3.896 0l-16-13.659A3 3 0 012 28.713V7.76a3 3 0 012.495-2.958L21 1.985zm0 2.03L4.832 6.774A1 1 0 004 7.76v20.95a1 1 0 00.35.761l16 13.659a1 1 0 001.3 0l16-13.659a1 1 0 00.35-.76V7.76a1 1 0 00-.832-.986L21 4.015z'
                clipRule='evenodd'
              ></path>
              <path
                fill='var(--icons-bg-fill, #ffffff)'
                d='M9 12.736a2 2 0 011.663-1.971L21 9l10.337 1.765A2 2 0 0133 12.736v13.098a2 2 0 01-.702 1.52l-10 8.538a2 2 0 01-2.596 0l-10-8.537A2 2 0 019 25.834V12.736z'
              ></path>
              <path
                fill='#00A5EF'
                d='M12 15.663a2 2 0 011.578-1.955L21.5 12l9.925 2.158A2 2 0 0133 16.112v8.98a2 2 0 01-.683 1.506l-10.032 8.777a2 2 0 01-2.597.032L12.72 29.6a2 2 0 01-.72-1.537v-12.4z'
                opacity='0.2'
              ></path>
              <path
                fill='var(--icons-primary, #0097db)'
                fillRule='evenodd'
                d='M21 7.985L31.505 9.78A3 3 0 0134 12.736v13.098a3 3 0 01-1.052 2.281l-10 8.537a3 3 0 01-3.896 0l-10-8.537A3 3 0 018 25.834V12.736a3 3 0 012.495-2.957L21 7.985zm0 2.03L10.832 11.75a1 1 0 00-.832.985v13.098a1 1 0 00.35.76l10 8.537a1 1 0 001.3 0l10-8.537a1 1 0 00.35-.76V12.736a1 1 0 00-.832-.986L21 10.014z'
                clipRule='evenodd'
              ></path>
              <path
                fill='var(--icons-bg-fill, #ffffff)'
                d='M24 21a3 3 0 11-6 0 3 3 0 016 0z'
              ></path>
              <path
                fill='var(--icons-primary, #0097db)'
                fillRule='evenodd'
                d='M21 19a2 2 0 100 4 2 2 0 000-4zm-4 2a4 4 0 118 0 4 4 0 01-8 0z'
                clipRule='evenodd'
              ></path>
            </svg>
            <strong
              style={serrat.style}
              className='text-[#494949] ml-4 lg:ml-0 my-2 text-base'
            >
              {"Secure Trading"}
            </strong>
            <p className='mb-0 text-xs max-w-[296px] text-center text-[#333]'>
              Bitcoin is held in secure escrow until a trade is successfully
              completed.
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <svg
              fill='none'
              viewBox='0 0 48 48'
              className='w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]'
            >
              <path
                fill='var(--icons-bg-fill, #ffffff)'
                fillRule='evenodd'
                d='M11.273 8.545c1.07-2.332 4.384-2.332 5.454 0l1.27 2.77A11 11 0 0119 15.903V28L9 40V15.903c0-1.584.342-3.149 1.002-4.588l1.271-2.77z'
                clipRule='evenodd'
              ></path>
              <path
                fill='#00A5EF'
                d='M13 15.99V35.5l5-6.5V14l-2.5-5.5-1.518 3.169a10 10 0 00-.982 4.32z'
                opacity='0.2'
              ></path>
              <path
                fill='var(--icons-primary, #0097db)'
                fillRule='evenodd'
                d='M13.091 9.379a1 1 0 011.818 0l1.271 2.77a9 9 0 01.82 3.754V16h-6v-.097a9 9 0 01.82-3.754l1.271-2.77zM11 18v20l-2 2V15.903c0-1.584.342-3.149 1.002-4.588l1.271-2.77c1.07-2.332 4.384-2.332 5.454 0l1.27 2.77A11 11 0 0119 15.903V30.5h-2V18h-6z'
                clipRule='evenodd'
              ></path>
              <path
                fill='var(--icons-bg-fill, #ffffff)'
                fillRule='evenodd'
                d='M31.273 8.545c1.07-2.332 4.384-2.332 5.454 0l1.27 2.77A11 11 0 0139 15.903V40L29 28V15.903a11 11 0 011.002-4.588l1.271-2.77z'
                clipRule='evenodd'
              ></path>
              <path
                fill='#00A5EF'
                d='M35 15.99V35.5L30 29V14l2.5-5.5 1.518 3.169a10 10 0 01.982 4.32z'
                opacity='0.2'
              ></path>
              <path
                fill='var(--icons-primary, #0097db)'
                fillRule='evenodd'
                d='M33.091 9.379a1 1 0 011.818 0l1.271 2.77a9 9 0 01.82 3.754V16h-6v-.097a9 9 0 01.82-3.754l1.271-2.77zM31 18v12.5h-2V15.903a11 11 0 011.002-4.588l1.271-2.77c1.07-2.332 4.384-2.332 5.454 0l1.27 2.77A11 11 0 0139 15.903V40l-2-2V18h-6z'
                clipRule='evenodd'
              ></path>
              <path
                fill='var(--icons-secondary, #454c59)'
                fillRule='evenodd'
                d='M25.747 1.081c-.762-1.369-2.732-1.369-3.494 0L18.39 8.013A11 11 0 0017 13.367v15.304l-6.653 9.03-5.553 2.578C1.879 41.632 2.844 46 6.057 46H19v-3h10v3h12.943c3.213 0 4.178-4.368 1.263-5.721l-5.553-2.578L31 28.67V13.367a11 11 0 00-1.39-5.354l-3.863-6.932zm-5.61 7.906L24 2.055l3.862 6.932A9 9 0 0129 13.367V41H19V13.367a9 9 0 011.138-4.38zM17 32.043l-5.347 7.256-6.017 2.794c-.972.451-.65 1.907.42 1.907H17V32.043zm14 0l5.347 7.256 6.017 2.794c.972.451.65 1.907-.42 1.907H31V32.043z'
                clipRule='evenodd'
              ></path>
              <path
                fill='var(--icons-secondary, #454c59)'
                fillRule='evenodd'
                d='M24 13a1 1 0 00-1 1h-2a3 3 0 116 0h-2a1 1 0 00-1-1z'
                clipRule='evenodd'
              ></path>
              <path
                fill='var(--icons-secondary, #454c59)'
                d='M23 20a1 1 0 112 0v13a1 1 0 11-2 0V20z'
              ></path>
              <path
                fill='var(--icons-bg-fill, #ffffff)'
                d='M22 38a4.998 4.998 0 014.334 2.505A2.986 2.986 0 0128 40c.675 0 1.299.223 1.8.6a4.003 4.003 0 012.256-1.488 7.001 7.001 0 0113.893.041A3.001 3.001 0 0148 42v1a5 5 0 01-5 5H5a5 5 0 01-5-5v-1c0-1.325.86-2.45 2.05-2.847a7.001 7.001 0 0113.894-.04 3.995 3.995 0 011.913 1.087A4.995 4.995 0 0122 38z'
              ></path>
              <path
                fill='#00A5EF'
                d='M22 43a4.998 4.998 0 014.334 2.505A2.986 2.986 0 0128 45c.675 0 1.299.223 1.8.6a4.003 4.003 0 012.256-1.488 7.001 7.001 0 0113.893.041C48.5 47 44 45.675 44 47H4c0-1.325-4 0-1.95-2.847a7.001 7.001 0 0113.894-.04 3.995 3.995 0 011.913 1.087A4.995 4.995 0 0122 43z'
                opacity='0.2'
              ></path>
              <path
                fill='var(--icons-primary, #0097db)'
                fillRule='evenodd'
                d='M9 35a5 5 0 00-5 5 1 1 0 01-1 1 1 1 0 00-1 1v2a2 2 0 002 2h40a2 2 0 002-2v-2a1 1 0 00-1-1 1 1 0 01-1-1 5 5 0 00-10 0 1 1 0 01-1 1 2 2 0 00-2 2 1 1 0 11-2 0 1 1 0 10-2 0 1 1 0 11-2 0 3 3 0 10-6 0 1 1 0 11-2 0 2 2 0 00-2-2 1 1 0 01-1-1 5 5 0 00-5-5zm17.334 5.505A4.998 4.998 0 0022 38a4.995 4.995 0 00-4.143 2.2 3.995 3.995 0 00-1.913-1.088 7.001 7.001 0 00-13.893.041A3.001 3.001 0 000 42v2a4 4 0 004 4h40a4 4 0 004-4v-2c0-1.325-.86-2.45-2.05-2.847a7.001 7.001 0 00-13.894-.04A4.003 4.003 0 0029.8 40.6 2.987 2.987 0 0028 40c-.616 0-1.19.186-1.666.505z'
                clipRule='evenodd'
              ></path>
            </svg>
            <strong
              style={serrat.style}
              className='text-[#494949] ml-4 lg:ml-0 my-2 text-base'
            >
              {"Valueable feedback"}
            </strong>
            <p className='mb-0 text-xs max-w-[296px] text-center text-[#333]'>
              Our feedback system highlights reliable, experienced users,
              helping you to trade smoothly.
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <svg
              fill='none'
              viewBox='0 0 48 48'
              className='w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]'
            >
              <path
                fill='var(--icons-secondary, #454c59)'
                fillRule='evenodd'
                d='M30 4a3 3 0 100 6 3 3 0 000-6zm-5 3a5 5 0 1110 0 5 5 0 01-10 0zM8 16a3 3 0 00-3 3v24a3 3 0 003 3h30a3 3 0 003-3V23a3 3 0 00-3-3h-1v-1a3 3 0 00-3-3H8zm27 4v-1a1 1 0 00-1-1H8a1 1 0 00-1 1v1h28zM7 22v21a1 1 0 001 1h30a1 1 0 001-1V23a1 1 0 00-1-1H7z'
                clipRule='evenodd'
              ></path>
              <path
                fill='var(--icons-bg-fill, #ffffff)'
                d='M33 32a2 2 0 012-2h6a2 2 0 012 2v2a2 2 0 01-2 2h-6a2 2 0 01-2-2v-2z'
              ></path>
              <path
                fill='var(--icons-secondary, #454c59)'
                fillRule='evenodd'
                d='M32 32a3 3 0 013-3h6a3 3 0 013 3v2a3 3 0 01-3 3h-6a3 3 0 01-3-3v-2zm3-1a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1v-2a1 1 0 00-1-1h-6z'
                clipRule='evenodd'
              ></path>
              <path
                fill='var(--icons-secondary, #454c59)'
                d='M32 21c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11z'
                opacity='0.15'
              ></path>
              <path
                fill='var(--icons-bg-fill, #ffffff)'
                d='M32 16c0 6.075-4.925 11-11 11s-11-4.925-11-11S14.925 5 21 5s11 4.925 11 11z'
              ></path>
              <path
                fill='var(--icons-primary, #0097db)'
                fillRule='evenodd'
                d='M21 6c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10S26.523 6 21 6zM9 16C9 9.373 14.373 4 21 4s12 5.373 12 12-5.373 12-12 12S9 22.627 9 16z'
                clipRule='evenodd'
              ></path>
              <path
                fill='#00A5EF'
                d='M32 17.429c0 5.207-4.925 9.428-11 9.428s-11-4.221-11-9.428C10 12.22 14.925 8 21 8s11 4.221 11 9.429z'
                opacity='0.2'
              ></path>
              <path
                fill='var(--icons-primary, #0097db)'
                fillRule='evenodd'
                d='M18.414 18.606v-6.485H17v-2h1.414V9h1.414v1.121h1.414V9h1.415v1.202a3.122 3.122 0 011.878 4.79 3.121 3.121 0 01-1.878 5.614v1.121h-1.415v-1.12h-1.414v1.12h-1.414v-1.12H17v-2h1.414zm1.414 0h2.829a1.121 1.121 0 000-2.242h-2.829v2.242zm0-4.242V12.12h2.122a1.121 1.121 0 010 2.243h-2.122z'
                clipRule='evenodd'
              ></path>
              <path
                fill='var(--icons-secondary, #454c59)'
                d='M10 26a1 1 0 112 0v11a1 1 0 11-2 0V26z'
              ></path>
            </svg>
            <strong
              style={serrat.style}
              className='text-[#494949] ml-4 lg:ml-0 my-2 text-base'
            >
              {"Free Paxful Wallet"}
            </strong>
            <p className='mb-0 text-xs max-w-[296px] text-center text-[#333]'>
              Get a free{" "}
              <a
                className='text-appBlue2'
                href='https://paxful.com/bitcoin-wallet'
              >
                Paxful Wallet
              </a>{" "}
              when you sign up to receive, send, and store your Bitcoin safely.
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <svg
              fill='none'
              viewBox='0 0 48 48'
              className='w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]'
            >
              <path
                fill='var(--icons-secondary, #454c59)'
                d='M33 17a9 9 0 11-18 0 9 9 0 0118 0z'
                opacity='0.15'
              ></path>
              <path
                fill='var(--icons-bg-fill, #ffffff)'
                d='M33 12a9 9 0 11-18 0 9 9 0 0118 0z'
              ></path>
              <path
                fill='#00A5EF'
                d='M33 13.5c0 4.142-4.03 7.5-9 7.5s-9-3.358-9-7.5C15 9.358 19.03 6 24 6s9 3.358 9 7.5z'
                opacity='0.2'
              ></path>
              <path
                fill='var(--icons-bg-fill, #ffffff)'
                d='M27 10a3 3 0 11-6 0 3 3 0 016 0z'
              ></path>
              <path
                fill='var(--icons-primary, #0097db)'
                fillRule='evenodd'
                d='M24 8a2 2 0 100 4 2 2 0 000-4zm-4 2a4 4 0 118 0 4 4 0 01-8 0z'
                clipRule='evenodd'
              ></path>
              <path
                fill='var(--icons-primary, #0097db)'
                fillRule='evenodd'
                d='M16 12a8 8 0 1113.253 6.034 4.705 4.705 0 00-1.203-1.013C26.965 16.371 25.53 16 24 16c-1.53 0-2.965.37-4.05 1.021-.451.271-.87.61-1.203 1.012A7.982 7.982 0 0116 12zm4.423 7.158A7.967 7.967 0 0024 20c1.286 0 2.5-.303 3.577-.842a2.912 2.912 0 00-.556-.422C26.296 18.301 25.231 18 24 18c-1.23 0-2.296.301-3.021.736-.232.14-.415.282-.556.422zM24 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10S29.523 2 24 2z'
                clipRule='evenodd'
              ></path>
              <path
                fill='var(--icons-secondary, #454c59)'
                fillRule='evenodd'
                d='M8 36a4 4 0 100 8 4 4 0 000-8zm-6 4a6 6 0 1112 0 6 6 0 01-12 0zm38-4a4 4 0 100 8 4 4 0 000-8zm-6 4a6 6 0 1112 0 6 6 0 01-12 0zm-10-4a4 4 0 100 8 4 4 0 000-8zm-6 4a6 6 0 1112 0 6 6 0 01-12 0z'
                clipRule='evenodd'
              ></path>
              <path
                fill='var(--icons-secondary, #454c59)'
                d='M13.5 22.902a1 1 0 111.732 1l-4 6.928a1 1 0 01-1.732-1l4-6.928zm20.732 0a1 1 0 00-1.732 1l4 6.928a1 1 0 101.732-1l-4-6.928zM23 31a1 1 0 102 0v-6a1 1 0 10-2 0v6z'
              ></path>
            </svg>
            <strong
              style={serrat.style}
              className='text-[#494949] ml-4 lg:ml-0 my-2 text-base'
            >
              {"Invite friends"}
            </strong>
            <p className='mb-0 text-xs max-w-[296px] text-center text-[#333]'>
              Get your friends and family to{" "}
              <a
                className='text-appBlue2'
                href='https://paxful.com/bitcoin-affiliate-program'
              >
                sign up
              </a>{" "}
              for Paxful.
            </p>
          </div>
        </div>
      </section>
      <section className='flex flex-col w-full mt-8   items-center py-[20px]'>
        <h2
          style={serrat.style}
          className='text-[#333] w-[85%] leading-snug lg:w-[540px] lg:text-center text-center text-[32px] font-bold mb-2 col-md-6 mx-auto'
        >
          Ready to get started?
        </h2>
        <p className='small-text max-w-[680px] w-[85%] text-center text-[#333] mb-4 col-md-8 mx-auto'>
          Explore thousands of offers to buy and sell Bitcoin to kickstart your
          trading journey.
        </p>
        <Link
          href={"https://paxful.com/register"}
          className='px-[16px] hover:bg-[#0091d2] py-[12px] rounded-[8px] bg-appBlue text-white font-semibold mt-4'
        >
          Create Your Account
        </Link>
        <div className='w-full lg:w-[70%] relative mt-1 h-[30vh]'>
          <Image className='object-cover' src={"/bg.webp"} fill alt='bg' />
        </div>
      </section>
      <Footer />
    </main>
  );
}
