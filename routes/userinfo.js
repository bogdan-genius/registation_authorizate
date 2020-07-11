const express = require('express')
const passport = require('passport')
// const upload = require('../middleware/upload')
const controller = require('../controllers/userinfo')
const router = express.Router()

console.log("Asd" , passport.authenticate('jwt', {session: false}), controller.getAll({"login": "bodik125"}))

router.get('/',  passport.authenticate('jwt', {session: false}), controller.getAll)
router.get('/:id',passport.authenticate('jwt', {session: false}),  controller.getById)
router.delete('/:id', passport.authenticate('jwt', {session: false}),  controller.remove)

module.exports = router