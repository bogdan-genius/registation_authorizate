const {Router} = require('express')
const Users = require('../models/regist')
const router = Router()

const crypto = require('crypto')
const hash = crypto.createHash('sha256')

class Registration {
    async reg(data) {


        
    }}

router.post('/login', async (req,res)=>{
    try {
    const password = req.body.password;
    hash.update(password , "utf8")
    const hashPassword = hash.digest("base64")
    const usersInput = new Users({
        login: req.body.login,
        password: hashPassword
    })

  

    const usersLogin = await Users.find()

        if(usersLogin.find((user, index)=>{

            if(user.login === usersInput.login){
               return true
            }
            return false
        })){
            if(usersLogin.find((user, index)=>{
                if(user.password === usersInput.password){
                    return true
                }
                return false
            }))
            console.log("Pobeda")
            res.redirect('/')

        }else{
            console.log("Parol ili login neverni")
            res.redirect('/login')

        
        }
        
    }
    catch (error) {
        console.log(error)
    }
    
})

module.exports = router