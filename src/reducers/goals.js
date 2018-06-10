import {
    ADD_GOAL,
    REMOVE_GOAL
} from '../actions/goals'

import { RECEIVE_DATA } from '../actions/shared'

export default function goals(state = [], action){
    switch (action.type) {
        case ADD_GOAL:
            return state.concat([action.goal])
            break;
        case REMOVE_GOAL:
            return state.filter((goal) => goal.id !== action.id)
            break;
        case RECEIVE_DATA:
            return action.goals
            break;
        default:
            return state;
    }
}