import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import HeaderButton from "../header/HeaderButton";
import useSpeech from "../keyboardShorcut/textToSpeech";
import { useNavigate } from "react-router-dom";


const BarGraphEle = () => {
  const excelData = useSelector((state) => state.excelData.data);
  const { setSpeech, speakText, stopSpeech } = useSpeech();

  const navigate = useNavigate()
  // Create a data structure with unique job types and their counts
  const jobTypeCounts = {};

  excelData.forEach((row) => {
    const jobType = row["Job Title"];
    if (jobTypeCounts[jobType]) {
      jobTypeCounts[jobType] += 1;
    } else {
      jobTypeCounts[jobType] = 1;
    }
  });

  const jobData = Object.keys(jobTypeCounts).map((jobType) => ({
    jobType,
    count: jobTypeCounts[jobType],
  }));




  return (
    <>
      <HeaderButton />
      <div className="graph mt-4">
        <h3>Bar Graph Element</h3>
        <br />

        {/* Create a bar chart with custom color */}
        <BarChart width={1000} height={420} data={jobData} style={{ margin: 'auto' }}>
          {/* <CartesianGrid stroke="transparent" />
           */}

          <CartesianGrid
            vertical={true} // Show only vertical lines
            horizontal={false} // Hide horizontal lines
            stroke="#56829a" // Set grid line color
            strokeWidth={1} // Set grid line thickness
          />
          <XAxis dataKey="jobType" label={{ value: "Job Type", position: "insideBottom", fill: 'white' }} tick={{ fill: "#a0bad3" }} />
          <YAxis
            label={{
              value: "Count of Job Type",
              angle: -90,
              position: "insideLeft",
              fill: 'white'
            }}
            tick={{ fill: "#a0bad3" }}
          />
          {/* <Tooltip /> */}
          <Legend />
          <Bar dataKey="count" fill="white" /> {/* Change the color here */}
        </BarChart>
      </div>
      <br />
      <br />
    </>
  );
};

export default BarGraphEle;
