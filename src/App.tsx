import { ChangeEvent, useState } from "react";
import "./App.css";
// interface
import { ITask } from '../Interface';
import TodoList from "./components/TodoList";


function App() {
  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(4)
  const [todoList, setTodoList] = useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value)) //converted it to type number
    }
  }

  const addTask = () => {
    const newTask = { taskName: task, deadline: deadline }
    setTodoList([...todoList, newTask]) //To remove typescript error we created an interface
    setTask("")
    setDeadline(0)
    console.log(todoList);
  }

  const taskCompleted = (taskToDelete: string): void => {
    setTodoList(todoList.filter((task) => (taskToDelete != task.taskName)))
  }


  return (
    <div className="App">
      <div className="header">
        <div className="title">
          <h1>TodoApp</h1>
          <small>Built with typescript</small>
        </div>
        <div className="inputContainer">
          <input
            type="text"
            name="task"
            value={task}
            placeholder="Task..."
            onChange={handleChange}
            className="inputText" />
          <input
            type="number"
            name="deadline"
            value={deadline}
            placeholder="Deadline"
            onChange={handleChange}
            className="inputNumber" />
          <button onClick={addTask}>Add Task</button>
        </div>
      </div>
      <div className="todoList">
        {todoList?.map((taskItem: ITask, key: number) => (
          <TodoList tasks={taskItem} key={key} taskCompleted={taskCompleted} />
        ))}

      </div>
    </div>
  );
}

export default App;
