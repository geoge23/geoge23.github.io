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
          <meta property='og:title' content={data.mdx.frontmatter.title} />
          <meta property='og:description' content={data.mdx.excerpt} />
          <meta property='og:type' content='article' />
          <meta property='og:url' content={data.site.siteMetadata.siteUrl + "/blog/" + data.mdx.slug} />
          <meta property='og:site_name' content='george parks' />
          <meta property='article:author' content='George Parks' />
          <meta property='og:locale' content='en_US' />
          <meta property='article:section' content={data.mdx.frontmatter.category} />
          <meta property='article:tag' content={data.mdx.frontmatter.tags} />
          <meta property='article:published_time' content={data.mdx.frontmatter.date} />
          <meta property='article:modified_time' content={data.mdx.frontmatter.date} />
          <meta property="keywords" content={data.mdx.frontmatter.tags.join(', ') + ', george, george parks, freelance, atlanta, atlanta ga, software engineering'} />
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
      slug
      frontmatter {
        articleImages {
          childImageSharp {
            gatsbyImageData
          }
        }
        tags
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