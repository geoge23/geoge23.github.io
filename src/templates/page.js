import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import 'github-markdown-css/github-markdown-light.css'
import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/old/Header'

function Page({ data }) {
    return <>
        <Header />
        <Helmet>
            <title>George Parks | {data.mdx.frontmatter.title}</title>
        </Helmet>
        <main className='responsive-body'>
            <div className='markdown-body w-full'>
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
            title
        }
        }
    }
  `

export default Page;