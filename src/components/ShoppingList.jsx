import { useState } from 'react';
import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem.jsx'
import Categories from './Categories.jsx'

const ShoppingList = ({ cart, updateCart }) => {
  const [activeCategory, setActiveCategory] = useState()

  const categories = [...new Set(plantList.map((plant) => plant.category))]

  const addToCart = (name, price) => {
    const currentPlantSaved = cart.find((plant) => plant.name === name)
    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      )
      updateCart([...cartFilteredCurrentPlant, { name, price, amount: currentPlantSaved.amount + 1 }])
    } else {
      updateCart([...cart, { name, price, amount: 1 }])
    }
  }

  return (
    <div className='lmj-shopping-list'>
      <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} categories={categories} />
      <ul className='lmj-plant-list'>
        {plantList.map(({ id, cover, name, water, light, price, category }) =>
          !activeCategory || activeCategory === category ? (
            <div key={id}>
              <PlantItem
                cover={cover}
                name={name}
                water={water}
                light={light}
                price={price}
              />
              <button onClick={() => addToCart(name, price)}>
                Ajouter
              </button>
            </div>
          ) : null)}
      </ul>
    </div>
  )
}

export default ShoppingList
