import React, { useState, useRef } from 'react'

const TestimonialsSection = () => {
  const [currentScroll, setCurrentScroll] = useState(0)
  const scrollContainerRef = useRef(null)

  const testimonials = [
    {
      quote: "Bodsphere has made Yoga accessible and affordable for everyone. So grateful!",
      name: "Alejandra Martinez",
      location: "Argentina"
    },
    {
      quote: "Super happy to be a part of the Bodsphere Revolution!",
      name: "Katerina Smith",
      location: "United States of America"
    },
    {
      quote: "Bodsphere's Platform is a gift for this World",
      name: "Diego Rodriguez",
      location: "Spain"
    },
    {
      quote: "Bodsphere Accreditation, etc - So powerful!",
      name: "Susana Fernandes",
      location: "Thailand"
    }
  ]

  const scroll = (direction) => {
    const container = scrollContainerRef.current
    if (container) {
      const scrollAmount = 300
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount

      container.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      })
      setCurrentScroll(newScroll)
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 relative">
      {/* Navigation Controls */}
      <div className="flex justify-end gap-2 mb-6">
        <button 
          onClick={() => scroll('left')}
          className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
          aria-label="Previous testimonial"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
        </button>
        <button 
          onClick={() => scroll('right')}
          className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
          aria-label="Next testimonial"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </button>
      </div>

      {/* Testimonials Carousel */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide"
        style={{ scrollBehavior: 'smooth' }}
      >
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="flex-none w-[300px]"
          >
            <div className="bg-gray-50 rounded-lg p-6 h-full">
              {/* Quote Icon */}
              <div className="mb-4">
                <svg 
                  className="w-8 h-8 text-gray-300" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-800 mb-4 text-sm leading-relaxed">
                {testimonial.quote}
              </p>
              
              {/* Author Info */}
              <div>
                <p className="font-medium text-sm">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}

export default TestimonialsSection

