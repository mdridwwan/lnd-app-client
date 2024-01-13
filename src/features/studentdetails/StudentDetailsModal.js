import React from 'react';

const StudentDetailsModal = () => {
    // let [isOpen, setIsOpen] = useState(true)

    // function closeModal() {
    //     setIsOpen(false)
    // }

    // function openModal() {
    //     setIsOpen(true)
    // }
    return (
        // <div>
        //     <div className="inset-0 flex">
        //         <button
        //             type="button"
        //             onClick={openModal}
        //             className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        //         >
        //             Submit Your Info
        //         </button>
        //     </div>

        //     <Transition className="items-center justify-center " appear show={isOpen} as={Fragment}>
        //         <Dialog as="div" className="relative z-10" onClose={closeModal}>
        //             <Transition.Child
        //                 as={Fragment}
        //                 enter="ease-out duration-300"
        //                 enterFrom="opacity-0"
        //                 enterTo="opacity-100"
        //                 leave="ease-in duration-200"
        //                 leaveFrom="opacity-100"
        //                 leaveTo="opacity-0"
        //             >
        //                 <div className="fixed inset-0 bg-black bg-opacity-25" />
        //             </Transition.Child>

        //             <div className="fixed inset-0 overflow-y-auto">
        //                 <div className="flex min-h-full items-center justify-center p-4 text-center">
        //                     <Transition.Child
        //                         as={Fragment}
        //                         enter="ease-out duration-300"
        //                         enterFrom="opacity-0 scale-95"
        //                         enterTo="opacity-100 scale-100"
        //                         leave="ease-in duration-200"
        //                         leaveFrom="opacity-100 scale-100"
        //                         leaveTo="opacity-0 scale-95"
        //                     >
        //                         <Dialog.Panel style={{ width: "1400px" }} className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
        //                             <Dialog.Title
        //                                 as="h3"
        //                                 className="text-lg font-medium leading-6 text-gray-900"
        //                             >
        //                                 Please Submit Your Info
        //                             </Dialog.Title>
        //                             <div className="mt-2 w-full">
        //                                 <form className="form-control w-full">
        //                                     <div className='grid md:grid-cols-2  '>
        //                                         <div className='mx-1'>
        //                                             <label className="label">
        //                                                 <span className="label-text text-black font-semibold">Name:</span>
        //                                             </label>
        //                                             <input type="text" placeholder="Your Name" className="input input-bordered w-full " required />
        //                                         </div>
        //                                         <div className='mx-1'>
        //                                             <label className="label">
        //                                                 <span className="label-text text-black font-semibold">Institute:</span>
        //                                             </label>
        //                                             <input type="text" placeholder="Institute" className="input input-bordered w-full " required />
        //                                         </div>
        //                                         <div className='mx-1'>
        //                                             <label className="label">
        //                                                 <span className="label-text text-black font-semibold">Father's Name:</span>
        //                                             </label>
        //                                             <input type="text" placeholder="Father's Name" className="input input-bordered w-full " required />
        //                                         </div>
        //                                         <div className='mx-1'>
        //                                             <label className="label">
        //                                                 <span className="label-text text-black font-semibold">Mother's Name:</span>
        //                                             </label>
        //                                             <input type="text" placeholder="Mother's Name" className="input input-bordered w-full " required />
        //                                         </div>
        //                                         <div className='mx-1'>
        //                                             <label className="label">
        //                                                 <span className="label-text text-black font-semibold">Email:</span>
        //                                             </label>
        //                                             <input type="text" placeholder="Your Email" className="input input-bordered w-full " required />
        //                                         </div>
        //                                         <div className='mx-1'>
        //                                             <label className="label">
        //                                                 <span className="label-text text-black font-semibold">Technology:</span>
        //                                             </label>
        //                                             <select className='input input-bordered w-full' id="cars">
        //                                                 <option value="Your Option">Your Option</option>
        //                                                 <option value="Dynami1">Dynamic_1</option>
        //                                                 <option value="Dynami2">Dynamic_2</option>
        //                                                 <option value="Dynami3">Dynamic_3</option>
        //                                                 <option value="Dynami4">Dynamic_4</option>
        //                                                 <option value="Dynami5">Dynamic_4</option>
        //                                                 <option value="Dynami5">Dynamic_5</option>
        //                                                 <option value="Dynami5">Dynamic_6</option>
        //                                                 <option value="Dynami5">Dynamic_7</option>
        //                                                 <option value="Dynami5">Dynamic_8</option>
        //                                                 <option value="Dynami5">Dynamic_9</option>
        //                                                 <option value="Dynami5">Dynamic_10</option>
        //                                                 <option value="Dynami5">Dynamic_11</option>
        //                                             </select>
        //                                         </div>
        //                                         <div className='mx-1'>
        //                                             <label className="label">
        //                                                 <span className="label-text text-black font-semibold">Image:</span>
        //                                             </label>
        //                                             <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
        //                                         </div>
        //                                         <div className='mx-1'>
        //                                             <label className="label">
        //                                                 <span className="label-text text-black font-semibold">NID or Birth Certificate:</span>
        //                                             </label>
        //                                             <input type="text" placeholder="NID or Birth Certificate" className="input input-bordered w-full " required />
        //                                         </div>
        //                                         <div className='mx-1'>
        //                                             <label className="label">
        //                                                 <span className="label-text text-black font-semibold">Present Address:</span>
        //                                             </label>
        //                                             <textarea rows="2" cols="50" className="textarea textarea-info  bordered" placeholder="Present Address"></textarea>
        //                                         </div> <br />
        //                                         <div className='mx-1'>
        //                                             <label className="label">
        //                                                 <span className="label-text text-black font-semibold">Permanent Address:</span>
        //                                             </label>
        //                                             <textarea rows="2" cols="50" className="textarea textarea-info  bordered" placeholder="Permanent Address"></textarea>

        //                                         </div>
        //                                         <br />
        //                                         <div className='mx-1'>
        //                                             <label className="label">
        //                                                 <span className="label-text text-black font-semibold">Joining Date:</span>
        //                                             </label>
        //                                             <input type="date" placeholder="Joining Date" className="input input-bordered w-full " required />
        //                                         </div>
        //                                         <div className='mx-1'>
        //                                             <label className="label">
        //                                                 <span className="label-text text-black font-semibold">Carrer Start Date:</span>
        //                                             </label>
        //                                             <input type="date" placeholder="Carrer Start Date" className="input input-bordered w-full " required />
        //                                         </div>
        //                                         <div className='mx-1'>
        //                                             <label className="label">
        //                                                 <span className="label-text text-black font-semibold">Phone Number:</span>
        //                                             </label>
        //                                             <input type="text" placeholder="Phone Number" className="input input-bordered w-full " required />
        //                                         </div> <br />

        //                                         <div className='mx-1'>
        //                                             <input onClick={() => setIsOpen(false)} type="cancel" value="cancel" placeholder="Phone Number" className="btn-sm input input-bordered w-full mt-9 btn btn-accent hover" required />
        //                                         </div>
        //                                         <div className='mx-1'>

        //                                             <input type="submit" value="Submit" placeholder="Phone Number" className="btn-sm input input-bordered w-full mt-9 btn btn-primary" required />
        //                                         </div>
        //                                     </div>

        //                                 </form>
        //                             </div>

        //                         </Dialog.Panel>
        //                     </Transition.Child>
        //                 </div>
        //             </div>
        //         </Dialog>
        //     </Transition>
        // </div>
        <div>

        </div>
    );
};

export default StudentDetailsModal;