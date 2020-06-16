const postcssPresetEnv = require('postcss-preset-env');
const postcssExtendRule = require('postcss-extend-rule');
const postcssImport = require('postcss-import');

module.exports = {
  siteMetadata: {
    title: `WebGrower`,
    description: `Почти ежедневный журнал про веб-разработку`,
    author: `@gatsbyjs`,
    image: 'images/share.png',
    baseUrl: 'https://webgrower.ru/'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/content/articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `links`,
        path: `${__dirname}/content/links`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-source',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1440,
              withWebp: {
                quality: 75,
              },
              linkImagesToOriginal: false
            }
          },
          'gatsby-remark-responsive-iframe'
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          postcssImport(),
          postcssPresetEnv({
            stage: 3,
            features: {
              'nesting-rules': true,
            },
          }),
          postcssExtendRule()
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WebGrower - всё для веб-разработки`,
        short_name: `WebGrower`,
        start_url: `/`,
        background_color: `#F0DB4F`,
        theme_color: `#F0DB4F`,
        display: `minimal-ui`,
        icon: `src/images/webgrower-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets\/inline/
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
