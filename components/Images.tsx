import React from "react";

const Images = ({ title }: { title: string }) => {
  switch (title) {
    case "Bank Transfer":
      return (
        <svg
          fill='none'
          viewBox='0 0 48 48'
          className='w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]'
        >
          <path
            fill='var(--icons-bg-fill, #ffffff)'
            d='M9 19h6v19H9V19zm12 0h6v19h-6V19zm12 0h6v19h-6V19z'
          ></path>
          <path fill='#00A5EF' fill-opacity='0.2' d='M9 19h6v19H9V19z'></path>
          <path
            fill='var(--icons-primary, #0097db)'
            fill-rule='evenodd'
            d='M8 18h8v21H8V18zm2 2v17h4V20h-4z'
            clip-rule='evenodd'
          ></path>
          <path fill='#00A5EF' fill-opacity='0.2' d='M33 19h6v19h-6V19z'></path>
          <path
            fill='var(--icons-primary, #0097db)'
            fill-rule='evenodd'
            d='M32 18h8v21h-8V18zm2 2v17h4V20h-4z'
            clip-rule='evenodd'
          ></path>
          <path fill='#00A5EF' fill-opacity='0.2' d='M21 19h6v19h-6V19z'></path>
          <path
            fill='var(--icons-primary, #0097db)'
            fill-rule='evenodd'
            d='M20 18h8v21h-8V18zm2 2v17h4V20h-4z'
            clip-rule='evenodd'
          ></path>
          <path
            fill='var(--icons-secondary, #454c59)'
            fill-rule='evenodd'
            d='M8 37a3 3 0 00-3 3v1a3 3 0 00-3 3v2h2v-2a1 1 0 011-1h38a1 1 0 011 1v2h2v-2a3 3 0 00-3-3v-1a3 3 0 00-3-3H8zm33 4v-1a1 1 0 00-1-1H8a1 1 0 00-1 1v1h34z'
            clip-rule='evenodd'
          ></path>
          <path
            fill='var(--icons-secondary, #454c59)'
            d='M8 19h8v3H8zm12 0h8v3h-8zm12 0h8v3h-8z'
            opacity='0.15'
          ></path>
          <path
            fill='var(--icons-secondary, #454c59)'
            fill-rule='evenodd'
            d='M22.235 3.047a3 3 0 013.53 0L44.1 16.383c1.567 1.139.76 3.617-1.176 3.617H5.075c-1.937 0-2.743-2.478-1.176-3.617L22.235 3.047zm2.353 1.617a1 1 0 00-1.176 0L5.075 18h37.85L24.588 4.664z'
            clip-rule='evenodd'
          ></path>
        </svg>
      );
      break;
    case "Cash Payments":
      return (
        <svg
          fill='none'
          viewBox='0 0 48 48'
          className='w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]'
        >
          <path
            fill='var(--icons-secondary, #454c59)'
            fill-rule='evenodd'
            d='M10 23a3 3 0 013-3h32a3 3 0 013 3v16a3 3 0 01-3 3H13a3 3 0 01-3-3V23zm3-1a1 1 0 00-1 1v16a1 1 0 001 1h32a1 1 0 001-1V23a1 1 0 00-1-1H13z'
            clip-rule='evenodd'
          ></path>
          <path
            fill='var(--icons-secondary, #454c59)'
            fill-rule='evenodd'
            d='M29 34a3 3 0 100-6 3 3 0 000 6zm0 2a5 5 0 100-10 5 5 0 000 10z'
            clip-rule='evenodd'
          ></path>
          <path
            fill='var(--icons-secondary, #454c59)'
            d='M10 18a2 2 0 012-2h28a2 2 0 012 2v13a2 2 0 01-2 2H10V18z'
            opacity='0.15'
          ></path>
          <path
            fill='var(--icons-bg-fill, #ffffff)'
            d='M1 9a2 2 0 012-2h32a2 2 0 012 2v16a2 2 0 01-2 2H3a2 2 0 01-2-2V9z'
          ></path>
          <path
            fill='#00A5EF'
            d='M4 12a2 2 0 012-2h31v17H4V12z'
            opacity='0.2'
          ></path>
          <path
            fill='var(--icons-primary, #0097db)'
            fill-rule='evenodd'
            d='M0 9a3 3 0 013-3h32a3 3 0 013 3v16a3 3 0 01-3 3H3a3 3 0 01-3-3V9zm3-1a1 1 0 00-1 1v16a1 1 0 001 1h32a1 1 0 001-1V9a1 1 0 00-1-1H3z'
            clip-rule='evenodd'
          ></path>
          <path
            fill='var(--icons-bg-fill, #ffffff)'
            d='M23 17a4 4 0 11-8 0 4 4 0 018 0z'
          ></path>
          <path
            fill='var(--icons-primary, #0097db)'
            fill-rule='evenodd'
            d='M19 14a3 3 0 100 6 3 3 0 000-6zm-5 3a5 5 0 1110 0 5 5 0 01-10 0z'
            clip-rule='evenodd'
          ></path>
        </svg>
      );
    case "Online wallets":
      return (
        <svg
          fill='none'
          viewBox='0 0 48 48'
          className='w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]'
        >
          <path
            fill='var(--icons-secondary, #454c59)'
            d='M7 9a2 2 0 012-2h30a2 2 0 012 2v17a2 2 0 01-2 2H9a2 2 0 01-2-2V9z'
            opacity='0.15'
          ></path>
          <path
            fill='var(--icons-bg-fill, #ffffff)'
            d='M6 5a2 2 0 012-2h32a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V5z'
          ></path>
          <path
            fill='#00A5EF'
            d='M9 9a2 2 0 012-2h26a2 2 0 012 2v14H9V9z'
            opacity='0.2'
          ></path>
          <path
            fill='var(--icons-primary, #0097db)'
            fill-rule='evenodd'
            d='M5 5a3 3 0 013-3h32a3 3 0 013 3v16a3 3 0 01-3 3H8a3 3 0 01-3-3V5zm3-1a1 1 0 00-1 1v16a1 1 0 001 1h32a1 1 0 001-1V5a1 1 0 00-1-1H8z'
            clip-rule='evenodd'
          ></path>
          <path
            fill='var(--icons-bg-fill, #ffffff)'
            d='M29 13a5 5 0 11-10 0 5 5 0 0110 0z'
          ></path>
          <path
            fill='var(--icons-primary, #0097db)'
            fill-rule='evenodd'
            d='M24 16a3 3 0 100-6 3 3 0 000 6zm0 2a5 5 0 100-10 5 5 0 000 10z'
            clip-rule='evenodd'
          ></path>
          <path
            fill='var(--icons-secondary, #454c59)'
            d='M29 35a1 1 0 112 0v10a1 1 0 11-2 0V35zm-6-4a1 1 0 112 0v7a1 1 0 11-2 0v-7zm-12 0a1 1 0 112 0v4a1 1 0 11-2 0v-4zm24 0a1 1 0 112 0v6a1 1 0 11-2 0v-6zm-18 2a1 1 0 112 0v9a1 1 0 11-2 0v-9z'
          ></path>
        </svg>
      );
    case "Discounted gift cards":
      return (
        <svg
          fill='none'
          viewBox='0 0 48 48'
          className='w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]'
        >
          <path
            fill='var(--icons-secondary, #454c59)'
            fill-rule='evenodd'
            d='M10 9a3 3 0 013-3h32a3 3 0 013 3v18a3 3 0 01-3 3H13a3 3 0 01-3-3V9zm3-1a1 1 0 00-1 1v18a1 1 0 001 1h32a1 1 0 001-1V9a1 1 0 00-1-1H13z'
            clip-rule='evenodd'
          ></path>
          <path
            fill='var(--icons-secondary, #454c59)'
            fill-rule='evenodd'
            d='M26 14a1 1 0 100 2 1 1 0 000-2zm-3 1a3 3 0 116 0 3 3 0 01-6 0zm11 5a1 1 0 100 2 1 1 0 000-2zm-3 1a3 3 0 116 0 3 3 0 01-6 0z'
            clip-rule='evenodd'
          ></path>
          <path
            fill='var(--icons-secondary, #454c59)'
            d='M32.778 13.707a1 1 0 011.414 1.414l-7.07 7.071a1 1 0 01-1.415-1.414l7.071-7.07z'
          ></path>
          <path
            fill='var(--icons-secondary, #454c59)'
            d='M11 14h28a2 2 0 012 2v16a2 2 0 01-2 2H13a2 2 0 01-2-2V14z'
            opacity='0.15'
          ></path>
          <path
            fill='var(--icons-bg-fill, #ffffff)'
            d='M1 21a2 2 0 012-2h32a2 2 0 012 2v18a2 2 0 01-2 2H3a2 2 0 01-2-2V21z'
          ></path>
          <path
            fill='#00A5EF'
            d='M4 36a2 2 0 002 2h31V19H4v17z'
            opacity='0.2'
          ></path>
          <path
            fill='var(--icons-primary, #0097db)'
            fill-rule='evenodd'
            d='M0 21a3 3 0 013-3h32a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V21zm3-1a1 1 0 00-1 1v18a1 1 0 001 1h32a1 1 0 001-1V21a1 1 0 00-1-1H3z'
            clip-rule='evenodd'
          ></path>
          <path
            fill='var(--icons-primary, #0097db)'
            fill-rule='evenodd'
            d='M16 26a1 1 0 100 2 1 1 0 000-2zm-3 1a3 3 0 116 0 3 3 0 01-6 0zm11 5a1 1 0 100 2 1 1 0 000-2zm-3 1a3 3 0 116 0 3 3 0 01-6 0z'
            clip-rule='evenodd'
          ></path>
          <path
            fill='var(--icons-primary, #0097db)'
            d='M22.778 25.707a1 1 0 011.414 1.414l-7.07 7.071a1 1 0 01-1.415-1.414l7.071-7.07z'
          ></path>
        </svg>
      );
    case "Gift cards":
      return (
        <svg
          fill='none'
          viewBox='0 0 48 48'
          className='w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]'
        >
          <path
            fill='var(--icons-secondary, #454c59)'
            fill-rule='evenodd'
            d='M10 9a3 3 0 013-3h32a3 3 0 013 3v18a3 3 0 01-3 3H13a3 3 0 01-3-3V9zm3-1a1 1 0 00-1 1v18a1 1 0 001 1h32a1 1 0 001-1V9a1 1 0 00-1-1H13z'
            clip-rule='evenodd'
          ></path>
          <path
            fill='var(--icons-secondary, #454c59)'
            fill-rule='evenodd'
            d='M26 14a1 1 0 100 2 1 1 0 000-2zm-3 1a3 3 0 116 0 3 3 0 01-6 0zm11 5a1 1 0 100 2 1 1 0 000-2zm-3 1a3 3 0 116 0 3 3 0 01-6 0z'
            clip-rule='evenodd'
          ></path>
          <path
            fill='var(--icons-secondary, #454c59)'
            d='M32.778 13.707a1 1 0 011.414 1.414l-7.07 7.071a1 1 0 01-1.415-1.414l7.071-7.07z'
          ></path>
          <path
            fill='var(--icons-secondary, #454c59)'
            d='M11 14h28a2 2 0 012 2v16a2 2 0 01-2 2H13a2 2 0 01-2-2V14z'
            opacity='0.15'
          ></path>
          <path
            fill='var(--icons-bg-fill, #ffffff)'
            d='M1 21a2 2 0 012-2h32a2 2 0 012 2v18a2 2 0 01-2 2H3a2 2 0 01-2-2V21z'
          ></path>
          <path
            fill='#00A5EF'
            d='M4 36a2 2 0 002 2h31V19H4v17z'
            opacity='0.2'
          ></path>
          <path
            fill='var(--icons-primary, #0097db)'
            fill-rule='evenodd'
            d='M0 21a3 3 0 013-3h32a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V21zm3-1a1 1 0 00-1 1v18a1 1 0 001 1h32a1 1 0 001-1V21a1 1 0 00-1-1H3z'
            clip-rule='evenodd'
          ></path>
          <path
            fill='var(--icons-primary, #0097db)'
            fill-rule='evenodd'
            d='M16 26a1 1 0 100 2 1 1 0 000-2zm-3 1a3 3 0 116 0 3 3 0 01-6 0zm11 5a1 1 0 100 2 1 1 0 000-2zm-3 1a3 3 0 116 0 3 3 0 01-6 0z'
            clip-rule='evenodd'
          ></path>
          <path
            fill='var(--icons-primary, #0097db)'
            d='M22.778 25.707a1 1 0 011.414 1.414l-7.07 7.071a1 1 0 01-1.415-1.414l7.071-7.07z'
          ></path>
        </svg>
      );
    case "Digital currencies":
      return (
        <svg
          fill='none'
          viewBox='0 0 48 48'
          className='w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]'
        >
          <path
            fill='var(--icons-secondary, #454c59)'
            d='M16 19a2 2 0 012-2h18a2 2 0 012 2v17a2 2 0 01-2 2H18a2 2 0 01-2-2V19z'
            opacity='0.15'
          ></path>
          <path
            fill='var(--icons-bg-fill, #ffffff)'
            d='M13 15a2 2 0 012-2h18a2 2 0 012 2v18a2 2 0 01-2 2H15a2 2 0 01-2-2V15z'
          ></path>
          <path
            fill='#00A5EF'
            d='M16 18a2 2 0 012-2h17v17a2 2 0 01-2 2H16V18z'
            opacity='0.2'
          ></path>
          <path
            fill='var(--icons-primary, #0097db)'
            fill-rule='evenodd'
            d='M18 21a3 3 0 013-3h6a1 1 0 110 2h-6a1 1 0 00-1 1v3a1 1 0 11-2 0v-3z'
            clip-rule='evenodd'
          ></path>
          <path
            fill='var(--icons-primary, #0097db)'
            fill-rule='evenodd'
            d='M12 15a3 3 0 013-3h18a3 3 0 013 3v18a3 3 0 01-3 3H15a3 3 0 01-3-3V15zm3-1a1 1 0 00-1 1v18a1 1 0 001 1h18a1 1 0 001-1V15a1 1 0 00-1-1H15z'
            clip-rule='evenodd'
          ></path>
          <path
            fill='var(--icons-primary, #0097db)'
            d='M20 29a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
          ></path>
          <path
            fill='var(--icons-secondary, #454c59)'
            fill-rule='evenodd'
            d='M20 2a1 1 0 011 1v2h2V4a1 1 0 112 0v1h2V3a1 1 0 112 0v2h2V4a1 1 0 112 0v1h2V3a1 1 0 112 0v2h3a3 3 0 013 3v3h2a1 1 0 110 2h-2v2h1a1 1 0 110 2h-1v2h2a1 1 0 110 2h-2v2h1a1 1 0 110 2h-1v2h2a1 1 0 110 2h-2v2h1a1 1 0 110 2h-1v2h2a1 1 0 110 2h-2v3a3 3 0 01-3 3h-3v2a1 1 0 11-2 0v-2h-2v1a1 1 0 11-2 0v-1h-2v2a1 1 0 11-2 0v-2h-2v1a1 1 0 11-2 0v-1h-2v2a1 1 0 11-2 0v-2h-2v1a1 1 0 11-2 0v-1h-2v2a1 1 0 11-2 0v-2H8a3 3 0 01-3-3v-3H3a1 1 0 110-2h2v-2H4a1 1 0 110-2h1v-2H3a1 1 0 110-2h2v-2H4a1 1 0 110-2h1v-2H3a1 1 0 110-2h2v-2H4a1 1 0 110-2h1v-2H3a1 1 0 110-2h2V8a3 3 0 013-3h3V3a1 1 0 112 0v2h2V4a1 1 0 112 0v1h2V3a1 1 0 011-1zM8 7a1 1 0 00-1 1v32a1 1 0 001 1h32a1 1 0 001-1V8a1 1 0 00-1-1H8z'
            clip-rule='evenodd'
          ></path>
          <path
            fill='var(--icons-primary, #0097db)'
            d='M29 22a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1z'
          ></path>
        </svg>
      );
    case "Goods and services":
      return (
        <svg
          fill='none'
          viewBox='0 0 48 48'
          className='w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]'
        >
          <path
            fill='var(--icons-bg-fill, #ffffff)'
            d='M10 5l1-2h25.5L38 4v3l6.5 13-.5 1H4.5l-1-1L10 7V5z'
          ></path>
          <path
            fill='var(--icons-secondary, #454c59)'
            fill-rule='evenodd'
            d='M6 20h36v24h4v2H2v-2h4V20zm2 2h32v22H22V28H12v16H8V22zm12 8v14h-6V30h6zm11-2a5 5 0 00-5 5v3h10v-3a5 5 0 00-5-5zm3 6v-1a3 3 0 10-6 0v1h6z'
            clip-rule='evenodd'
          ></path>
          <path
            fill='#00A5EF'
            d='M12 10h28l3.936 9.621A1 1 0 0143.01 21H7.685a1 1 0 01-.878-1.479L12 10z'
            opacity='0.2'
          ></path>
          <path
            fill='var(--icons-secondary, #454c59)'
            d='M6 22h36v2H6v-2z'
            opacity='0.15'
          ></path>
          <path
            fill='var(--icons-primary, #0097db)'
            fill-rule='evenodd'
            d='M9 5a3 3 0 013-3h24a3 3 0 013 3v1.764l6.17 12.342A2 2 0 0143.383 22H4.618a2 2 0 01-1.789-2.894L9 6.764V5zm1.618 3h26.764l6 12H4.618l1-2H24v-2H6.618l4-8zM37 5v1H11V5a1 1 0 011-1h24a1 1 0 011 1z'
            clip-rule='evenodd'
          ></path>
        </svg>
      );
    case "Debit/credit cards":
      return (
        <svg
          fill='none'
          viewBox='0 0 48 48'
          className='w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]'
        >
          <path
            fill='var(--icons-secondary, #454c59)'
            fill-rule='evenodd'
            d='M10 21a3 3 0 013-3h32a3 3 0 013 3v18a3 3 0 01-3 3H13a3 3 0 01-3-3V21zm3-1a1 1 0 00-1 1v18a1 1 0 001 1h32a1 1 0 001-1V21a1 1 0 00-1-1H13z'
            clip-rule='evenodd'
          ></path>
          <path
            fill='var(--icons-bg-fill, #ffffff)'
            fill-rule='evenodd'
            d='M20 29.465a4 4 0 110-6.93 4 4 0 110 6.93z'
            clip-rule='evenodd'
          ></path>
          <path
            fill='var(--icons-bg-fill, #ffffff)'
            fill-rule='evenodd'
            d='M20 27.154l1.002.58a2 2 0 100-3.467L20 24.845l-1.002-.58a2 2 0 100 3.467L20 27.155zm0-4.619a4 4 0 100 6.93 4 4 0 100-6.93z'
            clip-rule='evenodd'
          ></path>
          <path
            fill='var(--icons-secondary, #454c59)'
            d='M14 33a1 1 0 011-1h20a1 1 0 110 2H15a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1zm10 0a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
          ></path>
          <path
            fill='var(--icons-secondary, #454c59)'
            d='M10 16a2 2 0 012-2h28a2 2 0 012 2v16a2 2 0 01-2 2H10V16z'
            opacity='0.15'
          ></path>
          <path
            fill='var(--icons-bg-fill, #ffffff)'
            d='M1 9a2 2 0 012-2h32a2 2 0 012 2v18a2 2 0 01-2 2H3a2 2 0 01-2-2V9z'
          ></path>
          <path
            fill='#00A5EF'
            d='M4 12a2 2 0 012-2h31v19H4V12z'
            opacity='0.2'
          ></path>
          <path
            fill='var(--icons-primary, #0097db)'
            fill-rule='evenodd'
            d='M0 9a3 3 0 013-3h32a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V9zm3-1a1 1 0 00-1 1v18a1 1 0 001 1h32a1 1 0 001-1V9a1 1 0 00-1-1H3z'
            clip-rule='evenodd'
          ></path>
          <path
            fill='var(--icons-bg-fill, #ffffff)'
            fill-rule='evenodd'
            d='M10 17.465a4 4 0 110-6.93 4 4 0 110 6.93z'
            clip-rule='evenodd'
          ></path>
          <path
            fill='var(--icons-primary, #0097db)'
            fill-rule='evenodd'
            d='M10 15.154l1.002.58a2 2 0 100-3.467L10 12.845l-1.001-.58a2 2 0 100 3.467L10 15.155zm0-4.619a4 4 0 100 6.93 4 4 0 100-6.93z'
            clip-rule='evenodd'
          ></path>
          <path
            fill='var(--icons-primary, #0097db)'
            d='M4 21a1 1 0 011-1h20a1 1 0 110 2H5a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H5a1 1 0 01-1-1zm10 0a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
          ></path>
        </svg>
      );
    default:
      break;
  }
};

export default Images;
