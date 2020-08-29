import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from '../actionTypes/actionTypes';

let nextTodoId = 0;
export const addTodo = (content) => ({
    type : ADD_TODO,
    payload : {
        id : ++nextTodoId,
        content,
    }
});

export const toggleTodo = (index) => ({
    type : TOGGLE_TODO,
    payload : {
        toggleIndex : +index
    }
});

export const setFilter = (filter) => ({
    type : SET_FILTER,
    payload : {
        filter : filter
    }
})