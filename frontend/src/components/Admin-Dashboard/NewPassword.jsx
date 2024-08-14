import React from 'react'
import { useState } from 'react'

export default function NewPassword() {

    const [formData, setFormData] = useState({
      email: '',

    })
  
    const handleInputChange = e => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    return (
      <section className='px-5 lg:px-0'>
        <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
          <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10 text-center'>Reset Your Password</h3>
          <form className='py-4 md:py-0 '>
          <div className='mb-5'>
            <input
              type="password"
              placeholder='New Password'
              name='password'
              value={formData.password}
              onChange={handleInputChange}
              className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
              required
            />
          </div>

          <div className='mb-5'>
            <input
              type="password"
              placeholder='Confirm Password'
              name='password'
              value={formData.password}
              onChange={handleInputChange}
              className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
              required
            />
          </div>
  
            <div className='mt-7'>
              <button type='submit' className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'>Reset My Password</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
  

import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Reset() {

    const [formData, setFormData] = useState({
      email: '',

    })
  
    const handleInputChange = e => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    return (
      <section className='px-5 lg:px-0'>
        <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
          <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10 text-center'>Reset Password</h3>
          <form className='py-4 md:py-0 '>
            <div className='mb-5'>
              <input
                type="email"
                placeholder='Email' name='email'
                value={formData.email}
                onChange={handleInputChange}
                className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
                required
              />
            </div>
  
            <div className='mt-7'>
              <button type='submit' className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'>Send Password Reset Link</button>
            </div>
  
            <p className='mt-5 text-textColor text-center'> Want to try again?
              <Link to='/admin-login' className='text-primaryColor font-medium ml-1 '>
                Go Back
              </Link> </p>
          </form>
        </div>
      </section>
    );
  }

