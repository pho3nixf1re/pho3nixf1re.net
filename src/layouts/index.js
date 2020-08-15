import React from 'react'
import PropTypes from 'prop-types'
import { dom } from '@fortawesome/fontawesome-svg-core'
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
      htmlAttributes={{ lang: 'en' }}
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
      <style>{dom.css()}</style>
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
