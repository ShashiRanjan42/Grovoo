"use client"

import { Link } from "react-router-dom"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <i className="fas fa-store text-2xl text-blue-400 mr-2"></i>
              <span className="text-xl font-bold">1StopMandi</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted B2B food supply partner. Fresh ingredients delivered to restaurants and hotels across India.
              <br/>CIN: U47212BR2025PTC075977     
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61578055870742&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="https://x.com/1StopMandi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="https://www.instagram.com/1stopmandi_official?igsh=aDNzZ3A3dHIxeHFx" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/company/1stopmandi/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCQNEkDksi8b3ytbf3E6fXVw" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <i className="fab fa-youtube text-xl"></i>
              </a> 
              <a href="https://wa.me/message/CIQNEWS5HF3FH1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <i className="fab fa-whatsapp text-xl"></i>
              </a>             
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="/pdfs/about-us.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <Link to="/careers-signup" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=Vegetables" className="text-gray-300 hover:text-white transition-colors">
                  Vegetables
                </Link>
              </li>
              <li>
                <Link to="/products?category=Fruits" className="text-gray-300 hover:text-white transition-colors">
                  Fruits
                </Link>
              </li>
              <li>
                <Link to="/products?category=Dairy" className="text-gray-300 hover:text-white transition-colors">
                  Dairy Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=Non-Veg" className="text-gray-300 hover:text-white transition-colors">
                  Non-Vegetarian
                </Link>
              </li>
              <li>
                <Link to="/products?category=Spices" className="text-gray-300 hover:text-white transition-colors">
                  Spices
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-blue-400 mt-1 mr-3"></i>
                <div>
                  <p className="text-gray-300">Boring Road, Shri Krishna Puri</p>
                  <p className="text-gray-300">Patna, Bihar 800001</p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone text-blue-400 mr-3"></i>
                <a href="tel:+917292980098" className="text-gray-300 hover:text-white transition-colors">
                  +91 72929 80098
                </a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-blue-400 mr-3"></i>
                <a href="mailto:support@1stopmandi.com" className="text-gray-300 hover:text-white transition-colors">
                  support@1stopmandi.com
                </a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-clock text-blue-400 mr-3"></i>
                <span className="text-gray-300">Mon - Sat: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        {/* <div className="border-t border-gray-700 mt-8 pt-8">
          <h3 className="text-lg font-semibold mb-4 text-center">We Deliver To</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-gray-800 px-4 py-2 rounded-full text-sm">patna</span>
            <span className="bg-gray-800 px-4 py-2 rounded-full text-sm">Delhi</span>
            <span className="bg-gray-800 px-4 py-2 rounded-full text-sm">Bangalore</span>
            <span className="bg-gray-800 px-4 py-2 rounded-full text-sm">Pune</span>
            <span className="bg-gray-800 px-4 py-2 rounded-full text-sm">Chennai</span>
            <span className="bg-gray-800 px-4 py-2 rounded-full text-sm">Hyderabad</span>
          </div>
        </div> */}

        {/* Newsletter */}
        {/* <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">Subscribe to get updates on new products and special offers</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">© {currentYear} 1StopMandi. All rights reserved.</div>
          <div className="flex space-x-6 text-sm">
            <a href="/pdfs/privacy-policy.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/pdfs/terms-of-service.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="/pdfs/cookie-policy.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              Cookie Policy
            </a>
            <a href="/pdfs/refund-policy.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
