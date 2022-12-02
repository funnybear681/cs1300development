function CartItem(props) {

    const{cart, item} = props

    return(
        <div className="cartItem">
           x {cart[item]} {item}
        </div>
    )

}

export default CartItem;