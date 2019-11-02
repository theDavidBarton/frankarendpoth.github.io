const express = require('express')

function endpointCreation() {
  try {
    const app = express()
    const port = process.env.PORT || 5000

    // serve the example.html
    app.use(express.static('rabbit-trap'))
    app.listen(port)

    console.log(`API is listening on ${port}\nOpen: http://localhost:${port}/rabbit-trap.html`)
  } catch (e) {
    console.error(e)
  }
}
endpointCreation()
