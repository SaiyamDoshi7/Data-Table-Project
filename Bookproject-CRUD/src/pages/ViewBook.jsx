import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ViewBook({ books, deleteBook }) {

    // for search 
    const [search, setSearch] = useState("");

    // for filter
    const [typeFilter, setFilter] = useState("");

    //for sorting
    const [sort , setSort] = useState("");

    let finalBooks = books

    // for search
        .filter((book) =>
            book.title.toLowerCase().includes(search.toLowerCase())
        )

        // for filter
        .filter((book) => {
            if (typeFilter === "") return true;
            return book.type === typeFilter;
        });

    // for sorting
    if (sort === "low") {
        finalBooks.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
        finalBooks.sort((a, b) => b.price - a.price);
    }

    return (
        <Container className="mt-5">

            <h1 className='mt-5 text-center fw-light mb-4'>Books Are Available</h1>

            <Row className='mb-4'>
                <Col xs={4}>
                    <input type="text"
                        name='search'
                        placeholder='Search Book'
                        className='form-control'
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Col>

                <Col xs={4}>
                    <select
                        className="form-control"
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="">All Types</option>
                        <option value="History">History</option>
                        <option value="Novel">Novel</option>
                        <option value="Biography">Biography</option>
                        <option value="Fiction">Fiction</option>
                        <option value="Nonfiction">Nonfiction</option>
                        <option value="Classic">Classic</option>
                        <option value="Nature">Nature</option>
                    </select>
                </Col>

                <Col xs={4}>
                    <select
                        className="form-control"
                        onChange={(e) => setSort(e.target.value)}
                    >
                        <option value="">Sort By Price</option>
                        <option value="low">Low to High</option>
                        <option value="high">High to Low</option>
                    </select>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <Table striped bordered hover>

                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Book Title</th>
                                <th>Type</th>
                                <th>Author</th>
                                <th>Publisher</th>
                                <th>Price</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {finalBooks.map((book) => (
                                <tr key={book.b_id}>
                                    <td>{book.b_id}</td>
                                    <td>{book.title}</td>
                                    <td>{book.type}</td>
                                    <td>{book.author}</td>
                                    <td>{book.publisher}</td>
                                    <td>₹ {book.price}</td>
                                    <td>
                                        <img src={book.imageUrl} alt="book" width="50" />
                                    </td>
                                    <td>
                                        <Link
                                            to={`/editBook/${book.b_id}`}
                                            className="btn btn-warning btn-sm me-2"
                                        >
                                            Edit
                                        </Link>

                                        <button
                                            onClick={() => {
                                                if (window.confirm("Are you sure you want to delete this book?")) {
                                                    deleteBook(book.b_id);
                                                }
                                            }}
                                            className="btn btn-danger btn-sm"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default ViewBook;