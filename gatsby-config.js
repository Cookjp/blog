const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'James Cook Blog',
    description: 'Software development and personal blog',
  },
  plugins: [
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
      },
    },
  ],
};
