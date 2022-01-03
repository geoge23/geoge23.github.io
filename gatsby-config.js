module.exports = {
  siteMetadata: {
    siteUrl: "https://georgeparks.me",
    title: "george parks",
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/posts`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/otherPages`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'portfolio',
        path: `${__dirname}/portfolio`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/images`
      }
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `george parks`,
        short_name: `george parks`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: 'src/images/gcs.png'
      },
    },
  ],
};
