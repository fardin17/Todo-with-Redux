import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { FaEdit, FaTrash} from 'react-icons/fa';
import { Table } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { deleteTaskAction, getTasksAction} from '../../redux/action/TaskAction'

const TaskList =(props)=>{

    const dispatch = useDispatch()
    const tasks = useSelector((state) => state.TaskReducer.tasks)
    console.log(tasks)
    useEffect(() => {
        dispatch(getTasksAction());
  }, [dispatch]);
    console.log(tasks)
    return(
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Tittle</th>
                    <th>Priority</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    tasks.map((task, index) => (
                    <tr key = {index}>
                        <td>{index+1}</td>
                        <td>{task._id}</td>
                        <td>{task.title}</td>
                        <td>{task.priority}</td>
                        <td >
                            <Link to ={`/edit_task/${task._id}`}><FaEdit/></Link>
                            <FaTrash 
                            style={{cursor:'pointer'}}
                            onClick={()=>dispatch(deleteTaskAction(task._id))}
                            />
                        
                        </td>
                    </tr>
                ))
                }    
            </tbody>
        </Table>
        
    )
}
export default TaskList;
