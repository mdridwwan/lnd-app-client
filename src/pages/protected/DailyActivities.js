import React from 'react';
import DailyActivitiesModal from '../../features/daily-activities/DailyActivitiesModal';
import DailyActivitiesTable from '../../features/daily-activities/DailyActivitiesTable';

const DailyActivities = () => {
    return (
        <div>
            <div>
                <h2 className='text-3xl	text-center font-semibold mb-4'>Daily Activities Task Report</h2>
            </div>
            <div>
                <DailyActivitiesModal></DailyActivitiesModal>
            </div>
            <div>
                <DailyActivitiesTable></DailyActivitiesTable>
            </div>
        </div>
    );
};

export default DailyActivities;