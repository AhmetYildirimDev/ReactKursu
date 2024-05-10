import TaskShow from "./taskShow";

function TaskList({ tasks, onDelete }) {
  console.log(tasks);
  return (
    <div className="task-list">
      {tasks.map((task, index) => {
       return <TaskShow key={index} onDelete={onDelete} task={task} />;
      })}
      </div>
  );
}

export default TaskList;
