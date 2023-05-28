import React from 'react'
import { CircularText } from './Icon'
import Link from 'next/link'
import useThemeSwitcher from "./hooks/useThemeSwitcher";
const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute
    '>
      <div className='w-48 h-auto flex items-center justify-center relative md:w-24'>
         {/* TODO Text White 3:51:00 */}
        {/* ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}` */}
        <CircularText className={"fill-dark animate-spin-slow dark:fill-light"} />
        <Link href={"shehab.taher93@gmail.com"} className='flex items-center justify-center absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark
            dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
            md:w-12 md:h-12 md:text-[10px]
            '>
          Hire Me
        </Link>
      </div>
    </div>
  )
}

export default HireMe