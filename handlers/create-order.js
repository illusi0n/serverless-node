
const createOrder = order => {
  console.log(`order=${JSON.stringify(order)}`);

  if (!order || !order.pizzaId || !order.address) {
    throw new Error('Missing parameters for creating new order');
  }

  return {
  };
}

module.exports = createOrder;