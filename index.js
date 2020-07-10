const express = require('express')
const app = express()
const mongoose = require('mongoose')
const regRoutes = require('./routes/reg')



const url = `mongodb+srv://bodik125:YQzZRivlpGXqqrDd
@cluster0.epjpk.mongodb.net/<dbname>
?retryWrites=true&w=majority`

app.use(express.urlencoded({extended:true}))

app.use(regRoutes)

const PORT = process.env.PORT || 3000

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

async function start(){
    try {
        const url = `mongodb+srv://bodik125:YQzZRivlpGXqqrDd@cluster0.epjpk.mongodb.net/<dbname>?retryWrites=true&w=majority`
        await mongoose.connect(url, {useNewUrlParser:true})
        app.listen(PORT, ()=>{
            console.log(`SErver is running on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}
// registraition.emit('data')
// app.use()
// console.log(new Registration())
console.log(regRoutes)
start()