import React from 'react'
import Header from '../components/Header'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'
import 'github-markdown-css/github-markdown-light.css'

function Post({data, ...other}) {
    return <>
        <Header />
        <main className='responsive-body'>
            <p className='font-medium text-4xl mb-1'>{data.mdx.frontmatter.title}</p>
            <p className='mb-3 text-lg'>{data.mdx.frontmatter.date}</p>
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
    mdx(id: {eq: $id}) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
  `

export default Post;