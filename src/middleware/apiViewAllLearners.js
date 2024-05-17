import axios from "axios";
import { FETCH_LEARNERS_SUCCESS, fetchLearnerFailure, fetchLearnerSuccess } from "../actions/LearnersViewAction";
import { baseUrl } from "./api";

const API_URL = `${baseUrl}/ViewAllLearners`;

const apiViewAllLearners = ({ dispatch }) => (next) => async (action) => {
    next(action);
    if (action.type === FETCH_LEARNERS_SUCCESS) {
        try {
            const response = await axios.get(API_URL);
            console.log(API_URL)
            debugger
            console.log('API response:', response);
            if (response.status === 200) {
                dispatch(fetchLearnerSuccess(response.data));
            }
            else {
                console.error("No data received from API")
            }
        }
        catch (error) {
            console.error('API Error:', error.message);
            dispatch(fetchLearnerFailure(error.message));
        }
    }
}