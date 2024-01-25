import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Product.css";

export function Product() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const token = useSelector((state) => state.token.token);
  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`, {
      headers: { "Content-Type": "application/json", "x-access-token": token },
    })
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, [id, token]);

  return (
    <>
      <article className="product-details">
        <div className="product-details-img">
          <img src={product.image} alt="" />
        </div>
        <div className="product-details-name">
          <h2>{product.name}</h2>
        </div>
      </article>
    </>
  );
}
