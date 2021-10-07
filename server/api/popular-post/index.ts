import { Handler } from '@netlify/functions'
import { getPopularPosts } from '../libs/ga'
import { getQueryOne } from '../libs/utils'

export const handler: Handler = async (event): Promise<void> => {
  const query = event.queryStringParameters
  try {
    const popularPosts = await getPopularPosts({
      startDate: getQueryOne(query?.startDate) || '30daysAgo',
      endDate: getQueryOne(query?.endDate) || '1daysAgo',
      length: Number(getQueryOne(query?.length)) || 5,
    })
    return {
      statusCode: 200,
      body: JSON.stringify({
        popularPosts,
      }),
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: error.message,
      }),
    }
  }
}
