// Crteate login form id and passoerd

// Path: src/pages/login.js

import React, { useState } from 'react';
import styles from '../styles/adminLogin.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Router from 'next/router'
import Card from 'react-bootstrap/Card';
import { authincate } from '../../helper/auth';
import { API } from '../../backend';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleSubmit = async () => {
        const res = await fetch(`${API}/faculty/login`, {
        body: JSON.stringify({
            id : email,
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
            authincate(result.faculty)
            Router.push('/facultyPage')
        } else{
            setError("Invalid Credentials")
        }
    };
    
    return (
    <div className={styles.Conatiner} >
        <Card style={{padding : "40px"}}>
        <Form>
        <p className="fs-3" style={{textAlign : "center"}}>Faculty Login</p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} autoComplete='off' />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Text className="text-danger" >
            {error}
        </Form.Text>
        {/* Center the button */}
        <div style={{textAlign : "center"}}>
        <Button variant="primary" onClick={() => handleSubmit()}>
            Submit
        </Button> <br/>
        <p className="fs-6" style={{textAlign : "center",marginTop : "10px"}}>or</p>
        <Button variant="secondary"  onClick={() =>  Router.push('/createFaculty')} >
            Create New Account
        </Button> <br/>
        </div>
        </Form>
        </Card>
    </div>
    );
    };

export default AdminLogin;