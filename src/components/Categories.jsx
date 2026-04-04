import "../styles/Categories.css"


const Categories = ({ activeCategory, setActiveCategory, categories }) => {

  const capitalize = (str) => str[0].toUpperCase() + str.slice(1)

  return (
    <div className="lmj-categories">
      <select
        value={activeCategory}
        onChange={(e) => setActiveCategory(e.target.value)}
        className="lmj-categories-select">
        <option>---</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{capitalize(cat)}</option>
        ))}

      </select>

    </div>
  )
}

export default Categories
