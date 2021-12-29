import React from 'react'
import BlogPreview from '../components/BlogPreview'
import Header from '../components/Header'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

function Blog({data}) {
    return <>
        <Header />
        <Helmet>
            <title>george parks | blog</title>
        </Helmet>
        <main className='responsive-body'>
            <p className='text-2xl mb-5'>Blog Posts</p>
            <div>
                {data.allFile.nodes.map(({childMdx}) => <BlogPreview key={childMdx.id} {...childMdx} />)}
            </div>
        </main>
    </>
}

export const query = graphql`
  {
    allFile(filter: {sourceInstanceName: {eq: "posts"}}) {
        nodes {
            childMdx {
                id
                slug
                excerpt(pruneLength: 200)
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  title
                }
            }
        }
    }
  }
`

export default Blog