import React, { useState } from 'react';
import MenuItemChooser from './MenuItemChooser';
import Order from './Order';


 
function App() {
  const [order, setOrder] = useState([]);

  const handleAddToOrder = (event, item) => {
    event.preventDefault();
    const orderItem = order.find(o => o.id === item.id);
    if (orderItem) {
      setOrder(
        order.map(o =>
          o.id === orderItem.id ? { ...o, quantity: o.quantity + 1 } : o
        )
      );
    } else {
      setOrder([...order, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveFromOrder = (itemId) => {
    setOrder(order.filter(o => o.id !== itemId));
  };

  const handleModifyOrderItem = (itemId, newQuantity) => {
    setOrder(
      order.map(o => (o.id === itemId ? { ...o, quantity: newQuantity } : o))
    );
  };

  return (
    <div className="app">
      <h1>Sushi Delivery</h1>
      <MenuItemChooser handleAddToOrder={handleAddToOrder} />
      <Order
        order={order}
        handleRemoveFromOrder={handleRemoveFromOrder}
        handleModifyOrderItem={handleModifyOrderItem}
      />
    </div>
  );
}

export default App;
