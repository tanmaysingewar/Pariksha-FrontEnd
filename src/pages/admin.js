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
        <div
          className="h-screen pb-14 bg-right bg-cover"
        >
        <h1 style={{textAlign : "center", marginTop : "40px"}}>
        Pariksha <Badge bg="secondary">Admin Panel</Badge>
      </h1>
        <Row xs={1} md={2} className="g-4" style={{width : "80%", alignItems : "center", margin : "auto"}}>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Faculty</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="success" onClick={() => Router.push('/faculty')}>Go to Faculty</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Room</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="success" onClick={() => Router.push('/room')}>Go to Room</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Subject</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="success" onClick={() => Router.push('/subject')}>Go to Subject</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Create Schedule</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="success" onClick={() => Router.push('/createSchedule')}>Go to Schedule</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>View Schedule</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="success" onClick={() => Router.push('/onlyViewSchedule')}>View Schedule</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Replace Request</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="success" onClick={() => Router.push('/replaceFaculty')}>View Request</Button>
            </Card.Body>
          </Card>
        </Col>
       
        </Row>
        </div>
        </>
    );
  }
  
  export default Admin;