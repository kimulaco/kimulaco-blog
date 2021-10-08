import axios, { AxiosInstance } from 'axios'

export const functions: AxiosInstance = axios.create({
  baseURL: `${process.env.NETLIFY_FUNCTIONS_BASE_URL}`,
})

export const getPopularPostsID = async (): Promise<string[]> => {
  const response = await functions.get('/popular-post')
  return response.data.popularPosts || []
}
