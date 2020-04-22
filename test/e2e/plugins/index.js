const axios = require('axios')
const xml2js = require('xml2js')
const SITE_URL = 'https://blog.kimulaco.me'

module.exports = (on, config) => {
  on('task', {
    async getPageList() {
      const response = await axios.get(`${config.baseUrl}/sitemap.xml`)
      const parsed = await xml2js.parseStringPromise(response.data)
      const urls = []

      parsed.urlset.url.forEach((url) => {
        const path = url.loc[0].replace(SITE_URL, '')
        if (path !== '/404') {
          urls.push(path)
        }
      })

      return urls
    }
  })

  return config
}
