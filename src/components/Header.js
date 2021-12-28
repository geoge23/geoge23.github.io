import { navigate } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Link from './Link'

export default function Header() {
    return <header className='flex m-6 items-center justify-between'>
        <div 
            className='flex items-center cursor-pointer' 
            onClick={() => navigate('/')} 
            onKeyDown={({key}) => key === 'Enter' ? navigate('/') : null} 
            role={'link'} 
            tabIndex={0}
        >
            <StaticImage src='../images/gcs.png' className='h-14 w-14' alt=''/>
            <p className='ml-3 font-medium text-2xl lowercase'>George Parks</p>
        </div>
        <div className='ml-3'>
            <Link url='/resume'>Resume</Link>
            <Link url='/portfolio'>Portfolio</Link>
            <Link url='/contact'>Contact</Link>
            <Link url='/blog'>Blog</Link>
        </div>
    </header>
}