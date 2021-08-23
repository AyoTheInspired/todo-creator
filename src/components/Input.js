import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { saveTodo, inputError } from "../features/todoSlice";

function Input() {
	const [input, setInput] = useState("");
	const dispatch = useDispatch();

	const addTodo = () => {
		if (!input) {
			dispatch(inputError("This is blank"));
		} else {
			dispatch(
				saveTodo({
					item: input,
					done: false,
					id: Date.now(),
				})
			);
		}

		setInput("");
	};

	return (
		<Div>
			<input
				placeholder="Enter an item"
				value={input}
				onChange={(e) => setInput(e.target.value)}
				type="text"
			/>
			<button onClick={addTodo}>Add</button>
		</Div>
	);
}

export default Input;

const Div = styled.div`
	height: 50px;
	width: 80%;
	border-radius: 12px;
	background-color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;

	input {
		background: none;
		border: none;
		margin-left: 12px;
		flex: 1;

		:focus {
			outline-width: 0;
		}
	}

	button {
		margin-right: 8px;
		background-color: rgba(214, 213, 213);
		border: none;
		border-radius: 10px;
		height: 30px;
		width: 50px;
	}
`;
