function auth(req, res, next) {
    if(req.isAuthenticated()) {
        console.log('auth pass hua')
        return next()
    }
    console.log('*******Authentication Failed********');
    return res.redirect('/login')
}

module.exports = auth