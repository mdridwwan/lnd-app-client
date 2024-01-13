import axios from 'axios';
import React, { useState } from 'react';

const CertificateForm = () => {
    const [certificate, setCertificate] = useState({ name: "", institute: "", technology: "", joining_date: "", career_start_date: "", certificate: "Yeat" })
    const handleCertificatSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/v1/certificates', certificate)
            .then(res => {
                setCertificate(res.data)
            })
    }
    return (
        <div>
            <center>
                <form onSubmit={handleCertificatSubmit}>
                    <div className="w-5/6" >
                        <from className="">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold">Name:</span>
                                </label>
                                <input
                                    value={certificate.name}
                                    name='name'
                                    onChange={(event) => setCertificate({ ...certificate, name: event.target.value })}
                                    type="Text" placeholder="Please Input" className="input input-bordered w-full " required />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text font-semibold">Institute:</span>
                                </label>
                                <input
                                    value={certificate.institute}
                                    name='institute'
                                    onChange={(event) => setCertificate({ ...certificate, institute: event.target.value })}
                                    type="text" placeholder="Institute" className="input input-bordered w-full " required />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text font-semibold">Technology:</span>
                                </label>
                                <input
                                    value={certificate.technology}
                                    name='technology'
                                    onChange={(event) => setCertificate({ ...certificate, technology: event.target.value })}
                                    type="text" placeholder="Technology" className="input input-bordered w-full " required />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text font-semibold">Joing Date:</span>
                                </label>
                                <input
                                    value={certificate.joining_date}
                                    name='joining_date'
                                    onChange={(event) => setCertificate({ ...certificate, joining_date: event.target.value })}
                                    type="date" className="input input-bordered w-full " required />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text font-semibold">Career Start Date:</span>
                                </label>
                                <input
                                    value={certificate.career_start_date}
                                    name='career_start_date'
                                    onChange={(event) => setCertificate({ ...certificate, career_start_date: event.target.value })}

                                    type="date" className="input input-bordered w-full " required />
                            </div>
                            <div>
                                <div className="mt-8"><button className="btn btn-primary float-left">Added</button></div>
                            </div>
                        </from>
                    </div >
                </form>
            </center>
        </div>
    );
};
export default CertificateForm;