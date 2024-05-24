
function CartList (props) {
  const totalNumber = "43"
  const totalCost = "$234"

  return (
    <section className="cart container">
      <h1 className="center">Shopping Cart</h1>
      <div className="flex space-between">
        <div>
          <h2>Items in your cart:</h2>
          {props.items.length > 0 ? (
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th></th>
                    <th>Amount</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {props.items.map((item) => (
                    <tr key={item.id}>
                      <td><img src={item.image} alt={item.title} className="cart-img"/></td>
                      <td className="cart-title">{item.title}</td>
                      <td className="cart-amount">{item.amount}</td>
                      <td className="cart-price">{item.price}</td>
                      <td className="cart-total">{item.price * item.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty-cart">
              <p>Your cart is empty</p>
            </div>
          )}
        </div>
        <div className="summary center">
          <h2>Order Summary</h2>
          <p>Number of items: {totalNumber}</p>
          <p>Total: {totalCost}</p>
          <button>Checkout</button>
        </div>
      </div>
    </section>
  );
}

export default CartList;


