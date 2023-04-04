// Crteate login form id and passoerd

// Path: src/pages/login.js

import React, { useState,useEffect} from 'react';
import styles from '../styles/adminLogin.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Router from 'next/router'
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import { API } from '../../backend';

const AdminLogin = () => {
    // Create state for course code, date, time, faculty as arrey and room as arrey
    const [courseCode, setCourseCode] = useState('Select Course Code');
    const [courceName, setcourceName] = useState('')
    const [courseCodeOnly, setCourseCodeOnly] = useState('Select Course Code');
    const [selectCourseCode, setselectCourseCode] = useState([])
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    // const [selectFaculty, setselectFaculty] = useState('Select Faculty')
    const [selectFaculty1, setselectFaculty1] = useState('Select Faculty 1')
    const [selectFaculty1ID, setselectFaculty1ID] = useState('')
    const [selectFaculty2, setselectFaculty2] = useState('Select Faculty 2')
    const [selectFaculty2ID, setselectFaculty2ID] = useState('')
    const [selectFaculty3, setselectFaculty3] = useState('Select Faculty 3')
    const [selectFaculty3ID, setselectFaculty3ID] = useState('')
    const [selectFaculty4, setselectFaculty4] = useState('Select Faculty 4')
    const [selectFaculty4ID, setselectFaculty4ID] = useState('')
    const [selectRoom1, setselectRoom1] = useState('Select Room 1')
    const [selectRoom1ID, setselectRoom1ID] = useState('Select Room 1')
    const [selectRoom2, setselectRoom2] = useState('Select Room 2')
    const [selectRoom2ID, setselectRoom2ID] = useState('Select Room 2')
    const [selectRoom3, setselectRoom3] = useState('Select Room 3')
    const [selectRoom3ID, setselectRoom3ID] = useState('Select Room 3')
    const [selectRoom4, setselectRoom4] = useState('Select Room 4')
    const [selectRoom4ID, setselectRoom4ID] = useState('Select Room 4')
    const [facultyArray, setFacultyArray] = useState([]);
    const [room, setRoom] = useState([]);
    const [data, setData] = useState([])
    const [error, setError] = useState('');

    const [regStudents, setregStudents] = useState(0)

    // UseEffect to get all faculty names and room
    useEffect(() => {
        const fetchFacultyData = async () => {
            const res = await fetch(`${API}/schedule/faculty?date=${date}&time=${time}`);
            const result = await res.json();
            setFacultyArray(result.data);
        };
        const fetchRoomData = async () => {
            const res = await fetch(`${API}/schedule/room?date=${date}&time=${time}`);
            const result = await res.json();
            setRoom(result.data);
        };
        const fetchCourseData = async () => {
            const res = await fetch(`${API}/courceCode/all`);
            const result = await res.json();
            setselectCourseCode(result.data);
            console.log(result.data)
        };
        fetchCourseData();
        fetchFacultyData();
        fetchRoomData();
    }, [date, time]);



            


    const handleSubmit = async (e) => {
console.log("Hello")
        // no room shoud be equal to each other if there show alert amd if it equal to Select Room then its ok 
        if (selectRoom1 === selectRoom2 || selectRoom1 === selectRoom3 || selectRoom1 === selectRoom4 || selectRoom2 === selectRoom3 || selectRoom2 === selectRoom4 || selectRoom3 === selectRoom4) {
            alert('Room should not be equal to each other')
        }else if (selectRoom1 === 'Select Room' || selectRoom2 === 'Select Room' || selectRoom3 === 'Select Room' || selectRoom4 === 'Select Room') {
            alert('Please select room')
        }else if (selectFaculty1 === 'Select Faculty' || selectFaculty2 === 'Select Faculty' || selectFaculty3 === 'Select Faculty' || selectFaculty4 === 'Select Faculty') {
            alert('Please select faculty')
        }else if (selectFaculty1 === selectFaculty2 || selectFaculty1 === selectFaculty3 || selectFaculty1 === selectFaculty4 || selectFaculty2 === selectFaculty3 || selectFaculty2 === selectFaculty4 || selectFaculty3 === selectFaculty4) {
            alert('Faculty should not be equal to each other')
        }else if (courseCode === 'Select Course Code') {
            alert('Please select course code')
        }else if (date === '') {
            alert('Please select date')
        }else if (time === '') {
            alert('Please select time')
        }


                

        const faculties = []
        if (regStudents <= 30) {
             faculties.push(
                {
                    facultyId : selectFaculty1ID,
                    facultyName: selectFaculty1,
                })
        }else if (regStudents <= 60) {
             faculties.push(
                {
                    facultyId : selectFaculty1ID,
                    facultyName: selectFaculty1,
                },
                {
                    facultyId : selectFaculty2ID,
                    facultyName: selectFaculty2,
                })
        }else if (regStudents <= 90) {
             faculties.push(
                {
                    facultyId : selectFaculty1ID,
                    facultyName: selectFaculty1,
                },
                {
                    facultyId : selectFaculty2ID,
                    facultyName: selectFaculty2,
                },
                {
                    facultyId : selectFaculty3ID,
                    facultyName: selectFaculty3,
                })
        }else if (regStudents <= 120) {
             faculties.push(
                {
                    facultyId : selectFaculty1ID,
                    facultyName: selectFaculty1,
                },
                {
                    facultyId : selectFaculty2ID,
                    facultyName: selectFaculty2,
                },
                {
                    facultyId : selectFaculty3ID,
                    facultyName: selectFaculty3,
                },
                {
                    facultyId : selectFaculty4ID,
                    facultyName: selectFaculty4,
                })
        }

        const room = []
        if (regStudents <= 30) {
             room.push(
                {
                    roomId : selectRoom1ID,
                    givenRoomId: selectRoom1,
                })
        }else if (regStudents <= 60) {
             room.push(
                {
                    roomId : selectRoom1ID,
                    givenRoomId: selectRoom1,
                },
                {
                    roomId : selectRoom2ID,
                    givenRoomId: selectRoom2,
                })
        }else if (regStudents <= 90) {
             room.push(
                {
                    roomId : selectRoom1ID,
                    givenRoomId: selectRoom1,
                },
                {
                    roomId : selectRoom2ID,
                    givenRoomId: selectRoom2,
                },
                {
                    roomId : selectRoom3ID,
                    givenRoomId: selectRoom3,
                })
        }else if (regStudents <= 120) {
             room.push(
                {
                    roomId : selectRoom1ID,
                    givenRoomId: selectRoom1,
                },
                {
                    roomId : selectRoom2ID,
                    givenRoomId: selectRoom2,
                },
                {
                    roomId : selectRoom3ID,
                    givenRoomId: selectRoom3,
                },
                {
                    roomId : selectRoom4ID,
                    givenRoomId: selectRoom4,
                })
        }
        console.log("Hello 2")

        const res = await fetch('http://localhost:8080/api/schedule/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                courceCode: courseCodeOnly,
                courceName : courceName,
                date: date,
                time: time,
                faculties : faculties,
                rooms : room,
            })
        });
        const result = await res.json();
        if (result.err) {
            console.log(result.err)
            setError(result.err);
        } else {
            Router.push('/viewAndEditSchedule');
        }

    }

    

    return (
    <div className={styles.Conatiner} style={{overflowX : "scroll", height : "100vh"}} >
        <Card style={{padding: "40px",marginTop : "-110px",marginBottom : "40px"}}>
        <Form >
        <p className="fs-3" style={{textAlign : "center"}}>Create Exam Schedule</p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Cource code</Form.Label><br/>
            <Form.Text className="text-muted">
            Select cource code from the Dropdown
            </Form.Text><br/>
            <Dropdown style={{marginBottom : "10px"}}>
            
            <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{width : "400px"}} >
            {courseCode}
            </Dropdown.Toggle>

            <Dropdown.Menu style={{height : "200px", overflow : "scroll", overflowX : "hidden"}}>
                {/* Map the faculty names */}
                {
                    selectCourseCode.map((item) => {
                        return (
                            <Dropdown.Item eventKey={item._id} onClick={() =>{setCourseCode(`${item.courceCode} - ${item.courceName}`),setcourceName(item.courceName), setCourseCodeOnly(item.courceCode),setregStudents(item.registeredStudent)}} style={{width : "400px"}}>{`${item.courceCode} - ${item.courceName}`}</Dropdown.Item>
                        )
                    })
                }
                
            </Dropdown.Menu>
            </Dropdown>
           
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" placeholder="Name"  onChange={(e) => setDate(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Time</Form.Label>
            <Form.Control type="time" placeholder="Name" onChange={(e) => setTime(e.target.value)} />
        </Form.Group>

        {/* Select Faculty */}

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Select Faculty</Form.Label>
            <Dropdown style={{marginBottom : "10px"}}>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{width : "400px"}} >
            {selectFaculty1}
            </Dropdown.Toggle>

            <Dropdown.Menu style={{height : "200px", overflow : "scroll", overflowX : "hidden"}}>
                {/* Map the faculty names */}
                {
                    facultyArray.map((item) => {
                        return (
                            <Dropdown.Item eventKey={item._id} onClick={() =>{setselectFaculty1(item.name),setselectFaculty1ID(item._id)}} style={{width : "400px"}}>{item.name}</Dropdown.Item>
                        )
                    })
                }
            </Dropdown.Menu>
            </Dropdown>
            {
                // if reg student is more than 30 then show the second faculty
                regStudents > 30 ?
                    <Dropdown style={{marginBottom : "10px"}}>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{width : "400px"}} >
                    {selectFaculty2}
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{height : "200px", overflow : "scroll", overflowX : "hidden"}}>
                        {/* Map the faculty names */}
                        {
                            facultyArray.map((item) => {
                                return (
                                    <Dropdown.Item eventKey={item._id} onClick={() =>{setselectFaculty2(item.name),setselectFaculty2ID(item._id)}} style={{width : "400px"}}>{item.name}</Dropdown.Item>
                                )
                            })
                        }
                    </Dropdown.Menu>
                    </Dropdown>
                : null
            }

            {
                // if reg student is more than 30 then show the second faculty
                regStudents > 60 ?
                    <Dropdown style={{marginBottom : "10px"}}>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{width : "400px"}} >
                    {selectFaculty3}
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{height : "200px", overflow : "scroll", overflowX : "hidden"}}>
                        {/* Map the faculty names */}
                        {
                            facultyArray.map((item) => {
                                return (
                                    <Dropdown.Item eventKey={item._id} onClick={() =>{setselectFaculty3(item.name),setselectFaculty3ID(item._id)}} style={{width : "400px"}}>{item.name}</Dropdown.Item>
                                )
                            })
                        }
                    </Dropdown.Menu>
                    </Dropdown>
                : null
            }

            {
                // if reg student is more than 30 then show the second faculty
                regStudents > 90 ?
                    <Dropdown style={{marginBottom : "10px"}}>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{width : "400px"}} >
                    {selectFaculty4}
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{height : "200px", overflow : "scroll", overflowX : "hidden"}}>
                        {/* Map the faculty names */}
                        {
                            facultyArray.map((item) => {
                                return (
                                    <Dropdown.Item eventKey={item._id} onClick={() =>{setselectFaculty4(item.name),setselectFaculty4ID(item._id)}} style={{width : "400px"}}>{item.name}</Dropdown.Item>
                                )
                            })
                        }
                    </Dropdown.Menu>
                    </Dropdown>
                : null
            }

            
        </Form.Group>

        {/* Room */}

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Select Room</Form.Label>
            <Dropdown style={{marginBottom : "10px"}}>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{width : "400px"}} >
            {selectRoom1}
            </Dropdown.Toggle>

            <Dropdown.Menu style={{height : "200px", overflow : "scroll", overflowX : "hidden"}}>
                {/* Map the faculty names */}
                {
                    room.map((item) => {
                        return (
                            <Dropdown.Item eventKey={item._id} onClick={() =>{setselectRoom1(item.roomId),setselectRoom1ID(item._id)}} style={{width : "400px"}}>{item.roomId}</Dropdown.Item>
                        )
                    })
                }
                {/* <Dropdown.Item eventKey={"adminLogin"} onClick={() =>setselect("adminLogin")} style={{width : "400px"}}>Admin</Dropdown.Item> */}
            </Dropdown.Menu>
            </Dropdown>
                {
                // if reg student is more than 30 then show the second room
                regStudents > 30 ?
                    <Dropdown style={{marginBottom : "10px"}}>
                
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{width : "400px"}} >
                    {selectRoom2}
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{height : "200px", overflow : "scroll", overflowX : "hidden"}}>
                        {/* Map the faculty names */}
                        {
                            room.map((item) => {
                                return (
                                    <Dropdown.Item eventKey={item._id} onClick={() =>{setselectRoom2(item.roomId),setselectRoom2ID(item._id)}} style={{width : "400px"}}>{item.roomId}</Dropdown.Item>
                                )
                            })
                        }
                        {/* <Dropdown.Item eventKey={"adminLogin"} onClick={() =>setselect("adminLogin")} style={{width : "400px"}}>Admin</Dropdown.Item> */}
                    </Dropdown.Menu>
                    </Dropdown> : null
                }
                    {
                // if reg student is more than 30 then show the second room
                regStudents > 60 ?
                    <Dropdown style={{marginBottom : "10px"}}>
                
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{width : "400px"}} >
                    {selectRoom3}
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{height : "200px", overflow : "scroll", overflowX : "hidden"}}>
                        {/* Map the faculty names */}
                        {
                            room.map((item) => {
                                return (
                                    <Dropdown.Item eventKey={item._id} onClick={() =>{setselectRoom3(item.roomId),setselectRoom3ID(item._id)}} style={{width : "400px"}}>{item.roomId}</Dropdown.Item>
                                )
                            })
                        }
                        {/* <Dropdown.Item eventKey={"adminLogin"} onClick={() =>setselect("adminLogin")} style={{width : "400px"}}>Admin</Dropdown.Item> */}
                    </Dropdown.Menu>
                    </Dropdown> : null
                }
                    {
                // if reg student is more than 30 then show the second room
                regStudents > 90 ?
                    <Dropdown style={{marginBottom : "10px"}}>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{width : "400px"}} >
                    {selectRoom4}
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{height : "200px", overflow : "scroll", overflowX : "hidden"}}>
                        {/* Map the faculty names */}
                        {
                            room.map((item) => {
                                return (
                                    <Dropdown.Item eventKey={item._id} onClick={() =>{setselectRoom4(item.roomId),setselectRoom4ID(item._id)}} style={{width : "400px"}}>{item.roomId}</Dropdown.Item>
                                )
                            })
                        }
                        {/* <Dropdown.Item eventKey={"adminLogin"} onClick={() =>setselect("adminLogin")} style={{width : "400px"}}>Admin</Dropdown.Item> */}
                    </Dropdown.Menu>
                    </Dropdown> : null
                }
                
            
        </Form.Group>
        
        {/* Center the button */}
        <div style={{textAlign : "center",marginTop : "20px"}}>
        <Button variant="primary" style={{marginBottom : "10px"}} onClick={() => handleSubmit()}>
            Create Exam Schedule
        </Button> <br/>
        <Form.Text className="text-muted" >
            or
        </Form.Text><br/>
        <Button variant="success" style={{marginTop : "10px"}} onClick={() => Router.push('/viewAndEditSchedule')}>
            View Exam Schedule
        </Button>
        </div>
        </Form>
        </Card>
    </div>
    );
    };

export default AdminLogin;