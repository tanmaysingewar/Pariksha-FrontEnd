// Crteate login form id and passoerd

// Path: src/pages/login.js

import React, { useState } from 'react';
import styles from '../styles/adminLogin.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Router from 'next/router'
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    
    return (
    <div className={styles.Conatiner} style={{overflowX : "scroll", height : "100vh"}} >
        <Card style={{padding: "40px",marginTop : "-40px",marginBottom : "40px"}}>
        <Form >
        <p className="fs-3" style={{textAlign : "center"}}>Edit Exam Schedule</p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Cource code</Form.Label><br/>
            <Form.Text className="text-muted">
            Select cource code from the Dropdown
            </Form.Text><br/>
            <Dropdown style={{marginBottom : "10px"}}>
            
            <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{width : "400px"}} >
            Select Cource code
            </Dropdown.Toggle>

            <Dropdown.Menu style={{height : "200px", overflow : "scroll", overflowX : "hidden"}}>
                {/* Map the faculty names */}
                <Dropdown.Item eventKey={"adminLogin"} onClick={() =>setselect("adminLogin")} style={{width : "400px"}}>CE202E</Dropdown.Item>
                <Dropdown.Item eventKey={"adminLogin"} onClick={() =>setselect("adminLogin")} style={{width : "400px"}}>CE202E</Dropdown.Item>
                <Dropdown.Item eventKey={"adminLogin"} onClick={() =>setselect("adminLogin")} style={{width : "400px"}}>CE202E</Dropdown.Item>
                <Dropdown.Item eventKey={"adminLogin"} onClick={() =>setselect("adminLogin")} style={{width : "400px"}}>CE202E</Dropdown.Item>
                <Dropdown.Item eventKey={"adminLogin"} onClick={() =>setselect("adminLogin")} style={{width : "400px"}}>CE202E</Dropdown.Item>
                <Dropdown.Item eventKey={"adminLogin"} onClick={() =>setselect("adminLogin")} style={{width : "400px"}}>CE202E</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
           
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date"  placeholder="Name" value={"2023-03-28"} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Time</Form.Label>
            <Form.Control type="time" placeholder="Name" />
        </Form.Group>

        {/* Select Faculty */}

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Select Faculty</Form.Label>
            <Dropdown style={{marginBottom : "10px"}}>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{width : "400px"}} >
            Select Faculty
            </Dropdown.Toggle>

            <Dropdown.Menu style={{height : "200px", overflow : "scroll", overflowX : "hidden"}}>
                {/* Map the faculty names */}
                <Dropdown.Item eventKey={"adminLogin"} onClick={() =>setselect("adminLogin")} style={{width : "400px"}}>Admin</Dropdown.Item>
                <Dropdown.Item eventKey={"facultyLogin"} onClick={() =>setselect("facultyLogin")} style={{width : "400px"}}>Faculty</Dropdown.Item>
                <Dropdown.Item eventKey={"facultyLogin"} onClick={() =>setselect("facultyLogin")} style={{width : "400px"}}>Faculty</Dropdown.Item>
                <Dropdown.Item eventKey={"facultyLogin"} onClick={() =>setselect("facultyLogin")} style={{width : "400px"}}>Faculty</Dropdown.Item>
                <Dropdown.Item eventKey={"facultyLogin"} onClick={() =>setselect("facultyLogin")} style={{width : "400px"}}>Faculty</Dropdown.Item>
                <Dropdown.Item eventKey={"facultyLogin"} onClick={() =>setselect("facultyLogin")} style={{width : "400px"}}>Faculty</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            <Dropdown style={{marginBottom : "10px"}}>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{width : "400px"}} >
            Select Faculty
            </Dropdown.Toggle>

            <Dropdown.Menu style={{height : "200px", overflow : "scroll", overflowX : "hidden"}}>
                {/* Map the faculty names */}
                <Dropdown.Item eventKey={"adminLogin"} onClick={() =>setselect("adminLogin")} style={{width : "400px"}}>Admin</Dropdown.Item>
                <Dropdown.Item eventKey={"facultyLogin"} onClick={() =>setselect("facultyLogin")} style={{width : "400px"}}>Faculty</Dropdown.Item>
                <Dropdown.Item eventKey={"facultyLogin"} onClick={() =>setselect("facultyLogin")} style={{width : "400px"}}>Faculty</Dropdown.Item>
                <Dropdown.Item eventKey={"facultyLogin"} onClick={() =>setselect("facultyLogin")} style={{width : "400px"}}>Faculty</Dropdown.Item>
                <Dropdown.Item eventKey={"facultyLogin"} onClick={() =>setselect("facultyLogin")} style={{width : "400px"}}>Faculty</Dropdown.Item>
                <Dropdown.Item eventKey={"facultyLogin"} onClick={() =>setselect("facultyLogin")} style={{width : "400px"}}>Faculty</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </Form.Group>

        {/* Room */}

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Select Room</Form.Label>
            <Dropdown style={{marginBottom : "10px"}}>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{width : "400px"}} >
            Select Room
            </Dropdown.Toggle>

            <Dropdown.Menu style={{height : "200px", overflow : "scroll", overflowX : "hidden"}}>
                {/* Map the faculty names */}
                <Dropdown.Item eventKey={"adminLogin"} onClick={() =>setselect("adminLogin")} style={{width : "400px"}}>Admin</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            <Dropdown style={{marginBottom : "10px"}}>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{width : "400px"}} >
            Select Room
            </Dropdown.Toggle>

            <Dropdown.Menu style={{height : "200px", overflow : "scroll", overflowX : "hidden"}}>
                {/* Map the faculty names */}
                <Dropdown.Item eventKey={"adminLogin"} onClick={() =>setselect("adminLogin")} style={{width : "400px"}}>Admin</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </Form.Group>
        
        {/* Center the button */}
        <div style={{textAlign : "center",marginTop : "20px"}}>
        <Button variant="primary" style={{marginBottom : "10px"}} >
            Update Schedule
        </Button> 
        </div>
        </Form>
        </Card>
    </div>
    );
    };

export default AdminLogin;

