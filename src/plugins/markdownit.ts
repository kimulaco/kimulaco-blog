import MarkdownIt from 'markdown-it'
import removeMd from 'remove-markdown'
import Prism from 'prismjs'
import { Plugin } from '@nuxt/types'

require('prismjs/components/prism-scss')
require('prismjs/components/prism-typescript')
require('prismjs/components/prism-json')
require('prismjs/components/prism-bash')

const markdownIt: Plugin = (context, inject) => {
  const md: MarkdownIt = new MarkdownIt('default', {
    html: true,
    typographer: true,
    highlight(str: string, lang: string) {
      if (lang && Prism.languages[lang]) {
        try {
          return `<pre class="language-${lang}"><code>${Prism.highlight(
            str,
            Prism.languages[lang],
            lang
          )}</code></pre>`
        } catch (e) {}
      }
      return `<pre class="language-plain"><code>${md.utils.escapeHtml(
        str
      )}</code></pre>`
    }
  })

  let render = md.renderer.rules.link_open

  if (!render) {
    render = (tokens, idx, options, env, self) => {
      return self.renderToken(tokens, idx, options)
    }
  }

  md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
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

  md.use(require('markdown-it-anchor'), {
    permalink: false
  })
  md.use(require('markdown-it-table-of-contents'), {
    containerClass: 'PostContent_index',
    containerHeaderHtml: '<h2 class="PostContent_index-title">目次</h2>',
    format(link: string) {
      return removeMd(link)
    }
  })

  inject('md', md)
}

export default markdownIt
