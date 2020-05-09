import { Context } from '@nuxt/types'
import { getCLS, getFID, getLCP, getFCP, getTTFB } from 'web-vitals'

export default ({ app: { router, $ga } }: Context) => {
  const sendVitalsMetricToGA = (
    { name, delta, id }: { name: string, delta: number, id: string }
  ) => {
    $ga.event({
      eventCategory: 'Web Vitals',
      eventAction: name,
      eventValue: Math.round(name === 'CLS' ? delta * 1000 : delta),
      eventLabel: id,
      nonInteraction: true
    })
  }

  const sendVitalsToGA = () => {
    getCLS((metric) => { sendVitalsMetricToGA(metric) })
    getFID((metric) => { sendVitalsMetricToGA(metric) })
    getLCP((metric) => { sendVitalsMetricToGA(metric) })
    getFCP((metric) => { sendVitalsMetricToGA(metric) })
    getTTFB((metric) => { sendVitalsMetricToGA(metric) })
  }

  if (router) {
    router.onReady(() => {
      sendVitalsToGA()
      router.afterEach(() => {
        sendVitalsToGA()
      })
    })
  }

  $ga.eventSync = (...args: string[]) => {
    return new Promise((resolve) => {
      let isResolved = false

      const timer = setTimeout(() => {
        if (!isResolved) {
          isResolved = true
          resolve()
        }
      }, 1000)

      $ga.event(...args, {
        hitCallback() {
          if (!isResolved) {
            isResolved = true
            clearTimeout(timer)
            resolve()
          }
        }
      })
    })
  }
}
