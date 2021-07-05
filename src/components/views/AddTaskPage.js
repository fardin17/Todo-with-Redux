import Layout from "../layouts/Layout";
import { useSelector,useDispatch} from "react-redux";
import {handleChangeInputAction, storeTaskAction} from "../../redux/action/TaskAction";

const AddTaskPage =()=> {

    const taskItem = useSelector((state)=>state.TaskReducer.taskForm)
    const dispatch = useDispatch()
    console.log("Title: " + taskItem.title)
    console.log("Priority: " + taskItem.priority)
    const handleChangeInput = (name, value) => {
    dispatch(handleChangeInputAction (name, value));
  }

    const submitHandler =  async(e)=>{
        e.preventDefault();
        dispatch(storeTaskAction(taskItem))
        

}

    return(
        <Layout>   
            <form onSubmit={(e)=>submitHandler(e)} >      
                <div className="col-md-8 py-2">
                    <label for="taskTitle" class="form-label">Task Title</label>
                    <input 
                    id="taskTitle"
                    class="form-control"
                    type="text" 
                    placeholder="Enter a task title"
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
                    <button type="submit" class="btn btn-primary">Add Task</button>     
                </div>
            </form> 
        </Layout>
    )
 }
 export default AddTaskPage;