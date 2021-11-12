import React from "react";
import Task from "./Task"
function TaskList({tasks, handleDeleteTask}) {
  const toDo = tasks.map((eachTask)=>{
    return <Task text={eachTask.text} key = {eachTask.text} category={eachTask.category} handleDeleteTask={handleDeleteTask}/>
  })
  return (
    <div className="tasks">
      {toDo}
    </div>
  );
}

export default TaskList;
