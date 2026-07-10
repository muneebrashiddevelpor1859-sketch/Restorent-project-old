import React from 'react'

function Contact() {
  return (
  <section class="text-gray-600 body-font relative">
  <div class="absolute inset-0 bg-gray-300">
    <h1 className='text-3xl bg-linear-to-l from-cyan-900 cursor-pointer p-3 text-amber-50 text-center'>Contact</h1>
    <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{filter: "grayscale(1) contrast(1.2) opacity(0.4)"}}></iframe>
  </div>
  <div class="container px-5 py-24 mx-auto flex">
    <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Restorent Contact Form</h2>
      <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Pleas Fill This</h2>
      <p class="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
      <div class="relative mb-4">
        <label for="email"  class="leading-7 text-sm text-gray-600">Enter Name</label>
        <input type="text"  placeholder='Enter your name' class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
         <label for="email"  class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" placeholder='Enter your current email' class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message"  placeholder='Enter Your Message' class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      <span className='flex gap-3'>

      <input type="radio" name='1' />Male
      <input type="radio"name='1' />Female
      <input type="radio" name='1'/>Others

      </span>
      </div>
      <button class="text-white bg-amber-600 border-0 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg">Submit</button>
      <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
    </div>
  </div>
</section>
  )
}

export default Contact
