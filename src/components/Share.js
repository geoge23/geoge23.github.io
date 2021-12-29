import React from 'react'
import { EmailIcon, EmailShareButton, RedditIcon, RedditShareButton, TwitterIcon, TwitterShareButton, FacebookIcon, FacebookShareButton } from 'react-share'

export default function Share({url = "https://geoge.co"}) {
    return <>
        <TwitterShareButton url={url} className='md:mr-1 mr-2'>
            <TwitterIcon size={24} />
        </TwitterShareButton>
        <RedditShareButton url={url} className='md:mr-1 mr-2'>
            <RedditIcon size={24} />
        </RedditShareButton>
        <FacebookShareButton url={url} className='md:mr-1 mr-2'>
            <FacebookIcon size={24} />
        </FacebookShareButton>
        <EmailShareButton url={url} className='md:mr-1 mr-2'>
            <EmailIcon size={24} />
        </EmailShareButton>
    </>
}