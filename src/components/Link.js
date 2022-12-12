import React from 'react'
import { Link } from 'gatsby'

export default function Ln({url = 'about:blank', children = []}) {
    return <Link to={url} className='mt-1 font-light text-xl lowercase mr-2'>
        {children}
    </Link>
}