import express from 'express'

const routes = express.Router()

routes.get('/', (req, res) => {
    res.send('Hello, World!')
})

routes.get('/home', (req, res) => {
    res.send('<h3>Home Page</h3>')
})

export default routes