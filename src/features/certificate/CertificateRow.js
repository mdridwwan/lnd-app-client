import axios from 'axios';
import moment from 'moment/moment';
import { useEffect, useState } from 'react';

const CertificateRow = () => {
    const [certificate, setCertificate] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/certificates')
            .then(res => {
                setCertificate(res.data)
            })
    }, [])
    return (
        <div className="overflow-x-auto grid mt-12">
            <table className="table table-xs">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Joing Date || Technology</th>
                        <th>Career Start Date</th>
                        <th>Certificate Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        certificate.map((row, index) => <tr
                            key={row._id}
                        >
                            <td>{index + 1}</td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div>
                                        <div className="font-bold">{row.name}</div>
                                        <div className="text-sm">{row.institute}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {row.technology}
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    {moment(row.joining_date).format("MMM Do YYYY")}
                                </span>
                            </td>
                            <td>
                                {moment(row.career_start_date).format("MMM Do YYYY")}
                            </td>

                            <th>
                                <button className="btn btn-secondary btn-sm">{row.certificate}</button>
                            </th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>

    );
};

export default CertificateRow;