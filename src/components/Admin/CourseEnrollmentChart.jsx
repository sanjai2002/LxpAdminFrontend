import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { fetchEnrollmentcourseBarchartRequest } from "../../actions/Admin/AdminDashboardAction";
import { connect } from "react-redux";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";
import { useDispatch, useSelector } from "react-redux";
import "../../Styles/Admin/AdminDashboard.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
} from "chart.js";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.03)",
  },
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
}));

ChartJS.register(CategoryScale, LinearScale, BarController, BarElement);

const CourseEnrollmentChart = ({
  fetchEnrollmentcourseBarchartRequest,
  enrollmentcoursebarchart,

}) => {
let today = new Date();
today.setDate(today.getDate()); 
let month = String(today.getMonth() + 1).padStart(2, '0');
let day = String(today.getDate()).padStart(2, '0');
 const [selectedOption, setSelectedOption] = useState(today.getFullYear());
  useEffect(() => {
    fetchEnrollmentcourseBarchartRequest(selectedOption);
    // sample();
  }, [selectedOption]);

  //year
  const dashboard = useSelector((state) => state.fetchdashboard.data);

  console.log("ssssd", dashboard);
  
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const checking =selectedOption ;
  console.log("check", checking);

//   const dispatch=useDispatch();

//   useEffect(() => {
//     dispatch(fetchEnrollmentcourseBarchartRequest(checking))
// }, [checking]);


  var barColors = ["red", "yellow", "blue", "orange", "brown"];
  const barData = {
    datasets: [
      {
        label: "Courses enrolled Per Month",
        data: enrollmentcoursebarchart.enrollmentcoursebarchart,
        backgroundColor: barColors,
      },
    ],
  };
  const barOptions = {
    parsing: {
      xAxisKey: "enrollMonth",
      yAxisKey: "enrollCount",
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: "World Wine Production 2018",
      },
    },
  };
  return (
    <Grid item xs={12} md={6}>
      <Item>
        {/* {Array.isArray(dashboard > 0 ? (
          <select value={selectedOption} onChange={handleSelectChange}>
            <option disabled>Choose a Year</option>
            {dashboard.enrollmentYears.map((opt, index) => (
              <option key={index} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        ) : (
          "null"
        ))} */}

        <div>
          <select value={selectedOption} onChange={handleSelectChange}>
            <option disabled>Choose a Year</option>
            {Array.isArray(dashboard.enrollmentYears) &&
              dashboard.enrollmentYears.map((opt, index) => (
                <option key={index} value={opt}>
                  {opt}
                </option>
              ))}
          </select>
        </div>

        <Card variant="">
          <CardContent sx={{ height: "300px" }}>
            {/* <Typography
                sx={{ fontSize: 18, fontWeight: "bold", color: "#524F7D" }}
                color="text.secondary"
                gutterBottom
              >
                Top Learners
                &nbsp; 
                <MilitaryTechIcon/>
              </Typography> */}
            <Bar data={barData} options={barOptions} />
          </CardContent>
        </Card>
      </Item>
    </Grid>
  );
};

const mapStoreToProps = (state) => ({
  enrollmentcoursebarchart: state.enrollmentcoursebarchart,
  //   sample :state.fetchdata.data.enrollmentYears,
});

debugger  

const mapDispatchToProps = (dispatch) => ({
  fetchEnrollmentcourseBarchartRequest: (checking) =>
    dispatch(fetchEnrollmentcourseBarchartRequest(checking)),
});

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(CourseEnrollmentChart);

// export default CourseEnrollmentChart;
