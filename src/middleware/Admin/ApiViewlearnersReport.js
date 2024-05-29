import axios from "axios";
import { FETCH_LEARNERSREPORT_REQUEST, FetchLearnersreportSuccess, FetchLearnersreportFailure } from '../../actions/LearnersReportAction';

const API_URL = 'http://localhost:3001/ViewlearnerReports';

const ApiViewlearnersReport = ({ dispatch }) => (next) => async (action) => {
    if (action.type === FETCH_LEARNERSREPORT_REQUEST) {
        try {
            const response = await axios.get(API_URL);
            console.log("API RESPONSE", response.data);
            dispatch(FetchLearnersreportSuccess(response.data));
        } catch (error) {
            console.error('API Error:', error.message);
            dispatch(FetchLearnersreportFailure(error.message));
        }
    }
    return next(action);
};

export default ApiViewlearnersReport;
