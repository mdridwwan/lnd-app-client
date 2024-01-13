import { Dialog, Transition } from '@headlessui/react';
import axios from 'axios';
import { Fragment, useState } from 'react';

const TechnologyModal = () => {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)

    }
    const data = { name: '' };
    const [inputData, setInputData] = useState(data)

    const handleData = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/v1/technology', inputData)
            .then(res => {
                setInputData(data);
                closeModal(true)
            })
    }

    return (
        <div>
            <div className="inset-0 flex">
                <button
                    type="button"
                    onClick={openModal}
                    className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                    Add  Technology
                </button>
            </div>

            <Transition className="items-center justify-center " appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel style={{ width: "1400px" }} className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Add Technology
                                    </Dialog.Title>
                                    <div className="mt-2 w-full">
                                        <form onSubmit={handleSubmit} className="form-control w-full">
                                            <div className=''>
                                                <div className='mx-1'>
                                                    <label className="label">
                                                        <span className="label-text text-black font-semibold">Technology Name:</span>
                                                    </label>
                                                    <input type="text" value={inputData.name} name='name' onChange={handleData} placeholder="Technology Name" className="input input-bordered w-full " required />
                                                </div>
                                                <div className='grid md:grid-cols-2  '>
                                                    <div className='mx-1'>
                                                        <input onClick={() => setIsOpen(false)} type="cancel" value="cancel" className="btn-sm input input-bordered w-full mt-9 btn btn-accent hover" required />
                                                    </div>
                                                    <div className='mx-1'>

                                                        <input type="submit" value="Added" className="btn-sm input input-bordered w-full mt-9 btn btn-primary" required />
                                                    </div>
                                                </div>
                                            </div>

                                        </form>
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default TechnologyModal;