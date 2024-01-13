import React from 'react';
import CertificateHistory from './CertificateHistory';
import CertificateRow from './CertificateRow';

const Certificate = () => {
    return (
        <div>
            <div>
                <h2 className='text-3xl	text-center font-semibold mb-4'> Certificate All users</h2>
                <div>
                    <CertificateHistory></CertificateHistory>
                </div>
                <div>
                    <CertificateRow></CertificateRow>
                </div>
            </div>
        </div >
    );
};

export default Certificate;