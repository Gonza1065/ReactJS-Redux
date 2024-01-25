import { Link } from "react-router-dom";
import "./Products.css";
export function Products({ product }) {
  return (
    <>
      <div className="product-name">
        <h2>{product.name}</h2>
      </div>
      <div className="product-img">
        <img src={product.image} alt="" />
      </div>
      <div>
        <h2>${product.price}</h2>
      </div>
      <div>
        <Link to={`/${product._id}`}>See details</Link>
      </div>
    </>
  );
}
