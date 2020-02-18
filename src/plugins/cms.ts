import axios from 'axios'

export const cms = axios.create({
  baseURL: `${process.env.CMS_BASE_URL}/api/v1`,
  headers: {
    'X-API-KEY': process.env.CMS_API_KEY
  }
})

export const getPostList = (cmsParams: any = {}) => {
  const params = cmsParams
  if (process.env.CMS_DRAFT_KEY) {
    params.draftKey = process.env.CMS_DRAFT_KEY
  }
  return cms.get('/post', { params })
}

export const getPost = (postId: string, cmsParams: any = {}) => {
  const params = cmsParams
  if (process.env.CMS_DRAFT_KEY) {
    params.draftKey = process.env.CMS_DRAFT_KEY
  }
  return cms.get(`/post/${postId}`, { params })
}
