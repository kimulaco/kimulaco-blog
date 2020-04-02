export const SITE_TITLE = 'blog.kimulaco.me'
export const SITE_DESC = 'フロントエンドエンジニアのブログ。'
export const SITE_URL = 'https://blog.kimulaco.me'
export const SITE_THEME_COLOR = '#ffffff'
export const FACEBOOK_APP_ID = '216629989749363'

export const createMetaData = (
  title?: string,
  description?: string,
  path?: string,
  imageUrl?: string
): any => {
  const metaTitle = title ? `${title} | ${SITE_TITLE}` : SITE_TITLE
  const metaDesc = description || SITE_DESC
  const metaImage = imageUrl || `${SITE_URL}/img/ogp.png`
  const link = [
    {
      rel: 'canonical',
      href: `${SITE_URL}${path || '/'}`
    }
  ]
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
    link,
    meta
  }
}
