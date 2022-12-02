import CartItem from './CartItem'

function Cart(props) {

    const {cart, jerseyData} = props

    return(
        <div className="cart">
          <h2>Cart</h2>
          {
            (Object.keys(cart).length > 0) ? 
            (Object.keys(cart).map((key, index) => {             
              return (<CartItem cart={cart} item={key}/>)
            })
            ) : <div>Cart is empty</div>
          }
          {
            (Object.keys(cart).length > 0) && <div><br></br>Total: ${Object.keys(cart).reduce((value, key) => {
              return value + cart[key] * jerseyData.find(item => item.name === key).price;
            }, 0)}</div>
          }

        </div>
    )}

export default Cart;