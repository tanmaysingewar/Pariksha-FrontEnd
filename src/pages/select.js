import React,{useState} from 'react';
import styles from '../styles/select.module.css';
import Router from 'next/router'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

const Select = () => {
  const [select, setselect] = useState("Login As")
  return (
    <div className={styles.container} >
      {/* <Card> */}
      <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic" >
        {select =="adminLogin" ? "Admin" : select =="facultyLogin" ? "Faculty" : "Login As"}
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Item eventKey={"adminLogin"} onClick={() =>setselect("adminLogin")}>Admin</Dropdown.Item>
        <Dropdown.Item eventKey={"facultyLogin"} onClick={() =>setselect("facultyLogin")}>Faculty</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            <Button variant="dark" style={{marginLeft : "20px"}} onClick={() => Router.push(`/${select}`)} >
            Continue
        </Button>
        {/* </Card> */}
  </div>
  );
};

export default Select;
