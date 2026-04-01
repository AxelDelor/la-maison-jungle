import sun from "../assets/sun.svg";
import water from "../assets/water.svg";


const quantityLabel = {
  1: "peu",
  2: "modérément",
  3: "beaucoup"
}

const CareScale = ({ value, type }) => {
	const range = [1, 2, 3]
	const icon = type === 'light' ? sun : water

	return (
		<div onClick={() => {
      alert(
        `Cette plante requiert ${quantityLabel[value]} ${type === "light" ? "de lumière" : "d'eau"}`
      )
    }}>
			{range.map((rangeElem) =>
				value >= rangeElem ? (
					<span key={rangeElem.toString()}>
            <img src={icon} alt={type} />
            </span>
				) : null
			)}
		</div>
	)
}

export default CareScale
