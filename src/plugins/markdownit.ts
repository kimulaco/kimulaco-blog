import MarkdownIt from 'markdown-it'
import markdownItAnchor from 'markdown-it-anchor'
import markdownItTableOfContents from 'markdown-it-table-of-contents'
import removeMd from 'remove-markdown'
import Prism from 'prismjs'
import { Plugin } from '@nuxt/types'
import { Inject } from '../types/nuxt'

require('prismjs/components/prism-scss')
require('prismjs/components/prism-typescript')
require('prismjs/components/prism-json')
require('prismjs/components/prism-yaml')
require('prismjs/components/prism-bash')

const markdownIt: Plugin = (context: object, inject: Inject) => {
  const md: MarkdownIt = new MarkdownIt('default', {
    html: true,
    typographer: true,
    highlight(str: string, lang: string) {
      if (lang && Prism.languages[lang]) {
        try {
          return `<pre class="language-${lang}"><code>${Prism.highlight(
            str,
            Prism.languages[lang],
            lang,
          )}</code></pre>`
        } catch (e) {}
      }
      return `<pre class="language-plain"><code>${md.utils.escapeHtml(
        str,
      )}</code></pre>`
    },
  })

  let render: any | undefined = md.renderer.rules.link_open

  if (!render) {
    render = (
      tokens: any[],
      idx: number,
      options: object,
      env: any,
      self: any,
    ) => {
      return self.renderToken(tokens, idx, options)
    }
  }

  md.renderer.rules.image = (
    tokens: any[],
    idx: number,
    options: object,
    env: any,
    self: any,
  ) => {
    const token = tokens[idx]
    const loadingIndex = token.attrIndex('loading')

    if (!token.attrs[loadingIndex]) {
      token.attrPush(['loading', 'lazy'])
    }

    return render(tokens, idx, options, env, self)
  }

  md.renderer.rules.link_open = (
    tokens: any[],
    idx: number,
    options: object,
    env: any,
    self: any,
  ) => {
    const token = tokens[idx]
    const hrefIndex = token.attrIndex('href')
    const href = token.attrs[hrefIndex][1]

    if (/https?:\/\//.test(href)) {
      const anchorIdx = token.attrIndex('target')
      const relIdx = token.attrIndex('rel')

      if (anchorIdx < 0) {
        token.attrPush(['target', '_blank'])
      } else {
        token.attrs[anchorIdx][1] = '_blank'
      }

      if (relIdx < 0) {
        token.attrPush(['rel', 'noopener noreferrer'])
      } else {
        token.attrs[relIdx][1] = 'noopener noreferrer'
      }
    }

    return render(tokens, idx, options, env, self)
  }

  md.use(markdownItAnchor)
  md.use(markdownItTableOfContents, {
    includeLevel: [1, 2, 3],
    containerClass: 'PostContent_index',
    containerHeaderHtml: '<h2 class="PostContent_index-title">目次</h2>',
    format(link: string) {
      return removeMd(decodeURI(link))
    },
    transformLink(link: string) {
      return removeMd(decodeURI(link))
    },
  })

  inject('md', md)
}

export default markdownIt
