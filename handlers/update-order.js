updateOrder = (orderId, updateInfo) => {
  if (!orderId || !updateInfo || (!updateInfo.pizzaId && !updateInfo.address)) {
    throw new Error('One of the parameters for updating order is missing.');
  }

  return {
    message: `Order with id=${orderId} was updated successfully`
  }
};

module.exports = updateOrder;