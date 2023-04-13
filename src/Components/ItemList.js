import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function ItemList({ item }) {
    return (
        <Row>
            {item.map(i => (
                <Col lg={3} key={i.id}>
                    <Link to={"/products/" +i.id}>
                        <Card >
                            <Card.Img variant="top" src={i.images[0]} />
                            <Card.Body>
                                <Card.Title>{i.title} </Card.Title>
                                <Button variant="primary">Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            ))}
        </Row>
    );
}

export default ItemList;