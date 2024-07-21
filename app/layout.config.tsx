import { type DocsLayoutProps } from 'fumadocs-ui/layout';
import { type HomeLayoutProps } from 'fumadocs-ui/home-layout';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';
import { pageTree } from '@/app/source';

import Logo from '../components/Logo';
import { Blocks, Library } from 'lucide-react';

// shared configuration
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: <Logo />,
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs/core',
      active: 'nested-url',
    },
  ],
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: pageTree,
  sidebar: {
      banner: (
        <RootToggle
          options={[
            {
              title: 'Core',
              description: 'All about Stein core',
              url: '/docs/core',
              icon: <div className='size-9 shrink-0 rounded-md bg-gradient-to-t from-background/90 bg-blue-600/60 p-1.5'>
                <Library className='text-blue-600 dark:text-blue-200' />
              </div>,
            },
            {
              title: 'Plugins',
              description: 'Info about Stein plugins',
              url: '/docs/plugins',
              icon: <div className='size-9 shrink-0 rounded-md bg-gradient-to-t from-background/80 bg-purple-500/60 p-1.5'>
                <Blocks className='text-purple-600 dark:text-purple-200' />
              </div>, 
            },
          ]}
        />
      ),
  }
};
