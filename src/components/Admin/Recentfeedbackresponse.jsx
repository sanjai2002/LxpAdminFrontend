import React, { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import {
  Paper,
  Typography,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import { connect } from "react-redux";
import { fetchRecentFeedbackResponseRequest } from "../../actions/Admin/AdminDashboardAction";
import FeedbackIcon from "@mui/icons-material/Feedback";

const RecentFeedbackCarousel = ({
  fetchRecentFeedbackResponseRequest,
  recentFeedback,
}) => {
  useEffect(() => {
    fetchRecentFeedbackResponseRequest();
  }, [fetchRecentFeedbackResponseRequest]);

  return (
    <div style={{ width: "100%", height: "300%" }}>
      <Carousel>
        {recentFeedback.map((feedback, index) => (
          <Paper key={index} style={{ padding: "20px" }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Learner profile" src={feedback.profilephoto} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="h5">{feedback.learnerName}</Typography>
                }
                secondary={
                  <>
                    <Typography variant="body1" sx={{ color: "#23275c",fontWeight:"bold",fontStyle:"italic" }}>
                      "{feedback.feedbackresponse}"
                    </Typography>
                    <br></br>
                    <Typography variant="body2"  sx={{ color: "GrayText",fontWeight:"bold",fontStyle:"italic" }}>
                      <b>Course:</b> {feedback.coursename} | <b>Topic:</b>{" "}
                      {feedback.topicName} | <b>Date:</b>{" "}
                      {new Date(feedback.dateoftheResponse).toLocaleString()}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          </Paper>
        ))}
      </Carousel>
    </div>
  );
};

const mapStateToProps = (state) => ({
  recentFeedback: state.recentfeedbackresponse.recentfeedbackresponse,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRecentFeedbackResponseRequest: () =>
    dispatch(fetchRecentFeedbackResponseRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentFeedbackCarousel);
