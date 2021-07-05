import { useEffect } from 'react'
import { useSelector,useDispatch} from "react-redux";
import { useParams } from "react-router-dom";
import {
    handleChangeInputAction, 
    updateTaskAction, 
    getTaskDetailAction
} from "../../redux/action/TaskAction";

const TaskEdit =()=> {

    const taskItem = useSelector((state)=>state.TaskReducer.taskForm)
    const tasks= useSelector((state)=>state.TaskReducer.tasks)
    const dispatch = useDispatch()
    const params = useParams()
    const { id } = params;
    const task= tasks.find((task)=>task._id===id)

    const handleChangeInput = (name, value) => {
    dispatch(handleChangeInputAction (name, value));
    }

    const updateHandler =  async(e)=>{
        e.preventDefault();
        dispatch(updateTaskAction(taskItem, id));
        }
    useEffect(() => {
    dispatch(getTaskDetailAction(id));
  }, [dispatch, id])

    return( 
            <form onSubmit={(e)=>updateHandler(e)} >      
                <div className="col-md-8 py-2">
                    <label for="taskTitle" class="form-label">Task Title</label>
                    <input 
                    id="taskTitle"
                    class="form-control"
                    type="text" 
                    placeholder={task.title}
                    value={taskItem.title}
                    onChange={(e)=>handleChangeInput('title', e.target.value)}
                    />
                </div>
                <div className="col-md-4 py-2">
                    <label for="taskPriority" class="form-label">Task Priority</label>
                    <select 
                    id="taskPriority" 
                    class="form-select"
                    value={taskItem.priority}
                    onChange={(e)=>handleChangeInput('priority', e.target.value)}
                    >
                    <option selected>Choose...</option>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                    </select>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <button type="submit" class="btn btn-primary">Edit Task</button>     
                </div>
            </form> 
    )
 }
 export default TaskEdit;