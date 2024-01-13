import React from 'react';
import StudentDetailsModal from '../../features/studentdetails/StudentDetailsModal';
import StudentDetailsTable from '../../features/studentdetails/StudentDetailsTable';

const SubmitInfo = () => {
    return (
        <div>
            <div>
                <h2 className='text-3xl	text-center font-semibold mb-4'>Submit Yout Information</h2>
            </div>
            <div>
                <StudentDetailsModal></StudentDetailsModal>
            </div>
            <div>
                <StudentDetailsTable></StudentDetailsTable>
            </div>
        </div>
    );
};

export default SubmitInfo;