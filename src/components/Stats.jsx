import React from 'react'

const Stats = () => {
  const stats = [
    { number: '190+', label: 'Courses' },
    { number: '1000+', label: 'On-Demand Classes' },
    { number: '100K', label: 'Members' },
  ]

  return (
    <section className="bg-white py-16 w-full border-b-2 border-gray-300 px-4 max-w-7xl mx-auto ">
      <div className=" mx-auto px-4">
        <div className="flex items-center justify-between px-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h2 className="text-4xl font-bold">{stat.number}</h2>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

