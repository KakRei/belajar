import reactLogo from "@public/language-logo/reactjs.svg"
import css3Logo from "@public/language-logo/css3.svg"
import htmlLogo from "@public/language-logo/html.svg"
import javascriptLogo from "@public/language-logo/javascript.svg"
import nextjsLogo from "@public/language-logo/nextjs.svg"
import tailwindcssLogo from "@public/language-logo/tailwindcss.svg"

import Image from "next/image"

const skills = () => {
  return (
    <div className='' id="skills">
      <h2 className="justify-center items-center flex font-semibold text-[1rem] md:text-[1.5rem]">Skills</h2>
      <div className="flex justify-center items-center ">
        <Image src={reactLogo}
          className="w-[40px] mx-2 my-5 cursor-pointer sm:w-[60px] md:w-[100px] lg:w-[130px]"
        />
        <Image src={css3Logo}
          className="w-[40px] mx-2 my-5 cursor-pointer sm:w-[60px] md:w-[100px] lg:w-[130px]"
        />
        <Image src={htmlLogo}
          className="w-[40px] mx-2 my-5 cursor-pointer sm:w-[60px] md:w-[100px] lg:w-[130px]"
        />
        <Image src={javascriptLogo}
          className="w-[40px] mx-2 my-5 cursor-pointer sm:w-[60px] md:w-[100px] lg:w-[130px]"
        />
        <Image src={nextjsLogo}
          className="w-[40px] mx-2 my-5 cursor-pointer sm:w-[60px] md:w-[100px] lg:w-[130px]"
        />
        <Image src={tailwindcssLogo}
          className="w-[40px] mx-2 my-5 cursor-pointer sm:w-[60px] md:w-[100px] lg:w-[130px]"
        />
      </div>
    </div>
  )
}

export default skills