import React from 'react'
import styles from './index.module.scss'

const LinkItem = ({ Icon, label, link }) => (
  <li>
    <a href={link}>
      <Icon />
      <span className={styles.label}>{label}</span>
    </a>
  </li>
)

export default LinkItem
