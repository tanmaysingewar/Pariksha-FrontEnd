import React, { useEffect,useState } from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';
const AddFaculty = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    // fetch all faculty data
    const fetchFaculty = async () => {
      const response = await fetch('http://localhost:8080/api/admin/show/faculty/all');
      const data = await response.json();
      console.log(data);
      setData(data.data)
    }
    fetchFaculty()
  }, [])
    return (
        <>
        <div style={{overflowY : "scroll", height : "100vh",marginTop : "40px"}}>
        <h1 style={{textAlign : "center", marginTop : "40px"}}>
        Pariksha <Badge bg="secondary">Add Faculty</Badge>
        </h1>
        <p style={{textAlign : "center"}}> <b>This is list of all Faculty</b></p>
        <Table striped bordered hover style={{width : "80%", margin : "auto", marginTop : "20px", marginBottom : "60px"}}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Contact No.</th>
          <th>Add as Invigilators</th>
        </tr>
      </thead>
      <tbody>
      {
          data.map((item) => {
            return (
              <tr>
                <td>{item.faculty_id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td style={{}}>
                  <Button variant="success">Add</Button>
                </td>
              </tr>
            )
          }
          )
        }
        <tr>
          <td>IT203222</td>
          <td>LoremIpsum</td>
          <td>loremipsum@gmail.com</td>
          <td>9734556723</td>
          <td style={{}}>
            <Button variant="success">Add</Button>
          </td>
        </tr>
        
      </tbody>
    </Table>
        </div>
        </>
    );
  };
  
  export default AddFaculty;