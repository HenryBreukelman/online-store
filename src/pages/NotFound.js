
import { Link } from "react-router-dom";
import { FaTriangleExclamation } from "react-icons/fa6";

function NotFound () {
  return (
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
  );
}

export default NotFound;