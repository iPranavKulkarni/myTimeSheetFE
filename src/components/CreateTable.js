
import ReadOnlyRow from "./add-delete-table-rows/ReadOnlyRow";
import React, { useEffect, useState, Fragment } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";//IMP
import { Container, Form, Input, Button, Col, Row, } from 'reactstrap';
import {
    getEmployess, getProjects,
    getHours, getDescriptions, addAllData
} from '../services/userservice';
const CreateTable = () => {
    const [contacts, setContacts] = useState([{}]);
    const [fullName, setName] = useState();
    const [Employees, setEmployees] = useState([]);
    const [addFormData, setAddFormData] = useState({
        fullName: "",
    });

    const [editFormData, setEditFormData] = useState({
        fullName: "",
    });

    const [editContactId, setEditContactId] = useState(null);

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };
    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newContact = {

            fullName: addFormData.select,

        };

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {

            fullName: editFormData.fullName,

        };

        const newContacts = [...contacts];

        const index = contacts.findIndex((contact) => contact.id === editContactId);

        newContacts[index] = editedContact;

        setContacts(newContacts);
        setEditContactId(null);
    };




    useEffect(() => {
        getEmployess()
            .then(data => {
                setEmployees(data);
            });
    }, []);

    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];

        const index = contacts.findIndex((contact) => contact.id === contactId);

        newContacts.splice(index, 1);

        setContacts(newContacts);
    };

    return (
        <div className="app-container">
            <form onSubmit={handleEditFormSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>*</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <Fragment>
                                <ReadOnlyRow
                                    contact={contact}
                                    handleDeleteClick={handleDeleteClick} />
                            </Fragment>
                        ))}
                    </tbody>
                </table>
            </form>

            <h2>Add a Contact</h2>
            <Form onSubmit={handleAddFormSubmit}>
                <Row className="row-cols-lg-auto g-3 align-items-center">
                    <Col >
                        {/* <input type="text" name="fullName" required="required" placeholder="Enter a name..." onChange={handleAddFormChange} /> */}
                        <Input type="select" name="select" required="required" value={fullName} onChange={handleAddFormChange}>
                            {/* <input type="text" name="fullName" required="required" placeholder="Enter a name..." onChange={handleAddFormChange} ></input> */}
                            <option selected disabled hidden>Name</option>
                            {
                                Employees.map(e => {
                                    return <option value={e.id}>{e.Name}</option>
                                })
                            }
                        </Input>
                    </Col>
                    <Button type="submit">Submit</Button>
                </Row>
            </Form>
        </div>
    );
};

export default CreateTable;
