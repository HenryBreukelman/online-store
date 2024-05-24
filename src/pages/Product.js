import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductDisplay from "../components/ProductDisplay";
import { motion } from "framer-motion";

function Product () {
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <ProductDisplay />
        <Footer />
      </motion.div>
    </>
  );
}

export default Product;