'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';


const navigationItems = [
  {
    label: 'Buy',
    href: '/start',
    dropdownItems: [
      { label: 'Apply now', href: '/start' },
      { label: 'Purchase rates', href: '#' },
      { label: 'Affordability calculator', href: '#' },
      { label: 'Mortgage calculator', href: '/mortgage-calculator' },
      { label: 'Rent vs buy calculator', href: '#' },
      { label: 'Find an agent', href: '#' },
      { label: 'VA loans', href: '#' },
      { label: 'Learning center', href: '#' },
    ],
  },
  {
    label: 'Refinance',
    href: '#',
    dropdownItems: [
      { label: 'Apply Now', href: '#' },
      { label: 'Refinance rates', href: '#' },
      { label: 'Cash-out refinance calculator', href: '#' },
      { label: 'Learning Center', href: '#' },
    ],
  },
  {
    label: 'HELOC',
    href: '#',
    dropdownItems: [
      { label: 'Apply Now', href: '#' },
      { label: 'Calculate your Cash 💵', href: '#' },
      { label: 'HELOC vs. Cash-out Refinance', href: '#' },
      { label: 'Learning Center', href: '#' },
    ],
  },
  {
    label: 'Rates',
    href: '#',
    dropdownItems: [
      { label: 'Purchase mortgage rates', href: '#' },
      { label: 'Refinance rates', href: '#' },
      { label: 'Refinance cash-out rates', href: '#' },
      { label: 'HELOC rates', href: '#' },
      { label: 'Purchase VA rates', href: '#' },
    ],
  },
  {
    label: 'Better+',
    href: '#',
    dropdownItems: [
      { label: 'Get Insurance', href: '#' },
      { label: 'Title and Closing', href: '#' },
      { label: 'Better Attorney Match', href: '#' },
      { label: 'Learning Center', href: '#' },
      { label: 'Better Agent Match', href: '#' },
    ],
  },
];

const DropdownMenu = ({ items }: { items: { label: string; href: string }[] }) => (
  <div className="absolute invisible left-0 right-0 pt-2 group-hover:visible">
    <div className="z-10 w-[22rem] rounded-lg p-3 bg-white shadow-md">
      {items.map((item, index) => (
        <div key={index}>
          <Link
            href={item.href}
            className="px-5 py-3 hover:bg-gray-100 hover:rounded-lg focus:bg-gray-100 flex justify-between group/sub-menu text-black"
          >
            {item.label}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-transparent group-hover/sub-menu:text-green-600"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

const DesktopNavItem = ({ item }: { item: typeof navigationItems[0] }) => (
  <div className="group relative">
    <button className="flex items-center text-white hover:bg-gray-100 hover:text-gray-900 rounded-full py-1 px-4 h-12 transition-all ease-in-out duration-300">
      {item.label}
    </button>
    <DropdownMenu items={item.dropdownItems} />
  </div>
);


export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#014d36] sticky top-0 z-20 transition-all ease-in-out duration-300">
      <div className="m-auto flex max-w-screen-2xl justify-between p-5 md:py-5 md:px-10 xl:p-5">
        <div className="flex flex-row">
          {/* Mobile menu overlay */}
          <div className={`${isMobileMenuOpen ? 'translate-x-0 visible' : '-translate-x-full invisible'} bg-white inset-0 overflow-auto overscroll-contain fixed z-10 p-6 shadow-md flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.42,0,0.58,1)]`}>
            <div className="flex justify-between items-center mb-6">
              <Link href="/" className="inline-block px-2 flex-none">
                <svg role="img" className="icon icon-LogoBetter2021" width="85px" height="35px" viewBox="0 0 495 133" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <title>Better</title>
                  <path d="M427.207 129.574H457.274V70.2463C460.072 61.2943 473.189 52.9226 492.108 57.1085V28.0354C476.38 28.0354 462.848 38.3964 457.274 54.9119V30.0247H427.207V129.574ZM378.24 49.7521C387.399 49.7521 391.979 54.7254 391.979 59.5122C391.979 66.4749 386.405 73.4582 355.342 77.0224C355.342 60.6934 365.703 49.7521 378.24 49.7521ZM416.659 120.414V93.9316C406.712 102.303 393.367 106.883 382.613 106.883C371.464 106.883 362.512 100.915 358.119 91.3621C397.532 88.5853 416.845 75.0331 416.845 55.9273C416.845 40.593 401.117 27.6624 379.214 27.6624C350.141 27.6624 326.663 48.9647 326.663 80.0271C326.663 109.287 350.742 130.983 381.017 130.983C393.968 130.962 407.106 127.191 416.659 120.414ZM304.78 98.7184V49.7521H325.275V30.2526L304.78 30.4599V6.56731L247.836 46.7889V11.7478L200.258 47.5763V49.7728H218.183V104.313C218.183 121.637 230.927 130.796 248.251 130.796C255.814 130.796 262.197 129.408 267.957 126.03V105.515C265.16 107.111 261.782 108.313 258.011 108.313C251.649 108.313 247.857 105.122 247.857 99.5473V49.7728H275.127V104.127C275.127 121.637 287.871 130.796 305.381 130.796C313.152 130.796 319.514 129.802 325.689 126.03V105.329C323.099 106.924 319.12 108.313 315.141 108.313C308.759 108.271 304.78 104.894 304.78 98.7184ZM159.664 49.7521C168.823 49.7521 173.402 54.7254 173.402 59.5122C173.402 66.4749 167.828 73.4582 136.766 77.0224C136.766 60.6934 147.106 49.7521 159.664 49.7521ZM198.082 120.414V93.9316C188.136 102.303 174.791 106.883 164.036 106.883C152.888 106.883 143.936 100.915 139.543 91.3621C178.956 88.5853 198.269 75.0331 198.269 55.9273C198.269 40.593 182.541 27.6624 160.638 27.6624C131.564 27.6624 108.086 48.9647 108.086 80.0271C108.086 109.287 132.165 130.983 162.44 130.983C175.392 130.962 188.53 127.191 198.082 120.414ZM53.5459 76.0277C62.8915 76.0277 70.6623 81.8092 70.6623 91.5486C70.6623 100.708 62.8915 106.282 53.5459 106.282H30.8552V76.0277H53.5459ZM51.9502 25.0721C60.9022 25.0721 68.072 30.6464 68.072 39.2046C68.072 48.3638 60.9022 53.938 51.9502 53.938H30.8552V25.0721H51.9502ZM0 1.967V129.574H60.1147C83.1991 129.574 101.331 115.441 101.331 93.9316C101.331 80.1929 92.5655 69.2516 79.8215 64.0711C91.3637 58.8906 99.1345 48.7367 99.1345 36.5936C99.1345 15.685 80.8161 1.94629 57.5245 1.94629H0V1.967Z" fill="currentColor"></path>
                </svg>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-block rounded-full leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-gray-400 disabled:bg-gray-200 disabled:shadow-none text-gray-700 bg-transparent hover:bg-gray-100 focus:bg-gray-100 focus:border-transparent focus:shadow-green-200 active:bg-gray-100 px-3 h-10 w-auto"
                title="Close menu"
              >
                <XMarkIcon className="h-8 w-8" />
              </button>
            </div>

            {/* Mobile navigation items */}
            <div className="space-y-4">
              {navigationItems.map((item, index) => (
                <details key={index} className="group flex-none">
                  <summary className="flex h-14 cursor-pointer select-none items-center justify-between px-2 [&::-webkit-details-marker]:hidden">
                    {item.label}
                    <ChevronDownIcon className="ml-2 h-6 w-6 inline-block group-open:rotate-180 fill-black stroke-none" />
                  </summary>
                  <ul className="m-0 list-none">
                    {item.dropdownItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subItem.href}
                          className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-lg hover:bg-gray-100 focus:bg-gray-100"
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>

            {/* Mobile CTA section */}
            <div className="flex flex-col gap-4 mt-auto">
              <Link
                href="/start"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 bg-[#4CB649] text-white hover:bg-[#017848] hover:text-white h-16 px-12 py-5 w-auto"
              >
                Continue
              </Link>
              <Link
                href="/sign-in"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-gray-300 text-gray-700 hover:shadow-green-200 hover:border-green-200 hover:shadow-[0_0_0_4px_inset] hover:text-green-600 h-16 px-12 py-5 w-auto font-normal"
              >
                Sign in
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </Link>
            </div>
          </div>

          {/* Mobile menu overlay backdrop */}
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className={`${isMobileMenuOpen ? 'visible' : 'invisible'} bg-black fixed inset-0 h-screen w-screen opacity-80 z-1 focus:border transition-transform duration-300 ease-[cubic-bezier(0.42,0,0.58,1)]`}
            title="Close menu backdrop"
          />

          {/* Desktop logo and navigation */}
          <ul className="flex items-center">
            <li className="mr-2">
              <Link href="/" className="font-normal transition-all ease-in-out duration-300 text-white hover:text-white hover:bg-inherit">
                <svg role="img" className="icon icon-LogoBetter2021" width="65px" height="20px" viewBox="0 0 495 133" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <title>Better</title>
                  <path d="M427.207 129.574H457.274V70.2463C460.072 61.2943 473.189 52.9226 492.108 57.1085V28.0354C476.38 28.0354 462.848 38.3964 457.274 54.9119V30.0247H427.207V129.574ZM378.24 49.7521C387.399 49.7521 391.979 54.7254 391.979 59.5122C391.979 66.4749 386.405 73.4582 355.342 77.0224C355.342 60.6934 365.703 49.7521 378.24 49.7521ZM416.659 120.414V93.9316C406.712 102.303 393.367 106.883 382.613 106.883C371.464 106.883 362.512 100.915 358.119 91.3621C397.532 88.5853 416.845 75.0331 416.845 55.9273C416.845 40.593 401.117 27.6624 379.214 27.6624C350.141 27.6624 326.663 48.9647 326.663 80.0271C326.663 109.287 350.742 130.983 381.017 130.983C393.968 130.962 407.106 127.191 416.659 120.414ZM304.78 98.7184V49.7521H325.275V30.2526L304.78 30.4599V6.56731L247.836 46.7889V11.7478L200.258 47.5763V49.7728H218.183V104.313C218.183 121.637 230.927 130.796 248.251 130.796C255.814 130.796 262.197 129.408 267.957 126.03V105.515C265.16 107.111 261.782 108.313 258.011 108.313C251.649 108.313 247.857 105.122 247.857 99.5473V49.7728H275.127V104.127C275.127 121.637 287.871 130.796 305.381 130.796C313.152 130.796 319.514 129.802 325.689 126.03V105.329C323.099 106.924 319.12 108.313 315.141 108.313C308.759 108.271 304.78 104.894 304.78 98.7184ZM159.664 49.7521C168.823 49.7521 173.402 54.7254 173.402 59.5122C173.402 66.4749 167.828 73.4582 136.766 77.0224C136.766 60.6934 147.106 49.7521 159.664 49.7521ZM198.082 120.414V93.9316C188.136 102.303 174.791 106.883 164.036 106.883C152.888 106.883 143.936 100.915 139.543 91.3621C178.956 88.5853 198.269 75.0331 198.269 55.9273C198.269 40.593 182.541 27.6624 160.638 27.6624C131.564 27.6624 108.086 48.9647 108.086 80.0271C108.086 109.287 132.165 130.983 162.44 130.983C175.392 130.962 188.53 127.191 198.082 120.414ZM53.5459 76.0277C62.8915 76.0277 70.6623 81.8092 70.6623 91.5486C70.6623 100.708 62.8915 106.282 53.5459 106.282H30.8552V76.0277H53.5459ZM51.9502 25.0721C60.9022 25.0721 68.072 30.6464 68.072 39.2046C68.072 48.3638 60.9022 53.938 51.9502 53.938H30.8552V25.0721H51.9502ZM0 1.967V129.574H60.1147C83.1991 129.574 101.331 115.441 101.331 93.9316C101.331 80.1929 92.5655 69.2516 79.8215 64.0711C91.3637 58.8906 99.1345 48.7367 99.1345 36.5936C99.1345 15.685 80.8161 1.94629 57.5245 1.94629H0V1.967Z" fill="currentColor"></path>
                </svg>
              </Link>
            </li>

            {/* Desktop navigation items */}
            {navigationItems.map((item, index) => (
              <li key={index} className="mx-5 hidden xl:block">
                <DesktopNavItem item={item} />
              </li>
            ))}
          </ul>
        </div>

        {/* Right side buttons */}
        <ul className="flex items-center gap-3 lg:gap-6">
          {/* Phone button */}
          <li>
            <div className="group min-[520px]:relative">
              <button className="transition-all ease-in-out duration-300 border rounded-full p-2 md:p-3.5 border-gray-400 group-hover:bg-gray-100 group-hover:border-gray-100" title="Call us">
                <svg width="19" height="18" viewBox="0 0 19 18" className="transition-all ease-in-out group-hover:[&_path]:fill-gray-700 [&_path]:fill-white h-3 w-3 md:h-4 md:w-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.5 13.5L18.5 17C18.5 17.55 18.05 18 17.5 18C8.11 18 0.500002 10.39 0.500002 1C0.500002 0.450001 0.950003 0 1.5 0L4.99 0C5.54 0 5.99 0.450001 5.99 1C5.99 2.24 6.19 3.45 6.56 4.57C6.6 4.67 6.61 4.78 6.61 4.88C6.61 5.14 6.51 5.39 6.32 5.59L4.12 7.79C5.57 10.62 7.88 12.94 10.71 14.38L12.91 12.18C13.19 11.9 13.58 11.82 13.93 11.93C15.05 12.3 16.25 12.5 17.5 12.5C18.05 12.5 18.5 12.95 18.5 13.5Z" fill="#292B29"></path>
                </svg>
              </button>
              <div className="absolute invisible left-1 min-[520px]:left-auto right-0 pt-2 group-hover:visible">
                <div className="bg-gray-200 px-10 py-7 rounded-lg w-80 shadow-md">
                  Call us anytime at <a className="underline hover:text-green-600" href="tel:4155238837">415-523-8837</a>
                </div>
              </div>
            </div>
          </li>

          {/* Sign in button */}
          <li className="hidden md:block">
            <Link
              href="/sign-in"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base leading-normal disabled:pointer-events-none disabled:opacity-50 bg-transparent py-5 w-auto font-normal transition-all ease-in-out duration-300 h-12 px-4 text-white hover:bg-gray-100 hover:text-gray-900"
            >
              Sign in
            </Link>
          </li>

          {/* Continue button */}
          <li className="transition-all duration-500 ease-in block">
            <Link
              href="/start"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 bg-[#4CB649] text-white hover:bg-[#017848] hover:text-white py-3 w-auto h-8 px-4 md:px-6 md:h-12"
            >
              Continue
            </Link>
          </li>

          {/* Mobile menu button */}
          <li>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden flex items-center font-normal transition-all ease-in-out duration-300 text-white hover:text-white hover:bg-inherit"
              aria-label="open mobile nav bar"
              title="Open mobile navigation"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
