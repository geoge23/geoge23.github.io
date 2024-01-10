module.exports = {
  siteMetadata: {
    siteUrl: "https://georgeparks.me",
    title: "George Parks",
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
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        serialize: (e) => {
          //fixes problem where gh pages redirects dirs without a / to dirs with a /
          const len = e.path.length
          if (e.path.substring(len - 1, len) != "/") {
            e.path += "/"
          }
          console.log(e)
          return {
            url: e.path
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `George Parks`,
        short_name: `George Parks`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: 'src/images/gcs.png'
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-HR1S3Q0Y9L"
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
  ],
};
