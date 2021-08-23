import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	todoList: [],
	isError: false,
	errorMsg: "",
};

const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		saveTodo: (state, action) => {
			state.todoList.push(action.payload);
		},

		inputError: (state, action) => {
			return {
				...state,
				isError: true,
				errorMsg: action.payload,
			};
		},

		setCheck: (state, action) => {
			state.todoList.map((item) => {
				if (action.payload === item.id) {
					if (item.done === true) {
						item.done = false;
					} else {
						item.done = true;
					}
				}
			});
		},
	},
});

export const { saveTodo, setCheck, inputError } = todoSlice.actions;

export const selectError = (state) => state.todos.isError;

export const selectErrorMsg = (state) => state.todos.errorMsg;

export const selectTodoList = (state) => state.todos.todoList;

export default todoSlice.reducer;
