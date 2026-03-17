import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Home({ books }) {
    return (
        <>

            <h2 className="mt-5 text-center fw-light" > Books Are Available In Book Store.</h2>
            <Container className="mt-5">
                <Row>
                    {books?.map((book) => (
                        <Col key={book.b_id} md={3} className="mb-4">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" alt="book image" src={book.imageUrl} />
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Text className="card-text">
                                        {book.description}
                                    </Card.Text>
                                    <Link to={`/view/${book.b_id}`} className='btn btn-dark'>
                                        View Book Details
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}
export default Home;