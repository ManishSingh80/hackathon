import React from 'react'

const Instructors = () => {
  const instructors = [
    { name: 'Preetika Bhatnagar', image: '/instructor1.jpg' },
    { name: 'Samarthya Bhatnagar', image: '/instructor2.jpg' },
    { name: 'Flavia', image: '/instructor3.jpg' },
    { name: 'Hafreesh', image: '/instructor4.jpg' },
  ]

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Your Instructors</h2>
        <p className="text-center text-gray-600 mb-12">
          We work with the finest professionals to ensure you feel your best.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <div key={index} className="text-center">
              <img src={instructor.image} alt={instructor.name} className="w-full h-64 object-cover rounded-lg mb-4" />
              <h3 className="font-semibold">{instructor.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Instructors

