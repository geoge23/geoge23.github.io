import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

export default function PortfolioElement({frontmatter, slug}) {
    const image = getImage(frontmatter.icon)
    return <article className='w-11/12 mx-auto mb-6 flex items-center' >
        <GatsbyImage image={image} className='w-20 object-fill mr-3'/>
        <div>
            <p className='text-xl'>{frontmatter.name}</p>
            <p>{frontmatter.shortDesc}</p>
            <Link to={`/portfolio/${slug}`} className='underline text-blue-500'>See Details</Link>
            <p className='text-gray-500 text-sm'>Uses {frontmatter.technologies.join(', ')}</p>
        </div>
    </article>
}