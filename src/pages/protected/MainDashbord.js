import React from 'react';
import LDashbord from '../../features/dashboard/components/LDashbord';

const MainDashbord = () => {
    return (
        <div>
            <div>
                <h2 className='text-3xl	text-center font-semibold mb-4'>Main Dashboard</h2>
            </div>
            <div>
                <LDashbord></LDashbord>
            </div>
        </div>
    );
};

export default MainDashbord;