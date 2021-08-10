import React from "react";
import styled from "styled-components";

const TodoItem = ({ name, item, id, done }) => {
	return (
		<Div>
			<p className={done && "todoItem--done"}> {name} </p>
		</Div>
	);
};

export default TodoItem;

const Div = styled.div``;
