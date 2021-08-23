import React from "react";
import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";

import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";

function App() {
	const todoList = useSelector(selectTodoList);

	return (
		<div className="App">
			<h4 className="error__msg">Input cannot be empty!</h4>
			<div className="app__container">
				<div className="app__todoContainer">
					{todoList.map((item, idx) => (
						<TodoItem
							key={item.id}
							name={item.item}
							done={item.done}
							id={item.id}
							order={idx}
						/>
					))}
				</div>

				<Input />
			</div>
		</div>
	);
}

export default App;
