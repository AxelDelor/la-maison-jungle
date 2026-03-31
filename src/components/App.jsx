import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import mjlogo from '../assets/mjlogo.png'

const App = () => {
    return (
        <div>
            <Banner>
                <img src={mjlogo} alt='La maison jungle' className='lmj-logo' />
                <h1 className='lmj-title'>La maison jungle</h1>
            </Banner>
            {/* <Cart /> */}
            <ShoppingList />
        </div>
    )
}

export default App
