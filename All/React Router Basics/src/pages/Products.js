import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>Products page</h1>
      <ul>
        <li>
          <Link to="/products/p1">1 Book</Link>
        </li>
        <li>
          <Link to="/products/p2">2 Books</Link>
        </li>
        <li>
          <Link to="/products/p3">3 Books</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
