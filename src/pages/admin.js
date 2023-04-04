import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import facultyIamge from '@/assets/faculty.jpg';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';
import background from "@/assets/bg.svg";
import Router from 'next/router'

function Admin() {
    return (
        <>
        <div className="h-screen pb-14 bg-right bg-cover">
        <h1 style={{textAlign : "center", marginTop : "40px", fontSize : "30px"}}>
        <Badge bg="secondary">Admin Panel</Badge>
      </h1>
        <Row xs={1} md={2} className="g-4" style={{width : "80%", alignItems : "center", margin : "auto"}}>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Faculty</Card.Title>
              <Card.Text>
              The "Add Delete and Edit Faculty" feature allows administrators to easily manage the faculty roster of the college.
              </Card.Text>
              <Button style={{marginTop : "10px"}} variant="success" onClick={() => Router.push('/faculty')}>Go to Faculty</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Room</Card.Title>
              <Card.Text>
              The "Room Management" feature enables administrators to efficiently manage the allocation and availability of rooms for exams.
              </Card.Text>
              <Button style={{marginTop : "10px"}}  variant="success" onClick={() => Router.push('/room')}>Go to Room</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Subject</Card.Title>
              <Card.Text>
              The "Subject Management" feature allows administrators to organize and manage the subject roster of the college.
              </Card.Text>
              <Button style={{marginTop : "10px"}}  variant="success" onClick={() => Router.push('/subject')}>Go to Subject</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Create Schedule</Card.Title>
              <Card.Text>
              The "Create Schedule" feature enables administrators to create a timetable for collage exam schedule with ease.
              </Card.Text>
              <Button style={{marginTop : "10px"}}  variant="success" onClick={() => Router.push('/createSchedule')}>Go to Schedule</Button>
            </Card.Body>
          </Card>
        </Col>
        {/*  style={{margin : "auto", marginTop : "30px"}} */}
        <Col>
          <Card >
            <Card.Body>
              <Card.Title>View Schedule</Card.Title>
              <Card.Text>
              The "View Schedule" feature allows  teachers, and administrators to view the timetable for Exam, providing a clear overview of the schedule.
              </Card.Text>
              <Button style={{marginTop : "10px"}}  variant="success"  onClick={() => Router.push('/onlyViewSchedule')}>View Schedule</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Replace Request</Card.Title>
              <Card.Text>
              The "Replace Request" feature allows teachers to request a substitute teacher for a particular subject and room.
              </Card.Text>
              <Button style={{marginTop : "10px"}}  variant="success" onClick={() => Router.push('/replaceFaculty')}>View Request</Button>
            </Card.Body>
          </Card>
        </Col>
        </Row>
        </div>
        </>
    );
  }
  
  export default Admin;