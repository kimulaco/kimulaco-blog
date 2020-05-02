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
