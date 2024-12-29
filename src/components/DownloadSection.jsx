import React from 'react'

const DownloadSection = () => {
  return (
    <section className="bg-[#2C2D2F] py-16 rounded-3xl overflow-hidden px-4 max-w-7xl mx-auto ">
      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 pl-10 ">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Download the app
            </h2>
            <p className="text-gray-300 text-sm md:text-base max-w-md">
              Get unlimited access to Yoga Teacher Trainings, Yoga classes, Meditation 
              and Pranayama, Yogic Wisdom and more.
            </p>
            <div className="flex flex-wrap gap-4">
              {/* App Store Button */}
              <a 
                href="#" 
                className="inline-block"
                aria-label="Download on App Store"
              >
                <img 
                  src="../src/utils/img/applepng.png" 
                  alt="Download on App Store" 
                  className="h-10 w-auto"
                />
              </a>
              {/* Play Store Button */}
              <a 
                href="#" 
                className="inline-block"
                aria-label="Get it on Google Play"
              >
                <img 
                  src="../src/utils/img/google.png" 
                  alt="Get it on Google Play" 
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>

          {/* Right Content - Device Mockups */}
          <div className="relative">
            {/* Mobile Mockup */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 z-20">
              <img 
                src="../src/utils/img/mobile.png" 
                alt="Bodsphere Mobile App" 
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DownloadSection

