import { useSelector } from "react-redux";
import "./NavBar.css";
import { Link } from "react-router-dom";
export function NavBar() {
  const token = useSelector((state) => state.token.token);
  return (
    <header>
      <ul className="navegation">
        {token ? (
          <>
            <Link>Add Product</Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
          </>
        )}
      </ul>
    </header>
  );
}
