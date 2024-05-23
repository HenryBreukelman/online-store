
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
            <ul>
              {props.items.map((item, index) => (
                <div key={index}>
                  {item}
                </div>
              ))}
            </ul>
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


