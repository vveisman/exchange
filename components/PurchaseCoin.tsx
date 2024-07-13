import Image from "next/image";
import React from "react";

const PurchaseCoin = ({
  src,
  title,
  symbol,
  setSymbol,
}: {
  src: string;
  title: string;
  symbol: string;
  setSymbol: any;
}) => {
  return (
    <button
      onClick={() => setSymbol(symbol)}
      className='flex items-center hover:bg-gray-400/10 rounded-[4px] py-3 px-2 w-full justify-between'
    >
      <div className='flex space-x-4 items-center'>
        <div className='relative w-[24px] h-[24px]'>
          <Image alt='coin' fill src={src} />
        </div>
        <h4 className='font-[400]'>{title}</h4>
      </div>
      <p className='px-[11px] py-[3px] border rounded-[4px] border-appAsh'>
        {symbol}
      </p>
    </button>
  );
};

export default PurchaseCoin;
