import { useState } from "react";
import TaskCreate from "./taskCreate";

function TaskShow({ task, onDelete }) {
  const [updateTask, setupdateTask] = useState(false);

  console.log(task);

  const heandleDeleteClick = () => {
    onDelete(task.id);
  };
  const heandleUpdateClick = () => {
    setupdateTask(true);
  };
  return (
    <div>
      <div className="tasks-card">
        {updateTask ? (
          <TaskCreate updateTask={updateTask} task={task} />
        ) : (
          <div>
            <h4>Göreviniz:</h4>
            <span>{task.title} </span>

            <h4>Yapılacaklar:</h4>
            <span>{task.taskDesc} </span>
            <div className="card-buttons">
              <button className="delete-button" onClick={heandleDeleteClick}>
                Sil
              </button>
              <button className="update-button" onClick={heandleUpdateClick}>
                Güncelle
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskShow;
