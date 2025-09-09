import Link from 'next/link';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section - Exact Better.com design */}
      <section className="relative bg-[#014d36] overflow-hidden min-h-screen flex items-center justify-center">
        {/* Background blur effect */}
        <div className="absolute bottom-0 left-1/2 w-full h-[250px] md:h-[230px] -translate-x-1/2 translate-y-1/3 rounded-[406px] md:rounded-[1100px] bg-[#00FF80] blur-[220px] md:blur-[475px]"></div>
        
        <div className="relative z-10 m-auto max-w-screen-2xl overflow-hidden px-6 md:px-10 lg:px-14">
          {/* Main heading */}
          <h1 className="font-bold leading-none m-0 p-0 w-auto tracking-tight md:tracking-tighter mt-[48px] z-1 text-center text-[50px] text-white md:mt-[80px] md:p-0 md:text-[80px] lg:text-[100px]">
            The first<br />
            <span 
              className="bg-[linear-gradient(116deg,_#00FF80_16.51%,_#A987FF_54.85%,_#EA06FF_94.62%)] bg-clip-text text-transparent"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              AI-powered
            </span>
            {' '}Mortgage
          </h1>

          {/* Subheading */}
          <p className="font-normal leading-body m-0 p-0 text-white text-[18px] md:text-[24px] text-center mt-[32px] md:mt-[18px]">
            Our tech unlocks lower rates, higher chances of approval,<br />
            and a lightning‑fast process from approval&nbsp;to&nbsp;closing. Over $100 billion funded.
          </p>

          {/* CTA Button */}
          <div className="w-auto text-center mt-8 md:mt-10">
            <Link 
              href="/start"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 bg-[#4CB649] text-white hover:bg-[#017848] hover:text-white h-16 px-12 py-5 w-full sm:w-fit"
            >
              Start my pre-approval
            </Link>
            
            {/* Disclaimer */}
            <div className="mt-3 flex items-center justify-center gap-1 text-xs text-green-200">
              <svg width="20" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 6H8.5V10.5H7.5V6ZM6.5 1.5H9.5V2.5H6.5V1.5Z" className="fill-green-200"></path>
                <path className="fill-green-200" d="M13.9987 5.00055L13.2887 4.29555L12.1637 5.42055C11.2429 4.35706 9.94762 3.68926 8.54717 3.5559C7.14671 3.42254 5.74872 3.83386 4.64365 4.70442C3.53857 5.57497 2.81139 6.83782 2.61318 8.23057C2.41497 9.62333 2.76098 11.0389 3.57931 12.1832C4.39765 13.3275 5.62539 14.1125 7.00745 14.3751C8.3895 14.6377 9.81961 14.3578 11.0006 13.5934C12.1817 12.8291 13.0228 11.6391 13.3493 10.2707C13.6758 8.90233 13.4625 7.46077 12.7537 6.24554L13.9987 5.00055ZM7.99875 13.5005C7.10873 13.5005 6.2387 13.2366 5.49868 12.7422C4.75866 12.2477 4.18189 11.5449 3.84129 10.7226C3.5007 9.90035 3.41158 8.99555 3.58522 8.12264C3.75885 7.24972 4.18743 6.4479 4.81677 5.81856C5.44611 5.18923 6.24793 4.76064 7.12084 4.58701C7.99376 4.41338 8.89856 4.50249 9.72082 4.84309C10.5431 5.18368 11.2459 5.76046 11.7404 6.50048C12.2348 7.2405 12.4987 8.11053 12.4987 9.00055C12.4987 10.194 12.0246 11.3386 11.1807 12.1825C10.3368 13.0264 9.19222 13.5005 7.99875 13.5005Z"></path>
              </svg>
              <span className="mr-1">3 min</span>
              <span>| No hard credit check</span>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="relative flex flex-col items-center justify-center md:flex-row mt-10 md:mt-12">
            <div className="px-4">
              <img 
                alt="Better Mortgage AI-powered FICO" 
                width="510" 
                height="810" 
                decoding="async" 
                className="max-w-full h-auto"
                src="https://media.better.com/better-com/homepage/ai-powered-fico.webp"
                style={{ color: 'transparent' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section bg-white m-auto flex max-w-screen-2xl flex-col justify-between gap-8 p-6 py-20 md:px-10 md:flex-row-reverse xl:p-[140px]">
        <div className="flex flex-col  justify-center md:max-w-[507px]">
          <h2 className="font-bold text-gray-900 leading-none m-0 p-0 w-auto tracking-tight md:tracking-tighter mb-8 text-3xl md:text-4xl lg:text-[88px]">
            Find out why we're better.
          </h2>
          
          <Link
            href="/about-us"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 bg-[#014d36] text-white hover:bg-gray-800 h-16 px-12 py-5 mb-4 w-full md:w-fit"
          >
            See all our stories
          </Link>

          {/* Trustpilot Rating */}
          <div className="mb-8 flex items-end justify-center gap-2 leading-small text-gray-600 md:justify-start">
            
            <span><strong> Trustpilot Excellent</strong></span>
            <span><strong>4.4</strong> out of 5</span>
          </div>
        </div>

        {/* Customer testimonial video section */}
        <div className="flex flex-col gap-8 md:flex-col-reverse items-center">
          <div className="flex gap-4 overflow-scroll [&::-webkit-scrollbar]:hidden">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border hover:shadow-green-200 hover:border-green-200 hover:shadow-[0_0_0_4px_inset] hover:text-green-600 h-12 px-6 py-3 w-auto shadow-green-200 border-green-200 shadow-[0_0_0_4px_inset] text-green-600">
              Paul
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-gray-300 text-gray-700 hover:shadow-green-200 hover:border-green-200 hover:shadow-[0_0_0_4px_inset] hover:text-green-600 h-12 px-6 py-3 w-auto">
              Amanda
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-gray-300 text-gray-700 hover:shadow-green-200 hover:border-green-200 hover:shadow-[0_0_0_4px_inset] hover:text-green-600 h-12 px-6 py-3 w-auto">
              Tiara
            </button>
          </div>

          <div className="relative flex justify-center overflow-hidden rounded-xl w-[341px] h-[606px]">
            <button className="relative w-full h-full" aria-label="Play video for Paul">
              <img 
                alt="Paul-thumbnail" 
                loading="lazy" 
                decoding="async" 
                className="absolute inset-0 w-full h-full object-cover"
                src="https://media.better.com/better-com/homepage/social-proof/still-quote-Paul.webp"
                style={{ color: 'transparent' }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="text-white w-16 h-16">
                  <path d="m478.409978 235.509653-407.739696-212.7793002c-10.6898048-5.3385488-23.670282 2.2879494-23.670282 14.4903466v425.5586016c0 12.202397 12.9804772 19.828895 23.670282 14.490346l407.739696-212.7793c11.453363-6.101199 11.453363-22.879495 0-28.980694z" fill="currentColor"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Learning Center Section */}
      <section className="section w-full pb-6 lg:pb-12 bg-white">
        <div className="m-auto flex max-w-screen-2xl flex-col items-center md:items-start gap-8 px-6 py-20 md:px-10 lg:gap-[60px]">
          <div className="flex w-full max-w-lg flex-wrap gap-12 lg:gap-6 lg:max-w-none lg:items-end lg:justify-between">
            <h2 className="font-medium text-gray-900 leading-none m-0 p-0 text-4xl  md:tracking-tight w-full lg:pl-12 max-w-lg tracking-tight">
              Got questions?<br />We've got answers
            </h2>

            <div className="flex gap-3 overflow-x-scroll lg:gap-6 [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border hover:shadow-green-200 hover:border-green-200 hover:shadow-[0_0_0_4px_inset] hover:text-green-600 h-12 px-6 py-3 w-auto shadow-green-200 border-green-200 shadow-[0_0_0_4px_inset] text-green-600">
                Our products
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-gray-300 text-gray-700 hover:shadow-green-200 hover:border-green-200 hover:shadow-[0_0_0_4px_inset] hover:text-green-600 h-12 px-6 py-3 w-auto">
                Calculators
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-gray-300 text-gray-700 hover:shadow-green-200 hover:border-green-200 hover:shadow-[0_0_0_4px_inset] hover:text-green-600 h-12 px-6 py-3 w-auto">
                Guides & FAQs
              </button>
            </div>
          </div>

          {/* Product Cards */}
          <div className="flex flex-wrap px-12  gap-8 lg:gap-6">
            {/* AI Mortgage Card */}
            <Link
              href="/about-us"
              className="flex-col bg-green-50 rounded-lg px-6 py-5 cursor-pointer max-w-sm w-full "
            >
              <div className="flex flex-col gap-6 ">
                <h4 className="font-semibold leading-6 m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal text-gray-900 lg:text-xl ">
                  How AI Mortgage Lending is Transforming the Home Loan Process
                </h4>
                <div className="flex items-end justify-between ">
                  <div className="group">
                    <svg width="48" height="49" viewBox="0 0 48 49" fill="none" className="transition ease-universal duration-300 fill-transparent hover:fill-[#004733] [&_path]:fill-[#004733] group-hover:[&_path]:fill-white [&_rect]:stroke-[#A4A8A4] group-hover:[&_rect]:stroke-none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.843384" width="47" height="47" rx="23.5" stroke="#A4A8A4"></rect>
                      <path d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z" fill="#004733"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <img 
                alt="Woman on cellphone, seeing how AI is making the mortgage process easier and faster" 
                loading="lazy" 
                width="200" 
                height="200" 
                className="w-full rounded-lg object-cover h-[160px] md:h-[130px] mt-4"
                src="https://media.better.com/better-com/homepage/learning-center/ai-mortgage.webp"
                style={{ color: 'transparent' }}
              />
            </Link>

            {/* One Day Mortgage Card */}
            <Link
              href="/mortgage-calculator"
              className="flex w-full max-w-xl cursor-pointer flex-col gap-8 rounded-lg bg-green-50 px-6 py-5 md:flex-row md:gap-10 md:max-w-4xl md:justify-between md:px-12 md:py-8 lg:flex-1  lg:justify-between lg:gap-6 lg:px-12 lg:py-[35px] lg:max-w-4xl lg:basis-3/5 lg:flex-row"
            >
              <div className="flex flex-col gap-6 flex-1">
                <h4 className="font-bold leading-none m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal text-gray-900 lg:text-xl">
                  One Day Mortgage<sup>1</sup>
                </h4>
                <p className="hidden flex-1 md:flex-none text-sm font-thin text-gray-900 md:block ">
                  Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.<sup>1</sup>
                </p>
                <div className="flex items-end justify-between">
                  <div className="group">
                    <svg width="48" height="49" viewBox="0 0 48 49" fill="none" className="transition ease-universal duration-300 fill-transparent hover:fill-[#004733] [&_path]:fill-[#004733] group-hover:[&_path]:fill-white [&_rect]:stroke-[#A4A8A4] group-hover:[&_rect]:stroke-none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.843384" width="47" height="47" rx="23.5" stroke="#A4A8A4"></rect>
                      <path d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z" fill="#004733"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <img 
                alt="One day mortgage" 
                loading="lazy" 
                width="200" 
                height="200" 
                className="w-full rounded-lg object-cover h-[160px] md:h-[130px] md:max-w-[285px]"
                src="https://media.better.com/better-com/homepage/learning-center/one-day-mortgage.webp"
                style={{ color: 'transparent' }}
              />
            </Link>

            {/* Better HELOC Card */}
            <Link
              href="#"
              className="flex w-full max-w-lg cursor-pointer flex-col gap-8 rounded-lg bg-green-50 px-6 py-5 md:flex-row-reverse md:gap-10 md:max-w-full md:justify-between md:px-12 md:py-8 lg:flex-1  lg:justify-between lg:gap-6 lg:px-12 lg:py-[35px] lg:max-w-4xl lg:basis-3/5 lg:flex-row-reverse"
            >
              <div className="flex flex-col gap-6 flex-1">
                <h4 className="font-bold leading-none m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal text-gray-900 lg:text-xl">
                  Better HELOC
                </h4>
                <p className="hidden flex-1 md:flex-none text-sm text-gray-900 md:block">
                  Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit<sup>2</sup>. Access up to 90% of your home equity as cash in as little as 7 days.<sup>3</sup>
                </p>
                <div className="flex items-end justify-between">
                  <div className="group">
                    <svg width="48" height="49" viewBox="0 0 48 49" fill="none" className="transition ease-universal duration-300 fill-transparent hover:fill-[#004733] [&_path]:fill-[#004733] group-hover:[&_path]:fill-white [&_rect]:stroke-[#A4A8A4] group-hover:[&_rect]:stroke-none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.843384" width="47" height="47" rx="23.5" stroke="#A4A8A4"></rect>
                      <path d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z" fill="#004733"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <img 
                alt="Better HELOC" 
                loading="lazy" 
                width="200" 
                height="300" 
                className="w-full rounded-lg object-cover h-[160px] md:h-[250px] md:max-w-[280px]"
                src="https://media.better.com/better-com/homepage/learning-center/better-heloc.webp"
                style={{ color: 'transparent' }}
              />
            </Link>

            {/* Insurance Card */}
            <Link
              href="#"
              className="flex w-full max-w-lg cursor-pointer flex-col gap-8 rounded-lg bg-green-50 px-6 py-5 md:flex-row md:gap-10 md:max-w-full md:justify-between md:px-12 md:py-8 lg:flex-1 lg:flex-col lg:basis-1/4 lg:justify-between lg:gap-6 lg:px-12 lg:py-[35px] lg:max-w-lg"
            >
              <div className="flex flex-col gap-6">
                <h4 className="font-bold leading-none m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal text-gray-900 lg:text-xl">
                  Insurance
                </h4>
                <div className="flex items-end justify-between">
                  <div className="group">
                    <svg width="48" height="49" viewBox="0 0 48 49" fill="none" className="transition ease-universal duration-300 fill-transparent hover:fill-[#004733] [&_path]:fill-[#004733] group-hover:[&_path]:fill-white [&_rect]:stroke-[#A4A8A4] group-hover:[&_rect]:stroke-none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.843384" width="47" height="47" rx="23.5" stroke="#A4A8A4"></rect>
                      <path d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z" fill="#004733"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <img 
                alt="Insurance" 
                loading="lazy" 
                width="200" 
                height="200" 
                className="w-full rounded-lg object-cover h-[160px] md:h-[130px]"
                src="https://media.better.com/better-com/homepage/learning-center/insurance.webp"
                style={{ color: 'transparent' }}
              />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
