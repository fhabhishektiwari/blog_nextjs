import CheckPrice from "./checkPrice";

async function fetchData() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  // console.log(data.products);
  return data.products;
}
export default async function Itemlist() {
  const products = await fetchData();
  return (
    <div>
      <h2>Item List: Serverside Api call</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h6>Name: {product.title}</h6>
          {/* <p>Price: {product.price}</p> */}
          <CheckPrice price={product.price} />
        </div>
      ))}
    </div>
  );
}
