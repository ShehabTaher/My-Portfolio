import React from 'react'
import {motion} from "framer-motion"

const Skill = ({name,x,y}) =>{
    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
        '
                whileHover={{scale:1.05}}
                initial={{x:0,y:0}}
                whileInView={{x:x,y:y, transition:{duration:1.5}}}
                viewport={{once:true}}
                >

                    {name}
                </motion.div>
    )
}


const skills = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark'>
                <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark  dark:text-dark dark:bg-light'
                whileHover={{scale:1.05}}>
                    Web
                </motion.div>
                <Skill name="HTML" x="-20vw" y="1vw" />
                <Skill name="CSS" x="-5vw" y="-10vw" />
                <Skill name="JAVASCRIPT" x="20vw" y="-1vw" />
                <Skill name="TYPESCRIPT" x="25vw" y="10vw" />
                <Skill name="ReactJS" x="5vw" y="10vw" />
                <Skill name="Tailwind CSS" x="5vw" y="-15vw" />
                <Skill name="NodeJS" x="-1vw" y="15vw" />
                <Skill name="ExpressJS" x="-30vw" y="-5vw" />
                <Skill name="Github" x="-25vw" y="-18vw" />
                <Skill name="MongoDB" x="-15vw" y="20vw" />
            </div>
        </>
    )
}

export default skills