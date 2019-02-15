const pizzas = require('../data/pizzas.json');

getPizzas = (pizzaId) => {
  if (!pizzaId) {
    return pizzas;
  }

  const pizza = pizzas.find(pizza => {
    return pizza.id == pizzaId;
  });

  if (pizza) {
    return pizza;
  }

  throw new Error(`The pizza you requested, id=${pizzaId} was not found`);
};

module.exports = getPizzas;