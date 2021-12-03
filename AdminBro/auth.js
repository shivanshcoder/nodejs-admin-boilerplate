const db = require("./Models");
const bcrypt = require('bcrypt');


module.exports = {
    authenticate: async (email, password) => {
    
        const AdminUser = db['AdminUser']
        // AdminUser.
        const user = await AdminUser.findOne({ where: {
            "email": email
        } })
        if (user) {
          const matched = await bcrypt.compare(password, user.password)
          if (matched) {
            return user
          }
        }
        return false
      },
      cookiePassword: 'some-secret-password-used-to-secure-cookie',
    
}