import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Modal, Button } from 'react-bootstrap';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TableContainer, Switch } from '@mui/material';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchallCoursesRequest } from '../actions/Adnimviewcourse';
import { deleteCoursesRequest } from '../actions/Admin/DeletecourseAction';
import Navigationbar from '../components/Navbar';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import GridViewIcon from '@mui/icons-material/GridView';
import '../Styles/Adminviewcourse.css';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { enableDisableCourseRequest } from '../actions/Admin/EnableDisableAction';

const Adminviewcourse = ({ fetchCourses, deleteCourse, courses, enableordisable }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedCourseId, setSelectedCourseId] = useState(null);

    // State to control the open status of the dialog
    const [open, setOpen] = React.useState(false);
    const [dialogMessage, setDialogMessage] = useState('');

    // Delete Failure Message 
    const istrue = useSelector((state) => state.deletecourse.isdeleted);
    const mes = useSelector((state) => state.deletecourse.message);
    console.log("message", istrue);

    const isfalse = useSelector((state) => state.deletecourse.isnotdelete);
    const failuremessage = useSelector((state) => state.deletecourse.message);
    console.log("failure message", isfalse);


    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (istrue) {
            setDialogMessage(mes);
            setOpen(true);
            fetchCourses();
        } else if (isfalse) {
            setDialogMessage(failuremessage);
            setOpen(true);
        }
    }, [istrue, mes, isfalse, failuremessage, fetchCourses]);

    // useEffect(() => {
    //     if (istrue) {
    //         window.alert(mes);
    //         fetchCourses();
    //         // window.location.reload();
    //     }
    // }, [istrue, mes,fetchCourses]);

    // Delete Success Message 


    // useEffect(() => {

    //     if (isfalse) {
    //         window.alert(failuremessage);
    //         // window.location.reload();
    //     }
    // }, [isfalse, failuremessage]);






    // For Fetch course 
    useEffect(() => {
        fetchCourses();
    }, [fetchCourses]);

    // Filter by course title 
    useEffect(() => {
        setFilteredCourses(
            courses.filter(course =>
                course.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [courses, searchTerm]);

    const dispatch = useDispatch();

    const handleDeleteClick = (courseId) => {
        setSelectedCourseId(courseId);
        setShowModal(true);
    };

    const confirmDeletion = () => {
        deleteCourse(selectedCourseId);
        setShowModal(false);
    };

    //const for Enable & Disable Pop up
    const [showEnableModal, setShowEnableModal] = useState(false);
    const handleToggle = (title, courseId, status) => {
        console.log(courseId, status);
        setCourseTitle(title);
        setenabledisablecourseId(courseId);
        setCourseStatus(status);
        setShowEnableModal(true);
    };

    const [enabledisablecourseId, setenabledisablecourseId] = useState("");
    const [coursetitle, setCourseTitle] = useState("");
    const [coursestatus, setCourseStatus] = useState();

    //Event for Enable And Disable
    const EnableOrDisable = () => {
        console.log("enable or disable");
        console.log(enabledisablecourseId);
        console.log(!coursestatus);
        enableordisable(enabledisablecourseId, !coursestatus);
        setShowEnableModal(false);
        setTimeout(() => {
            document.location.reload();
        }, 500);
    }

    //Style for Disable And Enable Modal

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const IOSSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
    ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
                transform: 'translateX(16px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                    opacity: 1,
                    border: 0,
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.5,
                },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: '#33cf4d',
                border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
                color:
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[600],
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
            },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 22,
            height: 22,
        },
        '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
                duration: 500,
            }),
        },
    }));

    return (
        <>

        //Modal for Enable & Disable
            <Modal show={showEnableModal} onHide={() => setShowEnableModal(false)} centered>
                {
                    coursestatus !== true ?
                        <>
                            <Modal.Header closeButton>
                                <Modal.Title>Enable Course - {coursetitle} </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Are you sure you want to Enable the course {coursetitle}?
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setShowEnableModal(false)}>
                                    Cancel
                                </Button>
                                <Button variant="danger" onClick={EnableOrDisable}>
                                    Enable
                                </Button>
                            </Modal.Footer>
                        </>
                        :
                        <>
                            <Modal.Header closeButton>
                                <Modal.Title>Disable Course - {coursetitle} </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Are you sure you want to Disable the course {coursetitle}?
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setShowEnableModal(false)}>
                                    Cancel
                                </Button>
                                <Button variant="danger" onClick={EnableOrDisable}>
                                    Disable
                                </Button>
                            </Modal.Footer>
                        </>

                }
            </Modal>

            <Container fluid>
                <Row className='mt-5'>
                    {/* <Col xs={12} md={1} className='mt-5'></Col> */}
                    <Col xs={12} md={12} className='mt-2'>
                        <Row>
                            <Col xs={12} md={6}>
                                <form className="form-inline my-2 my-lg-0">
                                    <input
                                        className="form-control mr-sm-2"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </form>
                            </Col>
                        </Row>
                        <Row>
                            <Paper style={{ width: '100%' }}>
                                <TableContainer style={{ maxHeight: 640 }}>
                                    <Table stickyHeader aria-label="sticky table" style={{ backgroundColor: '#f3f3f3' }}>
                                        <TableHead style={{ backgroundColor: 'black' }}>
                                            <TableRow >
                                                <TableCell>Title</TableCell>
                                                <TableCell>Category</TableCell>
                                                <TableCell>Duration</TableCell>
                                                <TableCell>Level</TableCell>
                                                <TableCell>Created Date</TableCell>
                                                <TableCell align='right'>View</TableCell>
                                                <TableCell align='right'>Edit</TableCell>
                                                <TableCell align='right'>Delete</TableCell>
                                                <TableCell align='right'>Enable/Disable</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {filteredCourses.map((course) => (
                                                <TableRow key={course.courseId}>
                                                    <TableCell component="th" scope="row">
                                                        {course.title}
                                                    </TableCell>
                                                    <TableCell>{course.category}</TableCell>
                                                    <TableCell>{course.duration}</TableCell>
                                                    <TableCell>{course.level}</TableCell>
                                                    <TableCell>{course.createdAt}</TableCell>
                                                    <TableCell align='right'><Button><GridViewIcon /></Button></TableCell>
                                                    <TableCell align='right'><Button variant="outlined" color="primary"><Link to={`/admindupdatecourse/${course.courseId}`}><EditIcon /></Link></Button></TableCell>
                                                    <TableCell align='right'>
                                                        <Button variant="danger" color="error" onClick={() => handleDeleteClick(course.courseId)}>
                                                            <DeleteForeverOutlinedIcon />
                                                        </Button>
                                                    </TableCell>
                                                    <TableCell align='right'>
                                                        {/* <Switch
                                                            checked={course.status}
                                                            onChange={() => handleToggle(course.id)}
                                                            color="primary"
                                                        /> */}
                                                        <FormControlLabel
                                                            control={
                                                                <IOSSwitch sx={{ m: 1 }} checked={course.status}
                                                                    onClick={() => handleToggle(course.title, course.courseId, course.status)} />
                                                            }
                                                        />
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Paper>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this course?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={confirmDeletion}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>



            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Notification"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {dialogMessage}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

const mapStateToProps = (state) => ({
    courses: state.allcourse.courses,
});

const mapDispatchToProps = (dispatch) => ({
    fetchCourses: () => dispatch(fetchallCoursesRequest()),
    deleteCourse: (courseId) => dispatch(deleteCoursesRequest(courseId)),
    enableordisable: (enabledisablecourseId, coursestatus) => dispatch(enableDisableCourseRequest(enabledisablecourseId, coursestatus)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Adminviewcourse);

