// Crteate login form id and passoerd

// Path: src/pages/login.js

import React, { useState } from 'react';
import styles from '../styles/adminLogin.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Router from 'next/router'
import Card from 'react-bootstrap/Card';
import { API } from '../../backend';

const Room = () => {
    const [roomId, setRoomId] = useState('');
    const [roomCapacity, setRoomCapacity] = useState('')
    const [data, setData] = useState([])
    
    const handleSubmit = async (e) => {

        if(roomCapacity > 30 ){
            alert("Room Capacity should be less than 30")
            return
        }else if(roomCapacity < 1){
            alert("Room Capacity should be greater than 0")
            return
        }
        const res = await fetch(`${API}/room/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                roomId: roomId,
                roomCapacity: roomCapacity
            })
        });
        const result = await res.json();
        if (result.error) {
            setError(result.message);
        } else {
            Router.push('/viewRoom');
        }
    };


    return (
    <div className={styles.Conatiner} style={{justifyContent : "center"}}>
        <Card style={{padding : "40px"}}>
        <Form>
        <p className="fs-3" style={{textAlign : "center"}}>Create Room</p>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Room ID</Form.Label>
            <Form.Control type="text" placeholder="Room ID"  onChange={(e) => setRoomId(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Room Capacity</Form.Label><br/>
            <Form.Text className="text-muted">
            Min capacity is 1 and Max capacity is 30
            </Form.Text>
            <Form.Control type="number" placeholder="Room Capacity" onChange={(e) => setRoomCapacity(e.target.value)} max={30} />
        </Form.Group>
        {/* Center the button */}
        <div style={{textAlign : "center"}}>
        <Button variant="primary" style={{marginBottom : "10px"}} onClick={() => handleSubmit()} >
            Create Room
        </Button> <br/>
        <Form.Text className="text-muted" >
            or
        </Form.Text><br/>
        <Button variant="success" style={{marginTop : "10px"}} onClick={() => Router.push('/viewRoom')}>
            View Rooms
        </Button>
        </div>
        </Form>
        </Card>
    </div>
    );
    };

export default Room;

