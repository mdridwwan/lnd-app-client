import axios from 'axios';
import React, { useState } from 'react';

const CertificateHistory = () => {
    const [certificate, setCertificate] = useState([])
    useState(() => {
        axios.get('http://localhost:8000/api/v1/certificates')
            .then(res => {
                setCertificate(res.data)
            })
    }, [])
    return (
        <div>
            <div className="stats shadow grid">
                <div className="stat">

                    <div className="stat-title">Total Cretificate</div>
                    <div className="stat-value text-primary">{certificate.length}</div>
                    {/* <div className="stat-desc">100% more than last month</div> */}
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Page Views</div>
                    <div className="stat-value text-secondary">2.6M</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img alt='BS-Logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWMn8Ex4DRP4b4yHDmiao6ef4ChACmfqr6_CoXsukXdMRkzUJQ" />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">86%</div>
                    <div className="stat-title">Tasks done</div>
                    <div className="stat-desc text-secondary">31 tasks remaining</div>
                </div>

            </div>
        </div>
    );
};

export default CertificateHistory;