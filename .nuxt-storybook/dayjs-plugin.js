import dayjs from 'dayjs'

import 'dayjs/locale/en'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'
import calendar from 'dayjs/plugin/calendar'

dayjs.extend(relativeTime)
dayjs.extend(updateLocale)
dayjs.extend(calendar)

dayjs.locale('en')

export default (context, inject) => {
  context.$dayjs = dayjs
  inject('dayjs', dayjs)
}
