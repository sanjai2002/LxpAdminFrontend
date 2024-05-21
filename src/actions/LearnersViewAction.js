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

export const FETCH_PROFILECARD_REQUEST = 'FETCH_PROFILECARD_REQUEST';
export const FETCH_PROFILECARD_SUCCESS = 'FETCH_PROFILECARD_SUCCESS';
export const FETCH_PROFILECARD_FAILURE = 'FETCH_PROFILECARD_FAILURE';


export const fetchProfileCardRequest = (payload) => ({
    type: FETCH_PROFILECARD_REQUEST,
    payload: payload
})


export const fetchProfileCardSuccess = (profilecard) => ({
    type: FETCH_PROFILECARD_SUCCESS,
    payload: profilecard
})


export const fetchProfileCardFailure = (error) => ({
    type: FETCH_PROFILECARD_FAILURE,
    payload: error
})