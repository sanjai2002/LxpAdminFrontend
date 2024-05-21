import ProfileCard from "../../../components/Admin/ProfileCard";
import Grid from '@mui/material/Grid';
import IndividualLearnerView from "./IndividualLearnerView";
import ProfileEnrolledCourses from "../../../components/Admin/ProfileEnrolledCourses";
export function IndividualLearner() {
    return (
        <>
            {/* <IndividualLearnerView /> */}
            <Grid container spacing={3} sx={{ mt: 5, }}>
                <ProfileCard />
            </Grid>
            <ProfileEnrolledCourses />
        </>
    )
}