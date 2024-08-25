import ProductClick from './product.js'

async function getProducts()
{
    const response = await fetch('https://dummyjson.com/products');
    const x = await response.json();
    return x.products;
}



export default async function Product() {

    let product = await getProducts();

    return (
        <div>
        <h1>Product Page</h1>
        <div>
            {
                product.map((item) =>{
                    return (
                        <>
                        <h6>Name: {item.title}</h6>
                     <ProductClick price={item.price}  id={item.id}/>
                        </>
                    )
                })
            }
        </div>
        </div>
    );


}
