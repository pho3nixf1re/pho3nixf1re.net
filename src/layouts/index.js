import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import '../sass/global.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      defaultTitle="Matthew Turney"
      meta={[
        { name: 'description', content: 'The landing page of Matthew Turney.' },
        {
          name: 'keywords',
          content: [
            'matthew turney',
            'software engineer',
            'developer',
            'javascript',
            'ruby',
            'node.js',
            'graphql',
          ].join(),
        },
      ]}
    >
      <link
        href="//fonts.googleapis.com/css?family=Sanchez|Source+Sans+Pro"
        rel="stylesheet"
      />
      <link type="text/plain" rel="author" href="humans.txt" />
    </Helmet>
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
