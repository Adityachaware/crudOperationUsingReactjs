import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data);
    console.log(result, "result");
  };

  const deleteUser = async (id) => {
   await axios.delete(`http://localhost:3003/users/${id}`);
   loadUsers();
  }

  return (
    <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/user/${user.id}`} className="btn mr-2 bg-primary">view</Link>
                <Link to={`/user/edit/${user.id}`} className="btn mr-2 bg-light">edit</Link>
                <Link className="btn bg-danger" onClick={()=>deleteUser(user.id)}>delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
