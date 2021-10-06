import express from 'express'
import { getPopularPostsID } from './libs/ga'

const PORT = process.env.PORT || 4000
const app: express.Express = express()

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
    try {
      const popularPosts = await getPopularPostsID()
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
