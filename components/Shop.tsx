"use client";
import { cryptos, payments } from "@/data/data";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import PurchaseCoin from "./PurchaseCoin";
import OutsideClickHandler from "react-outside-click-handler";

const Shop = () => {
  const [open, setOpen] = useState(false);
  const [symbol, setSymbol] = useState("");
  const [price, setPrice] = useState<number | string>(0);

  useEffect(() => {
    const getPrice = async () => {
      const url = `https://data-api.binance.vision/api/v3/ticker/price?symbol=${symbol.toUpperCase()}USDT`;
      const options = {
        method: "GET",
        headers: { accept: "application/json" },
      };
      const res = await fetch(url, options);
      const data = await res.json();
      console.log(data);
      setPrice(Number(data.price).toFixed(2));
    };

    getPrice();
  }, [symbol]);
  return (
    <div className='mx-auto max-w-[526px] pt-[1rem] pb-[2rem] px-[2rem] w-full flex flex-col h-auto items-center rounded-lg bg-white'>
      <div className='space-x-5'>
        <button className='rounded-[4px] min-h-[32px] hover:bg-[#0091d2] text-[.875rem] font-semibold min-w-[89.63px] text-white bg-appBlue'>
          Buy
        </button>
        <button className='rounded-[4px] border border-appash text-[.875rem] font-semibold min-h-[32px] min-w-[89.63px] text-[#333]'>
          Sell
        </button>
      </div>
      <OutsideClickHandler
        display='contents'
        onOutsideClick={() => setOpen(false)}
      >
        <button
          onClick={() => setOpen(!open)}
          className='w-[100%] relative px-2 cursor-pointer active:shadow-sm active:shadow-appAsh flex justify-between items-center mt-4 h-[49.6px] hover:bg-[#f8f8f8] active:bg-[#f8f8f8] rounded-[4px] border border-appAsh'
        >
          <div className='flex'>
            <Image
              alt='coin'
              width={16}
              height={16}
              src={
                cryptos.find((item) => item.symbol == symbol)?.src ||
                "/bitcoin.svg"
              }
            />
            <h4 className='text-[#333] ml-2'>
              {cryptos.find((item) => item.symbol == symbol)?.name || "Bitcoin"}
            </h4>
          </div>
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='#626262'
            className={`${
              open ? "rotate-180" : ""
            } duration-200 transition-all`}
            //   className='text-gray-500 flex-shrink-0'
          >
            <path
              fill-rule='evenodd'
              d='M2.707 4.293L8 9.585l5.293-5.292a1 1 0 111.414 1.414l-6 6a.996.996 0 01-.53.277l-.118.014h-.118a.997.997 0 01-.648-.29l-6-6a1 1 0 011.414-1.415z'
              clip-rule='evenodd'
            ></path>
          </svg>
          {open && (
            <div className='absolute z-[100] h-max min-w-full max-w-[580px] py-[1vh] left-0 top-full mt-3 bg-white border border-[#d8d8d8] rounded-[4px]'>
              {cryptos.map(({ name, src, symbol }) => {
                return (
                  <PurchaseCoin
                    key={symbol}
                    setSymbol={setSymbol}
                    symbol={symbol}
                    title={name}
                    src={src}
                  />
                );
              })}
            </div>
          )}
        </button>
        <p className='self-start mt-1 flex items-center text-[#848484]'>
          1 {symbol} = <span className='text-[#0052cc]'>{price} USD</span>{" "}
          <span>
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='#0052cc'
              className='reflect-element ml-1 cursor-pointer'
            >
              <path
                fill-rule='evenodd'
                d='M16 8.2V4c0-.6-.4-1-1-1h-4.2c-.6 0-1 .4-1 1s.4 1 1 1h1.8l-1.3 1.3-1.2 1.2L8 9.6 5.9 7.4c-.5-.4-1.3-.4-1.8 0L.7 10.8c-.4.4-.4 1 0 1.4s1 .4 1.4 0L5 9.4l2.1 2.1c.5.5 1.2.5 1.7 0L11.5 9l1.2-1.2L14 6.4v1.8c0 .6.4 1 1 1s1-.4 1-1z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </span>
        </p>
      </OutsideClickHandler>
      <div className='flex flex-col w-full'>
        <p className='font-semibold mt-4 text-[#333] mb-2'>Pay with</p>

        <button
          //   onClick={() => setOpen(!open)}
          className='w-[100%] relative px-2 cursor-pointer active:shadow-sm active:shadow-appAsh flex justify-between items-center h-[49.6px] hover:bg-[#f8f8f8] active:bg-[#f8f8f8] rounded-[4px] border border-appAsh'
        >
          <h4 className='text-[#333] ml-2'>Select payment method (350+)</h4>
          <button className='border font-semibold text-[#333] border-appBlue rounded-[4px] px-[12px] py-[3px]'>
            Show All
          </button>
        </button>
        <div className='flex items-center overflow-x-scroll justify-between mt-2'>
          {payments.map((item) => (
            <p
              key={item}
              className='border text-[#333] whitespace-nowrap mr-2 lg:mr-0  text-[11px] px-[7px] py-[3px] border-appAsh rounded-[4px] font-semibold'
            >
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className='flex flex-col mt-4 w-full'>
        <p className='font-semibold text-[#333] mb-2'>I want to spend</p>

        <button
          //   onClick={() => setOpen(!open)}
          className='w-[100%] relative px-2 cursor-pointer active:shadow-sm active:shadow-appAsh flex justify-between items-center h-[49.6px] hover:bg-[#f8f8f8] active:bg-[#f8f8f8] rounded-[4px] border border-appAsh'
        >
          <h4 className='text-[#333] ml-2'>Enter Amount</h4>
          <p className='border flex items-center text-[#333] font-semibold border-appBlue rounded-[4px] px-[12px] py-[3px]'>
            USD
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='#00a5ef'
              className='flex-shrink-0 ml-2 ml-xs-2_5 _7jVIO'
            >
              <path
                fill-rule='evenodd'
                d='M2.707 4.293L8 9.585l5.293-5.292a1 1 0 111.414 1.414l-6 6a.996.996 0 01-.53.277l-.118.014h-.118a.997.997 0 01-.648-.29l-6-6a1 1 0 011.414-1.415z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </p>
        </button>
        <p className='text-[#333] mt-1'>Minimum: 10 USD</p>
      </div>
      <button className='w-full bg-appBlue hover:bg-[#0091d2] rounded-[4px] mt-4 text-white font-semibold py-[11px]'>
        Find Offers
      </button>
    </div>
  );
};

export default Shop;
