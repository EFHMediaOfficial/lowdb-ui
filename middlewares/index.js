module.exports = (req, res, next) => {
    if (req.session.auth !== true) {
        return res.redirect('/login')
    }
    next()
}