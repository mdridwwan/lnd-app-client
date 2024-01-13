import axios from 'axios';
import React, { useState } from 'react';
const CreateUser = () => {
    const [user, setUser] = useState({ name: '', email: '', employee_id: '', role: '', password: '' })
    const handleUser = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/v1/auth/signup', user)
            .then(res => {
                setUser(res.data)
            })
    }
    return (
        <div className=''>
            <form onSubmit={handleUser} className='w-[500px]  '>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Name</span>
                    </label>
                    <input type="text"
                        value={user.name}
                        name='name'
                        onChange={(event) => setUser({ ...user, name: event.target.value })}
                        placeholder="Name" className="input input-bordered " required />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Email</span>
                    </label>
                    <input type="email"
                        value={user.email}
                        name='email'
                        onChange={(event) => setUser({ ...user, email: event.target.value })}
                        placeholder="Email" className="input input-bordered w-full " required />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text font-semibold">Employee ID:</span>
                    </label>
                    <input
                        value={user.employee_id}
                        name='employee_id'
                        onChange={(event) => setUser({ ...user, employee_id: event.target.value })}
                        type="number" placeholder="Type Employee ID" className="input input-bordered w-full " required />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text font-semibold">Role:</span>
                    </label>
                    <input
                        value={user.role}
                        name='role'
                        onChange={(event) => setUser({ ...user, role: event.target.value })}
                        type="text" placeholder="Type Role" className="input input-bordered w-full " required />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text font-semibold">Password:</span>
                    </label>
                    <input
                        value={user.password}
                        name='password'
                        onChange={(event) => setUser({ ...user, password: event.target.value })}
                        type="password" placeholder="Type Password" className="input input-bordered w-full " required />
                </div>
                <div>
                    <div className="mt-8"><button className="btn btn-primary float-left">Register</button></div>
                </div>
            </form>
        </div>
    );
};

export default CreateUser;