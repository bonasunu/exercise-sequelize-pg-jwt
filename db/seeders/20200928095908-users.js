'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'harrypotter',
          password:
            '$2y$10$SlaxDjpvwTm3CRc.s99wm.fcQ81T5z0FhxkYy8zz7RBKQFF845tbO',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {})
  },
}
