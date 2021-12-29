const path = require("path")

exports.createPages = async ({graphql, actions, reporter}) => {
    //Each creation run is encapsulated in one of these anonymous functions to keep the variable names from interfering
    await Promise.all(
        //posts
        [(async () => {
            const result = await graphql(`{
                allFile(filter: {sourceInstanceName: {eq: "posts"}}) {
                    nodes {
                        childMdx {
                            id,
                            slug
                        }
                    }
                }
            }`)
            
            if (result.errors) {
                reporter.panicOnBuild(`Error while running GraphQL query.`)
                return
            }
        
            const template = path.resolve(`src/templates/blogEntry.js`);
            result.data.allFile.nodes.forEach(({childMdx: e}) => {
                actions.createPage({
                    path: `/blog/${e.slug}`,
                    component: template,
                    context: {
                        id: e.id
                    }
                })
            })
        })(),
        //pages
        (async () => {
            const result = await graphql(`{
                allFile(filter: {sourceInstanceName: {eq: "pages"}}) {
                    nodes {
                        childMdx {
                            id,
                            slug
                        }
                    }
                }
            }`)
            
            if (result.errors) {
                reporter.panicOnBuild(`Error while running GraphQL query.`)
                return
            }
        
            const template = path.resolve(`src/templates/page.js`);
            result.data.allFile.nodes.forEach(({childMdx: e}) => {
                actions.createPage({
                    path: `/${e.slug}`,
                    component: template,
                    context: {
                        id: e.id
                    }
                })
            })
        })(),
        //portfolio entries
        (async () => {
            const result = await graphql(`{
                allFile(filter: {sourceInstanceName: {eq: "portfolio"}, extension: {eq: "mdx"}}) {
                    nodes {
                        childMdx {
                            id,
                            slug
                        }
                    }
                }
            }`)
            
            if (result.errors) {
                reporter.panicOnBuild(`Error while running GraphQL query.`)
                return
            }
        
            const template = path.resolve(`src/templates/portfolioEntry.js`);
            result.data.allFile.nodes.forEach(({childMdx: e}) => {
                actions.createPage({
                    path: `/portfolio/${e.slug}`,
                    component: template,
                    context: {
                        id: e.id
                    }
                })
            })
        })()
    ]
    );
}