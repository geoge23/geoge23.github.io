import React from 'react'
import Header from '../components/Header'
import { graphql } from 'gatsby'
import PortfolioElement from '../components/PortfolioElement'
import { Helmet } from 'react-helmet'

function Portfolio({data}) {
    return <>
        <Header />
        <Helmet>
            <title>george parks | portfolio</title>
            <meta name='description' content={"Projects by George Parks, a software developer in Atlanta, GA"} />
        </Helmet>
        <main className='responsive-body'>
            <p className='text-2xl'>My Portfolio</p>
            <p className='mb-5'>Here's some of the projects I've worked on in the past. Have a look around!</p>
            {data.allFile.nodes.map(({childMdx, id}) => <PortfolioElement key={id} {...childMdx} />)}
        </main>
    </>
}

export const query = graphql`
  {
    allFile(filter: {sourceInstanceName: {eq: "portfolio"}, extension: {eq: "mdx"}}) {
        nodes {
            id
            childMdx {
                frontmatter {
                  name
                  shortDesc
                  type
                  icon {
                    childImageSharp {
                        gatsbyImageData(width: 70, height: 70)
                    }
                  }
                  url
                  technologies
                }
                slug
              }
        }
    }
  }
`

export default Portfolio