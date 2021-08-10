import React from "react";
import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";

const todoList = [
	{
		item: "first todo",
		done: false,
		id: Date.now(),
	},
	{
		item: "second todo",
		done: true,
		id: 23234,
	},
];

function App() {
	return (
		<div className="App">
			<div className="app__container">
				<div className="app__todoContainer">
					{todoList.map((item) => (
						<TodoItem
							key={item.id}
							name={item.item}
							done={item.done}
							id={item.id}
						/>
					))}
				</div>

				<Input />
			</div>
		</div>
	);
}

export default App;
