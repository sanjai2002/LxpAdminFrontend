import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "../../View/Admin/Login/LoginPage";
import ForgotPassword from "../../View/Admin/Login/ForgotPassword";
import Email from "../../View/Admin/Login/Email";
import Admincourse from "../../View/Admin/Course/Admincourse";
import Adminviewcourse from "../../View/Admin/Course/Adminviewcourse";
import Admindashboard from "../../View/Admin/Dashboard/Admindashboard";
import Courseupdate from "../../View/Admin/Course/Courseupdate";
import Adminrouting from "../Admin/AdminRouting";
import { Box } from "@mui/material";
import IndividualLearnerView from "../../View/Admin/Learner/IndividualLearnerView";
import LearnerReduxView from "../../View/Admin/Learner/LearnerReduxView";
import { IndividualLearner } from "../../View/Admin/Learner/IndividualLearner";
import  LearnerReportView  from "../../View/Admin/Report/LearnerReportView";
import CourseReportView from '../../View/Admin/Report/CourseReportView';
import QuizReportView from '../../View/Admin/Report/QuizReportView';

import ReportSkeleton from '../../components/Loading/Reportskeleton'

function Routing() {
  // const DrawerHeader = styled('div')(({ theme }) => ({
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'flex-end',
  //   padding: theme.spacing(0, 1),
  //   // necessary for content to be below app bar
  //   ...theme.mixins.toolbar,
  // }));
  return (
  
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Loginpage />} />
          <Route path="/email" element={<Email />} />
          <Route path="/forgotpassword" element={<ForgotPassword />}/>
          <Route element={<Adminrouting />}>
            <Route path="/home" element={<Admindashboard />} />
            <Route path="/admincourse" element={<Admincourse />} />
            <Route path="/adminviewallcourse"element={<Adminviewcourse />} ></Route>
            <Route path="/admindashboard" element={<Admindashboard />}></Route>
            <Route path="/admindupdatecourse/:courseId" element={<Courseupdate />} ></Route>
            <Route path="/learnerviewall"element={<LearnerReduxView />} ></Route>
            <Route path="/individuallearner/:learnerId" element={<IndividualLearner />}></Route>
            <Route path="/learnerreport" element={<LearnerReportView/>}></Route>
            <Route path="/coursereport" element={<CourseReportView/>}></Route>
            <Route path='/quizreport' element={<QuizReportView/>}></Route>          
            <Route path='/ReportSkeleton' element={<ReportSkeleton/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
  
  );
}

export default Routing;
