import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Helmet from 'react-helmet'
import { dom } from '@fortawesome/fontawesome-svg-core'
import {
  selectDescription,
  selectKeywords,
  selectTitle,
} from '../../../../src.bak/lib/selectors'
import './global.scss'
import styles from './index.module.scss'

const Page = ({ children }) => {
  const data = useStaticQuery(graphql`
    query FetchMetadata {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }
    }
  `)
  const title = selectTitle(data)
  const description = selectDescription(data)
  const keywords = selectKeywords(data) || []

  return (
    <>
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
      <div className={styles.container}>{children}</div>
    </>
  )
}

export default Page
