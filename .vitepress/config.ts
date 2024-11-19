import { defineConfig } from 'vitepress'
import { genFeed } from './genFeed.js'

export default defineConfig({
  title: 'Cekingx Labs',
  description: 'Blog draft for Cekingx Labs',
  cleanUrls: true,
  head: [
    ['meta', { name: 'twitter:site', content: '@vuejs' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    [
      'meta',
      {
        name: 'twitter:image',
        content: 'https://vuejs.org/images/logo.png'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],
  ],
})
