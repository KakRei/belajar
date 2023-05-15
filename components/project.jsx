"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image"
import projectImg from "@public/project-img.png"

import "swiper/css"

const project = () => {
  return (
    <div className='' id='project'>
      <h2 className="justify-center items-center flex font-semibold text-[1rem] md:text-[1.5rem]">Project</h2>
      <Swiper
        spaceBetween={100}
        slidesPerView={2}

        className="cursor-pointer mt-10"
      >
        <SwiperSlide>
          <Image 
            src={projectImg}
            className="w-[300px] md:w-[500px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src={projectImg}
            className="w-[300px] md:w-[700px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src={projectImg}
            className="w-[300px] md:w-[500px]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default project