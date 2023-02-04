import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
export const RestuarantList = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    let result = await axios.get("http://localhost:3000/restaurant");
    console.log(result.data);
    setData(result.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {/* <h3>Restuarant List</h3> */}
      {data ? (
              <div>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>E-mail</th>
                      <th>Location</th>
                      <th>Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => {
                      return(<tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.location}</td>
                        <td>{item.rating}</td>
                      </tr>)
                    })}
                  </tbody>
                </Table>
              </div>
      ) : (
        <p>Please Wait....</p>
      )}
    </div>
  );
};
