import { Context } from '@nuxt/types'

export default ({ app: { $ga } }: Context) => {
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
        },
      })
    })
  }
}
