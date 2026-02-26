/*
 * @file Theme configuration
 */
import { defineConfig } from './src/helpers/config-helper';

export default defineConfig({
  lang: 'en-US',
  site: 'https://github.com/Hotaro26',
  avatar: '/avatar.png',
  title: 'Hotaro',
  description: 'Writing abt personal experience, achievments, travel, arts and poetry :)',
  lastModified: true,
  readTime: true,
  footer: {
    copyright: '© 2026 Hotaro',
  },
  socialLinks: [
    {
      icon: 'github',
      link: 'https://github.com/Hotaro26'
    },
    {
      icon: 'instagram',
      link: 'https://instagram.com/oi.hotaro',
      ariaLabel: 'Instagram',
    },
    {
      icon: 'mail',
    link: 'mailto:sakibreza035@gmail.com',
    ariaLabel: 'Email', 
    }
]
});
