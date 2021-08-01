
import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from  './components/AddTask'
import Footer from  './components/Footer'
import About from  './components/About'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  
  useEffect(() =>{
    const getDatas = async () => {
     const data = await fetchDatas()
     
     setTasks(data)
    }

    getDatas()
  }, [])

  // fetch data
  const fetchDatas = async () =>{
   const res = await fetch('http://localhost:5001/tasks')
   const data = await res.json()
   return data
  }
  const fetchData = async (id) =>{
    const res = await fetch(`http://localhost:5001/tasks/${id}`)
    const data = await res.json()
    return data
   }
  // delete function
  const deleteTask = async (id) =>{
  await fetch(`http://localhost:5001/tasks/${id}`, {
    method: 'DELETE'
  })
  setTasks(tasks.filter((task) => task.id !== id))
  }

  //  toggleReminder
  const toggleReminder = async (id) => {
    //console.log(id);
    const getDat = await fetchData(id)
    const updData = {...getDat, reminder: !getDat.reminder}
    const res = await fetch(`http://localhost:5001/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updData)
    })
    const data = await res.json()
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task))
  }

  // add task
  const addTask = async (task) =>{
    const res = await fetch('http://localhost:5001/tasks', {
     method: 'POST',
     headers: {
       'content-type': 'application/json'
     },
     body: JSON.stringify(task)
    })
    const data = await res.json()
    setTasks([...tasks, data])
  }

 

  return (
    <Router>
      <div className="task-app">
      <Header onAdd={() => setShowAddTask(!showAddTask)}  onShow={showAddTask} />
    
    <Route path= '/' exact render={ (props) => (
       <>
       {showAddTask && <AddTask onAdd={addTask} />}
   {  tasks.length > 0 ? <Tasks tasks={tasks}  onDelete={deleteTask} onToggle = {toggleReminder} />
: 'NO TASK TO SHOW'}
   </>
    )} />
    <Route path= '/about' component= {About} />
    <Footer />
    </div>
    </Router>
  );
}

export default App;
