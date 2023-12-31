import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useSelector, useDispatch } from "react-redux";
import { getProductsThunk, filterCategoryThunk } from '../store/slices/products.slice';
import {useEffect, useState} from "react";
import axios from "axios";
import ListGroup from 'react-bootstrap/ListGroup';

const Home = () => {
  
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products);
  const [categories, setCategories] = useState( [] );
  
  useEffect( () => {
     dispatch(getProductsThunk());
     
    axios.get("https://e-commerce-api-v2.academlo.tech/api/v1/categories")
    .then(resp => setCategories(resp.data))
    .catch(error => console.error(error))
    
  }, [])
  
  return (
    <div>
      <Row className="pt-5" >
        <Col lg={4} md={3} >
           <ListGroup className="w-100 categories">
             {
               categories.map( category => (
                 <ListGroup.Item 
                 key = {category.id}
                 onClick = { () => dispatch( filterCategoryThunk(category.id) ) }
                 > {category.name}
                 </ListGroup.Item>
               ))
             }
             
           </ListGroup>
        </Col>
        <Col lg={8} md={9} >
          <h1> Productos </h1>
          <Row xs={1} md={2} lg={3}  >
            {
              productsList.map( products => ( 
                 <Col className="mb-3" key={products.id} >
                  <Card style={{ width: '16rem' }}>
                    <Card.Img variant="top" src={products?.images[0].url }
                    style={ {height:250, objectFit: "cover"} } />
                      <Card.Body>
                        <Card.Title> {products.title} </Card.Title>
                        <Card.Text> {products.brand} </Card.Text>
                        <Card.Text>
                         {products.price}
                        </Card.Text>
                        <Button variant="primary">Ver Producto</Button>
                      </Card.Body>
                  </Card>
                </Col>
              ))
            }

          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Home;