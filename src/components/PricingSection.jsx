import React from 'react'

const PricingSection = () => {
  const trainingPrograms = [
    "30-Hrs Yoga Nidra Teacher Training",
    "40-Hrs Chakra Teacher Training",
    "50-Hrs Pranayama Teacher Training",
    "60-hrs Yin Yoga Teacher Training",
    "200-Hrs Yoga Teacher Training",
    "300-Hrs Yoga Teacher Training",
    "Become Certified Yoga Teachers from the comfort of your home",
    "Unlimited Access to trainings on Ayurveda, Anatomy & Physiology, etc",
    "Unlimited Yoga Classes, Meditations, Pranayama & Music",
    "Free Accreditation by Bodsphere to teach Yoga globally"
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="bg-[#CA656B] rounded-3xl p-8 md:p-12 relative overflow-hidden">
        {/* Main Content */}
        <div className="max-w-3xl">
          <h2 className="text-white text-2xl md:text-3xl font-semibold mb-4">
            Get unlimited access to everything
          </h2>
          <p className="text-white/90 mb-6 text-sm md:text-base">
            Unlimited Access to all Yoga Teacher Trainings (World's First and Most Affordable and Accessible Trainings)
          </p>
          
          {/* Training Programs List */}
          <ul className="space-y-3 text-white/90 text-sm md:text-base mb-8">
            {trainingPrograms.map((program, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 mt-1.5">•</span>
                <span>{program}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing Card */}
        <div className="absolute top-8 right-8 w-72 bg-white rounded-2xl p-6 shadow-xl">
          <h3 className="text-gray-800 text-lg font-semibold mb-6">
            Become a part of Bodsphere's Yogic Revolution
          </h3>
          
          {/* Pricing Option */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full border-2 border-rose-400 mr-2"></div>
                <span className="text-gray-600">Yearly</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-gray-500">Pay for full year</span>
                <div className="flex items-center">
                  <span className="text-sm">$</span>
                  <span className="text-2xl font-bold">49</span>
                  <span className="text-xs text-gray-500">/y</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full border-2 border-rose-400 mr-2"></div>
                <span className="text-gray-600">Yearly</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-gray-500">Pay for full year</span>
                <div className="flex items-center">
                  <span className="text-sm">$</span>
                  <span className="text-2xl font-bold">49</span>
                  <span className="text-xs text-gray-500">/y</span>
                </div>
              </div>
            </div>
          </div>

          {/* Subscribe Button */}
          <button className="w-full bg-rose-400 text-white py-3 rounded-full hover:bg-rose-500 transition-colors duration-300">
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default PricingSection

