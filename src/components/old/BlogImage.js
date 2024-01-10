import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

export default function BlogImage({src, caption = "", style}) {
    return <div className='w-full flex flex-col items-center'>
        <GatsbyImage image={getImage(src)} alt={caption} className="md:max-w-xl" style={style} />
        <p className='text-gray-600'>{caption}</p>
    </div>
}