import React, { useState } from 'react';

function Example1({ product }) {
  const [cart, setCart] = useState({});

  const addCart = (id) => {
    setCart({
      ...cart,
      [id]: (cart[id] || 0) + 1,
    });
  };

  return (
    <div>
      <table border={3}>
        <thead>
          <tr>
            <th>ID</th>
            <th>P Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Count</th>
            <th>Image</th>
            <th>Add to Cart</th>
          </tr>
        </thead>

        <tbody>
          {product.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>₹{item.price}</td>
              <td>{item.count}</td>

              <td>
                <img
                  src={item.image}
                  alt={item.name}
                  width="100"
                  height="100"
                />
              </td>

              <td>
                Cart: {cart[item.id] || 0}
                <button onClick={() => addCart(item.id)}>
                  Add to Cart
                </button>
                 <button onClick={()=> removeCard.id}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Example1;