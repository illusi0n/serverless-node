'use strict'

const Api = require('claudia-api-builder');
const pizzaApi = new Api();

const pizzas = {
  get: require('./handlers/get-pizzas')
}

const orders = {
  create: require('./handlers/create-order'),
  delete: require('./handlers/delete-order'),
  update: require('./handlers/update-order'),
}

const PIZZA_ENDPOINT = '/pizzas';
const ORDER_ENDPOINT = '/orders';

pizzaApi.get('/pizzas', () => getPizzas());

pizzaApi.get(PIZZA_ENDPOINT, () => pizzas.get());

pizzaApi.get(`${PIZZA_ENDPOINT}/{id}`,
  request => pizzas.get(request.pathParams.id),
  {
    error: 404
  }
);

pizzaApi.post(ORDER_ENDPOINT,
  request => orders.create(request.body),
  {
    success: 201,
    error: 400
  }
);

pizzaApi.delete(`${ORDER_ENDPOINT}/{id}`,
  request => orders.delete(request.pathParams.id),
  {
    error: 400
  }
);

pizzaApi.put(`${ORDER_ENDPOINT}/{id}`,
  request => orders.update(request.pathParams.id, request.body),
  {
    success: 200,
    error: 400
  }
)

module.exports = pizzaApi;