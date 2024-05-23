
import Header from "../components/Header";
import Footer from "../components/Footer";
import CartList from "../components/CartList";

function Cart() {
  const items = []; // list of cart items

  return (
    <>
      <Header />
      <CartList items={items} />
      <Footer />
    </>
  );
}

export default Cart;
