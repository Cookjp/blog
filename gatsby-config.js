const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'posters-ui',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        Pages: path.join(__dirname, 'src/pages'),
        Graphql: path.join(__dirname, 'src/graphql'),
      },
    },
  ],
};
