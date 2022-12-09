import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";//IMP
import { Container, Form, Input, Button, Col, Row, } from 'reactstrap';
import {
    getEmployess, getProjects,
    getHours, getDescriptions, addAllData
} from '../services/userservice';
// import ShowData from './ShowData';
function TableRows({ rowsData, deleteTableRows, handleChange }) {
    const [Name, setName] = useState();
    const [startDate, setStartDate] = useState(null);
    const [Project, setProject] = useState();
    const [Time, setTime] = useState();
    const [Task, setDescription] = useState();
    const [Comment, setComment] = useState();
    const [Employees, setEmployees] = useState([]);
    const [Projects, setProjects] = useState([]);
    const [Hours, setHours] = useState([]);
    const [Descriptions, setDescriptions] = useState([]);
    useEffect(() => {
        getEmployess()
            .then(data => {
                setEmployees(data);
            });
        getProjects()
            .then(data => {
                setProjects(data);
            });
        getHours()
            .then(data => {
                setHours(data);
            });
        getDescriptions().then(data => {
            setDescriptions(data);
        })
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        const currentUser = createCurrentUserObject();
        addAllData(currentUser)
            .then(data => {
                if (data.FirstName) {
                    alert("User Added")
                    window.location.reload();
                }
            });
        // window.location.reload();
    };
    function createCurrentUserObject() {
        let currentUser = {
            Name: Name,
            Project: Project,
            Date: startDate,
            Time: Time,
            Task: Task,
            Comment: Comment
        }
        return currentUser;
    }
    return (
        rowsData.map((data, index) => {
            const { fullName, emailAddress, salary } = data;
            return (
                <tr key={index}>
                    <div onSubmit={handleSubmit}>
                        {/* <Form onSubmit={handleSubmit}> */}
                        <Row className="row-cols-lg-auto g-3 align-items-center">
                            <Col >
                                <DatePicker selected={startDate} placeholder="date"
                                    dateFormat="dd-MM-yyyy"
                                    maxDate={new Date()}
                                    isClearable
                                    showYearDropdown
                                    onChange={(date: Date) => setStartDate(date)} />
                            </Col>
                            <Col >
                                <Input type="select" name="select" id="Name" value={Name} onChange={e => setName(e.target.value)} required>
                                    <option selected disabled hidden>Name</option>
                                    {
                                        Employees.map(e => {
                                            return <option value={e.id}>{e.Name}</option>
                                        })
                                    }
                                </Input>
                            </Col>
                            <Col >
                                <Input type="select" name="select" id="Project" value={Project} onChange={e => setProject(e.target.value)} required>
                                    <option selected disabled hidden>Project</option>
                                    {
                                        Projects.map(e => {
                                            return <option value={e.id}>{e.Project}</option>
                                        })
                                    }
                                </Input>
                            </Col>
                            <Col >
                                <Input type="select" name="select" id="Time" value={Time} onChange={e => setTime(e.target.value)} required>
                                    <option selected disabled hidden>Hours</option>
                                    {
                                        Hours.map(e => {
                                            return <option value={e.id}>{e.Time}</option>
                                        })
                                    }
                                </Input>
                            </Col>
                            <Col >
                                <Input type="select" name="select" id="Task" value={Task} onChange={e => setDescription(e.target.value)} required>
                                    <option selected disabled hidden>Task</option>
                                    {
                                        Descriptions.map(e => {
                                            return <option value={e.id}>{e.Task}</option>
                                        })
                                    }
                                </Input>
                            </Col>
                            <Col >
                                <Input type="text" name="Comment" id="Comment" placeholder="Comment" value={Comment} onChange={e => setComment(e.target.value)} required />
                            </Col>
                            <Button type="submit">Submit</Button>
                        </Row>
                        {/* </Form> */}
                    </div>
                </tr>

            )
        })
    )
}
export default TableRows;