import React from 'react'
import SocialLinks from './SocialLinks'

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between gap-20">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <img src="../src/utils/img/logo.png" alt="" />
            <div className="flex space-x-4">
              <img src="../src/utils/img/applepng.png" alt="App Store" className="h-10" />
              <img src="../src/utils/img/google.png" alt="Google Play" className="h-10" />
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4 "> </h4>
            <ul className=' flex justify-between font-semibold'>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">FAQ</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Contact Us</a></li>
            </ul>
          </div>
          {/* <div className="w-full md:w-1/3">
            <h4 className="text-lg text-center font-semibold mb-4">Follow Bodsphere</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl text-black hover:text-gray-300"><i className="fab fa-facebook">f</i></a>
              <a href="#" className="text-2xl hover:text-gray-300"><i className="fab fa-instagram">g</i></a>
              <a href="#" className="text-2xl hover:text-gray-300"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-2xl hover:text-gray-300"><i className="fab fa-youtube"></i></a>
              <a href="#" className="text-2xl hover:text-gray-300"><i className="fab fa-pinterest"></i></a>
            </div>
          </div> */}
          <SocialLinks/>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; 2024 Bodsphere. All Rights Reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-gray-300 mr-4">Terms</a>
            <a href="#" className="hover:text-gray-300">Privacy</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

