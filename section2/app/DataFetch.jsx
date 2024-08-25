'use client';

import { useEffect, useState } from "react";

const DataFetch = () => {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await fetch('https://dummyjson.com/products');
        const x = await response.json();
        setData(x.products);
    }

    useEffect (() =>{
        fetchData();
    },[]);

    console.log(data);

    
  return (
    <>
    <div>DataFetch</div>
    <div>
      {
        data.map((item) =>{
            return(
                <>
                <h6>{item.title}</h6>
                <button onClick={() => {console.log('Clicked')}} type="button">Click me</button>
                </>
            )
        })
      }
    </div>
    </>
  )
}

export default DataFetch