const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 5000

app.use(bodyParser)
app.use(express.static(path.join(__dirname, 'client/build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'))
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
