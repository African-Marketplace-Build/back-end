exports.seed = function(knex) {
  return knex('users').insert([
    {
      id: 1,
      name: 'user1',
      email: 'user1@gmail.com',
      password: 'heolol33',
      location: 'Florida',
    },

    {
      id: 2,
      name: 'user2',
      email: 'user2@gmail.com',
      password: 'dkljhf35',
      location: 'New York',
    },
    {
      id: 3,
      name: 'user3',
      email: 'user3@gmail.com',
      password: 'lskdghj34',
      location: 'Atlanta',
    },
    {
      id: 4,
      name: 'user4',
      email: 'user4@gmail.com',
      password: 'ghjk345',
      location: 'Miami',
    },
  ])
}
