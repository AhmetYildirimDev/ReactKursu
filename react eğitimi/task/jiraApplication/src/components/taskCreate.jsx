import { useState } from "react";
import "../App.css";

function TaskCreate({ onCreate, updateTask, task}) {
  const [title, settitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  const HeandleChange = (event) => {
    setTaskDesc(event.target.value);
  };
  const heandleSubmit = (event) => {
    event.preventDefault();
    onCreate(title, taskDesc);
    console.log("butuona tıkla");
    setTaskDesc("");
    settitle("");
  };

  return (
    <div>
      {updateTask ? (
        <form className="task-update-form">
          <h3>Lütfen Taskı Düzenleyin</h3>

          <label className="task-label"> Başlığı Düzenleyiniz! </label>
          <input
            className="task-input"
            value={task.title}
            onChange={(event) => {
              settitle(event.target.value);
            }}
          />
          <label className="task-label">Taskı Düzenleyiniz!</label>
          <textarea
            name=""
            id=""
            className="task-textarea"
            rows={5}
            onChange={HeandleChange}
            value={task.taskDesc}
          ></textarea>
          <button className="task-button" onClick={heandleSubmit}>
            DÜZENLE
          </button>
        </form>
      ) : (
        <form className="task-form">
          <h3>Lütfen Task Ekleyin</h3>

          <label className="task-label"> Başlık </label>
          <input
            className="task-input"
            value={title}
            onChange={(event) => {
              settitle(event.target.value);
            }}
          />
          <label className="task-label">Task Giriniz!</label>
          <textarea
            name=""
            id=""
            className="task-textarea"
            rows={5}
            onChange={HeandleChange}
            value={taskDesc}
          ></textarea>
          <button className="task-button" onClick={heandleSubmit}>
            OLUŞTUR
          </button>
        </form>
      )}
    </div>
  );
}

export default TaskCreate;
