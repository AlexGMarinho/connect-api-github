import express, { Request, Response } from 'express'
import axios from 'axios'
import cors from 'cors'

const app = express()
app.use(cors())

type GithubUser = {
  avatar_url: string
  name: string
  login: string
  bio: string
}

app.get('/:name', async (req: Request, res: Response) => {
  const { name } = req.params
  const githubUser = await axios.get<GithubUser>(`https://api.github.com/users/${name}`)
  res.json({ ...githubUser.data })
})

app.listen(3000, () => {
  console.log('Servidor ouvindo')
})
