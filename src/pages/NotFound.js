
import { Link } from "react-router-dom";
import { FaTriangleExclamation } from "react-icons/fa6";
import { motion } from "framer-motion";

function NotFound () {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <section className="not-found center">
        <div className="center">
          <FaTriangleExclamation className="exlamation"/>
          <h2>404 Page not found</h2>
          <p>We cant find the page you are looking for</p>
          <Link to='/' className="link-home">
            <button>Home</button>
          </Link>
        </div>
      </section>
    </motion.div>
  );
}

export default NotFound;