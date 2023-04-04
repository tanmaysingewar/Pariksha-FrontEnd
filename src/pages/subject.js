import React, { useState } from 'react';
import styles from '../styles/adminLogin.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Router from 'next/router'
import Card from 'react-bootstrap/Card';
import { API } from '../../backend';

const Subject = () => {
    
    const [courceCode, setCourceCode] = useState('')
    const [courceName, setCourceName] = useState('')
    const [noOfStudents, setNoOfStudents] = useState('')
    const [error, setError] = useState('');
    
    const handleSubmit = async (e) => {
        // no.of students should be less than 120
        if (noOfStudents > 120) {
            alert('No. of students should be less than 120');
            return;
        }

        const res = await fetch(`${API}/subject/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                courceCode: courceCode,
                courceName: courceName,
                registeredStudent: noOfStudents
            })
        });
        const result = await res.json();
        console.log(result);
        if (result.error) {
            setError(result.message);
        } else {
            Router.push('/viewSubject');
        }
    };

    
    return (
    <div className={styles.Conatiner} style={{justifyContent : "center"}}>
        <Card style={{padding : "40px"}}>
        <Form>
        <p className="fs-3" style={{textAlign : "center"}}>Add Subject</p>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Cource Code</Form.Label>
            <Form.Control type="text" placeholder="Cource Code" onChange={(e) => setCourceCode(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Cource Name</Form.Label>
            <Form.Control type="text" placeholder="Cource Name" onChange={(e) => setCourceName(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>No. of students registered</Form.Label>
            <Form.Control type="number" placeholder="No. of students registered" onChange={(e) => setNoOfStudents(e.target.value)} max={120}/>
        </Form.Group>
        {/* Center the button */}
        <div style={{textAlign : "center"}}>
        <Button variant="primary" style={{marginBottom : "10px"}} onClick={() => handleSubmit()}>
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