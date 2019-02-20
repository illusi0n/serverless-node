const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const createOrder = order => {

  if (!order || !order.pizza || !order.address) {
    throw new Error('Missing parameters for creating new order');
  }

  return docClient.put({
    TableName: 'pizza-orders',
    Item: {
      orderId: 'some-id',
      pizza: order.pizza,
      address: order.address,
      orderStatus: 'pending',
    }
  }).promise()
    .then( res => {
      console.log('Order is saved!', res);
      return res;
    })
    .catch(saveError => {
      console.log('Oops, order is not saved ', saveError);
      throw saveError;
    });
}

module.exports = createOrder;