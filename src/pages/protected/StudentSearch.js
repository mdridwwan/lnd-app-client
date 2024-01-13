import React from "react";
import StudentdataTable from "../../features/studentdata/StudentdataTable";

const StudentSearch = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl	text-center font-semibold mb-4">
          Student All Date_
        </h2>
      </div>
      <div>
        <StudentdataTable></StudentdataTable>
      </div>
    </div>
  );
};

export default StudentSearch;
