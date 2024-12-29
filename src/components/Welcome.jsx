import React from 'react'

const Welcome = () => {
  return (
    <section className="relative h-screen w-full bg-white">
      {/* <img src="../src/utils/img/welcome.jpeg" alt="Welcome" className="w-full h-full object-contain pb-20 pl-0 " /> */}
      <div className="absolute flex pt-20 bg-[url('../src/utils/img/welcome.jpeg')] w-full h-full bg-cover bg-center ">
        <div className=" text-white w-1/4 pl-10 ">
          <h1 className="text-4xl font-semibold  mb-4">Welcome to <br /> <span>the Yogic World</span></h1>
          <p className="text-xl mb-8">
            Yoga Teacher Trainings, Classes, Meditation, Pranayama, Music, Philosophy & More.
            Everything under $10.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Welcome

