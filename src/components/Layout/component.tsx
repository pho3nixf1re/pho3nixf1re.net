import type { PropsWithChildren } from 'react'
import cc from 'classcat'
import { Fira_Code } from 'next/font/google'
import styles from './component.module.scss'

const font = Fira_Code({ subsets: ['latin'] })

export function Layout({ children }: PropsWithChildren) {
  return <main className={cc([font.className, styles.main])}>{children}</main>
}
