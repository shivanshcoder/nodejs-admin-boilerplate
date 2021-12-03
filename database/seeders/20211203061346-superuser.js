"use strict";
const faker = require("faker");

const bcrypt = require("bcrypt");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    let password = faker.internet.password();
    let email = "superuser";

    console.warn(`Please Remeber the superuser credentials`);
    console.warn(`Email: ${email}`);
    console.warn(`Password: ${password}`);
    password = await bcrypt.hash(password, 10);

    return queryInterface.bulkInsert("admin_users", [
      {
        password: password,
        email: email,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete("admin_users", null, {});
  },
};
