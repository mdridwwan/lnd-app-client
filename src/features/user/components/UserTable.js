import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserTable = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/user')
            .then(res => {
                setUser(res.data)
            })
    }, [])
    return (
        <div className="overflow-x-auto grid ">
            <table className="table table-xl">
                <thead>
                    <tr>
                        <th>Sl</th>
                        <th>Name</th>
                        <th>Employee ID</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((user, index) =>
                            <tr
                                key={user._id}
                                user={user}
                            >
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>BS-{user.employee_id}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <Link to={`userallDetails/${user._id}`}>
                                        <button className="btn btn-secondary">See More</button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div >
    );
};

export default UserTable;

// /${user._id}