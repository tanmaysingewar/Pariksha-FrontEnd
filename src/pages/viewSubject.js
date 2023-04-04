import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import facultyIamge from '@/assets/faculty.jpg';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';
import background from "@/assets/bg.svg";
import Table from 'react-bootstrap/Table';
import Router from 'next/router'
import { API } from '../../backend';

const viewSubject = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchFaculty = async () => {
      const response = await fetch(`${API}/subject/show/all`);
      const data = await response.json();
      console.log(data);
      setData(data.data)
    }
    fetchFaculty()
  }, [])

  // Delete subject
  const deleteSubject = async (id) => {
    // make method delete request
    console.log(id)
    const response = await fetch(`${API}/subject/delete?id=${id}`, {
      method : "DELETE"
    });
    const data_new = await response.json();
    console.log(data_new);
    // remove faculty from list
    const newData = data.filter((item) => item._id !== id)
    setData(newData)
  }



    return (
        <>
        <div style={{overflowY : "scroll", height : "100vh"}}>
        <h1 style={{textAlign : "center", marginTop : "40px"}}>
         <Badge bg="secondary">View Subjects</Badge>
        </h1>
        <p style={{textAlign : "center", color : "#fff", marginTop : "10px"}}> <b>This is list of Subjects</b></p>
        <Table striped bordered hover style={{width : "80%", margin : "auto", marginTop : "20px", marginBottom : "60px"}}>
      <thead>
        <tr>
          <th>Cource Code</th>
          <th>Cource Name</th>
          <th>No. of students registered</th>
          <th>Delete</th>
        </tr>
      </thead>
      
      <tbody>
        {
           data.length === 0 ? <tr><td colSpan="4" style={{textAlign : "center"}}>No Subjects Available</td></tr> :
          data.map((item) => {
            return (
              <tr>
                <td>{item.courceCode}</td>
                <td>{item.courceName}</td>
                <td>{item.registeredStudent}</td>
                <td>
                  <Button variant="danger" onClick={() => deleteSubject(item._id)}>Delete</Button>
                </td>
              </tr>
            )
          }
          )
        }
      </tbody>
    </Table>
        </div>
        </>
    );
  };
  
  export default viewSubject;