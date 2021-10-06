import express from 'express'
import { getPopularPosts } from './libs/ga'

const PORT = process.env.PORT || 4000
const app: express.Express = express()

const getQueryOne = (queryValue: unknown): string => {
  if (!queryValue) {
    return ''
  }
  if (Array.isArray(queryValue)) {
    return String(queryValue[0])
  }
  return String(queryValue)
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', '*')
    res.header('Access-Control-Allow-Headers', '*')
    next()
  },
)

app.get(
  '/api/popular-post',
  async (req: express.Request, res: express.Response) => {
    const query = req.query
    try {
      const popularPosts = await getPopularPosts({
        startDate: getQueryOne(query?.startDate) || '30daysAgo',
        endDate: getQueryOne(query?.endDate) || '1daysAgo',
        length: Number(getQueryOne(query?.length)) || 5,
      })
      res.json({
        popularPosts,
      })
    } catch (error) {
      res.sendStatus(500)
      res.json(error)
    }
  },
)

app.listen(PORT, () => {
  console.log(`Launch on http://localhost:${PORT}.`)
})
