import React from 'react';
import Link from '../components/Link';
// import {SiTiktok, SiInstagram, SiUpwork} from 'react-icons/si'
// import { IconContext } from 'react-icons';
import { StaticImage } from 'gatsby-plugin-image';

export default function Header() {
    return (
        <div className='h-screen w-screen grid grid-cols-10'>
            <div className='col-span-4 flex h-full w-full justify-center items-center'>
                <div>
                    <StaticImage src='../images/gcs.png' alt='GCS logo' className='h-28 w-28'/>
                    <p className='font-semibold text-4xl mt-3'>George Parks</p>
                    <p className='text-xl mt-1 font-light'>Software designer in Atlanta, GA</p>
                    <div className='flex flex-col'>
                        <Link url='/resume'>Resume</Link>
                        <Link url='/portfolio'>Portfolio</Link>
                        <Link url='/contact'>Contact</Link>
                        <Link url='/blog'>Blog</Link>
                    </div>
                    {/* <div className='flex mt-4'>
                        <IconContext.Provider value={{ size: '18px', style: { marginRight: '10px', color: "grey" } }}>
                            <SiTiktok />
                            <SiInstagram />
                            <SiUpwork />
                        </IconContext.Provider>
                    </div> */}
                </div>
            </div>
            <div className='col-span-6'>
                <StaticImage src='../images/splash.jpg' alt='' className='h-screen w-full object-cover' />
            </div>
        </div>
    )
}