import axios from "axios";
import React, { useEffect, useState } from "react";

const DailyActivitiesTable = () => {
  const [dailyactivities, setDailyactivities] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/activities/653b57f3e58c3080d3a8d14a")
      .then((res) => {
        setDailyactivities(res.data.data);
      });
  }, []);
  return (
    <div>
      <div className="overflow-x-auto grid">
        <table className="table table-xs ">
          <thead>
            <tr>
              <th>#</th>
              <th>Spent Hour</th>
              <th>Task Report</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {dailyactivities.map((row, index) => (
              <tr key={row.id}>
                <th>{index + 1}</th>
                <td className="text-center">{row.spent_hour} Hour</td>
                <td>{row.task_report}</td>
                <td>{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DailyActivitiesTable;

// <tr>
// <th>1</th>
// <td>Cy Ganderton</td>
// <td>Quality Control Specialist</td>
// <td>Blue</td>
// </tr>
