import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-white py-20 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-xl lg:text-2xl font-bold text-green-700 mb-8 mt-32">
            Our mission
          </h1>
          <p className="text-2xl lg:text-5xl font-normal text-black leading-snug">
            We&#39;re making homeownership simpler, faster — and most importantly, more accessible for all Americans.
          </p>
        </div>
      </section>
      
      {/* Problem Section */}
      <section className="py-20 bg-gray-50 px-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The status quo is broken
              </h2>
              <p className="text-md text-gray-600 leading-relaxed mb-6">
                The traditional processes around homeownership are opaque and stressful. Fees aren&#39;t transparent 
                and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees 
                and slow, painful processes. It&#39;s a system set up to benefit insiders — not you.Better.com CEO, Vishal Garg, set out to change that.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                
              </p>
              <div className='px-4 py-2 rounded-lg '>
              <Link 
                href="#" 
                className="inline-block mt-6 text-green-500 text-lg font-medium"
              >
                Read Vishal&#39;s story 
              </Link>
              </div>
            </div>
            
            {/* Illustration placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">😤</div>
                  <p className="text-xl font-semibold text-gray-700">Traditional Process</p>
                  <p className="text-gray-600">Complex • Expensive • Slow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Solution Section */}
      <section className="py-20 bg-green-700  ">
        <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-24">
          <div className=" gap-16 items-center">
            {/* Illustration placeholder */}
            {/* <div className="relative lg:order-1">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <p className="text-xl font-semibold text-gray-700">Better's Approach</p>
                  <p className="text-gray-600">Simple • Transparent • Fast</p>
                </div>
              </div>
            </div> */}
            
            <div className="lg:order-2">
              <h2 className="text-3xl md:text-5xl font-medium  text-white mb-8">
                How we&#39;re changing things
              </h2>
              <p className="text-md text-white leading-relaxed mb-6">
                Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages 
                account for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque 
                systems and expensive intermediaries whose interests are misaligned with consumers&#39;.
              </p>
              <p className="text-md leading-relaxed">
                That&#39;s why Better.com is redefining the homeownership process from the ground up. We&#39;re using technology 
                to make it faster and more efficient, and humans to help make it friendly and enjoyable.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Backed By Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Backed by</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {/* Investor logos placeholders */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-gray-600">SoftBank</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-gray-600">Kleiner Perkins</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-gray-600">Goldman Sachs</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-gray-600">American Express</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
     <section className="py-20 bg-white">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
      Company timeline
    </h2>

    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-200 -translate-x-1/2"></div>

      <div className="space-y-24">
        {[
          { year: "2014", text: "After Vishal Garg’s first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all" },
          { year: "2015", text: "Better Mortgage funds its first mortgage loan entirely online." },
          { year: "2016", text: "Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors." },
          { year: "2017", text: "Better expands into the real estate market with Better Real Estate." },
          { year: "2018", text: "Better Mortgage partners with Ally Bank to build Ally powered by Better." },
          { year: "2019", text: "Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers." },
          { year: "2022", text: "Better Mortgage becomes the first fintech to fund $100B home loans entirely online." },
          { year: "2023", text: "Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days." },
          { year: "Today", text: "You become part of the story by joining tens of thousands of happy Better Mortgage borrowers." },
        ].map((item, idx) => (
          <div key={idx} className="relative flex items-center w-full">
            {/* Year pill on the center line */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-6">
              <span className="px-5 py-2 bg-green-600 text-white rounded-full font-bold text-lg shadow">
                {item.year}
              </span>
            </div>

            {/* Timeline card */}
            <div
              className={`w-5/12 ${idx % 2 === 0 ? "mr-auto text-left" : "ml-auto text-left"}`}
            >
              <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                <p className="text-gray-600 text-md leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      
      {/* Related Posts Section */}
      <section className="py-16 bg-[#F0F7F1] text-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-40">
          <h2 className="text-3xl font-bold flex justify-start mb-12">
            Related posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <article className="bg-wh border border-slate-300 rounded-2xl p-6 flex flex-col h-full">
              <h3 className="text-lg font-medium mb-2 text-gray-800">How Better.com is revolutionizing mortgages</h3>
              <p className="text-gray-600 text-sm mb-6 flex-1">
                Learn about our innovative approach to making homeownership more accessible.
              </p>
              <Link href="#" className="text-green-700 font-semibold flex items-center gap-1 mt-auto group hover:underline">
                Read now <span aria-hidden="true" className="text-green-700 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </article>
            {/* Card 2 */}
            <article className="bg-whit border border-slate-300 rounded-2xl p-6 flex flex-col h-full">
              <h3 className="text-lg font-medium mb-2 text-gray-800">The future of digital lending</h3>
              <p className="text-gray-600 text-sm mb-6 flex-1">
                Discover how technology is transforming the mortgage industry.
              </p>
              <Link href="#" className="text-green-700 font-semibold flex items-center gap-1 mt-auto group hover:underline">
                Read now <span aria-hidden="true" className="text-green-700 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </article>
            {/* Card 3 (example, can duplicate or add more as needed) */}
            <article className="bg-whit border border-slate-300 rounded-2xl p-6 flex flex-col h-full">
              <h3 className="text-lg font-medium   mb-2 text-gray-800">What is Better Mortgage?</h3>
              <p className="text-gray-600 text-sm mb-6 flex-1">
                We launched Better Mortgage because the mortgage industry is...
              </p>
              <Link href="#" className="text-green-700 font-semibold flex items-center gap-1 mt-auto group hover:underline">
                Read now <span aria-hidden="true" className="text-green-700 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </article>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
} 