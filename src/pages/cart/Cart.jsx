import React from 'react';
import Loading from '../../Components/Loading/Loading';
import './cart.css'
import useCartActions from '../../context/useCartActions';

const Cart = () => {

  const {loading, cartItems, handleRemoveFromCart, handleUpdateQuantity, placeOrder} = useCartActions();
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  if(loading){
    return <Loading/>
  }

  return(

    <div className='cart-container'>
    <h1 className='cart-title'>Your Cart</h1>
    {cartItems.length > 0 ? (
      <>
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={`http://localhost:5000/${item.image}`} alt={item.name} />
            <h2>{item.name}</h2>
            <p>Rs.{item.price}</p>
  
            <div className="quantity-control">
              <button onClick={() => handleUpdateQuantity(item.id, 'decrease')}>-</button>
              <span> {item.quantity} </span>
              <button onClick={() => handleUpdateQuantity(item.id, 'increase')}>+</button>
            </div>
  
            <button className='btn1' onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          </div>
        ))}
        <h3 className='heading3'>Total: Rs. {totalAmount}</h3>
        <button onClick={placeOrder} className="place-order-button">Place Order</button>

      </>
    ) : (
      <p className='para'>Your cart is empty.😐</p>
    )}
  </div>
  
  )

}

export default Cart