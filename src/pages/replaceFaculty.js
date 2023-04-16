import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';
import Router from 'next/router'
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect,useState } from 'react';
import { isAuthincated } from '../../helper/auth';
import { API } from '../../backend';


const ReplaceFaculty = () => {
  const [schedule, setSchedule] = useState([]);
  const [allFaculties, setallFaculties] = useState([])
  const [setFacultyName, setsetFacultyName] = useState('Select Faculty')
  const [setFacultyId, setsetFacultyId] = useState('')

  useEffect(() => {
    if (!isAuthincated()) {
      console.log("hii")
    }
    const token = isAuthincated().token;
    const user = isAuthincated().user;

    const fetchRequest = async () => {
      const res = await fetch(`${API}/replace/show/all`)
      const result = await res.json();
      console.log(result.data);
      // Get the 
      

      setSchedule(result.data);
    }
    const getFaculty = async (item) => {
  
      const res = await fetch(`${API}/admin/show/faculty/all`)
      const result = await res.json();
      console.log(result.data);
      setallFaculties(result.data);
    }
    getFaculty()
    fetchRequest();
    
  }, [])

  const replaceFaculty = async (item) => {
    const token = isAuthincated().token;
    const user = isAuthincated().user;
    // Remove from the schedule with id = item._id from the schedule list
    const newData = schedule.filter((data) => data._id !== item._id)
   


    const res = await fetch(`${API}/replace/accept?scheduleId=${item.scheduleId}&facultyId=${item.facultyId}`, {
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
      },
      body : JSON.stringify({
        request_id : item._id,
        facultyId : setFacultyId,
        facultyName : setFacultyName
      })
    })
    const result = await res.json();
    console.log(result);
    if (result.error) {
      alert(result.error);
      // Remove from the schedule list
    }
    else {
      return  setSchedule(newData)
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
        <Badge bg="secondary">Replace Faculty</Badge>
        </h1>
        <p style={{textAlign : "center", marginTop : "10px", color : "#fff", cursor : "pointer" }} onClick={() => Router.push(`/admin`)  }> {"<- Back to Dashboard"}</p>

        <p style={{textAlign : "center", color : "#fff", marginTop : "40px"}}> <b>This is list of replacements</b></p>
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
        {
           schedule.length === 0 ? <tr><td colSpan="8" style={{textAlign : "center"}}>No Faculty Available</td></tr> :
          schedule.map((item, index) => {
            console.log(item)
            return (
              <tr key={index}>
                <td style={{verticalAlign : "middle"}}>{item.courceCode}</td>
                <td style={{verticalAlign : "middle"}}>{item.courceName}</td>
                <td style={{verticalAlign : "middle"}}>{formatDate(item.date)}</td>
                <td style={{verticalAlign : "middle"}}>{item.time}</td>
                <td style={{verticalAlign : "middle"}}>{item.facultyName}</td>
                <td style={{verticalAlign : "middle"}}>{item.room}</td>
                <td style={{verticalAlign : "middle"}}>
                  <Dropdown style={{marginBottom : "10px"}}>
            
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{width : "200px"}} >
                    {/* Condtitional render which teacher want replacement */}
                    {setFacultyName}
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{height : "200px", overflow : "scroll", overflowX : "hidden"}}>
                        {/* Map the faculty names */}
                        {
                          allFaculties.map((item, index) => {
                            console.log(item)
                            return (
                              <Dropdown.Item key={index} onClick={() => {
                                setsetFacultyName(item.name);
                                setsetFacultyId(item._id);
                              }}>
                                {item.name}
                              </Dropdown.Item>
                            )
                          }
                          )
                        }
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
                <td style={{verticalAlign : "middle"}}>
                  <Button variant="success" onClick={() => replaceFaculty(item)}>Replace</Button>
                </td>
              </tr>
            )
          }
          )
        }
      </tbody>
    </Table>
        </div>
        </>
    );
  };
  
  export default ReplaceFaculty;