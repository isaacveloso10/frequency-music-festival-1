import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found-page">
      <h1>404.</h1>
      <p>PAGE NOT FOUND.</p>
      <Link to="/" className="back-home-btn">
        BACK TO HOME
      </Link>
    </div>
  );
}
export default NotFound