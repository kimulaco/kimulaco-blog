import { google } from 'googleapis'
const { GA_VIEW_ID, GA_PRIVATE_KEY, GA_CLIENT_EMAIL } = process.env

const GOOGLE_API_SCOPE = 'https://www.googleapis.com/auth/analytics.readonly'

interface GetPopularPostsRequest {
  startDate: string
  endDate: string
  length: number
}

export const getPopularPosts = async (option: GetPopularPostsRequest) => {
  const client = new google.auth.JWT({
    email: GA_CLIENT_EMAIL,
    key: GA_PRIVATE_KEY.replace(/\\n/gm, '\n'),
    scopes: [GOOGLE_API_SCOPE],
  })
  const analytics = google.analyticsreporting({
    version: 'v4',
    auth: client,
  })
  const response = await analytics.reports.batchGet({
    requestBody: {
      reportRequests: [
        {
          viewId: GA_VIEW_ID,
          dateRanges: [
            {
              startDate: option.startDate,
              endDate: option.endDate,
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
          pageSize: option.length,
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
