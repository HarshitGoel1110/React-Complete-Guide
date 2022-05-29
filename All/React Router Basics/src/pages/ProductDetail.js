import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  const productId = params.productId;

  return (
    <section>
      <h1>Product Detail</h1>
      <p>Product Id : {productId}</p>
    </section>
  );
};

export default ProductDetail;
