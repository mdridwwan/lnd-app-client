import React, { useEffect, useState } from 'react';

const StudentdataTable = () => {

    // JSON DATA 

    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/studenttabledata')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image </th>
                            <th>Name | Week-Name | Taks Report</th>
                            <th>Date</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            details.map((row, index) => <tr

                                key={details._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="data:image/jpg;base64,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" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{row.engagement}</div>
                                            <div className="text-sm opacity-50">Spent Hours: {row.spent_hour}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {row.task_report}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{row.week_name}</span>
                                </td>
                                <td>{row.date}</td>

                            </tr>
                            )
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default StudentdataTable;