import React, { useEffect,useState } from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';
import Router from 'next/router'

const Faculty = () => {

  // const [data, setData] = useState([])
  // useEffect(() => {
  //   // fetch all faculty data
  //   const fetchFaculty = async () => {
  //     const response = await fetch('http://localhost:8080/api/admin/selected/faculty');
  //     const data = await response.json();
  //     console.log(data);
  //     setData(data.data)
  //   }
  //   fetchFaculty()
  // }, [])
  
    return (
        <>
        <div style={{overflowY : "scroll", height : "100vh"}} >
        <h1 style={{textAlign : "center", marginTop : "40px"}}>
        Pariksha <Badge bg="secondary">View Faculty</Badge>
        </h1>
        <Button variant="success" style={{margin : "auto", display : "block", marginBottom : "20px",marginTop : "60px"}} onClick={() => Router.push('/addFaculty')}>Add Faculty</Button>
        <p style={{textAlign : "center"}}> <b>This is list of all invigilators</b></p>
        <Table striped bordered hover style={{width : "80%", margin : "auto", marginTop : "20px", marginBottom : "60px"}} className="table-fixed">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Contact No.</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {/* Loop the data  */}
        {/* {
          data.map((item) => {
            return (
              <tr>
                <td>{item.faculty_id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td style={{}}>
                  <Button variant="warning" onClick={() => Router.push('/editFaculty')}>Edit</Button>
                </td>
                <td>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            )
          }
          )
        } */}
       
        <tr>
          <td>IT203222</td>
          <td>LoremIpsum</td>
          <td>loremipsum@gmail.com</td>
          <td>9734556723</td>
          <td style={{}}>
            <Button variant="warning" onClick={() => Router.push('/editFaculty')}>Edit</Button>
          </td>
          <td>
            <Button variant="danger">Delete</Button>
          </td>
        </tr>
        <tr>
          <td>IT203222</td>
          <td>LoremIpsum</td>
          <td>loremipsum@gmail.com</td>
          <td>9734556723</td>
          <td style={{}}>
            <Button variant="warning" onClick={() => Router.push('/editFaculty')}>Edit</Button>
          </td>
          <td>
            <Button variant="danger">Delete</Button>
          </td>
        </tr>
        <tr>
          <td>IT203222</td>
          <td>LoremIpsum</td>
          <td>loremipsum@gmail.com</td>
          <td>9734556723</td>
          <td style={{}}>
            <Button variant="warning" onClick={() => Router.push('/editFaculty')}>Edit</Button>
          </td>
          <td>
            <Button variant="danger">Delete</Button>
          </td>
        </tr>
        <tr>
          <td>IT203222</td>
          <td>LoremIpsum</td>
          <td>loremipsum@gmail.com</td>
          <td>9734556723</td>
          <td style={{}}>
            <Button variant="warning" onClick={() => Router.push('/editFaculty')}>Edit</Button>
          </td>
          <td>
            <Button variant="danger">Delete</Button>
          </td>
        </tr>
        <tr>
          <td>IT203222</td>
          <td>LoremIpsum</td>
          <td>loremipsum@gmail.com</td>
          <td>9734556723</td>
          <td style={{}}>
            <Button variant="warning" onClick={() => Router.push('/editFaculty')}>Edit</Button>
          </td>
          <td>
            <Button variant="danger">Delete</Button>
          </td>
        </tr>
        
      </tbody>
    </Table>
        </div>
        </>
    );
  };
  
  export default Faculty;