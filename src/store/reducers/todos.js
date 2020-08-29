import * as actionTypes from '../actionTypes/actionTypes';

const initialState = {
    todos : {}
}

const todos = (state = initialState,action) => {
    // console.log("reducers:",action);
    switch(action.type){
        case actionTypes.ADD_TODO:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    [action.payload.id] : {
                        ...state.todos[action.payload.id],
                        content : action.payload.content,
                        completed : false,
                    }
                }
            }
        case actionTypes.TOGGLE_TODO:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    [action.payload.toggleIndex] : {
                        ...state.todos[action.payload.toggleIndex],
                        completed : !state.todos[action.payload.toggleIndex].completed,
                    }
                }
            }
        default:
            return state;
    }
}

export default todos;