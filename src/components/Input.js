import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";

const Input = () => {
	const [input, setInput] = useState("");
	const dispatch = useDispatch();

	const addTodo = () => {
		console.log(`Adding ${input}`);
		dispatch(
			saveTodo({
				item: input,
				done: false,
				id: Date.now(),
			})
		);
	};

	return (
		<Div>
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button onClick={addTodo}>Add</button>
		</Div>
	);
};

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

		&:focus {
			outline-width: 0;
		}
	}

	button {
		margin-right: 8px;
		background-color: rgb(214, 213, 213);
		border: none;
		border-radius: 10px;
		height: 30px;
		width: 50px;
	}
`;
