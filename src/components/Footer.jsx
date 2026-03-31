import { useState } from 'react'
import '../styles/Footer.css'

const Footer = () => {
  const [inputValue, setInputValue] = useState('')

  const handleInput = (e) => {
    setInputValue(e.target.value)
  }

  const handleBlur = () => {
    // if (!inputValue.includes("@")) {
    //   alert("Attention, ceci n'est pas une adresse valide")
    // }
  }

  return (
    <footer className='lmj-footer'>
      <div className='lmj-footer-elem'>
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div className='lmj-footer-elem'>Laissez-nous votre mail :
        <input
          placeholder="barbatruc@email.com"
          value={inputValue}
          onChange={handleInput}
          onBlur={handleBlur}
        />
      </div>
    </footer>
  )
}

export default Footer
