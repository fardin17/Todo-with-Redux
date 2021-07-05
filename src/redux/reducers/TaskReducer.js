/* eslint-disable no-unreachable */
import * as Types from "../types/Types";
const initializeState = {
    tasks: [],
    taskForm:{
        _id: null,
        title:'',
        priority: '',
    }
}

function TaskReducer (state= initializeState, action){
    switch(action.type){
        case Types.GET_TASKS:
            return{
                ...state,
                tasks:action.payload,
            };
            break;

        case Types.GET_TASK_DETAIL:
            return{
                ...state,
                taskForm:action.payload,
            };

        case Types.ADD_TASK:
            return {
                ...state,
                taskForm: {
                Title: "",
                Priority: "",
                },
            };
            break;

        case Types.CHANGE_TASK_INPUT:
            const taskForm = { ...state.taskForm };
            taskForm[action.payload.name] = action.payload.value;
            return {
                ...state,
                taskForm,
            };
            break;

        default:
            break;
    }
    return state;
}
export default TaskReducer;