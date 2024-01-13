import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import React, { Fragment, useState } from "react";

const DailyActivitiesModal = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const data = { spent_hour: "", date: "", task_report: "", total_hour: "8" };
  const [inputData, setInputData] = useState(data);

  const handleData = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
      [e.target.date]: e.target.value,
      [e.target.task_report]: e.target.value,
    });
    // console.log(setInputData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/v1/activities", inputData)
      .then((res) => {
        setInputData(res.data);
        closeModal(true);
      });
  };
  return (
    <div>
      <div className="inset-0 flex">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Daily Activities
        </button>
      </div>

      <Transition
        className="items-center justify-center "
        appear
        show={isOpen}
        as={Fragment}
      >
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
                <Dialog.Panel
                  style={{ width: "1400px" }}
                  className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                >
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Please Submit Your Daily Activities Report:
                  </Dialog.Title>
                  <p className="font-sm text-gray-900 font-bold mt-4 leading-6 text-white bg-warning p-2">
                    <small>Note: Once Submitted, no updates can be made.</small>
                  </p>
                  <div className="mt-2 w-full">
                    <form
                      onSubmit={handleSubmit}
                      className="form-control w-full"
                    >
                      <div className="">
                        <div className="mx-1">
                          <label className="label">
                            <span className="label-text text-black font-semibold">
                              Spent Hour:
                            </span>
                          </label>
                          <input
                            type="number"
                            name="spent_hour"
                            value={inputData.spent_hour}
                            onChange={handleData}
                            placeholder="Spent Yout Hour"
                            className="input input-bordered w-full "
                            required
                          />
                        </div>

                        <div className="mx-1">
                          <label className="label">
                            <span className="label-text text-black font-semibold">
                              Date:
                            </span>
                          </label>
                          <input
                            type="date"
                            name="date"
                            value={inputData.date}
                            onChange={handleData}
                            placeholder="Institute"
                            className="input input-bordered w-full "
                            required
                          />
                        </div>

                        <div className="mx-1 ml-4">
                          <label
                            style={{ marginLeft: "-13px" }}
                            className="label"
                          >
                            <span className="label-text text-black font-semibold">
                              Task Report:
                            </span>
                          </label>
                          <textarea
                            style={{ width: "104%", marginLeft: "-13px" }}
                            rows="5"
                            cols="50"
                            name="task_report"
                            value={inputData.task_report}
                            onChange={handleData}
                            className="textarea textarea-info  bordered"
                            placeholder="Present Address"
                          ></textarea>
                        </div>

                        <div className="grid md:grid-cols-2  ">
                          <div className="mx-1">
                            <input
                              onClick={() => setIsOpen(false)}
                              type="cancel"
                              value="cancel"
                              placeholder="Phone Number"
                              className="btn-sm input input-bordered w-full mt-9 btn btn-accent hover"
                              required
                            />
                          </div>
                          <div className="mx-1">
                            <input
                              type="submit"
                              value="Submit"
                              placeholder="Phone Number"
                              className="btn-sm input input-bordered w-full mt-9 btn btn-primary"
                              required
                            />
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

export default DailyActivitiesModal;
