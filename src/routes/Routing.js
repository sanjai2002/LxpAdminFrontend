import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loginpage from '../View/LoginPage';
import ForgotPassword from '../View/ForgotPassword';
import Email from '../View/Email';
import Admincourse from '../View/Admincourse';
import Navigationbar from '../components/Navbar';
import Adminviewcourse from '../View/Adminviewcourse';
import Admindashboard from '../View/Admin/Admindashboard';
import Courseupdate  from '../View/Admin/Courseupdate';
import UserDashboard from '../View/User/UserDashboard';


function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Loginpage />} />
          <Route path="/email" element={<Email />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/admincourse" element={<Admincourse />} />
          <Route path="/adminnavbar" element={<Navigationbar/>} />
          <Route path='/adminviewallcourse' element={<Adminviewcourse/>}></Route>
          <Route path='/admindashboard' element={<Admindashboard/>}></Route>
          <Route path='/admindupdatecourse/:courseId' element={<Courseupdate/>}></Route>
          <Route path='/userdashboard' element={<UserDashboard/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing
