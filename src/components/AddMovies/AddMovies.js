import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import './AddMovies.css'
import { useState } from 'react'

const MovieAdd = ({movies, setMovies}) => {
  const [title, SetTitle] = useState("");
  const [description, SetDescription] = useState("");
  const [rating, SetRating] = useState("");
  const [posterURL, SetPosterURL] = useState("");
  const [show, setShow] = useState(false);


  
  
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const addMovie = (newMovie) => {
  setMovies([...movies,newMovie])
  handleClose()
}


return (
  <div>
    <button className="addbtn" onClick={handleShow}>+</button>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Movies</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title :</Form.Label>
                <Form.Control type="text" placeholder="Title" name="Title" onChange={(e) => SetTitle(e.target.value)} />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>PosterURL :</Form.Label>
                <Form.Control type="text" placeholder="PosterURL" name="PosterURL" onChange={(e) => SetPosterURL(e.target.value)} />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description :</Form.Label>
                <Form.Control type="text" placeholder="Description" name="Description" onChange={(e) => SetDescription(e.target.value)} />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Rating :</Form.Label>
                <Form.Control type="number" min="0" max="5" name="Rating" onChange={(e) => SetRating(e.target.value)} />
              </Form.Group>
            </Form>
          </div>
        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}
        onClick={()=> addMovie({title, description, posterURL, rating })}
        >
          Add Movie
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
)
}

export default MovieAdd
