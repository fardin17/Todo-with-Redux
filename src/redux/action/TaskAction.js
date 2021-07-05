import axios from "axios";
import * as Types from "../types/Types";

export const getTasksAction = () => (dispatch) => {
  axios.get("https://fi-todo-crud.herokuapp.com/todo").then((response) => {
    dispatch({ type: Types.GET_TASKS, payload: response.data.result });
  });
};

export const getTaskDetailAction = (id) => (dispatch) => {
    axios.get(`https://fi-todo-crud.herokuapp.com/todo/${id}`).then((response) => {
        dispatch({ type: Types.GET_TASK_DETAIL, payload: response.data.result});
      });
};

export const storeTaskAction = (taskItem) => (dispatch) => {
  // validate data
  if (taskItem.title.length === 0) {
    alert("Please give a title !");
    return false;
  }
  if (taskItem.priority.length === 0) {
    alert("Please give a priority !");
    return false;
  }

  axios.post("https://fi-todo-crud.herokuapp.com/todo", taskItem).then((response) => {
      dispatch({ type: Types.ADD_TASK, payload: taskItem });
      dispatch(getTasksAction());
      alert('Task Added Successfully')
    });
};

export const updateTaskAction = (taskItem, id) => (dispatch) =>{
  // validate data
  if (taskItem.title === null) {
    alert("Please give a title !");
    return false;
  }
  if (taskItem.priority=== null) {
    alert("Please give a priority !");
    return false;
  }
    axios.put(`https://fi-todo-crud.herokuapp.com/todo/${id}`,taskItem)
      .then((response) => {
          if (response.status === 200) {
              alert('Task Updated !')
              dispatch(getTasksAction());
          } else {
              alert('Something went wrong !');
          }
    })
    .catch(error=>{
      alert("Please insert your update!")
      console.log(error)
    })
 
}




export const deleteTaskAction = (id) => (dispatch) => {
  console.log("Deleted ID: "+ id)
  axios.delete(`https://f-todo-crud.herokuapp.com/todo/${id}`).then((response) => {
    
      if (response.status === 200) {
          alert("Task Deleted");
          dispatch(getTasksAction());
      } else {
        alert("Something went wrong !");
      }
    })
    .catch(error => {
    console.log(error.response)
});
};


export const handleChangeInputAction = (name, value) => (dispatch) => {
  const formData = {
    name: name,
    value: value,
  };
  dispatch({ type: Types.CHANGE_TASK_INPUT, payload: formData });
};
