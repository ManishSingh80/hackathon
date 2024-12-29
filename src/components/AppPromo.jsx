import React from 'react'

const AppPromo = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 flex items-center gap-10">
        <div className="w-1/2">
          <img src="../src/utils/img/yoga.png" alt="Yoga Outdoors" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="w-1/2">
          <h2 className="text-3xl font-bold mb-4">Yoga Like Never Before</h2>
          <p className="text-gray-600 mb-8">
            Becoming a Yoga Teacher has never been so easy. You can even download your favorite classes so they're always available when you want them.
          </p>
          <div className="flex items-center space-x-4">
            <img src="../src/utils/img/applepng.png" alt="App Store" className="h-12" />
            <img src="../src/utils/img/google.png" alt="Google Play" className="h-12" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppPromo

