export const FETCH_LEARNERS_REQUEST = 'FETCH_LEARNERS_REQUEST';
export const FETCH_LEARNERS_SUCCESS = 'FETCH_LEARNERS_SUCCESS';
export const FETCH_LEARNERS_FAILURE = 'FETCH_LEARNERS_FAILURE';

export const fetchLearnerRequest = () => ({
    type: FETCH_LEARNERS_REQUEST,
});
export const fetchLearnerSuccess = (learners) => ({
    type: FETCH_LEARNERS_SUCCESS,
    payload: learners
});

export const fetchLearnerFailure = (error) => ({
    type: FETCH_LEARNERS_FAILURE,
    payload: error
})