import { FunctionComponent } from 'react'
import styles from './component.module.scss'
import { LinkItem as LinkItemType } from '@/lib/links.tsx'

type Props = {
  item: LinkItemType
}

export const LinkItem: FunctionComponent<Props> = ({
  item: { Icon, link, label },
}) => (
  <li>
    <a href={link} className={styles.container}>
      <Icon className={styles.icon} />
      <span className={styles.label}>{label}</span>
    </a>
  </li>
)
