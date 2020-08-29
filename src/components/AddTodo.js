import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addTodo } from '../store/actionCreators/actionCreators';

class AddTodo extends Component {
    
    state = {
        content: ''
    }

    onChangedInput = (event) => {
        this.setState({
            content: event.target.value
        })
    }

    onAddTodoClicked = () => {
        // console.log(this.props);
        if (this.state.content.trim() !== '') {
            this.props.addTodo(this.state.content)
        }
        this.setState({
            content: ''
        })
    }

    render(){
        return (
            <div>
                    <label>Todo : </label>
                    <input onChange={this.onChangedInput} type="text" name = "todo" value = {this.state.content} />               
                    <button onClick={this.onAddTodoClicked}>Add Todo</button>
            </div>
        )
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return({
//         onAddTodo : (todoContent) => dispatch(addTodo(todoContent)) 
//     })
// }


export default connect(null,{addTodo})(AddTodo);
