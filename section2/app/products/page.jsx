import Product from "../components/Product"
import ProductButton from "../components/ProductButton"


async function getProducts () {
  const response = await fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
  const x = await response.json()
  return x.products
}

export default async function Products () {
    const product = await getProducts()
    console.log(product)
  return (
    <div className="min-h-screen">
        {
            product.length>0 && product.map(( {id, title, price}) =>{
                return(
                    <>
                    <Product key={id} title={title} price={price} />
                    <ProductButton id={id} />
                    </>
                )
            })
        }

    </div>
  )
}

