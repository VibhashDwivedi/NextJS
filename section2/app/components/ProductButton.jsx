"use client"

import { useRouter } from "next/navigation";

const ProductButton = (props) => {

    const router = useRouter();

    const handleClick = () => {
        router.push(`/products/${props.id}`);
    }

  return (
    <div>
        <button className="p-4" onClick={handleClick}>Click to go to id</button>
    </div>
  )
}

export default ProductButton