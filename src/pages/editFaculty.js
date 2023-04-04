import React, { useEffect, useState } from 'react';
import styles from '../styles/adminLogin.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Router from 'next/router'
import Card from 'react-bootstrap/Card';
import { useRouter } from 'next/router'
import { API } from '../../backend';

const EditFaculty = () => {
    const [email, setEmail] = useState('');
    const [name, setname] = useState('')
    const [contact_no, setcontact_no] = useState('')
    const [error, setError] = useState('');
    const [data, setData] = useState([]);
    const router = useRouter()
    

    useEffect(() => {
        // fetch all faculty data
        const {id} = router.query
        const fetchFaculty = async () => {
        console.log(id)
          const response = await fetch(`${API}/admin/faculty?_id=${id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = await response.json();
          console.log(data);
          setData(data.data)
          setEmail(data.data.email)
            setname(data.data.name)
            setcontact_no(data.data.contact_no)

        }
        fetchFaculty()
      }, [])

// UPdate the faculty data

    const updateFaculty = async () => {
        const {id} = router.query
        const response = await fetch(`${API}/admin/faculty/update?_id=${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                name,
                contact_no
            }),
        });
        const data = await response.json();
        console.log(data);
        if (data.success) {
            Router.push('/faculty')
        }
        else {
            setError(data.message)
        }
    }

    return (
    <div className={styles.Conatiner} >
        <Card style={{padding : "40px"}}>
        <Form>
        <p className="fs-3" style={{textAlign : "center"}}>Edit Faculty</p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setname(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contact No.</Form.Label>
            <Form.Control type="number" placeholder="Phone Number" value={contact_no} onChange={(e) => setcontact_no(e.target.value)}/>
        </Form.Group>
        {/* Center the button */}
        <div style={{textAlign : "center"}}>
        <Button variant="primary" onClick={() => updateFaculty()} >
            Update
        </Button>
        </div>
        </Form>
        </Card>
    </div>
    );
    };

export default EditFaculty;

