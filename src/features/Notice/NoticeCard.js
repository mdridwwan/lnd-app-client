import moment from 'moment/moment';
import React from 'react';

const NoticeCard = ({ notice }) => {
    const { notice_name, notice_description, upcomeing_date, technolgy } = notice;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">
                        {notice_name}
                        <div className="badge badge-secondary">{technolgy}</div>
                    </h2>
                    <p>{notice_description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">
                            Upcomeing Date:
                            {moment({ upcomeing_date }).format(" MMM Do YY")}
                        </div>
                        <div className="badge badge-outline">Happy Learning</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoticeCard;