import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className='py-20 text-white max-w-[1200px] w-[90%] mx-auto sm:px-4 px-2'>
      <div className='grid md:grid-cols-2 gap-16'>
        <div className='space-y-12'>
          <h2 className='sm:text-7xl text-5xl font-bold text-gray-300'>
            Get in <span className='text-gray-500'>touch</span>
          </h2>

          <div className='glass p-8 rounded-2xl space-y-8'>
            <div className='space-y-2'>
              <p className='sm:text-lg text-md text-gray-300'>Email</p>
              <a href="mailto:otoramishvili10@gmail.com" className='md:text-2xl text-md font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2'>
                otoramishvili10@gmail.com
              </a>
            </div>

            <div className='space-y-2'>
              <p className='sm:text-lg text-md text-gray-300'>Location</p>
              <address className='sm:text-xl text-lg not-italic'>
                Tbilisi, Georgia
              </address>
            </div>
          </div>
        </div>

        <div className='w-full max-w-[100%] h-full min-h-[400px] rounded-2xl overflow-hidden'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d923.7486311499462!2d44.73092586966348!3d41.7268177991061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404473092de630fb%3A0x3e82f9baaf55005d!2s78%20Shalva%20Nutsubidze%20St%2C%20T&#39;bilisi!5e1!3m2!1sen!2sge!4v1742838652355!5m2!1sen!2sge" width="100%" height="100%"></iframe>
        </div>
      </div>
    </section>
  )
}

export default Contact;