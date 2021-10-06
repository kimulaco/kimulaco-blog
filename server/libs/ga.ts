// @ts-nocheck
import path from 'path'
import { google } from 'googleapis'
const { GA_VIEW_ID } = process.env

const GOOGLE_API_SCOPE = 'https://www.googleapis.com/auth/analytics.readonly'
const KEY_PATH = '../../keys/kimulaco-blog.json'

export const getPopularPostsID = async () => {
  const client = await google.auth.getClient({
    keyFile: path.resolve(__dirname, KEY_PATH),
    scopes: GOOGLE_API_SCOPE,
  })
  const analyticsReporting = google.analyticsreporting({
    version: 'v4',
    auth: client,
  })
  console.log('await analyticsReporting.reports.batchGet()')
  const response = await analyticsReporting.reports.batchGet({
    requestBody: {
      reportRequests: [
        {
          viewId: GA_VIEW_ID,
          dateRanges: [
            {
              startDate: '30daysAgo',
              endDate: '1daysAgo',
            },
          ],
          dimensions: [
            {
              name: 'ga:pagePath',
            },
            {
              name: 'ga:pageTitle',
            },
          ],
          metrics: [
            {
              expression: 'ga:pageviews',
            },
          ],
          dimensionFilterClauses: {
            filters: [
              {
                dimensionName: 'ga:pagePath',
                expressions: '^/post/.+$',
              },
            ],
          },
          orderBys: {
            fieldName: 'ga:pageviews',
            sortOrder: 'DESCENDING',
          },
          pageSize: 5,
        },
      ],
    },
  })
  const pages = response?.data?.reports?.[0]?.data?.rows || []

  return pages.map((page) => {
    const match = page?.dimensions?.[0].match(/^\/post\/(.+)\/$/)
    return match?.[1]
  })
}
