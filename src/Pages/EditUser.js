import React, { useState,useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [field, setField] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const handleChange = (event) => {
    setField({
      ...field,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.put(`http://localhost:3003/users/${id}`, field);

    setField(result.data);
    history.push("/");
  };

  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setField(result.data);
  };
  
  useEffect(() => {
    loadUsers();

  }, [])

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter name"
              value={field.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label for="userName">UserName</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter userName"
              value={field.username}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label for="emailAddress">Email Address</label>
            <input
              type="emailAddress"
              name="email"
              className="form-control"
              placeholder="Enter emailAddress"
              value={field.email}
              onChange={(e) => handleChange(e)}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="phone">Phone</label>
            <input
              type="number"
              name="phone"
              className="form-control"
              placeholder="Enter websiteNmae"
              value={field.phone}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label for="websiteName">WebsiteName</label>
            <input
              type="text"
              name="website"
              className="form-control"
              placeholder="Enter websiteNmae"
              value={field.website}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default EditUser;
