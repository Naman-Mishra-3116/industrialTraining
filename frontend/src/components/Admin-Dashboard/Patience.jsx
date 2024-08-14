import React from 'react'
import { useState } from 'react'


export default function Patience() {

    const [formData, setFormData] = useState({
      email: '',

    })
  
    const handleInputChange = e => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    return (
      <section className='px-5 lg:px-0'>
        <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
          <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10 text-center'>Password Reset link will be sent to your email shortly.</h3>
          <form className='py-4 md:py-0 '>
           
            <div className='mt-7'>
              <button type='submit' className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'>Open Gmail</button>
            </div>

          </form>
        </div>
      </section>
    );
  }
  





