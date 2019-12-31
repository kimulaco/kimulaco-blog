import Vue from 'vue'
import dayjs from 'dayjs'

Vue.filter('date', (value: string) => {
  if (!value) return ''
  return dayjs(value).format('YYYY/MM/DD')
})
