import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import Article1 from '../../public/images/articles/pagination component in reactjs.jpg'
import Article2 from '../../public/images/articles/create loading screen in react js.jpg'
import Article3 from "../../public/images/articles/form validation in reactjs using custom react hook.png"
import Article4 from "../../public/images/articles/smooth scrolling in reactjs.png"

const FramerImage = motion(Image)

const MovingImg = ({ title, img, link }) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const imgRef = useRef(null)

    function handleMouse(event) {
        imgRef.current.style.display= "inline-block"
    x.set(event.pageX)
    y.set(-10)
    }

    function handleMouseLeave(event) {
        imgRef.current.style.display= "none"
    x.set(event.pageX)
    y.set(0)
    }
    return (
        <Link href={link} target='_blank'
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
        >

            <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            <FramerImage 
            style={{x:x,y:y}} 
            initial={{opacity:0}}
            whileInView={{opacity:1, transition:{duration:0.2}}}
            ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg' />
        </Link>
    )
}

const Article = ({ img, title, date, link }) => {
    return (
        <motion.li
        initial={{y:200}}
        whileInView={{y:0, transition:{duration:0.5,ease:"easeInOut"}}}
        viewport={{once:true}}
        className='relative w-full p-4 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light'>
            <MovingImg title={title} img={img} link={link} />
            <span className='text-primary dark:text-primaryDark font-semibold pl-4'>{date}</span>
        </motion.li>
    )
}

const FeaturedArticle = ({ img, title, time, summary, link }) => {
    return (
        <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl' />
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg inline-block'>
                <FramerImage src={img} alt={title} className='w-full h-auto' whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }} 
                    priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw , 50vw'/>
            </Link>
            <Link href={link} target='_blank'>
                <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline dark:text-light'>{title}</h2>
            </Link>
            <p className='text-sm mb-2 dark:text-light'>{summary}</p>
            <span className='text-primary dark:text-primaryDark font-semibold'>{time}</span>
        </li>
    )
}


const articles = () => {
    return (
        <>
            <Head>
                <title>Shehab Taher | Articles Page</title>
                <meta name='description' content='Page about me' />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center jus
             overflow-hidden'>
                <Layout className='pt-16'>
                    <AnimatedText text={"Code Can Change The World! "} className='mb-16' />
                    <ul className='grid grid-cols-2 gap-16'>
                        <FeaturedArticle
                            img={Article1}
                            title={"Build A Custom Pagination Component In Reactjs From Scratch"}
                            summary={"Learn how to build a custom pagination component in ReactJS from scratch . Follow this step-by-step guide to integrate Pagination component in your ReactJS project."}
                            time={"9 min read"}
                            link={"/"}
                        />
                        <FeaturedArticle
                            img={Article2}
                            title={"Build A Custom Pagination Component In Reactjs From Scratch"}
                            summary={"Learn how to build a custom pagination component in ReactJS from scratch . Follow this step-by-step guide to integrate Pagination component in your ReactJS project."}
                            time={"9 min read"}
                            link={"/"}
                        />
                    </ul>
                    <h2 className='font-bold text-4xl w-full text-center my-16 mt-32 dark:text-light'>All Articles</h2>
                    <ul>
                        <Article
                            title={"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"}
                            date={"May 24, 2023"}
                            img={Article3}
                            link={"/"}
                        />
                        <Article
                            title={"Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"}
                            date={"May 24, 2023"}
                            img={Article4}
                            link={"/"}
                        />
                    </ul>
                </Layout>
            </main>
        </>
    )
}

export default articles