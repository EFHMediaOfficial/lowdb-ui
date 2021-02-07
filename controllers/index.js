const { _data, _info } = require("../index")
exports.index = (req, res) => {
    res.render("index.ejs", {_data})
}
exports.login = (req, res) => {
    res.render("login.ejs")
}
exports.loginPost = (req, res) => {
    let _un = req.body.username
    let _pw = req.body.password
    if((_un === _info._username ) && (_pw === _info._password )){
        req.session.auth = true
        res.redirect("/")
    } else {
        res.redirect("/login")
    }

    
}