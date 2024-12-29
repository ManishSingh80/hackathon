import React from 'react'

const Accreditation = () => {
  return (
    <section className="bg-white py-16 px-4 max-w-7xl mx-auto">
      <div className=" mx-auto px-4 flex">
        <div className="w-1/2 h-full mt-10">
          <h2 className="text-3xl font-bold mb-4">Get Internationally Accredited by Bodsphere</h2>
          <p className="text-gray-600 mb-8 mt-20 ">
            Join the Bodsphere Community and take the first step towards joining the World's Biggest Community of Yoga Schools and Teachers that represent high quality, safe, affordable, accessible and equitable Yoga.
          </p>
          <button className=" border border-gray-700 text-black px-6 py-2 rounded-full transition duration-300 mt-20">
            Get Accredited
          </button>
        </div>
        <div className="absolute right-20 ">
          <img src="./src/utils/img/phone.png" alt="Bodsphere App" className="w-full h-2/3" />
        </div>
      </div>
    </section>
  )
}

export default Accreditation

