exports.seed = function(knex) {
  return knex('items').insert([
    {
      id: 1,
      name: 'Beans',
      location: 'Africa',
      description: "this is the first item's description",
      price: 34.4,
    },

    {
      id: 2,
      name: 'Rice',
      location: 'Africa',
      description: "this is the third item's description",
      price: 67.0,
    },
    {
      id: 3,
      name: 'Tea Leaf',
      location: 'Africa',
      description: "this is the fourth item's description",
      price: 23.56,
    },
    {
      id: 4,
      name: 'Corn',
      location: 'Africa',
      description: "this is the first item's description",
      price: 90.23,
    },
  ])
}
