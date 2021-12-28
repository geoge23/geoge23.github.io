import { navigate } from 'gatsby'
import React from 'react'
import {BsCalendar} from 'react-icons/bs'

export default function BlogPreview({excerpt, frontmatter, slug}) {
    return <article 
        className='w-11/12 mx-auto mb-6 cursor-pointer' 
        onClick={() => navigate(`/blog/${slug}`)}
        onKeyDown={({key}) => key === 'Enter' ? navigate(`/blog/${slug}`) : null}
        tabIndex={0}
        role='link'
    >
        <p className='text-2xl mb-1'>{frontmatter.title}</p>
        <p className='text-gray-600'>{excerpt}</p>
        <span className='flex items-center my-2'><BsCalendar className='text-sm mr-2' />{frontmatter.date}</span>
    </article>
}