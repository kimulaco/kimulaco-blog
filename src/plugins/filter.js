import Vue from 'vue'
import dayjs from 'dayjs'

export const date = (date) => {
  return dayjs(date).format('YYYY-MM-DD')
}

Vue.filter('date', date)
