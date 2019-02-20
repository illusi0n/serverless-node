'use strict'

const Api = require('claudia-api-builder');
const pizzaApi = new Api();

const getPizzas = require('./handlers/get-pizzas');
const createOrder = require('./handlers/create-order');
const deleteOrder = require('./handlers/delete-order');

const PIZZA_ENDPOINT = '/pizzas';
const ORDER_ENDPOINT = '/orders';

pizzaApi.get('/pizzas', () => getPizzas());

pizzaApi.get(PIZZA_ENDPOINT, () => getPizzas());

pizzaApi.get(`${PIZZA_ENDPOINT}/{id}`,
  request => getPizzas(request.pathParams.id),
  {
    error: 404
  }
);

pizzaApi.post(ORDER_ENDPOINT,
  request => createOrder(request.body),
  {
    success: 201,
    error: 400
  }
);

pizzaApi.delete(`${ORDER_ENDPOINT}/{id}`,
  request => deleteOrder(request.pathParams.id),
  {
    error: 400
  }
);

module.exports = pizzaApi;