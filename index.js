const app = require('./express/app')
require('dotenv').config()
app.listen(process.env.PORT,()=>{
    console.log(`app running on ${process.env.PORT}`)
})