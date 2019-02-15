'use strict'

const Api = require('claudia-api-builder');
const pizzaApi = new Api();
const getPizzas = require('./handlers/get-pizzas');

pizzaApi.get('/', () => 'Welcome to Pizza API');

pizzaApi.get('/pizzas', () => getPizzas());

pizzaApi.get('/pizzas/{id}',
  request => getPizzas(request.pathParams.id),
  {
    error: 404
  }
);

module.exports = pizzaApi;