deleteOrder = (orderId) => {
  if (!orderId) {
    throw new Error('Path parameter orderId is missing.');
  }

  return {
    message: `Order with id=${orderId} was deleted successfully`
  }
};

module.exports = deleteOrder;