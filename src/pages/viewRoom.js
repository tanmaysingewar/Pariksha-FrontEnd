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

const viewRoom = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    // fetch all faculty data
    const fetchFaculty = async () => {
      const response = await fetch(`${API}/room/show/all`);
      const data = await response.json();
      console.log(data);
      setData(data.data)
    }
    fetchFaculty()
  }, [])

  // Delete room
  const deleteRoom = async (id) => {
    // make method delete request
    console.log(id)
    const response = await fetch(`${API}/room/delete?id=${id}`, {
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
        <Badge bg="secondary">View Room</Badge>
        </h1>
        <p style={{textAlign : "center", marginTop : "10px", color : "#fff", cursor : "pointer" }} onClick={() => Router.push(`/admin`)  }> {"<- Back to Dashboard"}</p>
        <p style={{textAlign : "center", color : "#fff", marginTop : "40px"}}> <b>This is list of all Rooms Available</b></p>
        <Table striped bordered hover style={{width : "80%", margin : "auto", marginTop : "20px", marginBottom : "60px"}}>
      <thead>
        <tr>
          <th>Room ID</th>
          <th>Room Capacity</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {/* Loop the data  */}
        {
           data.length === 0 ? <tr><td colSpan="4" style={{textAlign : "center"}}>No Room Available</td></tr> :
          data.map((item) => {
            return (
              <tr>
                <td>{item.roomId}</td>
                <td>{item.roomCapacity}</td>
                <td>
                  <Button variant="danger" onClick={() => deleteRoom(item._id)}>Delete</Button>
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
  
  export default viewRoom;