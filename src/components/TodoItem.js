import { Checkbox } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setCheck } from "../features/todoSlice";

const TodoItem = ({ name, item, id, done }) => {
	const dispatch = useDispatch();

	const handleCheck = () => {
		dispatch(setCheck(id));
	};

	return (
		<Div>
			<Checkbox checked={done} color="primary" onChange={handleCheck} />
			<p className={done && "todoItem--done"}> {name} it's done </p>
		</Div>
	);
};

export default TodoItem;

const Div = styled.div`
	display: flex;
	align-items: center;
	width: 80%;
	background-color: #fff;
	margin: 6px 4px;
	height: 40px;
	border-radius: 12px;

	p {
		flex: 1;
	}

	p.todoItem--done {
		text-decoration: line-through;
	}
`;
