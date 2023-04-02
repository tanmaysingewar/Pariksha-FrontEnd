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

const onlyViewSchedule = () => {
    return (
        <>
        <div style={{overflowY : "scroll", height : "100vh",marginTop : "40px"}}>
        <h1 style={{textAlign : "center",marginTop : "40px"}}>
        Pariksha <Badge bg="secondary">View Schedule</Badge>
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
  
  export default onlyViewSchedule;