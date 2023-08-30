'use strict'

class DashboardController {
    index({ view, auth }) {
        const user = auth.user.toJSON()
        return view.render('user.index', { user: user })
      }
}

module.exports = DashboardController
