
import axios from 'axios';

export const FetchQuizQuestionsApi = async (action) => {
    try {
        const response = await axios.get(`http://localhost:5199/api/QuizQuestions/GetAllQuestionsByQuizId?quizId=${action}`);
        console.log("api questions:", response.data);
        return response.data.data;
    } catch (error) {
        console.log("Error fetching question: ", error.message);
    }

}