import { HomeLayout } from 'fumadocs-ui/home-layout';
import Logo from '../Logo';
import { LinkItemType } from 'fumadocs-ui/layout';

const navLinks: LinkItemType[] = [
  {
    text: 'Docs',
    url: '/docs',
    active: 'nested-url',
  },
  {
    text: 'Showcase',
    url: '/showcase',
    active: 'nested-url',
  },
]

//@ts-ignore
export default function Layout({ children }) {
  return <HomeLayout nav={{ title: <Logo /> }} links={navLinks}>
    {children}
  </HomeLayout>;
}