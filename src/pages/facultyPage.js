import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import facultyIamge from '@/assets/faculty.jpg';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';
import background from "@/assets/bg.svg";
import Router from 'next/router'
import { useEffect } from 'react';
import { isAuthincated } from '../../helper/auth';


function FacultyPage() {
  useEffect(() => {
    if(!isAuthincated()){
      Router.push('/select');
    }
  }, [])
  
    return (
        <>
        <div
          className="h-screen pb-14 bg-right bg-cover"
        >
        <h1 style={{textAlign : "center", marginTop : "40px"}}>
        <Badge bg="secondary">Faculty Page</Badge>
      </h1>
        <Row xs={1} md={2} className="g-4" style={{width : "80%", alignItems : "center", margin : "auto"}}>
        <Col>
          <Card style={{margin : "auto"}}>
            <Card.Body>
              <Card.Title>View Exam Schedule</Card.Title>
              <Card.Text>
                The "View Schedule" feature allows teachers, and administrators to view the timetable for Exam, providing a clear overview of the schedule.
              </Card.Text>
              <Button variant="success" style={{marginTop : "10px"}} onClick={() => Router.push('/onlyViewSchedule')}>Go to Exam Schedule</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>My Duties</Card.Title>
              <Card.Text>
              The "My Duties on Exam Schedule" feature allows teachers to view their examination schedule, providing a clear overview of the schedule.
              </Card.Text>
              <Button variant="success" style={{marginTop : "10px"}} onClick={() => Router.push('/facultyDuties')}>Go to My Duties</Button>
            </Card.Body>
          </Card>
        </Col>
        </Row>
        </div>
        </>
    );
  }
  
  export default FacultyPage;