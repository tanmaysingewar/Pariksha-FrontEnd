// Crteate login form id and passoerd

// Path: src/pages/login.js

import React, { useState } from 'react';
import styles from '../styles/adminLogin.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Router from 'next/router'
import Card from 'react-bootstrap/Card';
import { API } from '../../backend';

const CreateFaculty = () => {
    const [email, setEmail] = useState('');
    const [name, setname] = useState('')
    const [contact_no, setcontact_no] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleSubmit = async () => {
        const res = await fetch(`${API}/faculty/create/account`, {
        body: JSON.stringify({
            email,
            name,
            contact_no,
            password,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        });
        const result = await res.json();
        console.log(result.success)
        if (result.success) {
            console.log(result.message)
            Router.push('/facultyLogin')
        } else{
            setError("Invalid Credentials")
        }
    };
    
    return (
    <div className={styles.Conatiner} style={{justifyContent : "center" }}>
        <Card style={{padding : "40px"}}>
        <Form>
        <p className="fs-3" style={{textAlign : "center"}}>Create New Account</p>
        
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" onChange={(e) => setname(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" autoComplete='off' onChange={(e) => setEmail(e.target.value)}/>
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contact No.</Form.Label>
            <Form.Control type="text" placeholder="Enter Contact No" onChange={(e) => setcontact_no(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password"  onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <Form.Text className="text-danger">
            {error}
        </Form.Text>
        {/* Center the button */}
        <div style={{textAlign : "center"}}>
        <Button variant="primary" onClick={() => handleSubmit()} >
            Create Account
        </Button>
        </div>
        </Form>
        </Card>
    </div>
    );
    };

export default CreateFaculty;

