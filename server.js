const express = require('express')

const app = express()
const PORT = process.env.PORT || 5000

app.get('*', (req, res) => {
  res.send('This is the Shlappas Raspberry Pi server.')
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
