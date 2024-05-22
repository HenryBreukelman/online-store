
import { Link } from "react-router-dom";

function NotFound () {
  return (
    <section className="not-found center">
      <div className="center">
        <h2>404 Page not found</h2>
        <p>We cant find the page you are looking for!</p>
        <button><Link to='/' className="link-home">Home</Link></button>
      </div>
    </section>
  );
}

export default NotFound;