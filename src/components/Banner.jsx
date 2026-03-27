import "../styles/Banner.css"
import mjlogo from "../assets/mjlogo.png"

const Banner = () => {
  const title = "La Maison Jungle"
  return (
    <div className="banner">
      <img src={mjlogo}
        alt="Logo de La Maison Jungle : dessin de feuille"
        className="banner-logo"
      />
      <h1 className="banner-title">{title}</h1>
    </div>
  )
}

export default Banner
