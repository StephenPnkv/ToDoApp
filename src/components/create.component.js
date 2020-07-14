
import React, {useState} from 'react';
import axios from 'axios';

const CreateTodo = () => {

  const [description,setDesc] = useState("");
  const [responsible,setResp] = useState("");
  const [priority,setPr] = useState("");
  const [completed,setComp] = useState(false);

  const onSubmit = (e) => {
    //e.preventDefault();
    const newTodo = {
      todo_description: description,
      todo_responsible: responsible,
      todo_priority: priority,
      todo_completed: completed
    };

    axios.post('http://localhost:4000/todos/add',newTodo)
      .then(res => console.log(res.data));
    setDesc("");
    setResp("");
    setPr("");
    setComp(false);
  }

  return (
            <div style={{marginTop: 10}}>
                <h3>Create New Todo</h3>
                <form onSubmit={() => onSubmit()}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={description}
                                onChange={e => setDesc(e.target.value)}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input
                                type="text"
                                className="form-control"
                                value={responsible}
                                onChange={e => setResp(e.target.value)}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityLow"
                                    value="Low"
                                    checked={priority==='Low'}
                                    onChange={e => setPr(e.target.value)}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityMedium"
                                    value="Medium"
                                    checked={priority==='Medium'}
                                    onChange={e => setPr(e.target.value)}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="High"
                                    checked={priority==='High'}
                                    onChange={e => setPr(e.target.value)}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
}

export default CreateTodo;
