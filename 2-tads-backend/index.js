import express from 'express'
import routes from './routes.js'


const app = express() // inicializa o server
const port = 3000

app.use(routes)

app.listen(port, () => {
    console.log('server running on port ', port);
})