
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { make: 'Audi', model: 'A5', mileage: 1000, vin: 'ADI34555'},
        { make: 'Ford', model: 'Focus', mileage: 40000, vin: 'FRD3477888'},
        { make: 'Chevrolet', model: 'Camaro', mileage: 50, vin: 'CHV103344'},
        { make: 'Dodge', model: 'Charger', mileage: 350, vin: 'DDG76232323'},
        { make: 'Honda', model: 'Accord', mileage: 1200000, vin: 'HND23044'},
        { make: 'Audi', model: 'A5', mileage: 1000, vin: 'ADI34555'}
      ]);
    });
};
