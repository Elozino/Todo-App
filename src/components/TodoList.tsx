import React from 'react'
import { ITask } from '../../Interface';

interface Props {
  tasks: ITask;
  taskCompleted(taskToDelete: string): void;
  // task?: ITask; // to make the props optional
}

function TodoList({ tasks, taskCompleted }: Props) {
  return (
    <div className='inputContainer'>
      <div className="inputText">{tasks.taskName}</div>
      <div className="inputNumber">{tasks.deadline}</div>
      <button onClick={()=>{
        taskCompleted(tasks.taskName)
      }}>X</button>
    </div>
  )
}

export default TodoList
