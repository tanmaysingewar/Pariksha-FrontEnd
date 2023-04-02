import React, { useState } from 'react';
import styles from '../styles/adminLogin.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Router from 'next/router'
import Card from 'react-bootstrap/Card';

const Subject = () => {
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
    <div className={styles.Conatiner} style={{justifyContent : "center"}}>
        <Card style={{padding : "40px"}}>
        <Form>
        <p className="fs-3" style={{textAlign : "center"}}>Add Subject</p>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Cource Code</Form.Label>
            <Form.Control type="text" placeholder="Cource Code"  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Cource Name</Form.Label>
            <Form.Control type="text" placeholder="Cource Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>No. of students registered</Form.Label>
            <Form.Control type="number" placeholder="No. of students registered" />
        </Form.Group>
        {/* Center the button */}
        <div style={{textAlign : "center"}}>
        <Button variant="primary" style={{marginBottom : "10px"}} >
            Add Subject
        </Button> <br/>
        <Form.Text className="text-muted" >
            or
        </Form.Text><br/>
        <Button variant="success" style={{marginTop : "10px"}} onClick={() => Router.push('/viewSubject')}>
            View Subject
        </Button>
        </div>
        </Form>
        </Card>
    </div>
    );
    };

export default Subject;