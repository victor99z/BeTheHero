const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.json({
        event: "Where did you find this?"
    })
})

app.listen(3333)