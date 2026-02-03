import { LinkItem } from '@/components/LinkItem/component.tsx'
import { Layout } from '@/components/Layout/component.tsx'
import { links } from '@/lib/links.tsx'
import styles from './page.module.scss'

export default function HomePage() {
  return (
    <Layout>
      <h1 className={styles.header}>Matthew Turney</h1>
      <ul className={styles.links}>
        {links.slice(0, 2).map(item => (
          <LinkItem key={item.link} item={item} />
        ))}
      </ul>
      <ul className={styles.links}>
        {links.slice(2).map(item => (
          <LinkItem key={item.link} item={item} />
        ))}
      </ul>
    </Layout>
  )
}
