'use strict'

class LoginController {
    index({ view }) {
        return view.render('auth.login')
      }
    
      async check({ request, auth, response }) {
        try {
          const { email, password } = request.all();
          await auth.attempt(email, password);
      
          // Ambil pengguna yang sudah login
          const user = await auth.getUser();
      
          if (user && user.role_id === 1) {
            return response.route('admin');
          } else {
            return response.route('user');
          }
        } catch (error) {
          console.error(error);
          return response.redirect('back');
        }
      }
    
      async logout({ auth, response }) {
        await auth.logout()
        return response.route('login.index')
      }
}

module.exports = LoginController
