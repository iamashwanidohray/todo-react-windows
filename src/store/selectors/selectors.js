import {VISIBILITY_FILTERS} from '../constants/visibilityFilters';

export const getTodos = (todos) => {
    return Object.keys(todos).map((id) => getTodoById(todos,id))
}

export const getTodoById = (todos,id) => {
    return todos && Object.keys(todos).length ? {...todos[id], id} : {}
} 

export const getTodosListByVisibilityFilter = (todos,filter) => {
    const allTodos = getTodos(todos);
    switch(filter) {
        case VISIBILITY_FILTERS.COMPLETED:
            return allTodos.filter(todo => todo.completed);
        case VISIBILITY_FILTERS.INCOMPLETE:
            return allTodos.filter(todo => !todo.completed);
        case VISIBILITY_FILTERS.ALL:
        default :
            return allTodos;
    }
}