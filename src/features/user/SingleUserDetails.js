import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleUserDetails = () => {

    // const singlePerson = useLoaderData()
    const { id } = useParams()
    const [user, setUser] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8000/api/v1/user/${id}`)
            .then(res => {
                setUser(res.data)
            })
    }, [id])

    const { birth_date, career_start_date, email, employee_id, father_name, institute, joining_date, mother_name, name, nid, permanent_address, phone, present_address, technology } = user;

    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-3xl font-semibold">  {name} </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <p> Name :
                            <span> {name} </span>
                        </p>
                        <p> Email :
                            <span> {email} </span>
                        </p>
                        <p> Employee ID :
                            <span> {employee_id} </span>
                        </p>
                        <p> Phone :
                            <span> {phone} </span>
                        </p>
                        <p> NID :
                            <span> {nid} </span>
                        </p>
                        <p> Date Of Birth :
                            <span>
                                {moment(birth_date).format("MMM Do YYYY")}
                            </span>
                        </p>
                        <p> Institute :
                            <span> {institute} </span>
                        </p>
                        <p> Technology :
                            <span> {technology} </span>
                        </p>

                        <p> Career Start Date :
                            <span>
                                {moment(career_start_date).format("MMM Do YYYY")}
                            </span>
                        </p>
                        <p> Joining Date :
                            <span>
                                {moment(joining_date).format("MMM Do YYYY")}
                            </span>
                        </p>
                        <p> Father's Name :
                            <span> {father_name} </span>
                        </p>
                        <p> Mother's Name :
                            <span> {mother_name} </span>
                        </p>

                        <p> Present Address :
                            <span> {present_address} </span>
                        </p>
                        <p> Permanent Address :
                            <span> {permanent_address} </span>
                        </p>
                    </div>

                </div>
            </div>
        </div >
    );
};
export default SingleUserDetails;



// localhost / name / id 