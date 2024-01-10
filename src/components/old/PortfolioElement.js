import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

export default function PortfolioElement({frontmatter, slug}) {
    const image = getImage(frontmatter.icon)
    return <article className='w-11/12 mx-auto mb-6 flex' >
        <div>
            <GatsbyImage image={image} className='object-fill shrink-0 mr-3 h-16 w-16 rounded-lg border-gray-300 shadow-md shadow-slate-400' style={{borderWidth: "0.25px"}}/>
        </div>
        <div className='text-gray-500'>
            <p className='font-semibold text-xl'>{frontmatter.name}</p>
            <p className='text-lg'>{frontmatter.shortDesc}</p>
            <Link to={`/portfolio/${slug}`} className='underline text-gray-500 text-sm'>See Details &gt;</Link>
        </div>
    </article>
}
