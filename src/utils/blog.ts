import { Post, BreadcrumbItem } from '../types/blog'

type MetaElement = {
  hid: string
  content: string
  name?: string
  property?: string
}

type MetaData = {
  title: string
  meta: MetaElement[]
}

export const PUBLISHER_NAME = 'kimulaco'
export const PUBLISHER_EMAIL = 'kimulaco@gmail.com'
export const TWITTER_ID = '@kimulaco'
export const SITE_TITLE = 'kimulaco blog'
export const SITE_DESC = 'フロントエンドエンジニアのブログ。'
export const SITE_URL = 'https://kimulaco.com'
export const SITE_THEME_COLOR = '#ffffff'
export const FACEBOOK_APP_ID = '216629989749363'
export const COPYRIGHT = '@ 2020 kimulaco.'
export const FEED_PATH = '/feed/post.xml'
export const FEED_URL = SITE_URL + FEED_PATH
export const SITEMAP_PATH = '/sitemap.xml'

export const SITE_ICONS = [
  {
    src: '/img/icon.png',
    sizes: '512x512',
    type: 'image/png'
  }
]

export const SITE_DEFAULT_OGP = [
  { hid: 'description', name: 'description', content: SITE_DESC },
  { hid: 'og:type', property: 'og:type', content: 'article' },
  { hid: 'og:image', property: 'og:image', content: `${SITE_URL}/img/ogp.png` },
  { hid: 'fb:app_id', property: 'fb:app_id', content: FACEBOOK_APP_ID },
  { hid: 'twitter:creator', name: 'twitter:creator', content: TWITTER_ID },
  { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' }
]

export const FEED_CONFIG = {
  title: SITE_TITLE,
  id: `${SITE_URL}${FEED_PATH}`,
  description: SITE_DESC,
  link: SITE_URL,
  language: 'ja',
  favicon: `${SITE_URL}/img/favicon.ico`,
  copyright: COPYRIGHT,
  image: `${SITE_URL}/img/icon.png`
}

export const createMetaData = (
  title?: string,
  description?: string,
  path?: string,
  imageUrl?: string
): any => {
  const metaTitle = title ? `${title} | ${SITE_TITLE}` : SITE_TITLE
  const metaDesc = description || SITE_DESC
  const metaImage = imageUrl || `${SITE_URL}/img/ogp.png`
  const meta = [
    { hid: 'description', name: 'description', content: metaDesc },
    { hid: 'og:site_name', property: 'og:site_name', content: metaTitle },
    { hid: 'og:url', property: 'og:url', content: `${SITE_URL}${path || '/'}` },
    { hid: 'og:title', property: 'og:title', content: metaTitle },
    { hid: 'og:description', property: 'og:description', content: metaDesc },
    { hid: 'og:image', property: 'og:image', content: metaImage },
    { hid: 'twitter:title', name: 'twitter:title', content: metaTitle },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: metaDesc
    },
    { hid: 'twitter:image', name: 'twitter:image', content: metaImage }
  ]
  return {
    title: metaTitle,
    meta
  }
}

export const createPageBreadclumb = (
  title: string,
  path: string,
): BreadcrumbItem[] => {
  return [
    {
      url: SITE_URL,
      text: 'TOPページ'
    },
    {
      url: `${SITE_URL}${path}`,
      text: title
    }
  ]
}

export const createPostBreadclumb = (
  title: string,
  postId: string,
): BreadcrumbItem[] => {
  return [
    {
      url: SITE_URL,
      text: 'TOPページ'
    },
    {
      url: `${SITE_URL}/post`,
      text: '記事一覧'
    },
    {
      url: `${SITE_URL}/post/${postId}`,
      text: title
    }
  ]
}

export const createTagBreadclumb = (
  title: string,
  tagId: string,
): BreadcrumbItem[] => {
  return [
    {
      url: SITE_URL,
      text: 'TOPページ'
    },
    {
      url: `${SITE_URL}/tag`,
      text: 'タグ一覧'
    },
    {
      url: `${SITE_URL}/tag/${tagId}`,
      text: title
    }
  ]
}

export const createJsonldOfWebSite = () => {
  return {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    'url': SITE_URL,
    'name': SITE_TITLE,
    'publisher': {
      '@type': 'Organization',
      'name': SITE_TITLE,
      'logo': {
        '@type': 'ImageObject',
        'url': `${SITE_URL}/img/icon.png`,
        'width': 512,
        'height': 512
      },
    },
    'author': {
      '@type': 'Person',
      'name': PUBLISHER_NAME
    },
    'image': {
      '@type': 'ImageObject',
      'url': `${SITE_URL}/img/ogp.png`,
      'width': 1200,
      'height': 630
    }
  }
}

export const createJsonldOfPost = (post: Post) => {
  return {
    '@context': 'http://schema.org',
    '@type': 'BlogPosting',
    'name': SITE_TITLE,
    'description': post.description,
    'headline': `${post.title} | ${SITE_TITLE}`,
    'inLanguage': 'jp',
    'url': SITE_URL,
    'image': [`${SITE_URL}/img/ogp.png`],
    'publisher': {
      '@type': 'Organization',
      'name': SITE_TITLE,
      'logo': {
        '@type': 'ImageObject',
        'url': `${SITE_URL}/img/icon.png`
      }
    },
    'author': {
      '@type': 'Person',
      'name': PUBLISHER_NAME
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/post/${post.id}`
    },
    'datePublished': post.created_at,
    'dateModified': post.updated_at || ''
  }
}

export const createJsonldOfBreadcrumbList = (breadcrumbs: BreadcrumbItem[]) => {
  return {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((
      item: BreadcrumbItem,
      index: number
    ) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@id': item.url,
        'name': item.text
      }
    }))
  }
}
