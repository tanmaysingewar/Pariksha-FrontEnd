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

const viewSubject = () => {
    return (
        <>
        <div style={{overflowY : "scroll", height : "100vh"}}>
        <h1 style={{textAlign : "center", marginTop : "40px"}}>
        Pariksha <Badge bg="secondary">View Room</Badge>
        </h1>
        <p style={{textAlign : "center"}}> <b>This is list of all Rooms Available</b></p>
        <Table striped bordered hover style={{width : "80%", margin : "auto", marginTop : "20px", marginBottom : "60px"}}>
      <thead>
        <tr>
          <th>Cource Code</th>
          <th>Cource Name</th>
          <th>No. of students registered</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      
      <tbody>
        <tr>
          <td>CM404E</td>
          <td>Lorem Ipsum</td>
          <td>80</td>
          <td style={{}}>
            <Button variant="warning" onClick={() => Router.push('/editSubject')}>Edit</Button>
          </td>
          <td>
            <Button variant="danger">Delete</Button>
          </td>
        </tr>
        <tr>
          <td>CM404E</td>
          <td>Lorem Ipsum</td>
          <td>80</td>
          <td style={{}}>
            <Button variant="warning" onClick={() => Router.push('/editSubject')}>Edit</Button>
          </td>
          <td>
            <Button variant="danger">Delete</Button>
          </td>
        </tr>
        <tr>
          <td>CM404E</td>
          <td>Lorem Ipsum</td>
          <td>80</td>
          <td style={{}}>
            <Button variant="warning" onClick={() => Router.push('/editSubject')}>Edit</Button>
          </td>
          <td>
            <Button variant="danger">Delete</Button>
          </td>
        </tr>
        <tr>
          <td>CM404E</td>
          <td>Lorem Ipsum</td>
          <td>80</td>
          <td style={{}}>
            <Button variant="warning" onClick={() => Router.push('/editSubject')}>Edit</Button>
          </td>
          <td>
            <Button variant="danger">Delete</Button>
          </td>
        </tr>
        <tr>
          <td>CM404E</td>
          <td>Lorem Ipsum</td>
          <td>80</td>
          <td style={{}}>
            <Button variant="warning" onClick={() => Router.push('/editSubject')}>Edit</Button>
          </td>
          <td>
            <Button variant="danger">Delete</Button>
          </td>
        </tr>
        <tr>
          <td>CM404E</td>
          <td>Lorem Ipsum</td>
          <td>80</td>
          <td style={{}}>
            <Button variant="warning" onClick={() => Router.push('/editSubject')}>Edit</Button>
          </td>
          <td>
            <Button variant="danger">Delete</Button>
          </td>
        </tr>
        <tr>
          <td>CM404E</td>
          <td>Lorem Ipsum</td>
          <td>80</td>
          <td style={{}}>
            <Button variant="warning" onClick={() => Router.push('/editSubject')}>Edit</Button>
          </td>
          <td>
            <Button variant="danger">Delete</Button>
          </td>
        </tr>
        <tr>
          <td>CM404E</td>
          <td>Lorem Ipsum</td>
          <td>80</td>
          <td style={{}}>
            <Button variant="warning" onClick={() => Router.push('/editSubject')}>Edit</Button>
          </td>
          <td>
            <Button variant="danger">Delete</Button>
          </td>
        </tr>
        <tr>
          <td>CM404E</td>
          <td>Lorem Ipsum</td>
          <td>80</td>
          <td style={{}}>
            <Button variant="warning" onClick={() => Router.push('/editSubject')}>Edit</Button>
          </td>
          <td>
            <Button variant="danger">Delete</Button>
          </td>
        </tr>
        <tr>
          <td>CM404E</td>
          <td>Lorem Ipsum</td>
          <td>80</td>
          <td style={{}}>
            <Button variant="warning" onClick={() => Router.push('/editSubject')}>Edit</Button>
          </td>
          <td>
            <Button variant="danger">Delete</Button>
          </td>
        </tr>
        <tr>
          <td>CM404E</td>
          <td>Lorem Ipsum</td>
          <td>80</td>
          <td style={{}}>
            <Button variant="warning" onClick={() => Router.push('/editSubject')}>Edit</Button>
          </td>
          <td>
            <Button variant="danger">Delete</Button>
          </td>
        </tr>
        <tr>
          <td>CM404E</td>
          <td>Lorem Ipsum</td>
          <td>80</td>
          <td style={{}}>
            <Button variant="warning" onClick={() => Router.push('/editSubject')}>Edit</Button>
          </td>
          <td>
            <Button variant="danger">Delete</Button>
          </td>
        </tr>
        <tr>
          <td>CM404E</td>
          <td>Lorem Ipsum</td>
          <td>80</td>
          <td style={{}}>
            <Button variant="warning" onClick={() => Router.push('/editSubject')}>Edit</Button>
          </td>
          <td>
            <Button variant="danger">Delete</Button>
          </td>
        </tr>
        <tr>
          <td>CM404E</td>
          <td>Lorem Ipsum</td>
          <td>80</td>
          <td style={{}}>
            <Button variant="warning" onClick={() => Router.push('/editSubject')}>Edit</Button>
          </td>
          <td>
            <Button variant="danger">Delete</Button>
          </td>
        </tr>
        <tr>
          <td>CM404E</td>
          <td>Lorem Ipsum</td>
          <td>80</td>
          <td style={{}}>
            <Button variant="warning" onClick={() => Router.push('/editSubject')}>Edit</Button>
          </td>
          <td>
            <Button variant="danger">Delete</Button>
          </td>
        </tr>
        <tr>
          <td>CM404E</td>
          <td>Lorem Ipsum</td>
          <td>80</td>
          <td style={{}}>
            <Button variant="warning" onClick={() => Router.push('/editSubject')}>Edit</Button>
          </td>
          <td>
            <Button variant="danger">Delete</Button>
          </td>
        </tr>
        <tr>
          <td>CM404E</td>
          <td>Lorem Ipsum</td>
          <td>80</td>
          <td style={{}}>
            <Button variant="warning" onClick={() => Router.push('/editSubject')}>Edit</Button>
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
  
  export default viewSubject;