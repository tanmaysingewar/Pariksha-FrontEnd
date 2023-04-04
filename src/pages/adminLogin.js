// Crteate login form id and passoerd

// Path: src/pages/login.js

import React, { useState } from 'react';
import styles from '../styles/adminLogin.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import background from "@/assets/bg.svg";
import Router from 'next/router'
import Card from 'react-bootstrap/Card';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleSubmit = async () => {
        
        if(email == 'admin' && password == 'admin'){
           return Router.push('/admin');
        }else{
           return setError("Invalid Credentials")
        }
    };
    
    return (
    <div className={styles.Conatiner} >
        <Card style={{padding : "40px"}}>
        <Form>
        <p className="fs-3" style={{textAlign : "center"}}>Admin Login</p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Admin ID</Form.Label>
            <Form.Control type="email" placeholder="Enter email" autoComplete='off' onChange={(e) => setEmail(e.target.value)} />
            <Form.Text className="text-muted">
            Enter Unique Admin Id
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Text className="text-danger">
           {error}
        </Form.Text>
        {/* Center the button */}
        <div style={{textAlign : "center"}}>
        <Button variant="primary" onClick={() => handleSubmit()} >
            Submit
        </Button>
        </div>
        </Form>
        </Card>
    </div>
    );
    };

export default AdminLogin;

























