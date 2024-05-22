import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { fetchLastEnrolledCourseRequest } from "../../actions/LearnersViewAction";
import { connect } from "react-redux";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
const LastEnrolledCourse = ({ fetchLastEnrolledCourse, enrolledcourse }) => {
    const learnerid = useParams();
    useEffect(() => {
        fetchLastEnrolledCourse(learnerid);
    }, [fetchLastEnrolledCourse]);
    if (enrolledcourse.lastenrolledCourse === undefined) {
        return (
            <>
                <Grid item xs>
                    <Card sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', height: 200 }}>
                            <Typography component="div" variant="h5">
                                Last Enrolled course
                            </Typography>
                            <Typography sx={{ display: 'flex', flexDirection: 'row' }} component="div" variant="h3">
                                No Courses Enrolled
                            </Typography>
                        </Box>
                    </Card>
                </Grid>
            </>
        )
    }
    else {
        return (
            <>
                <Grid item xs>
                    <Card sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', height: 200 }}>
                            <Typography component="div" variant="h5">
                                Last Enrolled course
                            </Typography>
                            <Typography sx={{ display: 'flex', flexDirection: 'row' }} component="div" variant="h3">
                                {enrolledcourse.lastenrolledCourse.enrolledcourse}
                            </Typography>
                        </Box>
                    </Card>
                </Grid>
            </>
        )
    }
};
const mapStoreToProps = (state) => ({
    enrolledcourse: state.enrolledcourse,
});

const mapDispatchToProps = (dispatch) => ({
    fetchLastEnrolledCourse: (learnerid) => dispatch(fetchLastEnrolledCourseRequest(learnerid))
})

export default connect(mapStoreToProps, mapDispatchToProps)(LastEnrolledCourse);