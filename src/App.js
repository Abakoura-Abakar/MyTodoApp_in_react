import React,{ useState } from 'react';
import './App.css';
import Footer from './compnent/Footer';
import Header from './compnent/Header';
import TaskList from './compnent/TaskList';


function App() {

  const [tasks, setTasks] = useState([
    {id: 1, done: false, title: "Apprendre React"},
    {id: 2, done: true, title: "Apprendre Redux"},
    {id: 3, done: false, title: "Apprendre React-router"}
    
  ])

  const addTask = (title)=>{
    const newTask = {
      id: Date.now(),
      done: false,
      title: title
    }

    setTasks([...tasks, newTask])
  }

  const toggleTask = (id) => {
    const realTask = tasks.find((t) => t.id === id);
    console.log(realTask)
    const index = tasks.findIndex((t) => t.id === id);
    const taskCopy = { ...realTask };
    const tasksListCopy = [...tasks];

    taskCopy.done = !taskCopy.done;
    tasksListCopy[index] = taskCopy;
    setTasks(tasksListCopy);
  }

  const deleteTask = (id)=>{
    
    const tasksCopy = tasks.slice()
    const filterTaskCopy = tasksCopy.filter((t)=> t.id !== id)
    
    setTasks(filterTaskCopy)
    
   
  }


  return (
    <div className="App">
      <Header tasks={tasks}/>
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask}/>
      <Footer addTask={addTask}/>
    </div>
  );
}

export default App;
