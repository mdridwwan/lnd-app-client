import React from "react";
import { useState } from "react";
import Select from "react-select";
const Profile = () => {
  const INITIAL_LOGIN_OBJ = {
    fatherName: "",
    motherName: "",
  };
  const submitForm = (e) => {
    console.log("Hi Submit");
    e.preventDefault();
    console.log(loginObj);

    // setErrorMessage("");
    // if (loginObj.emailId.trim() === "")
    //   return setErrorMessage("Email Id is required! (use any value)");
    // if (loginObj.password.trim() === "")
    //   return setErrorMessage("Password is required! (use any value)");
    // else {
    //   setLoading(true);
    //   // Call API to check user credentials and save token in localstorage
    //   fetch("http://localhost:8000/api/v1/auth/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       email: loginObj.emailId,
    //       password: loginObj.password,
    //     }),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //     });
    //   setLoading(false);
    // }
  };

  const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ);
  const updateFormValue = ({ updateType, value }) => {
    // setErrorMessage("");
    setLoginObj({ ...loginObj, [updateType]: value });
    console.log(loginObj);
  };
  return (
    <div className="p-4 rounded-2xl bg-transparent shadow-2xl">
      <form
        onSubmit={(e) => submitForm(e)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* <div>
          <label className="label">
            <span className="label-text font-semibold">Institiute: </span>
          </label>
          <input
            type="text"
            placeholder="your institute..."
            className="input input-bordered w-full "
            required
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text font-semibold">Technolgy: </span>
          </label>
          <input
            type="text"
            placeholder="your technolgy..."
            className="input input-bordered w-full "
            required
          />
        </div> */}
        {/* <div>
          <label className="label">
            <span className="label-text font-semibold">
              NID or Birth Certificate Number:
            </span>
          </label>
          <input
            type="text"
            placeholder="NID or Birth Certificate"
            className="input input-bordered w-full "
            required
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text font-semibold">Date Of Birth</span>
          </label>
          <input
            type="date"
            placeholder="NID or Birth Certificate"
            className="input input-bordered w-full "
            required
          />
        </div> */}
        <div>
          <label className="label">
            <span className="label-text font-semibold">Father's Name:</span>
          </label>
          <input
            defaultValue={loginObj.fatherName}
            type="text"
            updateType="fatherName"
            labelTitle="fatherName"
            updateFormValue={updateFormValue}
            placeholder="Father's Name"
            className="input input-bordered w-full "
            required
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text font-semibold">Mother's Name:</span>
          </label>
          <input
            type="text"
            defaultValue={loginObj.motherName}
            updateType="motherName"
            containerStyle="mt-4"
            labelTitle="motherName"
            updateFormValue={updateFormValue}
            placeholder="Mother's Name"
            className="input input-bordered w-full "
            required
          />
        </div>
        {/* <div>
          <label className="label">
            <span className="label-text font-semibold">Joining Date:</span>
          </label>
          <input
            type="date"
            placeholder="Joining Date"
            className="input input-bordered w-full "
            required
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text font-semibold">Carrer Start Date:</span>
          </label>
          <input
            type="date"
            placeholder="Carrer Start Date"
            className="input input-bordered w-full "
            required
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text font-semibold">Phone Number:</span>
          </label>
          <input
            type="text"
            placeholder="Phone Number"
            className="input input-bordered w-full "
            required
          />
        </div>
        <br />
        <div>
          <label className="label">
            <span className="label-text font-semibold">Present Address:</span>
          </label>
          <textarea
            rows="2"
            cols="50"
            className="textarea textarea-info  bordered w-full "
            placeholder="Present Address"
          ></textarea>
        </div>

        <div>
          <label className="label">
            <span className="label-text font-semibold">Permanent Address:</span>
          </label>
          <textarea
            rows="2"
            cols="50"
            className="textarea textarea-info  bordered w-full"
            placeholder="Permanent Address"
          ></textarea>
        </div> */}
        <div>
          <div className="mt-16"></div>
        </div>
        <button
          // onClick={() => {
          //   console.log("hello");
          // }}
          type="submit"
          className="btn btn-primary float-left"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Profile;
