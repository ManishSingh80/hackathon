import React from 'react'

const YogicPathSection = () => {
  const pathCards = [
    {
      title: "Yoga Teacher Trainings",
      description: "Transform your practice with World's most accessible & affordable programs."
    },
    {
      title: "Yoga Classes",
      description: "Join real-time Yoga classes with the Vedas, Asanas, Wellness and so more, to enhance your well-being."
    },
    {
      title: "Calm Music",
      description: "Experience tranquility with calming music perfect for relaxation and mindfulness."
    },
    {
      title: "Pranayama & Meditation",
      description: "Explore the power of breath and enhance your self-awareness and inner peace."
    }
  ]

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-3">Discover Your Yogic Path</h2>
        <p className="text-gray-600">Join our community and transform your yoga practice today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pathCards.map((card, index) => (
          <div 
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
          >
            <h3 className="font-semibold text-lg mb-3">{card.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default YogicPathSection

