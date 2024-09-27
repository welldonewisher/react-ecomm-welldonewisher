function ProductCard({ product }) {
  return (
    <div>
      <h2>{product.title}</h2>
      <h3>{product.price}</h3>
    </div>
  );
}

export default ProductCard;

// passing of parameters in react is called as props (i.e 'title' and 'price' are properties)
