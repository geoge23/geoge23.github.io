import React from 'react';
import Link from '../components/Link';
import {SiLinkedin, SiGithub, SiUpwork} from 'react-icons/si'
import { IconContext } from 'react-icons';
import { StaticImage } from 'gatsby-plugin-image';
import { Helmet } from 'react-helmet';

export default function Index() {
    return (
        <div className='h-screen w-screen grid grid-cols-10'>
            <Helmet>
                <title>george parks</title>
                <meta name="description" content="The homepage for George Parks, a software engineer in Atlanta, GA"></meta>
                <meta name="author" content="George Parks"></meta>
            </Helmet>
            <div className='md:col-span-4 col-span-10 flex h-full w-full justify-center items-center'>
                <div>
                    <StaticImage src='../images/gcs.png' alt='GCS logo' className='h-28 w-28'/>
                    <p className='font-semibold text-4xl mt-3'>George Parks</p>
                    <p className='text-xl mt-1 font-light'>Software engineer in Atlanta, GA</p>
                    <div className='flex flex-col'>
                        <Link url='/resume'>Resume</Link>
                        <Link url='/portfolio'>Portfolio</Link>
                        <Link url='/contact'>Contact</Link>
                        <Link url='/blog'>Blog</Link>
                    </div>
                    <div className='flex mt-4'>
                        <IconContext.Provider value={{ size: '18px', style: { marginRight: '10px', color: "grey" } }}>
                            <a href='https://www.linkedin.com/in/george-parks/'><SiLinkedin /></a>
                            <a href='https://github.com/geoge23'><SiGithub /></a>
                            <a href='https://www.upwork.com/freelancers/~01722f50762199c085'><SiUpwork /></a>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
            <div className='md:col-span-6 md:block hidden'>
                <StaticImage src='../images/splash.jpg' alt='' className='h-screen w-full object-cover' />
            </div>
        </div>
    )
}