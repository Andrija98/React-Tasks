import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";

let staticTasks = [
  {
      id: 1,
      text: 'some text',
      day: 'Sep 5th at 2:60'
  },
  {
      id: 2,
      text: 'some text',
      day: 'Feb 6th at 2:30'
  },
  {
      id: 3,
      text: 'some text',
      day: 'Feb 5th at 4:30'
  },
  {
      id: 4,
      text: 'some text',
      day: 'Feb 5th at 5:30'
  }
]


function App() {


  const [tasks, setTasks] = useState(staticTasks);
  
  function addTask(task){
    setTasks([...tasks, task]);
    console.log(tasks);

  }
  function deleteTask(id){
    setTasks(tasks.filter((task) => task.id !== id))
    console.log(id, 'Deleted');
  }
  return (
    <div className="container">
      <Header addTask={addTask} />
      <Tasks onDelete={deleteTask} tasks={tasks}/>
    </div>
  );
}

export default App;
