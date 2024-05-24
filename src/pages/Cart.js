
import Header from "../components/Header";
import Footer from "../components/Footer";
import CartList from "../components/CartList";
import { motion } from 'framer-motion';

function Cart() {
  const items = [
    {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "amount": "3"
    },
    {
      "id": 3,
      "title": "Mens Cotton Jacket",
      "price": 55.99,
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "amount": "1"
    },
    {
      "id": 15,
      "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      "price": 56.99,
      "category": "women's clothing",
      "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      "amount": "1"
    },
    {
      "id": 4,
      "title": "Mens Casual Slim Fit",
      "price": 15.99,
      "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      "amount": "2"
    },
    {
      "id": 20,
      "title": "DANVOUY Womens T Shirt Casual Cotton Short",
      "price": 12.99,
      "category": "women's clothing",
      "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      "amount": "1"
    }
];; // list of cart items

  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <CartList items={items} />
        <Footer />
      </motion.div>
    </>
  );
}

export default Cart;
