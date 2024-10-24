import React from 'react'
import logo from "../assets/logo.png"
import {FaLinkedin , FaGithub } from "react-icons/fa"
import { FiPhoneCall } from "react-icons/fi";
import { IoMail } from "react-icons/io5";

function Navbar() {
  return (
    <nav className=' mb-20 flex items-center justify-between '>
        <div className='flex flex-shrink-0 item-center '>
            <img className="rounded-md" src={logo} alt="AC" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/arnit-chauhan-697779217/" target='_blank'><FaLinkedin/></a>
            <a href="https://github.com/arnit10" target="_blank"><FaGithub/></a>
            <a href="tel:+918266989789"><FiPhoneCall /></a>
            <a href="mailto:arnitchauhan10@gmail.com"><IoMail/></a>
        </div>
    </nav>
  )
}

export default Navbar
