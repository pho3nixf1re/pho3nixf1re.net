import React from 'react'
import { withProps } from 'recompose'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {
  faGithubAlt,
  faStackOverflow,
  faFacebookF,
  faLinkedinIn,
} from '@fortawesome/fontawesome-free-brands'
import KeybaseIcon from '../components/KeybaseIcon'
import Page from '../components/Page'
import LinkItem from '../components/LinkItem'
import styles from './index.module.scss'

const links = [
  {
    Icon: withProps({ icon: faGithubAlt })(FontAwesomeIcon),
    label: 'github',
    link: 'https://github.com/pho3nixf1re',
  },
  {
    Icon: KeybaseIcon,
    label: 'keybase',
    link: 'https://keybase.io/mturney',
  },
  {
    Icon: withProps({ icon: faLinkedinIn })(FontAwesomeIcon),
    label: 'linkedin',
    link: 'https://www.linkedin.com/in/matthewturney',
  },
  {
    Icon: withProps({ icon: faStackOverflow })(FontAwesomeIcon),
    label: 'stackoverflow',
    link: 'https://careers.stackoverflow.com/pho3nixf1re',
  },
  {
    Icon: withProps({ icon: faFacebookF })(FontAwesomeIcon),
    label: 'facebook',
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
      {links.slice(0, 2).map(link => <LinkItem key={link.link} {...link} />)}
    </ul>
    <ul className={styles.links}>
      {links.slice(2).map(link => <LinkItem key={link.link} {...link} />)}
    </ul>
  </Page>
)

export default IndexPage
