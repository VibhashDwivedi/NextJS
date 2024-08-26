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
        <>
        <table className="table-auto  p-5">
          <thead className="bg-gray-600 text-white">
          <tr>
            <th className="p-3 "> Product</th>
            <th className=" p-3 ">Price</th>
          </tr>
          </thead>
        
        
          {
            product.map((item, id) =>{
                return(
                  <tbody>
                    <tr key={id} className={id % 2 === 0 ? 'bg-white ' : 'bg-gray-600 text-white'}>
                    <td className=" p-3">{item.title}</td>
                 <td className="p-3"> 
                  <button className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><ProductClick price={item.price} /></button></td>
                  </tr>
                  </tbody> 
                )
            })
          }
        
      
        </table>
        </>
      )


}
