import axios from "axios";
import { FETCH_QUIZREPORT_REQUEST, FetchQuizreportSuccess, FetchQuizreportFailure } from '../../actions/Admin/QuizReportAction';

const API_URL = 'http://localhost:3001/QuizReport';

const ApiViewQuizReport = ({ dispatch }) => (next) => async (action) => {
    if (action.type === FETCH_QUIZREPORT_REQUEST) {
        try {
            const response = await axios.get(API_URL);
            console.log("Quiz RESPONSE", response.data);
            dispatch(FetchQuizreportSuccess(response.data));
        } catch (error) {
            console.error('API Error:', error.message);
            dispatch(FetchQuizreportFailure(error.message));
        }
    }
    return next(action);
};

export default ApiViewQuizReport;
