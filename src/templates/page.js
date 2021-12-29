import React from 'react'
import Header from '../components/Header'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'
import 'github-markdown-css/github-markdown-light.css'
import { Helmet } from 'react-helmet'

function Page({data}) {
    console.log(data)
    return <>
        <Header />
        <Helmet>
            <title>george parks | {data.mdx.frontmatter.title}</title>
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