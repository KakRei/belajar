'use client'

import { SocialIcon } from 'react-social-icons';
import { useState } from 'react';
import { Link } from 'react-scroll';

const header = () => {

    const [ openMenu, setMenuOpen ] = useState(false);

    const clickMenu = () => {
        setMenuOpen(!openMenu);
    }

  return (
    <header className='sticky top-0 z-50'>

        {/* Desktop Nav */}
        <div className='flex items-center justify-between p-4 sticky top-0 shadow-sm shadow-slate-200 bg-slate-50 w-full max-md:hidden h-16'>
            <h1 className='hover:text-slate-950 text-xl font-medium items-center cursor-pointer'>
             <Link 
                activeClass="active"
                to="main"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={100}
                delay={100}
                isDynamic={true}
            >
            Raihan
            </Link>
            </h1>
            <div className='text-base items-center'>
                <Link className='mx-4 p-1 font-normal relative group hover:text-slate-950 cursor-pointer'
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={50}
                    duration={100}
                    delay={100}
                    isDynamic={true}
                >
                    About
                    <span className='absolute -bottom-1 left-0 w-0 h-1 bg-slate-400 transition-all group-hover:w-1/2 rounded'>
                    </span>
                </Link>
                <Link className='mx-4 p-1 font-normal relative group hover:text-slate-950 cursor-pointer'
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={50}
                    duration={100}
                    delay={100}
                    isDynamic={true}
                >
                    Skills
                    <span className='absolute -bottom-1 left-0 w-0 h-1 bg-slate-400 transition-all group-hover:w-1/2 rounded'>
                    </span>
                </Link>
                <Link className='mx-4 p-1 font-normal relative group hover:text-slate-950 cursor-pointer'
                    activeClass="active"
                    to="project"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={50}
                    duration={100}
                    delay={100}
                    isDynamic={true}
                >
                    Project
                    <span className='absolute -bottom-1 left-0 w-0 h-1 bg-slate-400 transition-all group-hover:w-1/2 rounded'>
                    </span>
                </Link>
            </div>
            <div className='flex items-center'>
                <div className='mx-2'>
                    <SocialIcon className='mx-1.5' style={{
                        width: 27,
                        height: 27,
                    }}  url='https://twitter.com' />
                    <SocialIcon className='mx-1.5' style={{
                        width: 27,
                        height: 27,
                    }} url='https://github.com' />
                    <SocialIcon className='mx-1.5' style={{
                        width: 27,
                        height: 27,
                    }} url='https://instagram.com/kak.raiii' />
                    <SocialIcon className='mx-1.5' style={{
                        width: 27,
                        height: 27,
                    }} url='https://linkedin.com' />
                    </div>
                <div className='bg-zinc-300 p-2 rounded cursor-pointer hover:bg-slate-600 hover:text-slate-200'>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={50}
                        duration={100}
                        delay={100}
                        isDynamic={true}
                    >
                        Let's Connect
                    </Link>
                </div>
            </div>
        </div>

        {/* Mobile Nav */}
        <div className='flex items-center justify-between p-4 sticky top-0 shadow-sm shadow-slate-200 bg-slate-50 w-full md:hidden h-16 z-50'>
            <h1 className='hover:text-slate-950 text-xl font-medium items-center'>
                    <Link
                        activeClass="active"
                        to="main"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={50}
                        duration={100}
                        delay={100}
                        isDynamic={true}
                    >
                        Raihan
                    </Link>
                </h1>
            <div onClick={clickMenu} className='w-6 h-6 flex flex-col justify-between items-center md:hidden cursor-pointer relative group'>
                <span className={
                    `w-full h-1 bg-slate-800 transform transition cursor-pointer ease-in-out duration-300 rounded
                ${openMenu ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={
                    `h-1 bg-slate-800 transform transition cursor-pointer ease-in-out duration-300 rounded
                ${openMenu ? 'w-0' : 'w-full'}`}></span>
                <span className={
                    `w-full h-1 bg-slate-800 transform transition cursor-pointer ease-in-out duration-300 rounded
                ${openMenu ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
        </div>
        <div className={
                openMenu ? 'fixed w-screen h-[70%] ease-in duration-300 bg-slate-500 top-0' : 'fixed bg-slate-300 w-screen h-[70%] ease-in duration-300 -top-full'}>
            <div className='relative top-[20%]'>
                <div className='text-xl items-center flex flex-col'>
                    <Link className='m-4 p-1 font-normal relative group hover:text-slate-950'
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={50}
                        duration={100}
                        delay={100}
                        isDynamic={true}
                    >
                        About
                        <span className='absolute -bottom-1 left-0 w-0 h-1 bg-slate-400 transition-all group-hover:w-full rounded'>
                        </span>
                    </Link>
                    <Link className='m-4 p-1 hover: font-normal relative group hover:text-slate-950' 
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={50}
                        duration={100}
                        delay={100}
                        isDynamic={true}
                    >
                        Skills
                        <span className='absolute -bottom-1 left-0 w-0 h-1 bg-slate-400 transition-all group-hover:w-full rounded'>
                        </span>
                    </Link>
                    <Link className='m-4 p-1 hover: font-normal relative group hover:text-slate-950' 
                        activeClass="active"
                        to="project"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={50}
                        duration={100}
                        delay={100}
                        isDynamic={true}
                    >
                        Project
                        <span className='absolute -bottom-1 left-0 w-0 h-1 bg-slate-400 transition-all group-hover:w-full rounded'>
                        </span>
                    </Link>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className=''>
                        <SocialIcon className='mx-1 my-3' style={{
                            width: 27,
                            height: 27,
                        }}  url='https://twitter.com' />
                        <SocialIcon className='mx-1 my-3' style={{
                            width: 27,
                            height: 27,
                        }} url='https://github.com' />
                        <SocialIcon className='mx-1 my-3' style={{
                            width: 27,
                            height: 27,
                        }} url='https://instagram.com/kak.raiii' />
                        <SocialIcon className='mx-1 my-3' style={{
                            width: 27,
                            height: 27,
                        }} url='https://linkedin.com' />
                        </div>
                    <div className='bg-zinc-300 p-2 rounded'>
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={50}
                            duration={100}
                            delay={100}
                            isDynamic={true}
                        >
                            Let's Connect
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default header