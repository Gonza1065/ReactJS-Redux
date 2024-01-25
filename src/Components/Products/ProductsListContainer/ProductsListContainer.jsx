import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../features/products/productsSlice";
import { ProductsList } from "../ProductsList/ProductsList";

export function ProductsListContainer() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);
  const products = useSelector((state) => state.products.products);
  useEffect(() => {
    fetch("http://localhost:5000/api/products", {
      headers: { "Content-Type": "application/json", "x-access-token": token },
    })
      .then((res) => res.json())
      .then((data) => dispatch(getProducts(data)))
      .catch((err) => console.log(err));
  }, [token, dispatch]);
  return (
    <>
      <ProductsList products={products} />
    </>
  );
}
