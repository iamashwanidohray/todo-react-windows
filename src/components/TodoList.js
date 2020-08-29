import React from 'react';
import Todo from './Todo';
import {connect} from 'react-redux';
import { getTodosListByVisibilityFilter } from '../store/selectors/selectors';

const todoList = ({todos}) =>  {
    return (
        <ul style={{listStyleType: "none", listStylePosition: "inside"}}>
            {
                todos.map((todo) => {
                    return (
                        <Todo 
                            key = {todo.id} 
                            index = {todo.id}  
                            content = {todo.content} 
                            completed={todo.completed} />
                    )
                })
                
            }   
        </ul>
    )
}
const mapStateToProps = (state,props) => {
    const {visibilityFiltersReuducer} = state;
    const todos = getTodosListByVisibilityFilter(state.todosReducer.todos,visibilityFiltersReuducer);
    return {todos}
}

export default connect(mapStateToProps,null)(todoList);