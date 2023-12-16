import { FunctionComponent } from 'react'
import { Icon } from '@mdi/react'
import { mdiFacebook, mdiGithub, mdiLinkedin, mdiStackOverflow } from '@mdi/js'
import { KeybaseIcon } from '../components/KeybaseIcon/component.tsx'

type IconProps = {
  className?: string
}

export type LinkItem = {
  Icon: FunctionComponent<IconProps>
  label: string
  link: string
}

export const links: LinkItem[] = [
  {
    Icon: ({ className }) => <Icon path={mdiGithub} className={className} />,
    label: 'github',
    link: 'https://github.com/pho3nixf1re',
  },
  {
    Icon: ({ className }) => <KeybaseIcon className={className} />,
    label: 'keybase',
    link: 'https://keybase.io/mturney',
  },
  {
    Icon: ({ className }) => <Icon path={mdiLinkedin} className={className} />,
    label: 'linkedin',
    link: 'https://www.linkedin.com/in/matthewturney',
  },
  {
    Icon: ({ className }) => (
      <Icon path={mdiStackOverflow} className={className} />
    ),
    label: 'stackoverflow',
    link: 'https://careers.stackoverflow.com/pho3nixf1re',
  },
  {
    Icon: ({ className }) => <Icon path={mdiFacebook} className={className} />,
    label: 'facebook',
    link: 'https://www.facebook.com/mturney',
  },
]
