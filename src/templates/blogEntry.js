import React from 'react'
import Header from '../components/Header'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'
import 'github-markdown-css/github-markdown-light.css'
import Share from '../components/Share'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'

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
            <div className='markdown-body'>
                <MDXRenderer>
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