import Image from "next/image";
import React from "react";

const BuyCrypto = ({ src, title }: { src: string; title: string }) => {
  return (
    <div className='flex items-center hover:bg-gray-400/10 rounded-[4px] py-3 mx-2 w-[33vw] max-w-[496px] justify-around'>
      <div className='relative w-[48px] h-[48px]'>
        <Image alt='coin' fill src={src} />
      </div>
      <div className='flex items-start w-[68%] flex-col'>
        <h4 className='font-bold  '>Buy with {title}</h4>
        <p className='font-normal text-[.875rem]'>{`Search for offers to buy Gift Cards with ${title}`}</p>
      </div>
      <div className='border min-w-[48px] flex items-center justify-center h-[48px] border-[#d8d8d8] border-opacity-50 rounded-[4px]'>
        <svg
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='currentColor'
          className='reflect-element'
        >
          <path
            fillRule='evenodd'
            d='M4.294 13.292l5.292-5.293-5.292-5.293a1 1 0 111.414-1.414l6 6a.99.99 0 01.277.53L12 7.94v.118a.996.996 0 01-.291.648l-6 6a1 1 0 11-1.414-1.414z'
            clipRule='evenodd'
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default BuyCrypto;
