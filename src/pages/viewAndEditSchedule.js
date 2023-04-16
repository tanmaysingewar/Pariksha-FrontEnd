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

const ViewAndEditSchedule = () => {
  // http://localhost:8080/api/schedule/view/all

  const [data, setData] = useState([])

  useEffect(() => {

    const fetchSchedule = async () => {
      const response = await fetch(`${API}/schedule/view/all`);
      const data = await response.json();
      console.log(data);
      setData(data.data)
    }
    fetchSchedule()
  }, [])

  function formatDate (input) {
    var datePart = input.match(/\d+/g),
    year = datePart[0].substring(2), // get only two digits
    month = datePart[1], day = datePart[2];
    return day+'/'+month+'/'+year;
  }

  // Delete schedule
  const deleteSchedule = async (id) => {
    // make method delete request
    console.log(id)
    const response = await fetch(`${API}/schedule/delete?id=${id}`, {
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
        <div style={{overflowY : "scroll", height : "100vh",marginTop : "40px"}}>
        <h1 style={{textAlign : "center"}}>
        <Badge bg="secondary">View & Edit Schedule</Badge>
        </h1>
        <p style={{textAlign : "center", marginTop : "10px", color : "#fff", cursor : "pointer" }} onClick={() => Router.push(`/admin`)  }> {"<- Back to Dashboard"}</p>

        <p style={{textAlign : "center", color : "#fff", marginTop : "40px"}}> <b>This is list of all Schedule</b></p>
        <Table striped bordered hover style={{width : "80%", margin : "auto", marginTop : "20px", marginBottom : "60px"}}>
      <thead>
        <tr>
          <th>Cource Code</th>
          <th>Cource Name</th>
          <th>Date</th>
          <th>Time</th>
          <th>Faculty</th>
          <th>Room</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {
           data.length === 0 ? <tr><td colSpan="7" style={{textAlign : "center"}}>No Schedule Available</td></tr> :
          data.map((item) => {
            return (
              <>
              <tr>
                <td rowSpan={item.faculties.length} style={{verticalAlign : "middle"}}>{item.courceCode}</td>
                <td rowSpan={item.faculties.length} style={{verticalAlign : "middle"}}>{item.courceName}</td>
                <td rowSpan={item.faculties.length} style={{verticalAlign : "middle"}}>{formatDate(item.date)}</td>
                <td rowSpan={item.faculties.length} style={{verticalAlign : "middle"}}>{item.time}</td>
                <td style={{verticalAlign : "middle"}}>{item.faculties[0].facultyName}</td>
                <td style={{verticalAlign : "middle"}}>{item.rooms[0].givenRoomId}</td>
                <td rowSpan={item.faculties.length } style={{verticalAlign : "middle"}}>
                    <Button variant="danger" onClick={() => deleteSchedule(item._id)}>Delete</Button>
                </td>
              </tr>
              {/* Map the remining faculty and room */}
              {
                item.faculties.map((faculty, index) => {
                  if(index !== 0){
                    return (
                      <tr>
                        <td style={{verticalAlign : "middle"}}>{faculty.facultyName}</td>
                        <td style={{verticalAlign : "middle"}}>{item.rooms[index].givenRoomId}</td>
                      </tr>
                    )
                  }
                }
                )
              }
              </>
            )
          })
        }

      </tbody>
    </Table>
        </div>
        </>
    );
  };
  
  export default ViewAndEditSchedule;