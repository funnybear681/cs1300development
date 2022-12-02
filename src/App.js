import './App.css';
import {useState, useEffect} from 'react'
import jerseyData from './components/data.json'
import Cart from './components/Cart'
import Jerseys from './components/Jerseys'


function App() {
  const [cart, setCart] = useState({});
  const [data, setData] = useState(jerseyData)

  const addCart = (item) => {
    const name = item.name;
    if (cart.hasOwnProperty(name)){
      setCart({...cart, [name]: cart[name] + 1});
    } else {
      setCart({...cart, [name]: 1});
    }
  };

  /*TODO: 
  Just figure out filtering/sorting logic and how they should interplay and then good to submit
  */
  const removeCart = (item) => {
    const name = item.name;
    if(cart[name] > 0){
      setCart({...cart, [name]: cart[name] - 1});
    }
    if(cart[name] == 1){
      delete cart[name];
    }
  };

  

  return (
    <div className="App">
      <div className = "teamFilter">

      </div>
      <div className = "store">
        <Jerseys jerseyData={data} addCart = {addCart} removeCart = {removeCart}/>
        <Cart cart={cart} jerseyData={jerseyData}/>
      </div>
    
    </div>
  );
}

export default App;
