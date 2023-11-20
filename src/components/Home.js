import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import Employees from "./Employees";

function Home() {
  let history = useNavigate();

  const handleEdit = (id, name, age) => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
    localStorage.setItem("Id", id);
  };

  const handleDelete = (id) => {
    var index = Employees.map(function (e) {
      return e.id;
    }).indexOf(id);
    Employees.splice(index, 1);

    history("/");
  };

  return (
    <Fragment>
      <div style={{ margin: "10rem" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th>Name</th>
              <th> Age </th>
              <th> Actions </th>
            </tr>
          </thead>
          <tbody>
            {Employees && Employees.length > 0
              ? Employees.map((item) => {
                  return (
                    <tr style={{ textAlign: "center" }}>
                      <td>{item.Name}</td>
                      <td>{item.Age}</td>
                      <td>
                        <Link to={"/edit"}>
                          <Button
                            onClick={() =>
                              handleEdit(item.id, item.Name, item.Age)
                            }
                          >
                            Edit
                          </Button>
                        </Link>
                        &nbsp;
                        {/* <Link to={'/delete'}> */}
                        <Button onClick={() => handleDelete(item.id)}>
                          Delete
                        </Button>
                        {/* </Link> */}
                      </td>
                    </tr>
                  );
                })
              : "Employees Not Found!"}
          </tbody>
        </Table>
        <br />
        <Link className="d-grid" to="/create">
          <Button size="1g gap-2">Create</Button>
        </Link>
      </div>
    </Fragment>
  );
}

export default Home;
