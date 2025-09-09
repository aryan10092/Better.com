'use client';

import Link from 'next/link';
import { useState } from 'react';


export default function StartPage() {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  
    console.log(`Selected: ${option}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-20 px-8 lg:px-28 py-4  transition-all ease-in-out duration-300 bg-white border-b border-gray-200">
        <div className="m-auto flex max-w-screen-2xl justify-between p-5 md:py-5 md:px-10 xl:p-5">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <Link href="/">
              <svg className="icon icon-logo-mortgage" height="100%" role="img" version="1.1" viewBox="0 0 62 31" width="67px" xmlns="http://www.w3.org/2000/svg">
                <title>Better Mortgage</title>
                <path d="M42.26 12.43h2.975V6.652c.277-.872 1.574-1.687 3.446-1.28V2.541c-1.556 0-2.895 1.009-3.446 2.618V2.735h-2.974v9.695Zm-4.843-7.774c.906 0 1.359.484 1.359.95 0 .679-.552 1.359-3.624 1.706 0-1.59 1.025-2.656 2.265-2.656Zm3.8 6.882v-2.58c-.984.816-2.304 1.262-3.368 1.262-1.103 0-1.988-.581-2.423-1.511 3.9-.27 5.81-1.59 5.81-3.452 0-1.493-1.556-2.752-3.723-2.752-2.876 0-5.198 2.074-5.198 5.1 0 2.85 2.382 4.962 5.376 4.962 1.282-.002 2.581-.369 3.526-1.029ZM30.15 9.425V4.656h2.027v-1.9l-2.027.021V.45l-5.633 3.917V.955l-4.707 3.49v.213h1.773V9.97c0 1.687 1.261 2.58 2.975 2.58.748 0 1.38-.136 1.95-.465v-1.998a2.01 2.01 0 0 1-.985.273c-.63 0-1.004-.311-1.004-.854V4.658h2.698v5.294c0 1.705 1.26 2.597 2.992 2.597.769 0 1.398-.097 2.01-.464V10.07c-.257.155-.65.29-1.044.29-.632-.004-1.025-.332-1.025-.934ZM15.794 4.656c.907 0 1.36.484 1.36.95 0 .679-.552 1.359-3.625 1.706 0-1.59 1.023-2.656 2.265-2.656Zm3.8 6.882v-2.58c-.983.816-2.303 1.262-3.367 1.262-1.103 0-1.988-.581-2.423-1.511 3.899-.27 5.81-1.59 5.81-3.452 0-1.493-1.556-2.752-3.723-2.752-2.876 0-5.199 2.074-5.199 5.1 0 2.85 2.382 4.962 5.377 4.962 1.281-.002 2.58-.369 3.526-1.029ZM5.298 7.215c.924 0 1.693.563 1.693 1.512 0 .892-.769 1.435-1.693 1.435H3.052V7.215h2.245Zm-.158-4.963c.886 0 1.595.543 1.595 1.377 0 .892-.71 1.435-1.595 1.435H3.052V2.252H5.14ZM0 .002V12.43h5.947c2.283 0 4.077-1.376 4.077-3.471 0-1.338-.867-2.404-2.128-2.908 1.142-.505 1.91-1.494 1.91-2.677C9.807 1.338 7.996 0 5.692 0H0v.002Z" fill="#017848"></path>
                <path d="m5.613 24.595 3.682-5.75v8.345h1.192V16.567H9.4l-4.149 6.625-4.165-6.625H0V27.19h1.192v-8.344l3.682 5.749h.74ZM15.796 19.404c-2.248 0-3.908 1.75-3.908 3.984 0 2.233 1.66 3.983 3.908 3.983 2.233 0 3.893-1.75 3.893-3.983 0-2.234-1.66-3.984-3.893-3.984Zm0 1.102c1.584 0 2.701 1.312 2.701 2.882 0 1.569-1.117 2.882-2.7 2.882-1.6 0-2.717-1.313-2.717-2.882 0-1.57 1.117-2.882 2.716-2.882ZM29.519 26.073c-.332.181-.71.227-.92.227-.83 0-1.313-.453-1.313-1.373v-4.361h1.961v-.98h-1.961v-2.098h-1.162v7.56c0 1.478.875 2.323 2.248 2.323.483 0 .875-.09 1.147-.226v-1.072Zm-7.364-6.488h-1.131v7.605h1.162v-3.863c0-1.72.95-2.761 2.353-2.761.106 0 .242 0 .317.015V19.45a1.64 1.64 0 0 0-.422-.045c-1.026 0-1.886.573-2.279 1.645v-1.464ZM36.352 25.862v.95c0 1.585-1.071 2.52-2.565 2.52-1.117 0-2.067-.467-2.671-1.222l-.785.74c.77.966 1.992 1.539 3.456 1.539 2.112 0 3.681-1.373 3.681-3.456v-7.348h-1.161v1.298c-.453-.86-1.57-1.479-2.686-1.479-2.022 0-3.622 1.69-3.622 3.984 0 2.293 1.6 3.983 3.622 3.983 1.131 0 2.278-.634 2.73-1.509Zm-2.55.438c-1.434 0-2.626-1.222-2.626-2.912s1.192-2.913 2.626-2.913c1.313 0 2.58 1.057 2.58 2.913 0 1.87-1.283 2.912-2.58 2.912ZM43.687 22.165v.363c-2.52-.197-4.994.347-4.994 2.625 0 1.313 1.04 2.218 2.43 2.218 1.146 0 2.096-.573 2.64-1.554v1.373h1.086v-4.934c0-1.765-1.177-2.852-3.018-2.852-1.313 0-2.293.558-2.942 1.328l.619.754c.497-.573 1.297-1.04 2.233-1.04 1.207 0 1.946.663 1.946 1.72Zm-2.399 4.21c-.845 0-1.464-.513-1.464-1.282 0-1.343 1.389-1.72 2.837-1.72.362 0 .724.015 1.072.06v.558c0 1.192-1.057 2.384-2.445 2.384ZM52.415 25.862v.95c0 1.585-1.072 2.52-2.566 2.52-1.116 0-2.067-.467-2.67-1.222l-.785.74c.77.966 1.992 1.539 3.455 1.539 2.113 0 3.682-1.373 3.682-3.456v-7.348H52.37v1.298c-.452-.86-1.569-1.479-2.685-1.479-2.023 0-3.622 1.69-3.622 3.984 0 2.293 1.6 3.983 3.622 3.983 1.131 0 2.278-.634 2.73-1.509Zm-2.55.438c-1.434 0-2.626-1.222-2.626-2.912s1.192-2.913 2.626-2.913c1.312 0 2.58 1.057 2.58 2.913 0 1.87-1.283 2.912-2.58 2.912ZM58.53 19.404c-2.234 0-3.818 1.75-3.818 3.984 0 2.248 1.584 3.983 3.999 3.983 1.237 0 2.233-.422 3.063-1.328l-.725-.8a2.992 2.992 0 0 1-2.308 1.057c-1.494 0-2.671-.996-2.807-2.58h6.006c.03-.197.06-.468.06-.725 0-1.991-1.343-3.59-3.47-3.59Zm0 1.056c1.282 0 2.293.875 2.338 2.279v.03H55.95c.181-1.373 1.223-2.309 2.58-2.309Z" fill="#6F7672"></path>
              </svg>
            </Link>
          </div>

          {/* Right side - Phone button */}
          <div className="flex items-center">
            <button className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
              <div className="flex items-center mr-3">
                <svg fill="none" height="21" viewBox="0 0 20 21" width="20" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <title>Phone</title>
                  <path clipRule="evenodd" d="M1.1116 0.0151367H5.00049C5.6116 0.0151367 6.1116 0.516439 6.1116 1.12914C6.1116 2.52165 6.33382 3.85845 6.74493 5.10614C6.86715 5.49604 6.77827 5.9305 6.46715 6.24242L4.02271 8.69323C5.62271 11.8459 8.20049 14.4192 11.3449 16.0345L13.7894 13.5837C14.0116 13.3721 14.2894 13.2607 14.5783 13.2607C14.6894 13.2607 14.8116 13.2718 14.9227 13.3164C16.1672 13.7285 17.5116 13.9513 18.8894 13.9513C19.5005 13.9513 20.0005 14.4526 20.0005 15.0653V18.9532C20.0005 19.5659 19.5005 20.0672 18.8894 20.0672C8.45604 20.0672 0.000488281 11.5896 0.000488281 1.12914C0.000488281 0.516439 0.500488 0.0151367 1.1116 0.0151367ZM3.93382 2.24315C4.00049 3.23461 4.16715 4.20379 4.43382 5.12842L3.10049 6.46522C2.64493 5.12842 2.35604 3.71363 2.25604 2.24315H3.93382ZM14.8894 15.6335C15.8338 15.9008 16.8005 16.0679 17.7783 16.1348V17.7947C16.3116 17.6944 14.9005 17.4047 13.556 16.9591L14.8894 15.6335Z" fill="#017848" fillRule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h5 className="text-sm font-medium md:block hidden">
                  <span>Need help? <span>Call 415-523-8837</span></span>
                </h5>
              </div>
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full pt-2">
          <div aria-label="Flow Progress" aria-valuetext="0%" role="progressbar" className="w-full">
            <div className="h-1 bg-gray-200">
              <div className="h-full w-0 bg-green-600 transition-all duration-300"></div>
            </div>
          </div>
          {/* Betsy Image */}
          <div className="flex justify-center -mt-6">
            <div className="relative">
              <img 
                src="https://media.better.com/components/preapproval/industry-parity-v2/betsy.svg" 
                alt="Spokesperson" 
                className="w-12 h-12"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-3 flex items-center justify-center min-h-[calc(100vh-200px)] px-4">
        <div className="max-w-2xl w-full text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            <span >Hi, I&#39;m Betsy!</span>
            <br />
            What can I help you with?
          </h1>

          {/* Option Cards */}
          <div className="space-y-4 mb-12 px-10">
            {/* Buying a home */}
            <button
              onClick={() => handleOptionSelect('purchase')}
              className={`w-full p-3 border-2 rounded-lg text-left transition-all hover:border-green-600 hover:bg-green-50 ${
                selectedOption === 'purchase' ? 'border-green-600 bg-green-50' : 'border-gray-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 mr-4 flex items-center justify-center">
                    <svg height="36" stroke="none" viewBox="0 0 36 36" width="36" fill="#017848" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <title>Start Purchase</title>
                      <path d="M35.579 13.748 18.703.247a1.124 1.124 0 0 0-1.406 0L.42 13.747a1.125 1.125 0 0 0 .698 2.003h2.25v19.126A1.126 1.126 0 0 0 4.494 36h27.001a1.125 1.125 0 0 0 1.125-1.125V15.75h2.25a1.125 1.125 0 0 0 .709-2.002Zm-4.084-.248a1.125 1.125 0 0 0-1.125 1.125V33.75H5.619V14.625A1.126 1.126 0 0 0 4.494 13.5h-.169l13.67-10.936L31.662 13.5h-.168Z" fill="#017848"></path>
                      <path d="M16.8 13v2.374h-1.2a3.607 3.607 0 0 0-3.118 1.78 3.527 3.527 0 0 0 0 3.56 3.607 3.607 0 0 0 3.118 1.78h4.8c.429 0 .825.227 1.04.594.214.367.214.82 0 1.187-.215.367-.611.593-1.04.593h-4.8c-.318 0-.624-.125-.849-.347a1.18 1.18 0 0 1-.351-.84H12c0 .945.38 1.85 1.054 2.518a3.622 3.622 0 0 0 2.546 1.043h1.2v2.373h2.4v-2.373h1.2a3.607 3.607 0 0 0 3.118-1.78 3.526 3.526 0 0 0 0-3.56A3.607 3.607 0 0 0 20.4 20.12h-4.8c-.429 0-.825-.226-1.04-.593a1.176 1.176 0 0 1 0-1.187c.215-.367.611-.594 1.04-.594h4.8c.318 0 .624.125.849.348.225.222.351.524.351.84H24c0-.945-.38-1.85-1.054-2.519a3.621 3.621 0 0 0-2.546-1.042h-1.2V13h-2.4Z" fill="#017848"></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-gray-900">Buying a home</span>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedOption === 'purchase' ? 'border-green-600 bg-green-600' : 'border-gray-300'
                }`}>
                  {selectedOption === 'purchase' && (
                    <svg height="18px" width="18px" className="text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.35588 16.0296L3.61455 11.2882L2 12.8914L8.35588 19.2473L22 5.60318L20.3968 4L8.35588 16.0296Z"></path>
                    </svg>
                  )}
                </div>
              </div>
            </button>

            {/* Refinancing */}
            <button
              onClick={() => handleOptionSelect('refinance')}
              className={`w-full p-6 border-2 rounded-lg text-left transition-all hover:border-green-600 hover:bg-green-50 ${
                selectedOption === 'refinance' ? 'border-green-600 bg-green-50' : 'border-gray-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 mr-4 flex items-center justify-center">
                    <svg height="36" stroke="none" viewBox="0 0 36 36" width="36" fill="#017848" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <title>Start Refinance</title>
                      <path d="M35.579 13.748 18.703.247a1.124 1.124 0 0 0-1.406 0L.42 13.747a1.125 1.125 0 0 0 .698 2.003h2.25v19.126A1.126 1.126 0 0 0 4.494 36h27.001a1.125 1.125 0 0 0 1.125-1.125V15.75h2.25a1.125 1.125 0 0 0 .709-2.002Zm-4.084-.248a1.125 1.125 0 0 0-1.125 1.125V33.75H5.619V14.625A1.126 1.126 0 0 0 4.494 13.5h-.169l13.67-10.936L31.662 13.5h-.168Z" fill="#017848"></path>
                      <path d="M17.6 15v1.768h-.9c-.965 0-1.856.505-2.338 1.326a2.61 2.61 0 0 0 0 2.651 2.709 2.709 0 0 0 2.338 1.326h3.6c.322 0 .619.169.78.442a.87.87 0 0 1 0 .884.903.903 0 0 1-.78.442h-3.6a.908.908 0 0 1-.636-.259.876.876 0 0 1-.264-.625H14c0 .704.284 1.378.79 1.876a2.725 2.725 0 0 0 1.91.776h.9v1.768h1.8v-1.768h.9c.965 0 1.856-.505 2.338-1.326a2.61 2.61 0 0 0 0-2.651 2.709 2.709 0 0 0-2.338-1.326h-3.6a.903.903 0 0 1-.78-.442.87.87 0 0 1 0-.884.903.903 0 0 1 .78-.442h3.6c.239 0 .468.093.636.259.17.165.264.39.264.625H23c0-.704-.285-1.378-.79-1.876a2.725 2.725 0 0 0-1.91-.776h-.9V15h-1.8Z" fill="#017848"></path>
                      <path d="M18.456 10C12.5 10 7.67 14.83 7.67 20.785H6l2.869 4.782 2.865-4.782h-1.667a8.383 8.383 0 0 1 8.389-8.388 8.383 8.383 0 0 1 8.389 8.388 8.383 8.383 0 0 1-8.39 8.389 8.32 8.32 0 0 1-5.919-2.469l-1.702 1.702a10.73 10.73 0 0 0 7.622 3.164c5.956 0 10.785-4.83 10.785-10.786C29.241 14.83 24.411 10 18.456 10Z" fill="#017848"></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-gray-900">Refinancing my mortgage</span>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedOption === 'refinance' ? 'border-green-600 bg-green-600' : 'border-gray-300'
                }`}>
                  {selectedOption === 'refinance' && (
                    <svg height="18px" width="18px" className="text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.35588 16.0296L3.61455 11.2882L2 12.8914L8.35588 19.2473L22 5.60318L20.3968 4L8.35588 16.0296Z"></path>
                    </svg>
                  )}
                </div>
              </div>
            </button>

            {/* HELOC */}
            <button
              onClick={() => handleOptionSelect('heloc')}
              className={`w-full p-6 border-2 rounded-lg text-left transition-all hover:border-green-600 hover:bg-green-50 ${
                selectedOption === 'heloc' ? 'border-green-600 bg-green-50' : 'border-gray-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 mr-4 flex items-center justify-center">
                    <svg height="36" stroke="none" viewBox="0 0 36 36" width="36" fill="#017848" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <title>Start Heloc</title>
                      <path d="M2.25 18a15.75 15.75 0 0 1 31.5 0H36a18 18 0 1 0-18 18v-2.25A15.75 15.75 0 0 1 2.25 18Z" fill="#017848"></path>
                      <path d="M23.143 20.204c0-.877-.352-1.718-.98-2.338a3.363 3.363 0 0 0-2.363-.968h-4.457c-.398 0-.766-.21-.965-.551a1.092 1.092 0 0 1 0-1.102c.199-.341.567-.551.965-.551H19.8c.296 0 .579.116.788.323.209.206.326.487.326.779h2.229c0-.877-.352-1.718-.98-2.338a3.363 3.363 0 0 0-2.363-.968h-1.114v-2.204h-2.229v2.204h-1.114a3.35 3.35 0 0 0-2.895 1.653 3.275 3.275 0 0 0 0 3.306 3.35 3.35 0 0 0 2.895 1.653H19.8c.398 0 .766.21.965.551.199.341.199.761 0 1.102-.199.341-.567.551-.965.551h-4.457a1.12 1.12 0 0 1-.788-.323 1.096 1.096 0 0 1-.326-.779H12c0 .877.352 1.718.979 2.338.627.62 1.477.968 2.364.968h1.114v2.204h2.229V23.51H19.8c.887 0 1.737-.348 2.364-.968.627-.62.979-1.461.979-2.338ZM29.852 19.97a1.13 1.13 0 0 0-1.429 0l-5.714 4.653a1.17 1.17 0 0 0-.423.907v9.307c0 .308.12.604.334.822.215.218.506.341.809.341h11.428c.303 0 .594-.123.808-.34.215-.219.335-.515.335-.823V25.53a1.171 1.171 0 0 0-.434-.907l-5.714-4.654Zm3.862 13.703H31.43v-3.49c0-.308-.12-.604-.335-.822a1.133 1.133 0 0 0-.808-.34H28c-.303 0-.594.122-.808.34a1.174 1.174 0 0 0-.335.822v3.49h-2.285V26.09l4.571-3.723 4.571 3.723v7.584Z" fill="#017848"></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-gray-900">Get cash from my home</span>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedOption === 'heloc' ? 'border-green-600 bg-green-600' : 'border-gray-300'
                }`}>
                  {selectedOption === 'heloc' && (
                    <svg height="18px" width="18px" className="text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.35588 16.0296L3.61455 11.2882L2 12.8914L8.35588 19.2473L22 5.60318L20.3968 4L8.35588 16.0296Z"></path>
                    </svg>
                  )}
                </div>
              </div>
            </button>
          </div>

          {/* Statistics */}
          <div className="flex justify-center space-x-12 mb-12">
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">$100B</p>
              <p className="text-sm text-gray-600">home loans funded entirely online</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">400K</p>
              <p className="text-sm text-gray-600">Customers who chose a Better Mortgage</p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="text-left max-w-lg mx-3 md:mx-auto bg-green-50 p-6 ">
            <p className="text-gray-600 mb-6 text-center">After a few questions, you&#39;ll unlock:</p>
            <div className="space-y-4 center">
              <div className="flex items-center ">
                <div className="w-6 h-6 mr-4 flex items-center justify-center">
                  <svg className="icon-benefit" height="22px" width="22px" fill="#017848" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M10 .833C4.94.833.833 4.94.833 10S4.94 19.166 10 19.166 19.167 15.06 19.167 10C19.167 4.94 15.06.833 10 .833Zm0 16.5c-4.042 0-7.333-3.29-7.333-7.333S5.957 2.666 10 2.666 17.333 5.957 17.333 10c0 4.042-3.29 7.333-7.333 7.333ZM7.458 15H5.5l7.057-10h1.958L7.458 15ZM7 9.476a1.71 1.71 0 0 0 1.716-1.738C8.716 6.748 7.946 6 7 6c-.968 0-1.738.748-1.738 1.738S6.032 9.476 7 9.476Zm6 4.5a1.71 1.71 0 0 0 1.716-1.738c0-.99-.77-1.738-1.716-1.738-.968 0-1.738.748-1.738 1.738s.77 1.738 1.738 1.738Z" fill="#017848" fillRule="evenodd"></path>
                  </svg>
                </div>
                <p className="text-gray-600 font-medium">Custom mortgage rates</p>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 mr-4 flex items-center justify-center">
                  <svg className="text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"></path>
                  </svg>
                </div>
                <p className="text-gray-600 font-medium">Exclusive offers</p>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 mr-4 flex items-center justify-center">
                  <svg className="text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"></path>
                  </svg>
                </div>
                <p className="text-gray-600 font-medium">A personalized dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Simplified Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center mb-6">
            <img 
              alt="footer-logo" 
              width="100px" 
              height="auto" 
              src="https://media.better.com/brand-update-2021/partner-logos/better-logo.svg"
            />
          </div>
          
          <div className="text-center mb-6">
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Better Mortgage Corporation is a direct lender dedicated to providing a fast, transparent digital mortgage experience backed by superior customer support.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">
                <Link href="/about-us/contact-us" className="hover:text-green-600">Contact Us</Link>
              </h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/schedule-call" className="text-gray-600 hover:text-green-600 hover:underline">Schedule a conversation</Link></li>
                <li><Link href="mailto:hello@better.com" className="text-gray-600 hover:text-green-600 hover:underline">hello@better.com</Link></li>
                <li><Link href="tel:415-523-8837" className="text-gray-600 hover:text-green-600 hover:underline">415-523-8837</Link></li>
                <li><Link href="/faq" className="text-gray-600 hover:text-green-600 hover:underline">FAQ</Link></li>
                <li><Link href="/content" className="text-gray-600 hover:text-green-600 hover:underline">Resources</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="http://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/330511" className="text-gray-600 hover:text-green-600 hover:underline" target="_blank">NMLS Consumer Access</Link></li>
                <li><Link href="/about-us/privacy-policy" className="text-gray-600 hover:text-green-600 hover:underline">Privacy Policy</Link></li>
                <li><Link href="/about-us/terms-of-use" className="text-gray-600 hover:text-green-600 hover:underline">Terms of Use</Link></li>
                <li><Link href="/about-us/licensing-disclosure" className="text-gray-600 hover:text-green-600 hover:underline">Disclosures & Licensing</Link></li>
                <li><Link href="/about-us/affiliated-business" className="text-gray-600 hover:text-green-600 hover:underline">Affiliated Business</Link></li>
              </ul>
            </div>
          </div>

          {/* BBB and Equal Housing logos */}
          <div className="flex justify-center gap-4 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" role="img" width="32px" height="32px" viewBox="0 0 28 28">
              <title>Equal Housing Lender</title>
              <path fill="currentColor" d="M-0.002 7.843l13.939-7.843 13.628 7.921v2.757h-2.174v9.746h-23.257v-9.746h-2.136v-2.835zM13.936 2.955l-8.969 5.203v9.785h17.744v-9.785l-8.775-5.203zM9.166 11.886v-2.408h9.28v2.408h-9.28zM9.166 13.086h9.28v2.408h-9.28v-2.408z" className="fill-gray-500"></path>
            </svg>
            <Link href="https://www.bbb.org/new-york-city/business-reviews/mortgage-brokers/better-mortgage-in-new-york-ny-165686" target="_blank" className="text-gray-500 hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" role="img" width="32px" height="32px" viewBox="0 0 32 32">
                <title>Better Business Bureau</title>
                <path fill="currentColor" d="M25.728 30.226v0.117c0 0.746-0.499 1.363-1.154 1.495-0.23 0.1-0.483 0.155-0.748 0.155h-15.616c-0.396 0-0.765-0.124-1.071-0.335z" className="fill-gray-500"></path>
              </svg>
            </Link>
          </div>

          <hr className="border-gray-300 mb-6" />

          <div className="text-xs text-gray-600 text-center space-y-2">
            <p>
              © 2025 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License # 02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services; Better Connect, LLC dba Better Attorney Match provides real estate attorney connection services; and Better Inspect, LLC provides home inspection services. All rights reserved.
            </p>
            <p>
              Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade Center, 80th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. NMLS Consumer Access
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 