'use strict'

class DashboardController {
    index({ view, auth }) {
        const user = auth.user.toJSON()
        return view.render('admin.index', { user: user })
      }
}

module.exports = DashboardController
