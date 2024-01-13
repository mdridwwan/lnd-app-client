import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NoticeCard from './NoticeCard';

const Notice = () => {
    const [notice, setNotice] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/notices')
            .then(res => {
                setNotice(res.data)
            })
    }, [])
    return (
        <div>
            <div className='grid md:grid-cols-2 gap-8'>
                {
                    notice.map(notice => <NoticeCard
                        key={notice._id}
                        notice={notice}
                    >
                    </NoticeCard>)
                }
            </div>
        </div>
    );
};

export default Notice;



