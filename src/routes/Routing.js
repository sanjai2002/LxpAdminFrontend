import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loginpage from '../View/LoginPage';
import ForgotPassword from '../View/ForgotPassword';
import Email from '../View/Email';
import Admincourse from '../View/Admincourse';
// import Navigationbar from '../components/Navbar';
import Adminviewcourse from '../View/Adminviewcourse';
import Admindashboard from '../View/Admin/Admindashboard';
import Courseupdate from '../View/Admin/Courseupdate';
import UserDashboard from '../View/User/UserDashboard';
import Adminrouting from './AdminRouting';
import Home from '../View/Home';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

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
    <div>
      <Box sx={{ display: 'flex' }}>
        <BrowserRouter>

          <Adminrouting />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            {/* <DrawerHeader /> */}
            <Routes>
             <Route exact path="/" element={<Loginpage />} />

              {/* <Route exact path="/" element={<Loginpage />} />
            <Route path="/email" element={<Email />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} /> */}
              {/* <Route path="/adminnavbar" element={<Navigationbar/>} /> */}



              <Route path='/' element={<Admindashboard />} />
              <Route path="/admincourse" element={<Admincourse />} />
              <Route path='/adminviewallcourse' element={<Adminviewcourse />}></Route>
              <Route path='/admindashboard' element={<Admindashboard />}></Route>
              <Route path='/admindupdatecourse/:courseId' element={<Courseupdate />}></Route>



              {/* <Route path='/userdashboard' element={<UserDashboard />}></Route> */}

            </Routes>

          </Box>
        </BrowserRouter>
      </Box>
    </div >
  );
}

export default Routing
