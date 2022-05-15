const path = require('path');

module.exports = {
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
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: 'https://example.com/graphql',
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
        path: `${__dirname}/src/images`,
      },
    },

    'gatsby-transformer-remark',
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
