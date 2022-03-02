import React from 'react'
import Header from '../components/Header'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'
import 'github-markdown-css/github-markdown-light.css'
import Share from '../components/Share'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableHeight: true,
};

function Post({data}) {
    return <>
        <Header />
        <Helmet>
          <title>{data.mdx.frontmatter.title} | george parks</title>
          <meta name='description' content={data.mdx.excerpt} />
          <meta property='og:image' content={data.site.siteMetadata.siteUrl + data.mdx.frontmatter.image.childImageSharp.fixed.src} />
        </Helmet>
        <main className='responsive-body'>
            <GatsbyImage image={data.mdx.frontmatter.image.childImageSharp.gatsbyImageData} className='h-52 w-full mb-4 object-cover' alt={data.mdx.frontmatter.title} />
            <p className='font-medium text-4xl mb-1'>{data.mdx.frontmatter.title}</p>
            <p className='text-lg mb-2'>{data.mdx.frontmatter.date}</p>
            <div className='mb-3'>
              <Share url={typeof window !== 'undefined' ? window.location.toString() : ''}/>
            </div>
            <div className='markdown-body overflow-x-hidden'>
                <MDXRenderer articleImages={data.mdx.frontmatter.articleImages} sliderSettings={sliderSettings}>
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
      body
      excerpt(pruneLength: 200)
      frontmatter {
        articleImages {
          childImageSharp {
            gatsbyImageData
          }
        }
        date(formatString: "MMMM DD, YYYY")
        title
        image {
          childImageSharp {
            gatsbyImageData
            fixed {
              src
            }
          }
        }
      }
    }
  }
  `

export default Post;