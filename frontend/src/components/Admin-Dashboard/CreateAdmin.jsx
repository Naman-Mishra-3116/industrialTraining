import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function CreateAdmin() {

    const[selectedFile, setSelectedFile] = useState(null)
    const[previewURL, setPreviewURL] = useState("")

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        photo:selectedFile,
        gender:'',
        role:'patient'
    })

    const handleInputChange = e =>{
        setFormData({... formData, [e.target.name]:e.target.value})
    }

    const handleFileInputChange = async (event) =>{
        const file = event.target.files[0]

        // later we will use cloudinary to upload images

    };

    const submitHandler = async event =>{
        event.preventDefault()
    }

    return (
        <section className='px-5 xl:px-0 '>
            <div className='max-w-[660px] mx-auto'>
                

                    {/*========signup form=========== */}
                    <div className='rounded-l-lg lg:pl-16 py-10 '>
                        <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10 text-center'>Create a New Admin</h3>

                        <form onSubmit={submitHandler}>
                            <div className='mb-5'>
                                <input
                                    type="text"
                                    placeholder='Full Name'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
                                    required
                                />
                            </div>

                            <div className='mb-5'>
                                <input
                                    type="email"
                                    placeholder='Enter your Email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
                                    required
                                />
                            </div>

                            <div className='mb-5'>
                                <input
                                    type="password"
                                    placeholder='Password'
                                    name='password'
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
                                    required
                                />
                            </div>

                            <div className='mt-7 ml-60'>
                                <Link to='/admin-login'>
                                <button type='submit' className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 max-w-40 items-center'>Create</button>
                                </Link>
                            </div>

                        </form>
                    </div>
                
            </div>
        </section>
    )
}

export default CreateAdmin
