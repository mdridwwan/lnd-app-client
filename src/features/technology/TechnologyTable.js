import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TechnologyTable = () => {
    const [technology, setTechnology] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/technology')
            .then(res => {
                setTechnology(res.data);
            })
    }, [])

    const handleDeleted = (id) => {
        axios.delete(`http://localhost:8000/api/v1/technology/${id}`)
    }
    return (
        <div className="overflow-x-auto grid">
            <table className="table table-xs  ">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Technology Name</th>
                        <th>Deleted</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        technology.map((row, index) => <tr
                            key={row.id}
                        >
                            <td>{index + 1}</td>
                            <td>{row.name}</td>
                            <td>
                                <button onClick={() => handleDeleted(row._id)} className="btn btn-sm btn-circle btn-outline">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </td>
                        </tr>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default TechnologyTable;