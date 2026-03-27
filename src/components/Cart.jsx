import "../styles/Cart.css"

const Cart = () => {
  const prices = [
    { name: 'Monstera', price: 8 },
    { name: 'Lierre', price: 10 },
    { name: 'Bouquet de fleurs', price: 15 },
  ];

  const total = prices.reduce((acc, plant) => acc + plant.price, 0)

  return (
    <div className="cart">
      <span>Mon Panier :</span>
      <ul>
        {prices.map((plant) => (<li key={plant.name}> {plant.name} - {plant.price}€</li>))}
      </ul>
      <span>Total : {total}€</span>
    </div>
  );
};

export default Cart
