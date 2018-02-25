import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Matthew Turney"
      meta={[
        { name: 'description', content: 'The landing page of Matthew Turney.' },
        {
          name: 'keywords',
          content: [
            'matthew turney',
            'engineer',
            'developer',
            'javascript',
            'ruby',
            'node.js',
            'graphql',
          ].join(),
        },
      ]}
    />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
