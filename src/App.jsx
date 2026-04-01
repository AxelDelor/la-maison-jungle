import Banner from './components/Banner'
import Cart from './components/Cart'
import ShoppingList from './components/ShoppingList'
import mjlogo from './assets/mjlogo.png'
import Footer from './components/Footer'
import "./styles/Layout.css"

const App = () => {
  return (
    <div>
      <Banner>
        <img src={mjlogo} alt='La maison jungle' className='lmj-logo' />
        <h1 className='lmj-title'>La maison jungle</h1>
      </Banner>
      <div className='lmj-layout-inner'>
        <Cart />
        <ShoppingList />
      </div>
        <Footer />
    </div>
  )
}

export default App
