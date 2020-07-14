
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => {
  return(
    <tr>
      <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
      <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
      <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
      <td>
        <Link to={"/edit/" + props.todo._id}>Edit</Link>
      </td>
    </tr>
  );
}

const TodosList = () => {

  const [toDos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:4000/todos/',
      );
      setTodos(result.data);
    }
    fetchData();
  }, []);

  const todoList = () => {
    return toDos.map((item,i) => {
      return <Todo todo={item} key={i} />;
    });
  }

  return (
    <div>
        <h3>Things To Get Done</h3>
        <table className="table table-striped" style={{ marginTop: 20 }} >
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Responsible</th>
                    <th>Priority</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {todoList()}
            </tbody>
        </table>

    </div>
  );
}

export default TodosList;
