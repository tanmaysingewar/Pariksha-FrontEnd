import React, { useEffect,useState } from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';
import Router from 'next/router'
import { useRouter } from 'next/router'
import Link from 'next/link';
import { isAuthincated } from '../../helper/auth';
import { API } from '../../backend';

const Faculty = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    // fetch all faculty data
      const fetchFaculty = async () => {
      const response = await fetch(`${API}/admin/selected/faculty`);
      const data = await response.json();
      console.log(data);
      setData(data.data)
    }
    fetchFaculty()
   
  }, [])

  const deleteFaculty = async (id) => {
    // make method delete request
    const response = await fetch(`${API}/admin/remove/faculty?id=${id}`, {
      method : "GET"
    });
    const data_new = await response.json();
    console.log(data_new);
    // remove faculty from list
    const newData = data.filter((item) => item._id !== id)
    setData(newData)
  }

  
    return (
        <>
        <div style={{overflowY : "scroll", height : "100vh"}} >
        <h1 style={{textAlign : "center", marginTop : "40px"}}>
        <Badge bg="secondary">View Faculty</Badge>
        </h1>
        <Button variant="success" style={{margin : "auto", display : "block", marginBottom : "20px",marginTop : "60px"}} onClick={() => Router.push('/addFaculty')}>Add Faculty</Button>
        <p style={{textAlign : "center", color : "#fff"}}> <b>This is list of all invigilators</b></p>
        <Table striped bordered hover style={{width : "80%", margin : "auto", marginTop : "20px", marginBottom : "60px"}} className="table-fixed">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Contact No.</th>
          <th style={{width : "100px"}}>Edit</th>
          <th style={{width : "100px"}}>Delete</th>
        </tr>
      </thead>
      <tbody>
        {/* Loop the data  */}
        {
           data.length === 0 ? <tr><td colSpan="5" style={{textAlign : "center"}}>No Faculty Available</td></tr> :
          data.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td style={{overflow :'hidden'}}>{item.email}</td>
                <td>{item.contact_no}</td>
                <td >
                <Link
                          href={{
                            pathname: "/editFaculty",
                            query: {
                              id: item._id,
                            }, // the data
                          }}
                >
                       <Button variant="warning" onClick={() => Router.push(`/editFaculty?id=${item._id}`)}>Edit</Button>
                </Link>

                  
                </td>
                <td>
                  <Button variant="danger" onClick={() => deleteFaculty(item._id)}>Delete</Button>
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
  
  export default Faculty;