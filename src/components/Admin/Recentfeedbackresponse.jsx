import * as React from "react";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { CardMedia } from "@mui/material";
import { connect } from "react-redux";
import { fetchRecentFeedbackResponseRequest } from "../../actions/Admin/AdminDashboardAction";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../../Styles/Admin/AdminDashboard.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import FeedbackIcon from '@mui/icons-material/Feedback';

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

const Recentfeedbackresponse = ({
  fetchRecentFeedbackResponseRequest,
  recentfeedbackresponse,
}) => {
  useEffect(() => {
    fetchRecentFeedbackResponseRequest();
  }, [fetchRecentFeedbackResponseRequest]);

  console.log("feedback::", recentfeedbackresponse);

  const rows = recentfeedbackresponse.recentfeedbackresponse;
  return (
    <>
      <Grid item xs={12} md={3}>
        <Item >
        <Card variant="">
          <CardContent  sx={{ height: "300px" }} >
            <Typography
              sx={{ fontSize: 18, fontWeight: "bold", color: "#24A148" }}
              color="text.secondary"
              gutterBottom
            >
              Recent feedback
              &nbsp; 
              <FeedbackIcon/>
            </Typography>
            
            <marquee scrollamount="5" direction="up"  loop="true"> 
            <Typography variant="h6" gutterBottom sx={{ fontSize: 15 }}>
              <TransitionGroup>
                {rows.map((feedback) => (
                  <CSSTransition
                    key={feedback.feedbackresponseId}
                    timeout={1000}
                    classNames="fade"
                  >
                    <List
                      sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                      }}
                    >
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar
                            alt="Learner profile"
                            src={feedback.profilephoto}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary= {<b>{feedback.learnerName}</b>}
                          secondary={
                            <React.Fragment>
                              <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              >
                               {feedback.feedbackresponse}
                              </Typography>
                              <br></br>
                              <Typography sx={{display:"block",justifyContent:"space-between"}}>
                              <Typography
                                sx={{ display: "inline" }}
                                variant="body2"
                                color="text.primary"
                              >
                               {feedback.coursename} - {feedback.topicName}
                              </Typography>
                              <br></br> 
                              <Typography
                                sx={{ display: "inline"}}
                              
                                variant="body2"
                                color="text.primary"
                              >
                              {feedback.dateoftheResponse.replace("T", " ")}
                             
                              </Typography>
                              </Typography>
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                    </List>
                  </CSSTransition>
                ))}
              </TransitionGroup>
            </Typography>
            </marquee>
          </CardContent>
        </Card>
        </Item>
      </Grid>
    </>
  );
};

const mapStoreToProps = (state) => ({
  recentfeedbackresponse: state.recentfeedbackresponse,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRecentFeedbackResponseRequest: () =>
    dispatch(fetchRecentFeedbackResponseRequest()),
});

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(Recentfeedbackresponse);
