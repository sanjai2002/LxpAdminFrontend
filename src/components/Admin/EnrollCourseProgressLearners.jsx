import * as React from 'react';
import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import DoneIcon from '@mui/icons-material/Done';
import { Container, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { CardActionArea } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchEnrollProgressCourseLearnerRequest } from '../../actions/Admin/EnrolledCourseProgressLearners';


export default function EnrollCourseProgressLearners() {
    const courseId = useParams();
    const dispatch = useDispatch();
    const enrolledlearners = useSelector((state) => state.enrolledprogressuser.learners);
    useEffect(() => {
        dispatch(fetchEnrollProgressCourseLearnerRequest(courseId))
    }, []);
    if (enrolledlearners.length === 0) {
        return (
            <>
                <Container fluid className='mt-5'>

                    <Typography variant="overline" display="block" gutterBottom>
                        All Enrolled users completed the course
                    </Typography>
                </Container>
            </>
        )
    }
    else {
        return (
            <>

                <Container fluid className='mt-5'>
                    <Row>
                        <Col xs={12} md={6}>
                            <Typography variant="h5" gutterBottom>
                                In Progress Users
                            </Typography>
                            <form className="form-inline my-2 my-lg-0">
                                <input
                                    className="form-control mr-sm-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                // value={searchpassedusers}
                                // onChange={(e) => setSearchpassedusers(e.target.value)}
                                />
                            </form>
                        </Col>
                    </Row>

                    <Row>
                        <div className='scrollale-content'>
                            {/* <div className='mt-5' style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}> */}
                            {enrolledlearners.map((row, index) => (
                                <Card key={row.learnerId} sx={{ width: 250, height: "100", mb: 5, borderRadius: 2, display: 'inline-block', flexDirection: 'column', justifyContent: 'space-between', margin: '0 20px', textDecoration: 'none' }} component={Link} to={'/individuallearner/' + row.learnerId}>
                                    <CardActionArea>
                                        <CardMedia component="img" height="140" row={2} image={row.profilePhoto} style={{ borderRadius: 100, width: "40%", height: "30%", marginLeft: "30%" }} alt={row.title} />
                                        <CardContent>
                                            <Typography gutterBottom variant='h5' component="div" textTransform={"capitalize"} align='center' fontWeight={"bold"}>{row.learnerName} </Typography>
                                        </CardContent>

                                    </CardActionArea>
                                </Card>
                            ))}
                        </div>
                    </Row>
                </Container>
            </>
        );
    }
};
