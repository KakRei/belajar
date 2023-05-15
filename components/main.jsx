"use client"

import Image from "next/image"
import personImg from "@public/person.svg"
import { Link } from "react-scroll"

const main = () => {
  return (
    <div id='main' className="flex justify-between items-center h-[60%]">
        <div className="">
            <div className="m-5">
                <h4 className="text-xs font-normal md:text-sm">Wellcome to my portfolio</h4>
                <h2 className="text-[1rem] font-semibold md:text-[2rem]">HI! I'm Full Stack web developer</h2>
            </div>
            <Link className="bg-slate-300 rounded-[0.5rem] md:p-3 p-2 cursor-pointer m-6 text-center hover:bg-slate-600 hover:text-slate-200 text-[0.5rem] md:text-[1rem]"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={100}
                delay={100}
                isDynamic={true}
            >CONTACT ME!</Link>
        </div>
        <div>
            <Image src={personImg} 
            className="
            w-[300px] h-[300px] 
            md:w-[750px] md:h-[750px]"/>
        </div>
    </div>
  )
}

export default main