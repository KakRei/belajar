import vectorImg1 from "@public/vector 1.svg"
import vectorImg2 from "@public/vector 2.svg"
import Image from "next/image"

const about = () => {
  return (
    <div id="about" className='justify-center'>
      <h2 className="justify-center items-center flex font-semibold text-[1rem] md:text-[1.5rem]">About me</h2>
      <div className="justify-between items-center flex">
        <Image 
          src={vectorImg1}
          className="w-[200px] m-10 md:w-[300px]"
        />
        <div className="text-[0.8rem] md:text-[1.2rem]">
          <p>
          Hi! my name is Raihan Aditya, i am Full Stack web developer that creating a great, beautiful, responsive, interactive website. I enjoy to learn more about programing.
          </p>

          <div className="bg-sky-500 w-fit p-2 m-3 rounded-full hover:bg-slate-600 hover:text-white cursor-pointer">
            Download CV
          </div>
        </div>
      </div>
    </div>
  )
}

export default about