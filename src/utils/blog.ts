export const SITE_TITLE = 'kimulaco.com'
export const SITE_DESC = 'kimulaco.comの説明文。'
export const SITE_URL = 'https://kimulaco.com'

export const createMetaData = (
  title?: string,
  description?: string,
  path?: string,
  imageUrl?: string
): any => {
  const metaTitle = title ? `${title} | ${SITE_TITLE}` : SITE_TITLE
  const metaDesc = description || SITE_DESC
  const metaImage = imageUrl || '/img/ogp.png'
  const meta = [
    { hid: 'description', name: 'description', content: metaDesc },
    { hid: 'og:site_name', property: 'og:site_name', content: metaTitle },
    { hid: 'og:url', property: 'og:url', content: `${SITE_URL}${path || '/'}` },
    { hid: 'og:title', property: 'og:title', content: metaTitle },
    { hid: 'og:description', property: 'og:description', content: metaDesc },
    { hid: 'og:image', property: 'og:image', content: metaImage }
  ]
  return {
    title: metaTitle,
    meta
  }
}
