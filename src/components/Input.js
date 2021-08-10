import React, { useState } from "react";
import styled from "styled-components";

const Input = () => {
	const [input, setInput] = useState("");

	const addTodo = () => {};

	return (
		<Div>
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button onClick={addTodo}>Add Todo</button>
		</Div>
	);
};

export default Input;

const Div = styled.div``;
