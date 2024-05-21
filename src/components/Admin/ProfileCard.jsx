import { useEffect } from "react"
import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { connect } from "react-redux";
import { fetchProfileCardRequest } from "../../actions/LearnersViewAction";
import { useParams } from 'react-router-dom';

const ProfileCard = ({ fetchProfileCard, profilecard }) => {

    const learnerid = useParams();

    useEffect(() => {
        fetchProfileCard(learnerid);
    }, [fetchProfileCard]);
    console.log(profilecard);
    if (profilecard === 0) {
        return <div>
            <Box sx={{ width: 300 }}>
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
            </Box>
        </div>
    }

    return (

        <Grid item xs={9}>
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 151, borderRadius: "25%" }}
                    // image={profilecard.profilecard[0].learnerprofile[0].learnerprofile}
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            Personal Details
                        </Typography>
                        <Typography variant="h2" color="text.secondary" component="div">

                            {/* {profilecard.profilecard[0].learnerprofile[0].learnerFirstName} {profilecard.profilecard[0].learnerprofile[0].learnerLastName} */}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {/* {profilecard.profilecard[0].learnerEmail} */}
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        </Grid>
    )

};

const mapStoreToProps = (state) => ({
    profilecard: state.profilecard,
});

const mapDispatchToProps = (dispatch) => ({
    fetchProfileCard: (learnerid) => dispatch(fetchProfileCardRequest(learnerid))
})


export default connect(mapStoreToProps, mapDispatchToProps)(ProfileCard);