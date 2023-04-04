import React, { useState } from 'react';
import './style.css';

function OrderItemModifier({ orderItem, handleCancel, handleSubmit }) {
  const [quantity, setQuantity] = useState(orderItem.quantity);

  const handleChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(quantity);
  }

  return (
    <div className='order-item-modifier'>
      <div className='modal'>
      <h2>Modify this item {orderItem.name}</h2>
      <p>Current Quantity: {orderItem.quantity}</p>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="quantity">Quantity:</label>
        <input type="number" name="quantity" value={quantity} onChange={handleChange} min="1" required />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
      </div>
    </div>
  );
}

export default OrderItemModifier;
