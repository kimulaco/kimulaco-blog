import Vue from 'vue'
import dayjs from 'dayjs'

export const dateFilter = (value: string): string => {
  if (!value) return ''
  return dayjs(value).format('YYYY/MM/DD')
}

Vue.filter('date', dateFilter)
