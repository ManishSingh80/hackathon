import React from 'react'

const Pricing = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Get unlimited access to everything</h2>
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <ul className="mb-8">
            <li className="mb-2">• Unlimited Access to all Yoga Teacher Trainings</li>
            <li className="mb-2">• 30-Hrs Yoga Nidra Teacher Training</li>
            <li className="mb-2">• 40-Hrs Chakra Teacher Training</li>
            <li className="mb-2">• 50-Hrs Pranayama Teacher Training</li>
            <li className="mb-2">• 60-hrs Yin Yoga Teacher Training</li>
            <li className="mb-2">• 200-Hrs Yoga Teacher Training</li>
            <li className="mb-2">• 300-Hrs Yoga Teacher Training</li>
            <li className="mb-2">• Become Certified Yoga Teachers from the comfort of your home</li>
            <li className="mb-2">• Unlimited Access to trainings on Ayurveda, Anatomy & Physiology, etc</li>
            <li className="mb-2">• Unlimited Yoga Classes, Meditations, Pranayama & Music</li>
            <li className="mb-2">• Free Accreditation by Bodsphere to teach Yoga globally</li>
          </ul>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Become a part of Bodsphere's Yogic Revolution</h3>
            <div className="mb-4">
              <p className="text-gray-600">Monthly</p>
              <p className="text-4xl font-bold">$5/m</p>
            </div>
            <div className="mb-8">
              <p className="text-gray-600">Yearly</p>
              <p className="text-4xl font-bold">$49</p>
              <p className="text-sm text-gray-500">Recommended</p>
            </div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing

