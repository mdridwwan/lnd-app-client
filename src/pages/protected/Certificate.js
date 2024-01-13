import React from 'react';
import CertificateForm from '../../features/certificate/CertificateForm';

const Certificate = () => {
    return (
        <div>
            <div>
                <div>
                    <h2 className='text-3xl	text-center font-semibold mb-4'>Added Certificate</h2>
                </div>
                <div>
                    <CertificateForm></CertificateForm>
                </div>
            </div >
        </div>
    );
};

export default Certificate;