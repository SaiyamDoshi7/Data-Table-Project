import React from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BookDetail({ books }) {

    const { id } = useParams();
    const book = books.find(b => b.b_id == Number(id));

    console.log(id);
    console.log(books);

    if (!book) {
        return <h2 className='text-center mt-5'>Book Is Not Found</h2>;
    }

    return (
        <Container className='mt-5'>
            
            <h2 className="mt-5 text-center fw-light mb-5" >Details Of Book</h2>

            <Row>
                <Col md={5} className="text-center mb-4">
                    <img
                        src={book.imageUrl}
                        alt="Book"
                        className="img-fluid shadow"
                        style={{ maxHeight: "400px" }}
                    />
                </Col>

                <Col md={6}>
                    <h2 className="mb-3">{book.title}</h2>
                    <p><b>Type:</b> {book.type}</p>
                    <p><b>Author:</b> {book.author}</p>
                    <p><b>Description:</b> {book.description}</p>
                    <p><b>Publisher :</b>{book.publisher} </p>
                    <p><b>Price :</b>{book.price} </p>
                </Col>
            </Row>
        </Container>
    )
}

export default BookDetail;
