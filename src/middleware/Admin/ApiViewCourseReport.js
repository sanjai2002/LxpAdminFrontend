import axios from "axios";
import {FETCH_COURSEREPORT_REQUEST,FetchCoursereportSuccess,FetchCourereportFailure} from '../../actions/Admin/CourseReportAction'

const API_URL = 'http://localhost:3001/ViewCoursereport';

const ApiViewCourseReport=({dispatch})=>(next)=>async(action)=>{

    if(action.type==FETCH_COURSEREPORT_REQUEST){
        try{
            const response=await axios.get(API_URL);
            console.log("Coursereport:",response.data);
            dispatch(FetchCoursereportSuccess(response.data));
            
        }
        catch(error){
            console.log("API ERROR:",error.message);
            dispatch(FetchCourereportFailure(error.message));
        }
    }
    return next(action);
};

export default ApiViewCourseReport;