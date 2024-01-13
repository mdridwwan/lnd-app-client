import React from "react";
import CreateUser from "../../features/user/CreateUser";
import UserTable from "../../features/user/components/UserTable";

const Register = () => {
  return (
    <div>
      <div>
        {/* <center> */}
        <CreateUser></CreateUser>
        {/* </center> */}
      </div>

      <div className="mt-[100px]">
        <UserTable></UserTable>
      </div>
    </div>
  );
};

export default Register;
