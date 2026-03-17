import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditBook({ books, updateBook }) {

    const { id } = useParams();
    const navigate = useNavigate();

    const bookToEdit = books.find(
        (book) => book.b_id == Number(id)
    );

    const [formData, setFormData] = useState({
        ...bookToEdit
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedBook = {
            ...formData,
            price: Number(formData.price)
        };

        updateBook(updatedBook);

        alert("Book Updated Successfully");

        navigate("/viewBook");
    };

    return (
        <>
            <h1 className='my-5 text-center fw-light mb-5'>Edit Book</h1>

            <Container className='my-5'>
                <Row>
                    <Col>

                        <Form onSubmit={handleSubmit}>

                            <Row>
                                {
                                    Object.keys(formData).map(
                                        key => (
                                            <Col key={key} md={6} className="mb-3">

                                                <Form.Label className='text-capitalize'>
                                                    {key}
                                                </Form.Label>

                                                <Form.Control
                                                    type="text"
                                                    name={key}
                                                    value={formData[key]}
                                                    placeholder={key}
                                                    onChange={handleChange}
                                                />

                                            </Col>
                                        )
                                    )
                                }
                            </Row>

                            <div className="text-center mt-4">
                                <Button variant="success" type="submit">
                                    Update Book
                                </Button>
                            </div>

                        </Form>

                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default EditBook;