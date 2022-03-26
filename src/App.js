import { useEffect, useState } from "react";
import Phone from './components/Phone/phone';
import './App.css';

function App() {
  const [phones, setPhones] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(phones);

  const handleAddToCart = (phone) => {
    const newCart = [...cart, phone];
    setCart(newCart);
  };

  const random  = () => { 
    const random = Math.floor(Math.random() * cart.length);
    console.log(random, cart[random]);
   

  }

  const clear  = () => {
    const newCart = [];
    setCart(newCart);
  }
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
      <div className='btn'>
                <button id='btn-choose' onClick={random}>Choose One </button>
               
                <button id='btn-clear' onClick={clear}>Clear Cart </button>
            </div>
    </div>
  </div>

  <div className="questions">
    <h3>How React Works?</h3>
    <p>React is a Javascript Library. It is developped by Facebook. React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browsers DOM.
    </p>

    <h3>Props vs State?</h3>
    <p>In Props data is passed from one component to other. But in State data passes within the same component. 
      Props is immutable whereas state is mutable.
      Props are read only but the states are both read and write. 
    </p>
    <h3>How useState works?</h3>
    <p>useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.</p>
  </div>
  </div>
    
            
      
  );
}

export default App;
