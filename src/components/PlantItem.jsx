// name: 'monstera',
// 		category: 'classique',
// 		id: '1ed',
// 		isBestSale: true,
// 		light: 2,
// 		water: 3,
//     cover: monstera

import CareScale from "./CareScale"
import "../styles/PlantItem.css"


const PlantItem = ({ id, cover, name, light, water }) => {

  return (
    <li key={id} className="lmj-plant-item">
      <img className="lmj-plant-item-cover" src={cover}  alt="nom" />
      {name}
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  )
}

export default PlantItem
