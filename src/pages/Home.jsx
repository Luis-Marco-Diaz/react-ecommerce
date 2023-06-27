import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";


function Home() {
  return (
    <div>
      <Row className="pt-5" >
        <Col lg={4} md={3} >
        Filtrados
        </Col>
        <Col lg={8} md={9} >
          Productos
          <Row>
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