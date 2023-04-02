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
import Dropdown from 'react-bootstrap/Dropdown';

const ReplaceFaculty = () => {
    return (
        <>
        <div style={{overflowY : "scroll", height : "100vh",marginTop : "40px"}}>
        <h1 style={{textAlign : "center"}}>
        Pariksha <Badge bg="secondary">Replace Faculty</Badge>
        </h1>
        <p style={{textAlign : "center"}}> <b>This is list of all Rooms Available</b></p>
        <Table striped bordered hover style={{width : "80%", margin : "auto", marginTop : "20px", marginBottom : "60px"}}>
      <thead>
        <tr>
          <th>Cource Code</th>
          <th>Cource Name</th>
          <th>Date</th>
          <th>Time</th>
          <th>Faculty</th>
          <th>Room</th>
          <th>Select Faculty</th>
          <th>Replace</th>
        </tr>
      </thead>
      <tbody>
        <tr >
            {/* RowSpan is equal to the no. of teacher alloted */}
          <td rowSpan={2} style={{verticalAlign : "middle"}}>202A</td>
          <td rowSpan={2} style={{verticalAlign : "middle"}}>Subject Name</td>
          <td rowSpan={2} style={{verticalAlign : "middle"}}>12/12/12</td>
          <td rowSpan={2} style={{verticalAlign : "middle"}}>9:00</td>
          {/* Teacher One */}
          <td>
           Lorem Ipsum
          </td>
          <td>
           211
          </td>
          {/* COnditional render the replace button  */}
          <td rowSpan={2} style={{verticalAlign : "middle"}}>
          <Dropdown style={{marginBottom : "10px"}}>
            
            <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{width : "200px"}} >
            {/* Condtitional render which teacher want replacement */}
            Teacher one
            </Dropdown.Toggle>

            <Dropdown.Menu style={{height : "200px", overflow : "scroll", overflowX : "hidden"}}>
                {/* Map the faculty names */}
                <Dropdown.Item eventKey={"adminLogin"} onClick={() =>setselect("adminLogin")} style={{width : "200px"}}>Lorem Ipsum</Dropdown.Item>
                <Dropdown.Item eventKey={"adminLogin"} onClick={() =>setselect("adminLogin")} style={{width : "200px"}}>Lorem Ipsum</Dropdown.Item>
                <Dropdown.Item eventKey={"adminLogin"} onClick={() =>setselect("adminLogin")} style={{width : "200px"}}>Lorem Ipsum</Dropdown.Item>
                <Dropdown.Item eventKey={"adminLogin"} onClick={() =>setselect("adminLogin")} style={{width : "200px"}}>Lorem Ipsum</Dropdown.Item>
                <Dropdown.Item eventKey={"adminLogin"} onClick={() =>setselect("adminLogin")} style={{width : "200px"}}>Lorem Ipsum</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
          </td>
          <td rowSpan={2} style={{verticalAlign : "middle"}}>
            <button style={{width : "100px"}}>Replace</button>
          </td>
        </tr>
        {/* Teacher Two */}
        <tr>
          <td>
           Lorem Ipsum
          </td>
          <td>
           211
          </td>
        </tr>
        {/* Teacher Three */}
        {/* By Increseing RowSpan by no. of teachers can teacher added to table */}
      </tbody>
    </Table>
        </div>
        </>
    );
  };
  
  export default ReplaceFaculty;