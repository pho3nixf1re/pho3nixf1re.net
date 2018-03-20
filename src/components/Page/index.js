import React from 'react'
import styles from './index.module.scss'

const Page = ({ children }) => (
  <div className={styles.container}>{children}</div>
)

export default Page
