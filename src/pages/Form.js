import Footer from "../components/Footer"
import Header from "../components/Header"
import SignIn from "../components/SignIn"
import { motion } from "framer-motion"

function Form() {
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <SignIn />
        <Footer />
      </motion.div>
    </>
  )
}

export default Form
