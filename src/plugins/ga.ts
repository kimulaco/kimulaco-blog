import { Context } from '@nuxt/types'

export default ({ app }: Context) => {
  app.$ga.eventSync = (...args: string[]) => {
    return new Promise((resolve) => {
      let isResolved = false

      const timer = setTimeout(() => {
        if (!isResolved) {
          isResolved = true
          resolve()
        }
      }, 1000)

      app.$ga.event(...args, {
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
