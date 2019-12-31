import MarkdownIt from 'markdown-it'
import Prism from 'prismjs'
import { Plugin } from '@nuxt/types'

require('prismjs/components/prism-scss')
require('prismjs/components/prism-typescript')
require('prismjs/components/prism-json')
require('prismjs/components/prism-bash')

const markdownIt: Plugin = ({ app }, inject) => {
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
    const anchorIdx = tokens[idx].attrIndex('target')
    if (anchorIdx < 0) {
      tokens[idx].attrPush(['target', '_blank'])
    } else {
      tokens[idx].attrs[anchorIdx][1] = '_blank'
    }

    const relIdx = tokens[idx].attrIndex('rel')
    if (relIdx < 0) {
      tokens[idx].attrPush(['rel', 'noopener noreferrer'])
    } else {
      tokens[idx].attrs[relIdx][1] = 'noopener noreferrer'
    }

    return render(tokens, idx, options, env, self)
  }

  inject('md', md)
}

export default markdownIt
