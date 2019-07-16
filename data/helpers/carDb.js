const knex = require('knex');
const configOptions = require('../../knexfile').development;

const dbConnect = knex(configOptions);

module.exports = {
    get, 
    getById,
    add,
    update,
    deleteCar
};

function get() {
    return dbConnect('cars');
}

function getById(id) {
    return dbConnect('cars').where({ id });
}

function add(car) {
    return dbConnect('cars').insert(car);
}

function update(id, car) {
    return dbConnect('cars').where({ id }).update( car )
}

function deleteCar(id) {
    return dbConnect('cars').where({ id }).del();
}