const db = require("../Models");

module.exports = {
  resource: db["AdminUser"],
  options: {
    properties: {
      password: {
        isVisible: {
                list: false, edit: true, filter: false, show: false
        }
      },
    }
  }
};
