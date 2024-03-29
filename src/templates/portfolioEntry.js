import { graphql, navigate } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import 'github-markdown-css/github-markdown-light.css'
import React from 'react'
import { Helmet } from 'react-helmet'
import Slider from 'react-slick'
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import Header from '../components/old/Header'

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

function Page({ data }) {
    return <>
        <Header />
        <Helmet>
            <title>{data.mdx.frontmatter.name} | George Parks</title>
            <meta name="description" content={data.mdx.excerpt} />
            <meta property='og:image' content={data.mdx.images && data.mdx.images[0] ? data.mdx.images[0].childImageSharp.fixed.src : data.mdx.frontmatter.icon.childImageSharp.fixed.src} />
            <meta property='og:title' content={data.mdx.frontmatter.name} />
            <meta property='og:description' content={data.mdx.excerpt} />
            <meta property='og:url' content={data.site.siteMetadata.siteUrl + "/portfolio/" + data.mdx.slug} />
            <meta property='og:type' content='article' />
            <meta property='og:site_name' content='George Parks' />
            <meta property='og:locale' content='en_US' />
            <meta property='article:author' content='George Parks' />
            <meta property='article:published_time' content={data.mdx.frontmatter.date} />
            <meta property='article:modified_time' content={data.mdx.frontmatter.date} />
            <meta property='article:section' content='Technology' />
            <meta property='article:tag' content={data.mdx.frontmatter.technologies.join(', ') + ', george, george parks, freelance, atlanta, atlanta ga, software engineering'} />
            <meta property="keywords" content={data.mdx.frontmatter.technologies.join(', ') + ', george, george parks, freelance, atlanta, atlanta ga, software engineering'} />
        </Helmet>
        <main className='responsive-body'>
            <Slider {...sliderSettings} className='md:w-9/12 w-full mx-auto md:mb-4 mb-8'>
                {data.mdx.frontmatter.images.map(({ childImageSharp: e }) => <GatsbyImage className='h-80' objectFit="contain" image={e.gatsbyImageData} />)}
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
        site {
            siteMetadata {
              siteUrl
            }
          }
        mdx(id: {eq: $id}) {
            slug
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