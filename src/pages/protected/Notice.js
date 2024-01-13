import axios from 'axios';
import React, { useState } from 'react';

const Notice = () => {
    const data = { notice_name: '', technolgy: '', notice_description: '', upcomeing_date: '', }
    const [addNotice, setAddnotice] = useState(data)
    const handleNotice = (e) => {
        setAddnotice({
            ...addNotice,
            [e.target.name]: e.target.value,
            [e.target.notice_name]: e.target.value,
            [e.target.technolgy]: e.target.value,
            [e.target.notice_description]: e.target.value,
            [e.target.upcomeing_date]: e.target.value,
        })
    }
    const handleNoticeSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/v1/notices', addNotice)
            .then(res => {
                setAddnotice(res.data)
            })
    }
    return (
        <div>
            <div>
                <h2 className='text-3xl	text-center font-semibold mb-4'>Added Notice</h2>
            </div>
            <center>
                <div className="w-5/6" >
                    <form onSubmit={handleNoticeSubmit}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Notice Heading:</span>
                            </label>
                            <input type="text"
                                value={addNotice.notice_name}
                                name='notice_name'
                                onChange={handleNotice}
                                placeholder="Please Input" className="input input-bordered w-full " required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Input Technology:</span>
                            </label>
                            <input type="text"
                                value={addNotice.technolgy}
                                name='technolgy'
                                onChange={handleNotice}
                                placeholder="Please Input" className="input input-bordered w-full " required />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">Upcomming Date:</span>
                            </label>
                            <input
                                value={addNotice.upcomeing_date}
                                name='upcomeing_date'
                                onChange={handleNotice}
                                type="date" placeholder="Upcomming Date" className="input input-bordered w-full " required />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">Discription:</span>
                            </label>
                            <textarea
                                type="text"
                                value={addNotice.notice_description}
                                name='notice_description'
                                onChange={handleNotice}
                                rows="5" cols="50" className="textarea textarea-info  bordered w-full " placeholder="Discription"></textarea>
                        </div>
                        <div>
                            <div className="mt-8"><button className="btn btn-primary float-left">Added</button></div>
                        </div>
                    </form>
                </div >
            </center>
        </div >
    );
};

export default Notice;