import React, { useEffect,useState } from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';
import { API } from '../../backend';
const AddFaculty = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    // fetch all faculty data
    const fetchFaculty = async () => {
      const response = await fetch(`${API}/admin/unselected/faculty`);
      const data = await response.json();
      console.log(data);
      setData(data.data)
    }
    fetchFaculty()
  }, [])

  const addFacultyToList = async (id) => {
    const response = await fetch(`${API}/admin/add/faculty?id=${id}`);
    const data_new = await response.json();
    console.log(data_new);
    // remove faculty from list
    const newData = data.filter((item) => item._id !== id)
    setData(newData)
  }

    return (
        <>
        <div style={{overflowY : "scroll", height : "100vh",marginTop : "40px"}}>
        <h1 style={{textAlign : "center", marginTop : "40px"}}>
        <Badge bg="secondary">Add Faculty</Badge>
        </h1>
        <p style={{textAlign : "center",color : "#fff", marginTop : "10px"}}> <b>This is list of all Faculty</b></p>
        <Table striped bordered hover style={{width : "80%", margin : "auto", marginTop : "20px", marginBottom : "60px"}}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Contact No.</th>
          <th>Add as Invigilators</th>
        </tr>
      </thead>
      <tbody>
      {
        // If data is empty then show message
        data.length === 0 ? <tr><td colSpan="4" style={{textAlign : "center"}}>No Faculty Available</td></tr> :

          data.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact_no}</td>
                <td style={{}}>
                  <Button variant="success" onClick={() => addFacultyToList(item._id)}>Add</Button>
                </td>
              </tr>
            )
          }
          )}
      </tbody>
    </Table>
        </div>
        </>
    );
  };
  
  export default AddFaculty;