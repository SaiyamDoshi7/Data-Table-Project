import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddBook({ addBook, books = [] }) {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        b_id: "",
        title: "",
        type: "",
        author: "",
        price: "",
        publisher: "",
        imageUrl: "",
        description: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        for (let key in formData) {
            if (formData[key].toString().trim() === "") {
                alert(`${key} field is required`);
                return;
            }
        }

        const alreadyExists = books.some(
            (book) => book.b_id === Number(formData.b_id)
        );

        if (alreadyExists) {
            alert("Book ID already exists. Please use different ID.");
            return;
        }

        const newBook = {
            ...formData,
            b_id: Number(formData.b_id),
            price: Number(formData.price)
        };

        addBook(newBook);

        alert("Book added successfully");

        navigate("/");
    };

    return (
        <>
            <h1 className='my-5 text-center fw-light'>
                Add Book In Book Store
            </h1>

            <Container>
                <Row className="justify-content-center">
                    <Col md={8}>

                        <Form onSubmit={handleSubmit}>

                            <Row>

                                {Object.keys(formData).map((key) => (

                                    <Col md={6} className="mb-3" key={key}>

                                        <Form.Label className="text-capitalize">
                                            {key}
                                        </Form.Label>

                                        {key === "description" ? (

                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                                name={key}
                                                value={formData[key]}
                                                onChange={handleChange}
                                                style={{ resize: "none" }}
                                            />

                                        ) : (

                                            <Form.Control
                                                type={
                                                    key === "b_id" || key === "price"
                                                        ? "number"
                                                        : "text"
                                                }
                                                name={key}
                                                value={formData[key]}
                                                placeholder={`Enter ${key}`}
                                                onChange={handleChange}
                                            />

                                        )}

                                    </Col>

                                ))}

                            </Row>

                            <div className="text-center mt-4">

                                <Button variant="primary" type="submit">
                                    Add Book
                                </Button>

                            </div>

                        </Form>

                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default AddBook;