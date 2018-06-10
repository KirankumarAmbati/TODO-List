import API from 'goals-todos-api'

export const ADD_GOAL = 'ADD_GOAL'
export const REMOVE_GOAL = 'REMOVE_GOAL'

function addGoalAction(goal){
    return{
        type:ADD_GOAL,
        goal
    }
}

function removeGoalAction(id){
    return{
        type: REMOVE_GOAL,
        id
    }
}

export function handleAddGoal(goalName, cb) {
    return (dispatch) => {
        return API.saveGoal(goalName)
            .then((goal) => {
                dispatch(addGoalAction(goal))
                cb()
            }).catch(() => {
            alert('Try again.')
        })
    }
}

export function handleDeleteGoal(item){
    return (dispatch) => {
        dispatch(removeGoalAction(item.id))

        return API.deleteGoal(item.id)
            .catch(() => {
                dispatch(addGoalAction(item))
                alert('Try Again.')
        })
    }
}