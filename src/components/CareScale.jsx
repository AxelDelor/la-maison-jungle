import sun from "../assets/sun.svg";
import water from "../assets/water.svg";


const quantityLabel = {
  1: "peu",
  2: "modérément",
  3: "beaucoup"
}

const CareScale = ({ scaleValue, careType }) => {
	const range = [1, 2, 3]
	const scaleType = careType === 'light' ? sun : water

	return (
		<div onClick={() => {
      alert(
        `Cette plante requiert ${quantityLabel[scaleValue]} ${careType === "light" ? "de lumière" : "d'eau"}`
      )
    }}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>
            <img src={scaleType} alt={careType} />
            </span>
				) : null
			)}
		</div>
	)
}

export default CareScale
