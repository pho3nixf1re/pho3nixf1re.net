import React from 'react'
import {
  FaGithubSquare,
  FaFacebookSquare,
  FaLinkedinSquare,
  FaStackOverflow,
} from 'react-icons/lib/fa'

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
  <div>
    <h1>Matthew Turney</h1>
    <h2>
      <a href="https://twitter.com/pho3nixf1re">@pho3nixf1re</a>
    </h2>
    <ul>
      {links.map(({ Icon, link }) => (
        <li key={link}>
          <a href={link}>
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  </div>
)

export default IndexPage
