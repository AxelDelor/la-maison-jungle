// name: 'monstera',
// 		category: 'classique',
// 		id: '1ed',
// 		isBestSale: true,
// 		light: 2,
// 		water: 3,
//     cover: monstera

import CareScale from "./CareScale"
import "../styles/PlantItem.css"


const PlantItem = ({ cover, name, light, water }) => {

  const handleClick = (plantName) => {
    alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
  }

  return (
    <li className="lmj-plant-item" onClick={handleClick}>
      <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
      {name}
      <div>
        <CareScale type="water" value={water} />
        <CareScale type="light" value={light} />
      </div>
    </li>
  )
}



export default PlantItem
