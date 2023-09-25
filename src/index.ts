import express from 'express'
const app = express();
app.use(express.json()) //tranform req.body in json

const port = 3000
app.get('/ping', (_req, res) => {
    res.send('pong')
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})
