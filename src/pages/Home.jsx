import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useSelector, useDispatch } from "react-redux";
import { getProductsThunk } from '../store/slices/products.slice';
import {useEffect} from "react";

const Home = () => {
  
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products);
  
  useEffect( () => {
    dispatch(getProductsThunk());
  }, [])
  
  return (
    <div>
      <Row className="pt-5" >
        <Col lg={4} md={3} >
        Filtrados
        </Col>
        <Col lg={8} md={9} >
          <h1> Productos </h1>
          <Row xs={1} md={3} lg={4}  >
            
            {
              productsList.map( products => ( 
                 <Col key={products.id} >
                  <Card style={{ width: '16rem' }}>
                    <Card.Img variant="top" src="https://random.imagecdn.app/500/150" />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                  </Card>
                </Col>
              ))
            }
            
              <Col>
                  <Card style={{ width: '16rem' }}>
                    <Card.Img variant="top" src="https://random.imagecdn.app/500/150" />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                  </Card>
                </Col>
                <Col>
                <Card style={{ width: '16rem' }}>
                  <Card.Img variant="top" src="https://random.imagecdn.app/500/150" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: '16rem' }}>
                  <Card.Img variant="top" src="https://random.imagecdn.app/500/150" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
              </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Home;