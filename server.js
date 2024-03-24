const express = require('express')
const path = require('path')
const http = require('http')

const app = express()
const server = http.createServer(app)
const PORT = 3000

// Set static folder
app.use(express.static(path.join(__dirname, "public")))

// Start server
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
