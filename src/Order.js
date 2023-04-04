import React, { useState } from 'react';
import OrderItemModifier from './OrderItemModifier';
import './style.css';

function Order(props) {
  const { order, handleRemoveFromOrder, handleModifyOrderItem } = props;

  const [orderItemBeingModified, setOrderItemBeingModified] = useState(null);

  const orderItems = order.map(item => (
    <li key={item.id}>
      {/* {item.name} x{item.quantity} - ${item.price.toFixed(2)}  */}
      {item.name}<br/>
      Item Price : {item.price.toFixed(2)}<br/>
      Quantity : {item.quantity}
      <br/>
      <button onClick={() => handleRemoveFromOrder(item.id)}>Remove Item</button>
      <button onClick={() => setOrderItemBeingModified(item)}>Modify Item</button>
    </li>
  ));

  const totalPrice = order.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleModifyItem = (itemId, newQuantity) => {
    handleModifyOrderItem(itemId, newQuantity);
    setOrderItemBeingModified(null);
  };

  return (
    <div className="order">
      <h2>Your Order:</h2>
      <ul>
        {orderItems}
      </ul>
      <p>Your Total: ${totalPrice.toFixed(2)}</p>
      {orderItemBeingModified &&
        <OrderItemModifier
          orderItem={orderItemBeingModified}
          handleCancel={() => setOrderItemBeingModified(null)}
          handleSubmit={newQuantity => handleModifyItem(orderItemBeingModified.id, newQuantity)}
        />
      }
    </div>
  );
}

export default Order;
