import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import Items from "../components/Items";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <HeroBanner />
        <Items />
        <Footer />
      </motion.div>
    </>
  );
}

export default Home;