import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'
import About from './../About/About'


function Footer() {

    const socialLinks = [
        {  
        path: "https://www.youtube.com/c/CodingWithMuhib",
        icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
        },

        {
        path:"https://github.com/codingwithmuhib",
        icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
        },
        
        {
        path:"https://ww.instagram.com/muhib160.official/",
        icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5"/>
        },
        
        {
        path: "https://ww.linkedin.com/in/codingwithmuhib/",
        icon: <RiLinkedinFill className=" Igroup-hover:text-white w-4 h-5" />,
        },
        
    ];

    const admin = [
        {
            path: "/admin/",
            display: "Admin",
        },
    ];

    const quickLinks01 = [
        {
        path: "/home",
        display: "Home"
        },

        {
        path: "/home",
        display: "About Us",
        },
        
        {
        path: "/services", 
        display: "Services",
        },
    ];

    const quickLinks02 = [
        {
        path: "/doctors",
        display: "Find a Doctor",
        },
        
        {
        path: "/",
        display: "Request an Appointment",
        },
        
        {
        path: "/",
        display: "Find a Location",
        },
        
        {
        path: "/",
        display: "Get a Opinion",
        },
        
    ];

    const quickLinks03 = [
        {
        path: "/",
        display: "Donate",
        },
        
        {
        path: "/contact",
        display: "Contact Us",
        },
        
    ];

    
    const year = new Date().getFullYear()

        return (
            <footer className='pb-16 pt-10'>
            <div className="container">
                <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
                    <div>
                        <img src={logo} alt="" />
                        <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>Copyright © {year} developed by Avadhi Jain all rights reserved.</p>

                        <div className='flex items-center gap-3 mt-4'>
                            {socialLinks.map((link,index)=> <Link to={link.path} key={index} className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none'>{link.icon}</Link>)}
                        </div>

                    </div>

                    <div>
                        <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Admin Panel</h2>
                        <ul>
                            {admin.map((item,index)=> <li key={index} className='mb-4'><Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link></li>)}
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Quick Links</h2>
                        <ul>
                            {quickLinks01.map((item,index)=> <li key={index} className='mb-4'><Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link></li>)}
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>I want to</h2>
                        <ul>
                            {quickLinks02.map((item,index)=> <li key={index} className='mb-4'><Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link></li>)}
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Support</h2>
                        <ul>
                            {quickLinks03.map((item,index)=> <li key={index} className='mb-4'><Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link></li>)}
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
        )
    };
        

export default Footer
