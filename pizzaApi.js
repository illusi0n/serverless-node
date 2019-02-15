'use strict'

const Api = require('claudia-api-builder');
const pizzaApi = new Api();

pizzaApi.get('/pizzas',
  () =>
    [
      'Capricciosa',
      'Quattro Formaggi',
      'Napoletana',
      'Margherita',
    ]
  );

module.exports = pizzaApi;