const path = require('path');

module.exports = {
  flags: {
    DEV_SSR: true,
  },
  siteMetadata: {
    title: 'James Cook Blog',
    description: 'Software development and personal blog',
  },
  plugins: [
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 2000,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown',
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        Pages: path.join(__dirname, 'src/pages'),
        Graphql: path.join(__dirname, 'src/graphql'),
        Components: path.join(__dirname, 'src/components'),
        Types: path.join(__dirname, 'src/types'),
        Images: path.join(__dirname, 'src/images'),
      },
    },
  ],
};
