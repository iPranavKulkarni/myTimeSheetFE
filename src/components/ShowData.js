import React, { useEffect, useState } from 'react';
import { Table, Card, CardHeader, CardBody } from 'reactstrap';
import { getAllData } from '../services/userservice';

const ShowData = () =>
{
    const style = {
        table: {
          width: '100%',
          display: 'table',
          borderSpacing: 0,
          borderCollapse: 'separate',
        },
        th: {
          top: 0,
          left: 0,
          zIndex: 2,
          position: 'sticky',
          backgroundColor: '#fff',
        },
      };
    const [Users, setUsers] = useState([]);
    useEffect(() => {
        getAllData()
        .then(data => {
            setUsers(data);
        });

    }, []);
    return (
        <div>
        <Card>
          <CardHeader>All Data</CardHeader>
          <CardBody>
            <div
              style={{
                maxHeight: '650px',
                overflowY: 'auto',
              }}
            >
              <Table bordered height="200" style={style.table}>
                <thead>
                  <tr>
                    <th>Name</th>
            <th>Date</th>
            <th>Project</th>
            <th>Hours</th>
            <th>Description</th>
            <th>Comment</th>
                  </tr>
                </thead>
                <tbody>
            {
                Users.map(e => {
                    return  <tr>
                                <td scope="row">{e.Name}</td>
                                <td>{e.Date}</td>
                                <td>{e.Project}</td>
                                <td>{e.Time}</td>
                                <td>{e.Task}</td>
                                <td>{e.Comment}</td>
                            </tr>
                })
            }
        </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
        </div>
    );
}

export default ShowData