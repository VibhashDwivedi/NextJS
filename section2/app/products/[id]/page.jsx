import Product from "@/app/components/Product";

async function generateStaticParams() {
  const response = await fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price');
  const data = await response.json();
  return data.products.map((product) => ({
    id: product.id.toString()
  }));
}
async function getProducts (id) {
  const response = await fetch(`https://dummyjson.com/products/${id}`)
  const x = await response.json()
  return x
}


export default async function ProductPage ({params}){
  console.log(params.id)
  const product = await getProducts(params.id)
  console.log(product)
  return (
    <div className="min-h-screen">
     <Product key={product.id} title={product.title} price={product.price} />
    </div>
  )
}

