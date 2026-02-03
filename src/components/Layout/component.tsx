import type { PropsWithChildren } from 'react'
import styles from './component.module.scss'

export function Layout({ children }: PropsWithChildren) {
  return <main className={styles.main}>{children}</main>
}
