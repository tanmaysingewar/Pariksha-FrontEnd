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
import { useEffect, useState } from 'react';
import { isAuthincated } from '../../helper/auth';
import { API } from '../../backend';


const FacultyDuty = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    if (!isAuthincated()) {
       Router.push('/select');
    }else{
      const token = isAuthincated().token;
      const user = isAuthincated().user;
  
      const fetchSchedule = async () => {
        const res = await fetch(`${API}/schedule/selected/faculty?facultyId=${user._id}`)
  
        const result = await res.json();
        console.log(result.data);
        setSchedule(result.data);
      }
  
    fetchSchedule();
    }
    

  }, [])

const replaceFaculty = async (item,room) => {

  const token = isAuthincated().token;
  const user = isAuthincated().user;

  // get auth user room name from item


  const res = await fetch(`${API}/replace/request`, {
    method : "POST",
    headers : {
      "Content-Type" : "application/json",
    },
    body : JSON.stringify({
      scheduleId : item._id,
      facultyId : user._id,
      facultyName : user.name,
      courceCode : item.courceCode,
      courceName : item.courceName,
      date : item.date,
      time : item.time,
      room : room
    })
  })

  const result = await res.json();
  console.log(result);
  if(result.error){
    alert(result.error);
  }else{
    console.log(result.data.name)
    if(result.data.name == "ValidationError"){ 
      return alert("You have already requested for this schedule");
     }
    alert(result.message);
  }

}


  function formatDate (input) {
    var datePart = input.match(/\d+/g),
    year = datePart[0].substring(2), // get only two digits
    month = datePart[1], day = datePart[2];
  
    return day+'/'+month+'/'+year;
  }
    return (
        <>
       <div style={{overflowY : "scroll", height : "100vh",marginTop : "40px"}}>
        <h1 style={{textAlign : "center"}}>
        <Badge bg="secondary">My Duties</Badge>
        </h1>
        <p style={{textAlign : "center", color : "#fff", marginTop : "10px"}}> <b>This is list of all allotted Duties</b></p>
        <Table striped bordered hover style={{width : "80%", margin : "auto", marginTop : "20px", marginBottom : "60px"}}>
      <thead>
        <tr>
          <th>Cource Code</th>
          <th>Cource Name</th>
          <th>Date</th>
          <th>Time</th>
          <th>Faculty</th>
          <th>Room</th>
          <th>Replace</th>
        </tr>
      </thead>
      <tbody>
        {
           schedule.length === 0 ? <tr><td colSpan="7" style={{textAlign : "center"}}>No Schedule Available</td></tr> :
          schedule.map((item) => {
            return (
              <>
              <tr>
                <td rowSpan={item.faculties.length} style={{verticalAlign : "middle"}}>{item.courceCode}</td>
                <td rowSpan={item.faculties.length} style={{verticalAlign : "middle"}}>{item.courceName}</td>
                <td rowSpan={item.faculties.length} style={{verticalAlign : "middle"}}>{formatDate(item.date)}</td>
                <td rowSpan={item.faculties.length} style={{verticalAlign : "middle"}}>{item.time}</td>
                {/* Show only faculty name where id is equel to user._id */}
               {
                  item.faculties.map((faculty, index) => {
                    if(faculty.facultyId === isAuthincated().user._id){
                      return (
                        <>
                        <td  style={{verticalAlign : "middle"}}>{faculty.facultyName}</td>
                        <td  style={{verticalAlign : "middle"}}> {item.rooms[index].givenRoomId}</td>
                        <td rowSpan={item.faculties.length} style={{verticalAlign : "middle"}}>
                          <Button variant="primary" onClick={() => replaceFaculty(item,item.rooms[index].givenRoomId)}>Replace</Button>
                        </td>
                        </>
                      )
                    }
                  }
                  )
               }
                
                {/* Show only room name where id is equel to user._id */}
              </tr>
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
  
  export default FacultyDuty;