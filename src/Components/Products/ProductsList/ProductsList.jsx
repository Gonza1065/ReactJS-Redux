import { Products } from "../Products/Products";
import "./ProductsList.css";
export function ProductsList({ products }) {
  return (
    <>
      <section className="section-products">
        {products.map((product) => (
          <>
            <article className="product" key={product._id}>
              <Products product={product} />
            </article>
          </>
        ))}
      </section>
    </>
  );
}
