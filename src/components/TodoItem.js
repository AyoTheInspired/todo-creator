import { Checkbox } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setCheck } from "../features/todoSlice";

function TodoItem({ name, done, id, order }) {
	const handleCheck = () => {
		dispatch(setCheck(id));
	};

	const dispatch = useDispatch();

	return (
		<Div>
			<h4 className="todo__id"> {order + 1} </h4>
			<Checkbox
				checked={done}
				color="primary"
				onChange={handleCheck}
				inputProps={{ "aria-label": "secondary checkbox" }}
			/>

			<p className={done && "todoItem--done"}> {name} </p>
		</Div>
	);
}

export default TodoItem;

const Div = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80%;
	margin: 6px 4px;
	background-color: #fff;
	height: 40px;
	border-radius: 12px;

	h4 {
		margin-right: 10px;
		margin-left: 5px;
	}

	p {
		flex: 1;
		color: green;
	}

	.todoItem--done {
		text-decoration: line-through;
		color: red;
	}
`;
