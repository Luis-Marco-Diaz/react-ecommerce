import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductsDetail = () => {

  const {id} = useParams()
  const [product, setProducts] = useState( {} )

  useEffect(( ) => {
    axios
    .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
    .then(resp => {
      console.log(resp.data)
      setProducts(resp.data)
    })
  }, [])

  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  )
}

export default ProductsDetail;
