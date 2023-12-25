import React from 'react'

const ContactForm = () => {
  return (
    <form>
      <h2 className=' px-3 text-2xl font-bold mb-5 text-white'>Əlaqə</h2>
      <h3 className=' px-3 text-2xl font-bold mb-5 text-white'>Telefon:(070) 240 80 04</h3>
      <div className='mb-3'>
        <input
        type='email'
        placeholder='Email daxil edin'
        name='email'
        className='w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow'
        />
        
      </div>
      <div className='mb-3'>
        <input
    
        placeholder='Məlumatı daxil edin'
        name='message'
        className='w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow'
        />
        
      </div>
      <button className='px-6 mb-5 py-3  text-sm font-bold text-gray-400 uppercase transition -all duration -150 easy-linearbg-blue-500 hover:bg-blue-100'>
        Məktubu göndər
      </button>
    </form>
  )
}

export default ContactForm
