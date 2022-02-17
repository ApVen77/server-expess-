// ===============================DEPENDENCIES======================================

const express = require('express')
const app = express()
const port = 3000


// ===============================Basic Route======================================

app.get('/', (req, res) => {
  res.send('Hello')
})

// =====================================Start Server==========================


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
