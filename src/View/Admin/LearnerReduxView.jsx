import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchLearnerSuccess } from '../../actions/LearnersViewAction';
const LearnerReduxView = ({ fetchLearners, learners }) => {

    useEffect(() => {
        fetchLearners();
    }, [fetchLearners]);

    if (learners === 0) {
        return <div>Loading courses...</div>;
    }

    return (
        <>
            {learners}
        </>
    );
};

const mapStateToProps = (state) => ({
    learners: state.learners,
});

const mapDispatchToProps = (dispatch) => ({
    fetchLearners: () => dispatch(fetchLearnerSuccess()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LearnerReduxView);