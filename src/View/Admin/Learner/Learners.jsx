import LearnerReduxView from "../LearnerReduxView";
import EnhancedTable from "./LearnerViewAll";
export function Learners() {
    return (
        <>

            <h1 className="pt-5">Table format for learner</h1>
            <EnhancedTable />
            <LearnerReduxView />
        </>
    )
}