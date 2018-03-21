import React from 'react'
import PropTypes from 'prop-types'
import { compose, withProps } from 'recompose'
import Helmet from 'react-helmet'
import '../sass/global.scss'
import {
  selectTitle,
  selectDescription,
  selectKeywords,
} from '../lib/selectors'

const TemplateWrapper = ({ children, title, description, keywords = [] }) => (
  <div>
    <Helmet
      defaultTitle={title}
      meta={[
        { name: 'description', content: description },
        {
          name: 'keywords',
          content: keywords.join(),
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

export const query = graphql`
  query FetchMetadata {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`

export default compose(
  withProps(({ data }) => ({
    title: selectTitle(data),
    description: selectDescription(data),
    keywords: selectKeywords(data),
  }))
)(TemplateWrapper)
