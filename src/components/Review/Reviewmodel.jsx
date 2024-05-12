import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react'
import { useState } from 'react'
// import axios from 'axios'

export default function Model(props) {
    const [val, setVal] = useState({
        review: ""
    })
    const change = (e) => {
        let { name, value } = e.target
        setVal({ ...val, [name]: value })
    }
    console.log(val);
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton >
                <Modal.Title id="contained-modal-title-vcenter">
                    Delete
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4 style={{ color: "Black" }}>Write a Review?</h4>
                <p style={{ color: "Black" }}>
                    <input type="text" name='review' onChange={change} value={val.review} />
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.flose}>Yes</Button>
            </Modal.Footer>
        </Modal>
    );
}
