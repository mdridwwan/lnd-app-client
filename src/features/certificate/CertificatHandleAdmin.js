import React from 'react';

const CertificatHandleAdmin = () => {
    return (
        <div className="overflow-x-auto grid">
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
                    <tr>
                        <td>1</td>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div>
                                    <div className="font-bold">Name</div>
                                    <div className="text-sm">Institute</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Technology
                            <br />
                            <span className="badge badge-ghost badge-sm">Joing Date:</span>
                        </td>
                        <td>Career Start Date:</td>
                        <th>
                            <button className="btn btn-secondary btn-sm">YEAT</button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CertificatHandleAdmin;