import React, { useState } from 'react';
import InstituteModal from '../../features/institute/InstituteModal';
import InstituteTable from '../../features/institute/InstituteTable';

const AddInstitute = () => {
    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return (
        <div>
            <div>
                <h2 className='text-3xl	text-center font-semibold mb-4'>Institute</h2>
            </div>
            <div>
                <InstituteModal></InstituteModal>
            </div>
            <div>

                <InstituteTable></InstituteTable>
            </div>
        </div>
    );
};


export default AddInstitute;