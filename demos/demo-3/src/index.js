const express = require('express')
const app = express()
const home = require("./routes")
const hello = require("./routes/hello")

app.use('/', home);
app.use('/hello', hello);

app.set('port', 8080)

app.listen(
  app.get('port'),
  () => console.log(`server listening on ${app.get('port')}`)
)