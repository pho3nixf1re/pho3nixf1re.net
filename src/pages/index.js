import React from 'react'
import {
  FaGithubSquare,
  FaFacebookSquare,
  FaLinkedinSquare,
  FaStackOverflow,
} from 'react-icons/lib/fa'
import Page from '../components/Page'
import styles from './index.module.scss'

const links = [
  {
    Icon: FaGithubSquare,
    link: 'https://github.com/pho3nixf1re',
  },
  {
    Icon: FaLinkedinSquare,
    link: 'https://www.linkedin.com/in/matthewturney',
  },
  {
    Icon: FaStackOverflow,
    link: 'https://careers.stackoverflow.com/pho3nixf1re',
  },
  {
    Icon: FaFacebookSquare,
    link: 'https://www.facebook.com/mturney',
  },
]

const IndexPage = () => (
  <Page>
    <h1 className={styles.header}>Matthew Turney</h1>
    <p className={styles.subheader}>
      <a href="https://twitter.com/pho3nixf1re">@pho3nixf1re</a>
    </p>
    <ul className={styles.links}>
      {links.map(({ Icon, link }) => (
        <li key={link} className={styles.link}>
          <a href={link}>
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  </Page>
)

export default IndexPage
