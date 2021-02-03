import React,{useEffect,useState} from 'react';
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {

        let history = useHistory();
        const { id } = useParams();
        const [field, setField] = useState({
          name: "",
          username: "",
          email: "",
          phone: "",
          website: "",
        });

    const loadUsers = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setField(result.data);
      };
      
      useEffect(() => {
        loadUsers();
    
      }, [])

    return (
        <div>
            <li>{field.name}</li>
            <li>{field.username}</li>
            <li>{field.email}</li>
            <li>{field.phone}</li>
            <li>{field.website}</li>
        </div>
    )
}

export default User;
