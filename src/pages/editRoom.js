// Crteate login form id and passoerd

// Path: src/pages/login.js

import React, { useState } from 'react';
import styles from '../styles/adminLogin.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Router from 'next/router'
import background from "@/assets/bg.svg";
import Card from 'react-bootstrap/Card';

const EditFaculty = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const res = await fetch('/api/login', {
    //     body: JSON.stringify({
    //         email,
    //         password,
    //     }),
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     method: 'POST',
    //     });
    //     const result = await res.json();
    //     if (result.error) {
    //     setError(result.message);
    //     } else {
    //     Router.push('/admin');
    //     }
    // };
    
    return (
    <div className={styles.Conatiner} >
        <Card style={{padding : "40px"}}>

        
        <Form>
        <p className="fs-3" style={{textAlign : "center"}}>Edit Room</p>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Room ID</Form.Label>
            <Form.Control type="text" placeholder="Room ID"  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Room Capacity</Form.Label>
            <Form.Control type="number" placeholder="Room Capacity" />
        </Form.Group>

        {/* Center the button */}
        <div style={{textAlign : "center"}}>
        <Button variant="primary" style={{marginBottom : "10px"}} >
            Update Room
        </Button> <br/>
        </div>
        </Form>
        </Card>
    </div>
    );
    };

export default EditFaculty;

