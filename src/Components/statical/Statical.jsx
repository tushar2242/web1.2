import { useSelector } from "react-redux";
import HeaderButton from "../header/HeaderButton";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { Box } from "@chakra-ui/react";
import {
  calculateMean,
  calculateMedian,
  calculateMode,
} from "./statisticsUtils";
import { useState } from "react";
import { useEffect } from "react";

const Statical = () => {
  // const excelData = useSelector((state) => state.excelData.data);

  //  // Create an object to store statistics for each job title
  //  const jobTitleStatistics = {};
  //  const uniqueJobTitles = new Set();

  //  // Group data by job title and calculate statistics
  //  excelData.forEach((row) => {
  //    const jobTitle = row["Job Title"];

  //    // Extract and count the unique job titles
  //    uniqueJobTitles.add(jobTitle);

  //    if (!jobTitleStatistics[jobTitle]) {
  //      jobTitleStatistics[jobTitle] = {
  //        jobTitle,
  //        values: [row["Number of People"]], // Assuming "Number of People" is the relevant value
  //        mean: 0,
  //        median: 0,
  //        mode: 0,
  //      };
  //    } else {
  //      jobTitleStatistics[jobTitle].values.push(row["Number of People"]);
  //    }
  //  });

  //  // Calculate statistics for each job title
  //  for (const jobTitle in jobTitleStatistics) {
  //    const { values } = jobTitleStatistics[jobTitle];
  //    jobTitleStatistics[jobTitle].mean = calculateMean(values);
  //    jobTitleStatistics[jobTitle].median = calculateMedian(values);
  //    jobTitleStatistics[jobTitle].mode = calculateMode(values);
  //  }

  const excelData = useSelector((state) => state.excelData.data);

  // Initialize a state variable to store the job title counts
  const [jobTitleCounts, setJobTitleCounts] = useState({});

  // Calculate the counts of unique job titles
  useEffect(() => {
    const counts = {};

    excelData.forEach((row) => {
      const jobTitle = row["Job Title"];

      if (!counts[jobTitle]) {
        counts[jobTitle] = 1;
      } else {
        counts[jobTitle]++;
      }
    });

    setJobTitleCounts(counts);
  }, [excelData]);

  




  return (
    <>
      <HeaderButton />
      <br />
      <br />
      <Box>
        {/* Display the counts of unique job titles */}
        {excelData.length > 0 && (
          <div className="table-responsive">
            <TableContainer>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{
                        fontSize: "15px",
                        fontWeight: "600",
                        background: "ffd8d8",
                      }}
                    >
                      Job Title
                    </TableCell>
                    <TableCell
                      style={{
                        fontSize: "15px",
                        fontWeight: "600",
                        background: "ffd8d8",
                      }}
                    >
                      Count
                    </TableCell>
                    <TableCell
                      style={{
                        fontSize: "15px",
                        fontWeight: "600",
                        background: "ffd8d8",
                      }}
                    >
                      Mean
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.keys(jobTitleCounts).map((jobTitle, index) => (
                    <TableRow key={index}>
                      <TableCell>{jobTitle}</TableCell>

                      <TableCell>{jobTitleCounts[jobTitle]}</TableCell>
                      <TableCell>{(excelData.length / jobTitleCounts[jobTitle]).toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        )}
      </Box>
    </>
  );
};

export default Statical;
