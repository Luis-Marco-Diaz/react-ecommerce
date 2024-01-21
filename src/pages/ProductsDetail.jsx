import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductsDetail = () => {

  const {id} = useParams()
  const [product, setProducts] = useState( {} )
  const [rate, setRate] = useState(1)

  useEffect(( ) => {
    axios
    .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
    .then(resp => {
      console.log(resp.data)
      setProducts(resp.data)
    })
  }, [])

  const decrement = () => {
    if( rate > 1 ) {
      setRate(rate -1 )
    }
  }

  return (
      <Container fluid="md" >
        <br />

      <Row>
        <Col>
        <h1>{product.title}</h1>
        <div className="news-rate" >
          <img src="" alt="" />
        </div>
        </Col>
        <Col>
        <p> Details: {product.description} </p>
        <div className="news-rate" >
          <button onClick={()=> decrement() } >-</button>
          <span className="primary m-3"  >{rate}</span>
          <button onClick={()=> setRate(rate+1)} >+</button>
          <span className="primary m-3" ></span>
          <button>AGREGAR A FAVORITOS</button>
        </div>
        </Col>
      </Row>
      
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}

export default ProductsDetail;
