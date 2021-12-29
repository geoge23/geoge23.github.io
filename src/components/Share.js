import React from 'react'
import { EmailIcon, EmailShareButton, RedditIcon, RedditShareButton, TwitterIcon, TwitterShareButton, FacebookIcon, FacebookShareButton } from 'react-share'

export default function Share({url = "https://geoge.co"}) {
    return <>
        <TwitterShareButton url={url} className='mr-1'>
            <TwitterIcon size={24} />
        </TwitterShareButton>
        <RedditShareButton url={url} className='mr-1'>
            <RedditIcon size={24} />
        </RedditShareButton>
        <FacebookShareButton url={url} className='mr-1'>
            <FacebookIcon size={24} />
        </FacebookShareButton>
        <EmailShareButton url={url} className='mr-1'>
            <EmailIcon size={24} />
        </EmailShareButton>
    </>
}