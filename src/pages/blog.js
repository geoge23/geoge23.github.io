import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import BlogPreview from '../components/old/BlogPreview'
import Header from '../components/old/Header'

function Blog({ data }) {
    return <>
        <Header />
        <Helmet>
            <title>George Parks | Blog</title>
        </Helmet>
        <main className='responsive-body'>
            <p className='text-2xl mb-5 font-semibold'>Blog Posts</p>
            <div>
                {data.allFile.nodes.map(({ childMdx }) => <BlogPreview key={childMdx.id} {...childMdx} />)}
            </div>
        </main>
    </>
}

export const query = graphql`
  {
    allFile(
        filter: {sourceInstanceName: {eq: "posts"}}
        sort: {fields: childrenMdx___frontmatter___date, order: DESC}
        ) {
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