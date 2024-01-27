import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch, useSelector } from "react-redux";
import { filterCategoryThunk } from "../store/slices/products.slice";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



//Importations..........................................................................

const ProductsDetail = () => {

  const {id} = useParams();
  const [product, setProducts] = useState( {} );
  const [rate, setRate] = useState(1);
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  

  useEffect(( ) => {
    axios
    .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
    .then(resp => {
      console.log(resp.data)
      setProducts(resp.data)
      dispatch(filterCategoryThunk(resp.data.category.id))
    })
    .catch(error => console.error(error))
  }, [])


  const decrement = () => {
    if( rate > 1 ) {
      setRate(rate -1 )
    }
  }


  //RETURN...................................................................................
  return (
      <Container fluid="md" >
        <br />

      <Row style={{alignContent:"center", textAlign:"center"}} >
          <Col >
          <h2>{product.title}</h2>
          <Carousel>
              <Carousel.Item>
              <Image src= {product?.images?.[0].url } style={ {height: "350px"} } />
              </Carousel.Item>
              <Carousel.Item>
              <Image src= {product?.images?.[1].url } style={ {height: "350px"} } />
              </Carousel.Item>
              <Carousel.Item>
              <Image src= {product?.images?.[2].url } style={ {height: "350px"} } />
              </Carousel.Item>
           </Carousel>
          
          </Col>

          <Col style={{marginTop:"50px"}} >
          <p style={{textAlign:"justify"}} >   Details: {product.description} </p>
          <div>
            <button onClick={()=> decrement() } >-</button>
            <span className="primary m-3"  >{rate}</span>
            <button onClick={()=> setRate(rate+1)} >+</button>
            <span className="primary m-3" ></span>
            <button>AGREGAR A FAVORITOS</button>
          </div>
          </Col>
      </Row>
      <br />
      <Row>
        <Col style={{textAlign:"center"}} >
        <h3>Productos Relacionados</h3>
        <br />
        </Col>
          <ListGroup horizontal style={{justifyContent:"center"}} >
             {
               allProducts.map( category => (
                 <ListGroup.Item key ={category.id}  >
                  <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={category.images[0].url}  />
                    <Card.Body>
                      <Card.Title>{category.title}</Card.Title>
                      <p>
                      ${category.price}
                      <br />
                      {category.brand}
                      </p>

                      <Button variant="primary">VER PRODUCTO</Button>
                    </Card.Body>
                  </Card>

                 </ListGroup.Item>
               ))
             }
          </ListGroup>
        
      </Row>
    </Container>
  );
}

export default ProductsDetail;
