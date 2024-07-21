import { map } from '@/.map';
import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';
import { icons } from 'lucide-react';
import { createElement } from 'react';
import { create } from '@/components/icon';

export const { getPage, getPages, pageTree } = loader({
  baseUrl: '/docs',
  rootDir: 'docs',
  source: createMDXSource(map),
  icon(icon) {
    if (!icon) {
        // You may set a default icon
        return;
    }

    if (icon in icons) return create({ icon: icons[icon as keyof typeof icons] });
  },
});
