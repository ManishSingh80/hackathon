import React from 'react'

const Testimonials = () => {
  const testimonials = [
    { name: 'Alejandra Martinez', country: 'Argentina', text: 'Bodsphere has made Yoga accessible and affordable for everyone. So grateful!' },
    { name: 'Katerina Smith', country: 'United States of America', text: 'Super happy to be a part of the Bodsphere Revolution!' },
    { name: 'Diego Rodríguez', country: 'Spain', text: 'Bodspheres Platform is a gift for this World' },
    { name: 'Susana Fernandes', country: 'Thailand', text: 'Bodsphere Accreditation, etc - So powerful!' },
  ]

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What they say about Bodsphere</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg">
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.country}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

