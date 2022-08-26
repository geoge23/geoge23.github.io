import React from 'react'
import Header from '../components/Header'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql, navigate } from 'gatsby'
import 'github-markdown-css/github-markdown-light.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { GatsbyImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableHeight: true,
    autoplay: true,
    autoplaySpeed: 5000
};

function Page({data}) {
    return <>
        <Header />
        <Helmet>
            <title>{data.mdx.frontmatter.name} | george parks</title>
            <meta name="description" content={data.mdx.excerpt} />
            <meta property='og:image' content={data.mdx.frontmatter.icon.childImageSharp.fixed.src} />
        </Helmet>
        <main className='responsive-body'>
            <Slider {...sliderSettings} className='md:w-9/12 w-full mx-auto md:mb-4 mb-8'>
                {data.mdx.frontmatter.images.map(({childImageSharp: e}) => <GatsbyImage className='h-80' objectFit="contain" image={e.gatsbyImageData} />)}
            </Slider>
            <div className='flex justify-between w-full'>
                <div>
                    <p className='font-medium text-4xl mb-1'>{data.mdx.frontmatter.name}</p>
                    <p className='mb-3 text-lg'>{data.mdx.frontmatter.technologies.join(', ')}</p>
                </div>
                <div className='flex items-center justify-center'>
                    {data.mdx.frontmatter.url != undefined && <button className='border-2 border-blue-800 hover:border-blue-500 hover:bg-transparent hover:text-gray-700 px-2 rounded-lg text-white bg-blue-800 transition' onClick={() => navigate(data.mdx.frontmatter.url)}>Visit<span className='md:inline hidden'> Project</span></button>}
                </div>
            </div>
            <div className='markdown-body w-full'>
                <MDXRenderer articleImages={data.mdx.frontmatter.articleImages}>
                    {data.mdx.body}
                </MDXRenderer>
            </div>
        </main>
    </>
}

export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
        body
        excerpt(pruneLength:200)
        frontmatter {
            name
            url
            icon {
                childImageSharp {
                    fixed {
                        src
                    }
                }
            }
            articleImages {
                childImageSharp {
                    gatsbyImageData
                }
            }
            technologies
            images {
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
        }
    }
  `

export default Page;