module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Employee_Groups', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Employee_Groups')
  }
}
