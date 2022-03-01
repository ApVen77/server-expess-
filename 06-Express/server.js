// ===============================DEPENDENCIES======================================

const express = require('express')
const app = express()
const PORT = 3000


// ===============================Basic Route======================================

app.get('/', (req, res) => {
  res.send('Hello')
})

app.get('/contact', (req, res) => {
  res.send('This is the Contact Page')
})


// =====================================Start Server==========================


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
