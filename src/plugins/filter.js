import Vue from 'vue'
import dayjs from 'dayjs'

Vue.filter('date', (date) => {
  return dayjs(date).format('YYYY-MM-DD')
})
