/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Todos',
      [
        {
          todo: 'Пойти на пробежку',
          done: false,
        },
        {
          todo: 'Записаться к стоматологу',
          done: false,
        },

        {
          todo: 'Спланировать следующую неделю',
          done: true,
        },
        {
          todo: 'Изучить новый рецепт',
          done: true,
        },
        {
          todo: 'Проверить почту',
          done: true,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
