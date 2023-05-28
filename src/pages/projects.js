import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icon'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import ShortlyPic from '../../public/images/projects/shortly.jpeg'
import MovieWebsite from '../../public/images/projects/MovieWebsite.jpeg'
import TodoList from '../../public/images/projects/TodoList.jpeg'
import GYMPic from '../../public/images/projects/Gym.jpeg'


const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <div>
            <article className='w-full flex items-center justify-between rounded-br-2xl rounded-3xl border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-12 relative mt-12'>
                <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl' />
                <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                    <FramerImage src={img} alt={title} className='w-full h-auto' whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }} />
                </Link>
                <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                    <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
                    <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                        <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light'>{title}</h2>
                    </Link>
                    <p className='my-2 font-medium dark:text-light'>{summary}</p>
                    <div className='mt-2 flex items-center'>
                        <Link href={github} target='_blank' className='w-10'>
                            <GithubIcon />
                        </Link>
                        <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light p-2 px-6 text-lg font-semibold'>
                            Visit Project
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    )
}

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className='w-full flex flex-col items-center justify-center
         rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl' />
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto' whileHover={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }} />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
                </Link>

                <div className='w-full mt-2 flex items-center justify-around'>
                    <Link href={link} target='_blank' className='text-lg font-semibold underline'>
                        Visit
                    </Link>
                    <Link href={github} target='_blank' className='w-8'>
                        <GithubIcon />
                    </Link>

                </div>
            </div>

        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Shehab Taher | Projects Page</title>
                <meta name='description' content='This is my projects and my works' />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16' />
                    <div className='grid grid-cols-12 gap-24 gap-y-32'>
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Movie Website"
                                img={MovieWebsite}
                                summary={"This website using TMDB Api to searching and make list for watched and watchlist "}
                                type={"React Project"}
                                link={"https://shehab-movieapp.netlify.app/"}
                                github={"https://github.com/ShehabTaher/movie-website.git"}
                            />
                        </div>
                        <div className="col-span-6">
                            <Project
                                title="Shortly Website"
                                img={ShortlyPic}
                                type={"Tailwind Project"}
                                link={"https://shortly-website-xi.vercel.app/"}
                                github={"https://github.com/ShehabTaher/Shortly-website"}
                            />
                        </div>
                        <div className="col-span-6">
                            <Project
                                title="Todo List"
                                img={TodoList}
                                type={"React Project"}
                                link={"https://shehab-todo-list.netlify.app/"}
                                github={"https://github.com/ShehabTaher/todo-list.git"}
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-12 gap-24'>
                        <div className="col-span-12">
                            <FeaturedProject
                                title="GYM Website"
                                img={GYMPic}
                                summary={"Need To Exercises and Workout visit my Website"}
                                type={"React Project"}
                                link={"https://shehab-gym.netlify.app/"}
                                github={"https://github.com/ShehabTaher/Gym-Website.git"}
                            />
                        </div>
                        <div className="col-span-6">
                            <Project
                                title="Shortly Website"
                                img={ShortlyPic}
                                type={"Tailwind Project"}
                                link={"https://shortly-website-xi.vercel.app/"}
                                github={"https://github.com/ShehabTaher/Shortly-website"}
                            />
                        </div>
                        <div className="col-span-6">
                            <Project
                                title="Shortly Website"
                                img={ShortlyPic}
                                type={"Tailwind Project"}
                                link={"https://shortly-website-xi.vercel.app/"}
                                github={"https://github.com/ShehabTaher/Shortly-website"}
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects