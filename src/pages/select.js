import React,{useState} from 'react';
import styles from '../styles/select.module.css';
import Router from 'next/router'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import background from "@/assets/bg.svg";
const Select = () => {
  const [select, setselect] = useState("Dropdown Button")
  return (
    <div className={styles.container} >
      <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic" >
        {select =="adminLogin" ? "Admin" : select =="facultyLogin" ? "Faculty" : "Dropdown Button"}
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Item eventKey={"adminLogin"} onClick={() =>setselect("adminLogin")}>Admin</Dropdown.Item>
        <Dropdown.Item eventKey={"facultyLogin"} onClick={() =>setselect("facultyLogin")}>Faculty</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            <Button variant="dark" style={{marginLeft : "20px"}} onClick={() => Router.push(`/${select}`)} >
            Continue
        </Button>
  </div>
  );
};

export default Select;
