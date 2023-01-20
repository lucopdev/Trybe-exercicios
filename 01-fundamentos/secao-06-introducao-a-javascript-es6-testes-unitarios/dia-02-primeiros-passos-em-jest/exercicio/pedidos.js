const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, End: ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`;

};

// customerInfo(order);
const numberOfPizzas = (order) => {
  let pizzas = [];
  const size = Object.keys(order.order.pizza).length;
  for(let index = 0; index < size; index += 1){
    if(Object.values(order.order.pizza)[index].amount){
      pizzas.push(` ${Object.keys(order.order.pizza)[index]}`);
    }
  }
  return pizzas;
};

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.order.delideliveryPerson = 'Luiz Silva'
  
  return `Olá ${order.order.delideliveryPerson}, o total do seu pedido de ${numberOfPizzas(order)} e ${order.order.drinks.coke.type} é de R$${order.payment.total},00 reais.`;
};

console.log(orderModifier(order));
console.log('--------------------------');
console.log(customerInfo(order));