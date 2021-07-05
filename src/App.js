import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddTaskPage from "./components/views/AddTaskPage";
import EditTaskPage from "./components/views/EditTaskPage";
import HomePage from "./components/views/Homepage"

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/edit_task/:id' component={EditTaskPage}/>
        <Route path='/add_task' component={AddTaskPage}/>
        <Route path='/' component={HomePage}/>
      </Switch>
    </Router>
  );
}

export default App;
