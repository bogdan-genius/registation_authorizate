const { Router } = require("express");
const Users = require("../models/regist");
const crypto = require("crypto");
const hash = crypto.createHash("sha256");
const EventEmitter = require("events");

const router = Router();
router.post("/reg", (req, res) => {
try{
    class Registration extends EventEmitter{
    async reg(data) {
        try {
          const password = req.body.password;
          hash.update(password, "utf8");
          const hashPassword = hash.digest("base64");
          const users = new Users({
            login: req.body.login,
            password: hashPassword.toString("hex"),
          });
          user = users;
          console.log(users.login);
          users.save();
          res.redirect("/");
        } catch (error) {
          console.log(error);
        }
        return data;
  
    }}
   
} catch (error) {
    console.log(error)
}
});

module.exports = router;
