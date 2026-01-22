import { useState } from 'react';

export default function Home() {
  console.log('Home page rendered');

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-indigo-50 to-indigo-100">
      <section className="px-4 py-4 flex">
        <div className="bg-white container mx-auto">
          <h1>Home Page</h1>
          <p>Welcome to the home page!</p>
        </div>
      </section>

      {/* Banking System Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl">
          {/* Left side - Image */}
          <div className="relative h-[500px] lg:h-auto">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              alt="Business meeting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side - Content */}
          <div className="bg-slate-800 text-white p-8 lg:p-12 flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 leading-tight">
              You should choose us to move-on banking system tha inspired by expert
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Information */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-white mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Information</h3>
                    <p className="text-slate-300 text-sm">
                      Our 40+ years of expertise and local roots make us the premier event venue
                    </p>
                  </div>
                </div>
              </div>

              {/* Bank Loan */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-white mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Bank Loan</h3>
                    <p className="text-slate-300 text-sm">
                      Industry research organizations, the poster of mineral resources throughout Canada.
                    </p>
                  </div>
                </div>
              </div>

              {/* Insurance */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-white mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Insurance</h3>
                    <p className="text-slate-300 text-sm">
                      There are numerous opportunities to participate in binox roundup, including the
                    </p>
                  </div>
                </div>
              </div>

              {/* Strategy */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-white mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Strategy</h3>
                    <p className="text-slate-300 text-sm">
                      Every day at the same hour a man invariably dressed in a pressed by black woolen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Co-Working Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[700px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
              alt="Modern co-working space"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                background: 'linear-gradient(180deg, rgba(16, 43, 50, 0.00) 31.75%, rgba(16, 43, 50, 0.80) 68.76%)'
              }}
            ></div>
          </div>

          {/* Content */}
          <div className="relative z-10 min-h-[700px] flex flex-col">
            {/* Top Section */}
            <div className="flex-1 px-8 lg:px-16 pt-12 pb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
                {/* Left Content */}
                <div className="flex flex-col justify-between">
                  {/* Top Badge */}
                  <div className="mb-8">
                    <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                      Your Space To Create
                    </span>
                  </div>

                  {/* Main Heading */}
                  <div className="flex-1 flex flex-col justify-center">
                    <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                      Flexible co-working spaces tailored to your needs
                    </h1>
                    <p className="text-white/90 text-lg max-w-2xl">
                      Discover modern, inspiring, and fully equipped workspaces designed to fuel creativity,
                      collaboration, and growth. Whether you're a freelancer, startup, or established team.
                    </p>
                  </div>

                  {/* Bottom Actions */}
                  <div className="flex flex-wrap items-center gap-6 mt-8">
                    <button className="bg-lime-400 hover:bg-lime-500 text-gray-900 px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all hover:scale-105 shadow-lg">
                      Book A Trial Ride
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>

                    {/* <div className="flex items-center gap-4">
                      <div className="flex -space-x-3">
                        <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                          <img
                            src="https://i.pravatar.cc/150?img=12"
                            alt="Client 1"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                          <img
                            src="https://i.pravatar.cc/150?img=13"
                            alt="Client 2"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                          <img
                            src="https://i.pravatar.cc/150?img=14"
                            alt="Client 3"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <button className="w-10 h-10 rounded-full border-2 border-white bg-lime-400 flex items-center justify-center text-gray-900 font-bold hover:bg-lime-500 transition-colors">
                          +
                        </button>
                      </div>
                      <div className="text-white">
                        <div className="text-2xl font-bold">95%</div>
                        <div className="text-sm opacity-90">Client satisfaction rate</div>
                      </div>
                    </div> */}
                  </div>
                </div>

                {/* Right Content - Testimonial & Rating Cards */}
                <div className="flex flex-col justify-start items-end gap-6 pt-8">
                  {/* <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 max-w-md shadow-xl">
                    <p className="text-gray-800 text-lg font-medium mb-4">
                      "A perfect balance of comfort and productivity."
                    </p>
                    <div className="flex -space-x-3">
                      <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                        <img
                          src="https://i.pravatar.cc/150?img=5"
                          alt="User 1"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                        <img
                          src="https://i.pravatar.cc/150?img=6"
                          alt="User 2"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                        <img
                          src="https://i.pravatar.cc/150?img=7"
                          alt="User 3"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                        <img
                          src="https://i.pravatar.cc/150?img=8"
                          alt="User 4"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <button className="w-10 h-10 rounded-full border-2 border-white bg-lime-400 flex items-center justify-center text-gray-900 font-bold hover:bg-lime-500 transition-colors">
                        +
                      </button>
                    </div>
                  </div> */}

                  {/* Google Rating Card */}
                  {/* <div className="bg-teal-900/95 backdrop-blur-sm rounded-2xl p-6 max-w-sm shadow-xl">
                    <div className="text-white mb-3">
                      <div className="text-lg font-semibold mb-2">Google Rating</div>
                      <div className="flex items-center gap-2 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                      <div className="text-2xl font-bold">(5.0)</div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Bottom Bar - Trusted Clients */}
            <div className="bg-white absolute bottom-0 right-0 px-8 lg:px-16 py-6 rounded-tl-[40px]">
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div className="text-gray-900 font-semibold text-lg">1000+ Trusted Clients Over Worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Fixed Left, Scrollable Right */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl shadow-xl">
          {/* Left side - Fixed Content */}
          <div className="relative min-h-[600px] lg:h-screen lg:sticky lg:top-0 rounded-l-2xl overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between p-8 lg:p-12">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Get the <span className="underline decoration-4">most valuable</span> service
                </h2>
              </div>

              <div>
                <p className="text-white text-lg max-w-md">
                  Nanotechnology immersion along the information highway will close the loop on focusing solely on the
                  bottom line.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Scrollable List */}
          <div className="bg-white p-8 lg:p-12 rounded-r-2xl">
            <div className="space-y-8">
              {/* Item 01 - Planning */}
              <div className="flex gap-6 group cursor-pointer border-b border-gray-200 pb-8">
                <div className="text-gray-300 text-xl font-light flex-shrink-0">01</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Planning</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We're a creative branding and communications company of creative thinkers, strategists, digital
                    innovators,
                  </p>
                </div>
                <div className="flex items-start pt-2">
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-gray-800 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Item 02 - Human Resource */}
              <div className="flex gap-6 group cursor-pointer border-b border-gray-200 pb-8">
                <div className="text-gray-300 text-xl font-light flex-shrink-0">02</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Human Resource</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We're a creative branding and communications company of creative thinkers, strategists, digital
                    innovators,
                  </p>
                </div>
                <div className="flex items-start pt-2">
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-gray-800 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Item 03 - Organisations */}
              <div className="flex gap-6 group cursor-pointer border-b border-gray-200 pb-8">
                <div className="text-gray-300 text-xl font-light flex-shrink-0">03</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Organisations</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We're a creative branding and communications company of creative thinkers, strategists, digital
                    innovators,
                  </p>
                </div>
                <div className="flex items-start pt-2">
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-gray-800 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Item 04 - Research & Analysis */}
              <div className="flex gap-6 group cursor-pointer pb-8">
                <div className="text-gray-300 text-xl font-light flex-shrink-0">04</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Research & Analysis</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We're a creative branding and communications company of creative thinkers, strategists, digital
                    innovators,
                  </p>
                </div>
                <div className="flex items-start pt-2">
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-gray-800 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div className="flex gap-6 group cursor-pointer pb-8">
                <div className="text-gray-300 text-xl font-light flex-shrink-0">04</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Research & Analysis</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We're a creative branding and communications company of creative thinkers, strategists, digital
                    innovators,
                  </p>
                </div>
                <div className="flex items-start pt-2">
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-gray-800 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div className="flex gap-6 group cursor-pointer pb-8">
                <div className="text-gray-300 text-xl font-light flex-shrink-0">04</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Research & Analysis</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We're a creative branding and communications company of creative thinkers, strategists, digital
                    innovators,
                  </p>
                </div>
                <div className="flex items-start pt-2">
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-gray-800 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div className="flex gap-6 group cursor-pointer pb-8">
                <div className="text-gray-300 text-xl font-light flex-shrink-0">04</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Research & Analysis</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We're a creative branding and communications company of creative thinkers, strategists, digital
                    innovators,
                  </p>
                </div>
                <div className="flex items-start pt-2">
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-gray-800 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div className="flex gap-6 group cursor-pointer pb-8">
                <div className="text-gray-300 text-xl font-light flex-shrink-0">04</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Research & Analysis</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We're a creative branding and communications company of creative thinkers, strategists, digital
                    innovators,
                  </p>
                </div>
                <div className="flex items-start pt-2">
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-gray-800 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Fixed Left, Scrollable Right */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl shadow-xl">
          {/* Left side - Fixed Content */}
          <div className="relative min-h-[600px] lg:h-screen lg:sticky lg:top-0 rounded-l-2xl overflow-hidden">
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col gap-8 p-8 lg:p-12 bg-white">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-dark leading-tight">
                  Get the <span className="underline decoration-4">most valuable</span> service
                </h2>
              </div>

              <div>
                <p className="text-dark text-lg max-w-md">
                  Nanotechnology immersion along the information highway will close the loop on focusing solely on the
                  bottom line.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Scrollable List */}
          <div className="bg-white p-8 lg:p-12 rounded-r-2xl">
            <div className="space-y-8">
              {/* Item 01 - Planning */}
              <div className="flex gap-6 group cursor-pointer border-b border-gray-200 pb-8">
                <div className="text-gray-300 text-xl font-light flex-shrink-0">01</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Planning</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We're a creative branding and communications company of creative thinkers, strategists, digital
                    innovators,
                  </p>
                </div>
                <div className="flex items-start pt-2">
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-gray-800 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Item 02 - Human Resource */}
              <div className="flex gap-6 group cursor-pointer border-b border-gray-200 pb-8">
                <div className="text-gray-300 text-xl font-light flex-shrink-0">02</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Human Resource</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We're a creative branding and communications company of creative thinkers, strategists, digital
                    innovators,
                  </p>
                </div>
                <div className="flex items-start pt-2">
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-gray-800 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Item 03 - Organisations */}
              <div className="flex gap-6 group cursor-pointer border-b border-gray-200 pb-8">
                <div className="text-gray-300 text-xl font-light flex-shrink-0">03</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Organisations</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We're a creative branding and communications company of creative thinkers, strategists, digital
                    innovators,
                  </p>
                </div>
                <div className="flex items-start pt-2">
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-gray-800 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Item 04 - Research & Analysis */}
              <div className="flex gap-6 group cursor-pointer pb-8">
                <div className="text-gray-300 text-xl font-light flex-shrink-0">04</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Research & Analysis</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We're a creative branding and communications company of creative thinkers, strategists, digital
                    innovators,
                  </p>
                </div>
                <div className="flex items-start pt-2">
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-gray-800 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div className="flex gap-6 group cursor-pointer pb-8">
                <div className="text-gray-300 text-xl font-light flex-shrink-0">04</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Research & Analysis</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We're a creative branding and communications company of creative thinkers, strategists, digital
                    innovators,
                  </p>
                </div>
                <div className="flex items-start pt-2">
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-gray-800 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div className="flex gap-6 group cursor-pointer pb-8">
                <div className="text-gray-300 text-xl font-light flex-shrink-0">04</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Research & Analysis</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We're a creative branding and communications company of creative thinkers, strategists, digital
                    innovators,
                  </p>
                </div>
                <div className="flex items-start pt-2">
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-gray-800 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div className="flex gap-6 group cursor-pointer pb-8">
                <div className="text-gray-300 text-xl font-light flex-shrink-0">04</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Research & Analysis</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We're a creative branding and communications company of creative thinkers, strategists, digital
                    innovators,
                  </p>
                </div>
                <div className="flex items-start pt-2">
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-gray-800 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div className="flex gap-6 group cursor-pointer pb-8">
                <div className="text-gray-300 text-xl font-light flex-shrink-0">04</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Research & Analysis</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We're a creative branding and communications company of creative thinkers, strategists, digital
                    innovators,
                  </p>
                </div>
                <div className="flex items-start pt-2">
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-gray-800 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Services Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors group"
              >
                <span className="text-sm font-medium border-b-2 border-gray-900 pb-1">Get the expert</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                We grow your brand through bold service we're providing
              </h2>
            </div>
          </div>

          {/* Advisory Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 01 - Capital Advisory */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">
                <span className="text-sm text-gray-400 mb-2 block">01</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Capital
                  <br />
                  Advisory
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  We have an ambitious road ahead, and we're looking for people to join our global team.
                </p>
              </div>
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-gray-900 border-b-2 border-gray-900 pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors"
              >
                Read more
              </a>
            </div>

            {/* Card 02 - Legal Advisory */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">
                <span className="text-sm text-gray-400 mb-2 block">02</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Legal
                  <br />
                  Advisory
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  We have an ambitious road ahead, and we're looking for people to join our global team.
                </p>
              </div>
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-gray-900 border-b-2 border-gray-900 pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors"
              >
                Read more
              </a>
            </div>

            {/* Card 03 - Audit Advisory */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">
                <span className="text-sm text-gray-400 mb-2 block">03</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Audit
                  <br />
                  Advisory
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  We believe debt + equity capital should be thoughtfully customized, not commoditized.
                </p>
              </div>
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-gray-900 border-b-2 border-gray-900 pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors"
              >
                Read more
              </a>
            </div>

            {/* Card 04 - Risk Advisory */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">
                <span className="text-sm text-gray-400 mb-2 block">04</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Risk
                  <br />
                  Advisory
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  Admins and regular users boost binox with on-demand learning for all proficiency levels.
                </p>
              </div>
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-gray-900 border-b-2 border-gray-900 pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-slate-900 mb-16">
            Frequently Asked
            <br />
            Questions
          </h2>

          {/* FAQ Items */}
          <div className="space-y-4">
            {/* FAQ 1 */}
            <div className="bg-white rounded-lg border border-gray-200 transition-all duration-500 hover:shadow-md">
              <button
                onClick={() => toggleFaq(0)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-xl font-bold text-slate-900 pr-8">
                  What services does your consultancy company provide?
                </h3>
                <div className="flex-shrink-0">
                  {openFaq === 0 ? (
                    <svg
                      className="w-6 h-6 text-gray-600 transform rotate-0 transition-transform duration-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 text-gray-600 transform rotate-0 transition-transform duration-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
                    </svg>
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFaq === 0 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-slate-700 leading-relaxed">
                    Our services are designed to help businesses leverage technology to streamline operation's, improve
                    efficiency, enhance security, reduce costs and ultimately achieve their business goals.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-lg border border-gray-200 transition-all duration-500 hover:shadow-md">
              <button
                onClick={() => toggleFaq(1)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-xl font-bold text-slate-900 pr-8">
                  How can your IT consultancy services benefit my business?
                </h3>
                <div className="flex-shrink-0">
                  {openFaq === 1 ? (
                    <svg
                      className="w-6 h-6 text-gray-600 transform rotate-0 transition-transform duration-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 text-gray-600 transform rotate-0 transition-transform duration-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
                    </svg>
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFaq === 1 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-slate-700 leading-relaxed">
                    Our IT consultancy services can help streamline your operations, improve efficiency, reduce costs,
                    and provide strategic guidance for technology implementations.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-lg border border-gray-200 transition-all duration-500 hover:shadow-md">
              <button
                onClick={() => toggleFaq(2)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-xl font-bold text-slate-900 pr-8">What industries do you specialize in?</h3>
                <div className="flex-shrink-0">
                  {openFaq === 2 ? (
                    <svg
                      className="w-6 h-6 text-gray-600 transform rotate-0 transition-transform duration-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 text-gray-600 transform rotate-0 transition-transform duration-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
                    </svg>
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFaq === 2 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-slate-700 leading-relaxed">
                    We work across various industries including finance, healthcare, retail, manufacturing, and
                    technology sectors.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white rounded-lg border border-gray-200 transition-all duration-500 hover:shadow-md">
              <button
                onClick={() => toggleFaq(3)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-xl font-bold text-slate-900 pr-8">
                  How do you ensure the security of my data and systems?
                </h3>
                <div className="flex-shrink-0">
                  {openFaq === 3 ? (
                    <svg
                      className="w-6 h-6 text-gray-600 transform rotate-0 transition-transform duration-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 text-gray-600 transform rotate-0 transition-transform duration-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
                    </svg>
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFaq === 3 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-slate-700 leading-relaxed">
                    We implement industry-leading security protocols, conduct regular audits, and follow best practices
                    to ensure your data and systems remain secure.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 5 */}
            <div className="bg-white rounded-lg border border-gray-200 transition-all duration-500 hover:shadow-md">
              <button
                onClick={() => toggleFaq(4)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-xl font-bold text-slate-900 pr-8">
                  Can you help with software implementation and integration?
                </h3>
                <div className="flex-shrink-0">
                  {openFaq === 4 ? (
                    <svg
                      className="w-6 h-6 text-gray-600 transform rotate-0 transition-transform duration-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 text-gray-600 transform rotate-0 transition-transform duration-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
                    </svg>
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFaq === 4 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-slate-700 leading-relaxed">
                    Yes, we provide comprehensive software implementation and integration services to ensure seamless
                    adoption and optimal performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left side - Title and Button */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-red-500 text-sm font-medium mb-4 tracking-wide">// 08 - BINOX BLOG</p>
                <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Journal insight
                  <br />
                  the binox
                </h2>
              </div>
              <div className="mt-8 lg:mt-0">
                <div className="inline-flex items-center gap-4">
                  <a
                    href="#"
                    className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors"
                  >
                    All Blog
                  </a>
                  <button className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Right side - Blog Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Blog Card 1 */}
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                    alt="Team collaboration"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-4 text-sm">
                    <span className="font-semibold text-slate-900">BUSINESS</span>
                    <span className="text-gray-500">April 18, 2024</span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 leading-tight group-hover:text-slate-700 transition-colors">
                    How to create your purpose-filled career comfortable
                  </h3>
                </div>
              </div>

              {/* Blog Card 2 */}
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                    alt="Business meeting"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-4 text-sm">
                    <span className="font-semibold text-slate-900">BUSINESS</span>
                    <span className="text-gray-500">April 18, 2024</span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 leading-tight group-hover:text-slate-700 transition-colors">
                    How to create your purpose-filled career comfortable clothes
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section 2 */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left side - Title and Description */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                  Journal from
                  <br />
                  <span className="underline decoration-2">the binox</span>
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We believe that the human dimensions essential to start any successful project
                </p>
              </div>
              <div className="mt-8 lg:mt-0">
                <a href="#" className="inline-flex items-center gap-2 text-slate-900 font-medium group">
                  <span>READ ALL POSTS</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right side - Blog Cards */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Blog Card 1 */}
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80"
                    alt="Architecture"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-sm">
                    <span className="font-semibold text-slate-900">BUSINESS</span>
                    <span className="text-gray-500">May 12, 2024</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-slate-700 transition-colors">
                    How to create your purpose-filled career comfortable clothes
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    How to create your purpose-filled career comfortable clothes Written by WealCoder Post Date comments
                    No Comments Views shares Facebook Twitter Pinterest Myriam was first trained as a sculptor in
                  </p>
                </div>
              </div>

              {/* Blog Card 2 */}
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&q=80"
                    alt="Team meeting"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-sm">
                    <span className="font-semibold text-slate-900">BUSINESS</span>
                    <span className="text-gray-500">April 18, 2024</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-slate-700 transition-colors">
                    How to create your purpose-filled career comfortable
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Over the past three years, marketers have faced journey due to the rapid shifts in consumer.....
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Title Section with Decorative Elements */}
      <section className="bg-white py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight text-center">
              An unbound{' '}
              <span className="inline-flex items-center gap-3">
                <svg className="w-12 h-12 lg:w-16 lg:h-16" viewBox="0 0 64 64" fill="none">
                  <path d="M32 8L48 24L32 40L16 24L32 8Z" fill="#5EBBBB" />
                  <path d="M32 24L48 40L32 56L16 40L32 24Z" fill="#3D9999" opacity="0.7" />
                </svg>
                Banking
              </span>
              <br />
              Systems{' '}
              <span className="inline-flex items-center gap-3">
                <svg className="w-12 h-12 lg:w-16 lg:h-16" viewBox="0 0 64 64" fill="none">
                  <rect x="12" y="20" width="40" height="8" rx="4" fill="#FF9AA2" />
                  <rect x="12" y="32" width="40" height="8" rx="4" fill="#B5D4E8" />
                  <rect x="12" y="44" width="40" height="8" rx="4" fill="#FFB7B2" />
                </svg>
                Consultancy
              </span>
              <br />
              <span className="inline-flex items-center gap-3">
                <svg className="w-10 h-10 lg:w-14 lg:h-14" viewBox="0 0 64 64" fill="none">
                  <path
                    d="M20 32 L32 20 L38 26"
                    stroke="#FF6B6B"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="32" cy="32" r="3" fill="#FF6B6B" />
                </svg>
                firm in London
              </span>
              <span className="inline-flex ml-2">
                <svg className="w-8 h-8 lg:w-10 lg:h-10" viewBox="0 0 40 40" fill="none">
                  <path
                    d="M10 10 L15 5 M10 10 L5 15 M10 10 L20 10"
                    stroke="#FF8C42"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="25" cy="10" r="2" fill="#FF8C42" />
                  <circle cx="30" cy="10" r="2" fill="#FF8C42" />
                </svg>
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1600&q=80"
            alt="Financial consultation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-8">
              Take the next step toward
              <br />
              financial clarity
            </h2>
            <div className="flex items-center justify-center gap-4">
              <a
                href="#"
                className="px-8 py-4 bg-white text-slate-900 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Get A Quite
              </a>
              <button className="w-14 h-14 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Image */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Sassly upgrade your business safely
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-12">
                We love connecting face-to-face with our customers and other like minded industry pros. Come meet the
                team virtually.
              </p>

              {/* Stats List */}
              <div className="space-y-8">
                {/* Stat 1 */}
                <div className="flex gap-8">
                  <div>
                    <div className="text-5xl font-bold text-slate-900 mb-1">30 %</div>
                    <div className="text-slate-900 font-semibold">Improvement</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-600">We love connecting face-to-face with our customers and minded.</p>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex gap-8">
                  <div>
                    <div className="text-5xl font-bold text-slate-900 mb-1">25 %</div>
                    <div className="text-slate-900 font-semibold">Revenue</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-600">We love connecting face-to-face with our customers and minded.</p>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex gap-8">
                  <div>
                    <div className="text-5xl font-bold text-slate-900 mb-1">60 %</div>
                    <div className="text-slate-900 font-semibold">Increase sales</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-600">We love connecting face-to-face with our customers and minded.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100 p-8">
                <img
                  src="https://plus.unsplash.com/premium_photo-1767883340001-f7b217a19700?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Business professional"
                  className="w-full h-auto rounded-2xl"
                />

                {/* Floating Card - Top */}
                <div className="absolute top-8 left-8 bg-white rounded-2xl shadow-xl p-4 max-w-xs">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-teal-700 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900">
                        Business <span className="text-orange-500">Growth</span> And Follow Statistics
                      </h4>
                    </div>
                    <button className="text-gray-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-gray-500">Participant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-pink-400 border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-orange-400 border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-white"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements - Bottom */}
                <div className="absolute bottom-8 left-8 flex flex-col gap-3">
                  <div className="bg-white rounded-xl shadow-lg p-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-400"></div>
                    <div className="flex-1 h-2 bg-gray-200 rounded"></div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-400"></div>
                    <div className="flex-1 h-2 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Header Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left side - Title */}
            <div>
              <p className="text-sm font-medium tracking-widest text-slate-900 mb-8">BINOX SERVICES</p>
              <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                We grow your brand through bold service we're providing
              </h2>
            </div>

            {/* Right side - Description and Link */}
            <div className="flex flex-col justify-between h-full">
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Crafting new bright brands, unique visual systems and digital experience focused on a wide range of
                original collabs.
              </p>
              <div>
                <a href="#" className="inline-flex items-center gap-2 text-slate-900 font-medium group">
                  <span className="border-b-2 border-slate-900 pb-1">Get the expert</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left side - Title and Description */}
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Which industry we cover
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Working with binox gives you a peace of mind in knowing that your books updated in real-time
              </p>
            </div>

            {/* Right side - Advisory List */}
            <div className="space-y-6">
              {/* Item 01 */}
              <div className="flex items-start gap-6 group cursor-pointer py-6 border-b border-gray-200 hover:border-slate-900 transition-colors">
                <span className="text-gray-400 font-light text-xl flex-shrink-0">01</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Leadership Advisory</h3>
                  <p className="text-gray-600">
                    We have an ambitious road ahead, and we're looking for people to join our global team.
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-slate-900 flex-shrink-0 mt-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* Item 02 */}
              <div className="flex items-start gap-6 group cursor-pointer py-6 border-b border-gray-200 hover:border-slate-900 transition-colors">
                <span className="text-gray-400 font-light text-xl flex-shrink-0">02</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Management Advisory</h3>
                  <p className="text-gray-600">
                    We have an ambitious road ahead, and we're looking for people to join our global team.
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-slate-900 flex-shrink-0 mt-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* Item 03 */}
              <div className="flex items-start gap-6 group cursor-pointer py-6 border-b border-gray-200 hover:border-slate-900 transition-colors">
                <span className="text-gray-400 font-light text-xl flex-shrink-0">03</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Chain & Supply Advisory</h3>
                  <p className="text-gray-600">
                    We have an ambitious road ahead, and we're looking for people to join our global team.
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-slate-900 flex-shrink-0 mt-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* Item 04 */}
              <div className="flex items-start gap-6 group cursor-pointer py-6 border-b border-gray-200 hover:border-slate-900 transition-colors">
                <span className="text-gray-400 font-light text-xl flex-shrink-0">04</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Employment Advisory</h3>
                  <p className="text-gray-600">
                    We have an ambitious road ahead, and we're looking for people to join our global team.
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-slate-900 flex-shrink-0 mt-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 404 Section */}
      <section className="bg-gray-50 py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* 404 Creative Typography */}
            <div className="mb-12">
              <div className="flex items-center justify-center text-9xl font-bold text-slate-900">
                <span>4</span>
                <span className="relative inline-block mx-4">
                  <svg className="w-32 h-32" viewBox="0 0 128 128" fill="none">
                    {/* Infinity symbol as 0 */}
                    <path
                      d="M32 64C32 47.4 42 32 58 32C74 32 80 42 80 48C80 54 74 64 58 64C42 64 32 54 32 48C32 42 38 32 54 32C70 32 80 42 80 48M80 48C80 42 86 32 102 32C118 32 128 47.4 128 64C128 80.6 118 96 102 96C86 96 80 86 80 80C80 74 86 64 102 64C118 64 128 74 128 80C128 86 122 96 106 96C90 96 80 86 80 80"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </span>
                <span>4</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Sorry! Page not found.</h1>

            {/* Description */}
            <p className="text-gray-600 text-lg mb-8">
              The page you are looking for was moved, removed, renamed or never existed.
            </p>

            {/* Button */}
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors"
            >
              Back to Home
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Service Details Hero Section */}
      <section className="relative bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="relative">
            {/* Services Details Label */}
            <div className="absolute top-0 left-0 z-10">
              <p className="text-xs font-medium tracking-widest text-slate-900">SERVICES DETAILS</p>
            </div>

            {/* Main Title */}
            <div className="text-center py-12">
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                Chain & Supply
                <br />
                Advisory
              </h1>
            </div>

            {/* Image and Card Section */}
            <div className="relative mt-8">
              {/* Background Image */}
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80"
                  alt="Team collaboration"
                  className="w-full h-[600px] object-cover"
                />
              </div>

              {/* Floating Card - Top Right */}
              <div className="absolute top-8 right-8 bg-white rounded-2xl shadow-2xl p-8 max-w-md">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Crafting new bright brand unique visual systems digital experience focused on wide range of original
                  collabs.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-slate-900 font-medium group">
                  <span className="border-b-2 border-slate-900 pb-1">See the plan</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Left - Label */}
            <div>
              <p className="text-xs font-medium tracking-widest text-slate-900">BINOX PROJECT</p>
            </div>

            {/* Center - Title */}
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">We're share our projects</h2>
            </div>

            {/* Right - Description */}
            <div>
              <p className="text-gray-600 leading-relaxed">
                Every decision make need answer the million dollar question how will this benefit our partner goal best
                we work to develop solution:
              </p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 - Graphic Design */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80"
                  alt="Graphic Design"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1 underline decoration-2">Graphic Design</h3>
                  <p className="text-gray-600">Case Study</p>
                </div>
                <div className="text-gray-400 text-sm">01%</div>
              </div>
            </div>

            {/* Project 2 - Market Research */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                  alt="Market Research"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1 underline decoration-2">Market Research</h3>
                  <p className="text-gray-600">Creativity</p>
                </div>
                <div className="text-gray-400 text-sm">01%</div>
              </div>
            </div>

            {/* Project 3 - Market Strategy */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
                  alt="Market Strategy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1 underline decoration-2">Market Strategy</h3>
                  <p className="text-gray-600">Case Study</p>
                </div>
                <div className="text-gray-400 text-sm">01%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <p className="text-xs font-medium tracking-widest text-slate-900 mb-6">BINOX PROJECT DETAILS</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-12">
              Walmark retail HR
              <br />
              management
            </h1>
          </div>

          {/* Hero Image with Play Button */}
          <div className="relative mb-16 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&q=80"
              alt="Project workspace"
              className="w-full h-[500px] object-cover"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-colors group">
                <svg className="w-6 h-6 text-slate-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left side - Metadata */}
            <div className="space-y-8">
              <div>
                <p className="text-sm text-gray-500 mb-1">Industry</p>
                <p className="text-lg font-semibold text-slate-900">Retail</p>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Client</p>
                <p className="text-lg font-semibold text-slate-900">Marius Bützler</p>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Start Date</p>
                <p className="text-lg font-semibold text-slate-900">16 Jan, 2024</p>
              </div>
            </div>

            {/* Right side - Problem Description */}
            <div>
              <p className="text-xs font-medium tracking-widest text-slate-900 mb-4">WALMARK PROBLEM</p>
              <h2 className="text-3xl font-bold text-slate-900 leading-tight mb-6">
                Media market a turn wanted to assess the impact turning display
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Myriam was first trained as a sculptor in Montreal and then in Helsinki, Finland. She is now based in
                  Quebec but works for clients all around the globe. From textile design to murals, editorial
                  illustrations and book covers, her style is recognized by her simple and perfectly arranged shapes as
                  well as her rich and vibrant color palettes. Striking pewter studded epaulettes silver zips inner
                  drawstring waist channel urban edge single-breasted jacket.
                </p>
                <p>
                  Engraved attention to detail elegant with neutral colors scheme quartz leather strap fastens with a
                  pin a buckle clasp.
                </p>
                <p>
                  However, the same reason also makes it messy. If someone is having a bad day, we might see it as a
                  sign of tension or lack of investment in the project. For outsiders, lacking an understanding of the
                  complex dynamics of a team can lead to the wrong conclusions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left side - Title and Contact Info */}
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-12">
                Let's contact for better result
              </h2>
              <div className="space-y-8">
                <div className="border-l-4 border-slate-900 pl-6">
                  <a href="skype:LiveChat@binox.skype?chat" className="text-slate-900 hover:text-slate-700 underline">
                    LiveChat@binox.skype
                  </a>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-slate-900">BINOX</h3>
                </div>
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div>
              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-slate-900 transition-colors"
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-slate-900 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-900 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-slate-900 transition-colors"
                    />
                  </div>
                </div>

                {/* Company and Website */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-900 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-slate-900 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-slate-900 mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-slate-900 transition-colors"
                    />
                  </div>
                </div>

                {/* Interested in */}
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-slate-900 mb-2">
                    Interested in
                  </label>
                  <select
                    id="interest"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-slate-900 transition-colors appearance-none bg-white"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      backgroundSize: '1.5rem'
                    }}
                  >
                    <option>Market Analysis</option>
                    <option>Business Strategy</option>
                    <option>Financial Advisory</option>
                    <option>Digital Transformation</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Write your message here....."
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-slate-900 transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors"
                >
                  Submit Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Corporate Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
                alt="Corporate team"
                className="w-full h-[600px] object-cover rounded-2xl"
              />
            </div>

            {/* Right side - Content */}
            <div>
              <p className="text-orange-500 text-sm font-medium mb-6">// 01 - COMPANY</p>

              <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                A trusted <span className="italic font-light text-gray-300">corporate consultation</span> group in
                London
              </h2>

              <p className="text-gray-600 leading-relaxed mb-8">
                We are able to quickly resolve issues within platform gained by document verification service made our
                3rd party agent
              </p>

              <button className="px-8 py-4 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-colors mb-12">
                Get Consultation
              </button>

              {/* Stats */}
              <div className="flex items-center gap-8">
                <div>
                  <div className="text-4xl font-bold text-slate-900 mb-1">2.5k</div>
                  <p className="text-sm text-gray-600">
                    We consultant customer
                    <br />
                    word-wide
                  </p>
                </div>

                {/* Avatars */}
                <div className="flex items-center">
                  <div className="flex -space-x-3">
                    <div className="w-12 h-12 rounded-full bg-blue-400 border-4 border-white"></div>
                    <div className="w-12 h-12 rounded-full bg-amber-400 border-4 border-white"></div>
                    <div className="w-12 h-12 rounded-full bg-slate-600 border-4 border-white"></div>
                  </div>
                  <button className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center ml-2 hover:bg-orange-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v12m6-6H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section with Testimonial */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left - Heading */}
            <div className="lg:col-span-4">
              <div className="text-orange-500 text-sm font-semibold mb-4">// 01 - ABOUT US</div>
              <h2 className="text-5xl font-bold text-slate-900 leading-tight">We're consult IT consulting agency</h2>
            </div>

            {/* Center - Stats and Description */}
            <div className="lg:col-span-4">
              <div className="text-8xl font-bold text-slate-900 mb-6">
                30<sup className="text-5xl">+</sup>
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Working with <span className="underline decoration-slate-300">consult-iT consulting</span> gives you
                peace minds in knowing that your books are accurate updated in real-time taxes are filed and paid on
                schedule.
              </p>
              <div className="flex gap-3">
                <button className="px-8 py-4 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors font-medium">
                  More About
                </button>
                <button className="w-14 h-14 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </button>
              </div>

              {/* Testimonial */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <div className="flex gap-6 mb-6">
                  <svg className="w-12 h-12 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-slate-600 mb-6 text-lg">
                  We loves sharing my shortcuts have been techniques with Consult consultancy teams emmense
                  satisfaction...
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900 text-lg">Julian Bray</div>
                    <div className="text-slate-500 text-sm">COO, Ranjit @axtra</div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-slate-900">
                      4.5<sup className="text-lg">*</sup>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="lg:col-span-4">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop"
                  alt="Professional working on laptop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Work - Recovery Journey Steps */}
      <section className="py-20 px-6 bg-[#e8ede6]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-slate-700 font-semibold uppercase tracking-wide text-sm">HOW IT WORK</span>
            </div>
            <h2 className="text-5xl font-bold text-slate-900 leading-tight">
              Your recovery journey step
              <br />
              by step guide
            </h2>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 - Confidential Consultation */}
            <div className="text-center">
              <div className="mb-8 flex justify-center">
                <div className="relative w-64 h-64">
                  {/* Clover shape with 4 circles */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full overflow-hidden border-4 border-[#e8ede6]">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop"
                      alt="Professional consultation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full overflow-hidden border-4 border-[#e8ede6]">
                    <img
                      src="https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1?w=200&h=200&fit=crop"
                      alt="Consultation discussion"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 w-28 h-28 rounded-full overflow-hidden border-4 border-[#e8ede6]">
                    <img
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop"
                      alt="Professional advisor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 right-0 w-28 h-28 rounded-full overflow-hidden border-4 border-[#e8ede6]">
                    <img
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop"
                      alt="Support team"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Confidential Consultation</h3>
              <p className="text-slate-600 leading-relaxed">
                Our admissions team is available 24/7 to listen, answer your questions and guide you through.
              </p>
              {/* Arrow */}
              <div className="hidden md:block absolute right-0 top-32 w-16">
                <svg className="w-full text-orange-500" viewBox="0 0 60 60" fill="none">
                  <path d="M5 30 Q30 10, 55 30" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M50 25 L55 30 L50 35" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>

            {/* Step 2 - Personalized Assessment */}
            <div className="text-center">
              <div className="mb-8 flex justify-center">
                <div className="relative w-64 h-64">
                  {/* Plus/Cross shape with 4 circles */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full overflow-hidden border-4 border-[#e8ede6]">
                    <img
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=200&h=200&fit=crop"
                      alt="Team meeting"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full overflow-hidden border-4 border-[#e8ede6]">
                    <img
                      src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=200&h=200&fit=crop"
                      alt="Assessment discussion"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 w-24 h-24 rounded-full overflow-hidden border-4 border-[#e8ede6]">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop"
                      alt="Professional review"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 right-0 w-24 h-24 rounded-full overflow-hidden border-4 border-[#e8ede6]">
                    <img
                      src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=200&h=200&fit=crop"
                      alt="Team collaboration"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Personalized Assessment</h3>
              <p className="text-slate-600 leading-relaxed">
                We conduct a thorough evaluation of your needs, health, and goals to design a treatment plan
              </p>
              {/* Arrow */}
              <div className="hidden md:block absolute right-0 top-32 w-16">
                <svg className="w-full text-orange-500" viewBox="0 0 60 60" fill="none">
                  <path d="M5 30 Q30 10, 55 30" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M50 25 L55 30 L50 35" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>

            {/* Step 3 - Begin Treatment */}
            <div className="text-center">
              <div className="mb-8 flex justify-center">
                <div className="relative w-64 h-64">
                  {/* Plus/Cross shape with 4 circles */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full overflow-hidden border-4 border-[#e8ede6]">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&h=200&fit=crop"
                      alt="Treatment session"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full overflow-hidden border-4 border-[#e8ede6]">
                    <img
                      src="https://images.unsplash.com/photo-1573496774426-fe3db3dd1731?w=200&h=200&fit=crop"
                      alt="Healthcare provider"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 w-24 h-24 rounded-full overflow-hidden border-4 border-[#e8ede6]">
                    <img
                      src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=200&h=200&fit=crop"
                      alt="Care facility"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 right-0 w-24 h-24 rounded-full overflow-hidden border-4 border-[#e8ede6]">
                    <img
                      src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=200&h=200&fit=crop"
                      alt="Treatment environment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Begin Treatment</h3>
              <p className="text-slate-600 leading-relaxed">
                Start your path to healing with compassionate care, evidence based therapies.
              </p>
              {/* Arrow */}
              <div className="hidden md:block absolute right-0 top-32 w-16">
                <svg className="w-full text-orange-500" viewBox="0 0 60 60" fill="none">
                  <path d="M5 30 Q30 10, 55 30" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M50 25 L55 30 L50 35" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>

            {/* Step 4 - Ongoing Support */}
            <div className="text-center">
              <div className="mb-8 flex justify-center">
                <div className="relative w-64 h-64">
                  {/* Clover shape with 4 circles */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full overflow-hidden border-4 border-[#e8ede6]">
                    <img
                      src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=200&h=200&fit=crop"
                      alt="Support group"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full overflow-hidden border-4 border-[#e8ede6]">
                    <img
                      src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=200&h=200&fit=crop"
                      alt="Continued care"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 w-28 h-28 rounded-full overflow-hidden border-4 border-[#e8ede6]">
                    <img
                      src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=200&h=200&fit=crop"
                      alt="Counseling session"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 right-0 w-28 h-28 rounded-full overflow-hidden border-4 border-[#e8ede6]">
                    <img
                      src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=200&h=200&fit=crop"
                      alt="Aftercare support"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Ongoing Support</h3>
              <p className="text-slate-600 leading-relaxed">
                We provide a customized aftercare plan along with relapse prevention tools and access
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are - Digital Agency */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-block px-6 py-2 border-2 border-slate-900 rounded-full text-sm font-medium text-slate-900 uppercase tracking-wide">
              WHO WE ARE
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-16 max-w-5xl">
            At the heart of a digital agency's services lies strategic planning and execution tailored to meet the
            unique needs and goals of each client
          </h2>

          {/* Two Column Content */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left - Studio Description */}
            <div>
              <h3 className="text-3xl font-medium text-slate-900">
                We are creative
                <br />
                development studio
              </h3>
            </div>

            {/* Right - Description and CTA */}
            <div>
              <p className="text-slate-600 leading-relaxed mb-8">
                A digital agency is a specialized firm that offers a range of services to help businesses thrive in the
                digital realm. With expertise in areas such as web design, digital marketing, social media management,
                and content creation, digital agencies play a crucial role in helping businesses establish and
                strengthen their online presence.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us CTA - Start Healing Journey */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#2d4f52] rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left - Content */}
              <div className="p-12 md:p-16">
                {/* Label */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-white/90 font-semibold uppercase tracking-wide text-sm">CONTACT US</span>
                </div>

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                  Start your healing journey with us today!
                </h2>

                {/* Description */}
                <p className="text-white/80 mb-8 leading-relaxed">
                  Our team is here 24/7 to support your healing journey with compassionate care, expert treatment, and a
                  personalized plan built just for you.
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4 mb-10">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white text-sm font-medium">Family Involvement & Education</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white text-sm font-medium">24/7 Admissions Support</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-4 rounded-full inline-flex items-center gap-3 transition-all hover:gap-5 group">
                  Schedule A Free Consultation
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              {/* Right - Image */}
              <div className="relative h-full min-h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop"
                  alt="Healthcare professionals"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Limitation - Binox Offerings */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div>
              {/* Main Heading */}
              <h2 className="text-5xl font-bold text-slate-900 leading-tight mb-6">
                Lose the location limitation Seamlessly hire & manage worldwide.
              </h2>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed mb-12">
                You need the best person for the job, wherever they're located. We provide support, payroll tax
                management, and compliance management for remote, multi-state, multi-location, and international
                employees.
              </p>

              {/* Binox Offerings */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Binox Offerings</h3>

                <div className="space-y-6">
                  {/* Offering 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      We believe that the human essential to start any successful project and that this where splendid
                      emotion between the re-generated company.
                    </p>
                  </div>

                  {/* Offering 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      We believe that the human essential to start any successful project and that this where splendid
                      emotion between the re-generated company.
                    </p>
                  </div>

                  {/* Offering 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      We believe that the human essential to start any successful project and that this where splendid
                      emotion between the re-generated company.
                    </p>
                  </div>
                </div>
              </div>

              {/* What's Included */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">What's included binox service?</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400 text-xl">+</span>
                    <span className="text-slate-700 font-medium">Multi-state payroll processing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400 text-xl">+</span>
                    <span className="text-slate-700 font-medium">National benefit products</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400 text-xl">+</span>
                    <span className="text-slate-700 font-medium">HR reporting</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 inline-flex items-center gap-3 transition-colors">
                Contact US
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=900&fit=crop"
                  alt="Business meeting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
