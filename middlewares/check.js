module.exports = {
    checkLogin (req, res, next) {
        if (!req.session.user) {
            req.flash('error', 'Not Sign In')
            return res.redirect('/signin')
        }
        next()
    },
    checkNotLogin (req, res, next) {
        if (req.session.user) {
            req.flash('error', 'has Sign In')
            return res.redirect('back') // previous page
        }
        next()
    }
}