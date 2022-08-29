const express = require ("express")
const app = express()
const PORT = 5000
const path = require("path")

app.use(express.static("public"))

app.get("/", (req,res) => {
    res.status(200).sendFile(path.resolve("public/index.html"))
})

app.listen(PORT, () => {
    console.log(`server on port ${PORT}`)
})
