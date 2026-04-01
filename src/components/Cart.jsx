import "../styles/Cart.css"
import { useState } from "react"


const Cart = () => {
  // const prices = [
  //   { name: 'Monstera', price: 8 },
  //   { name: 'Lierre', price: 10 },
  //   { name: 'Bouquet de fleurs', price: 15 },
  // ];

  // const total = prices.reduce((acc, plant) => acc + plant.price, 0)

  // return (
  //   <div className="cart">
  //     <span>Mon Panier :</span>
  //     <ul>
  //       {prices.map((plant) => (<li key={plant.name}> {plant.name} - {plant.price}€</li>))}
  //     </ul>
  //     <span>Total : {total}€</span>
  //   </div>
  // );

  const monsteraPrice = 8
  const [cart, updateCart] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <div className="lmj-cart">
      <button className="lmj-cart-toggle-button" onClick={() => setIsOpen(false)}>Fermer le panier</button>
      <h2>Panier</h2>
      <div>
        Monstera : {monsteraPrice}€
        <button onClick={() => updateCart(cart + 1)}>
          Ajouter
        </button>
      </div>
      <h3>Total : {monsteraPrice * cart}€</h3>
      <button onClick={() => updateCart(0)}>Vider le panier</button>
    </div>
  ) : (
    <div className="lmj-cart closed">
      <button className="lmj-cart-toggle-button" onClick={() => setIsOpen(true)}>Ouvrir le panier</button>
    </div>
  )
};

export default Cart
