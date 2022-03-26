import { useEffect, useState } from "react";
import Phone from './components/Phone/phone';
import Cart from './components/Cart/cart';
import './App.css';

function App() {
  const [phones, setPhones] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(phones);

  const handleAddToCart = (phone) => {
    const newCart = [...cart, phone];
    setCart(newCart);
  };


  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setPhones(data));
  }, []);

  return (
  <div>

    <h1 className="heading"> Phone Hub</h1>
<div className="box">
      
      <div className='card-container'>
      {phones.map((phone) => (
        <Phone phone={phone} key={phone.id} handleAddToCart={handleAddToCart} />
      ))}
    </div>

    <div className="cart-container">
      <h1 className="cart-heading"> Cart </h1>
      {cart.map((item) => (
        <h3 key ={item.id}>{item.name}</h3>
      ))}
    </div>
  </div>
  </div>
    
      
   
  );
}

export default App;
