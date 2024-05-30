import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "../View/LoginPage";
import ForgotPassword from "../View/ForgotPassword";
import Email from "../View/Email";
import Admincourse from "../View/Admincourse";
import Adminviewcourse from "../View/Adminviewcourse";
import Admindashboard from "../View/Admin/Admindashboard";
import Courseupdate from "../View/Admin/Courseupdate";
import Adminrouting from "./AdminRouting";
import { Box } from "@mui/material";
import IndividualLearnerView from "../View/Admin/Learner/IndividualLearnerView";
import LearnerReduxView from "../View/Admin/LearnerReduxView";
import { IndividualLearner } from "../View/Admin/Learner/IndividualLearner";
import  LearnerReportView  from "../View/Admin/LearnerReportView";
import CourseReportView from '../View/Admin/CourseReportView';
import QuizReportView from '../View/Admin/QuizReportView';

import ReportSkeleton from '../components/Loading/Reportskeleton'


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
