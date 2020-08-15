const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')

module.exports = {
  siteMetadata: {
    title: 'Matthew Turney',
    description: 'The landing page of Matthew Turney.',
    keywords: [
      'matthew turney',
      'software engineer',
      'developer',
      'javascript',
      'ruby',
      'node.js',
      'graphql',
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [autoprefixer(), pxtorem()],
      },
    },
  ],
}
