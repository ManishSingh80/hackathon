import React, { useState, useRef } from 'react'

const InstructorsSection = () => {
  const [currentScroll, setCurrentScroll] = useState(0)
  const scrollContainerRef = useRef(null)

  const instructors = [
    {
      name: "Preetika Bhatnagar",
      image: "../src/utils/img/yoga1.jpg", // Replace with actual image path
    },
    {
      name: "Samarthya Bhatnagar",
      image: "../src/utils/img/yoga2.jpg", // Replace with actual image path
    },
    {
      name: "Diana",
      image: "../src/utils/img/yoga3.jpg" // Replace with actual image path
    },
    {
      name: "Herkeesh",
      image: "../src/utils/img/yoga1.jpg" // Replace with actual image path
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
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-3">Meet Your Instructors</h2>
        <p className="text-gray-600">
          We work with the finest professionals to ensure you feel your best.
        </p>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-end gap-2 mb-6">
        <button 
          onClick={() => scroll('left')}
          className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
          aria-label="Previous instructors"
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
          aria-label="Next instructors"
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

      {/* Instructors Carousel */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide"
        style={{ scrollBehavior: 'smooth' }}
      >
        {instructors.map((instructor, index) => (
          <div 
            key={index}
            className="flex-none w-[300px]"
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-4 aspect-h-5 w-full">
                <img
                  src={instructor.image}
                  alt={`${instructor.name} - Yoga Instructor`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className=" text-lg">{instructor.name}</h3>
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

export default InstructorsSection

