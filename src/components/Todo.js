import React from 'react';
import { toggleTodo } from '../store/actionCreators/actionCreators';
import {connect} from 'react-redux';

const todo = (props) => {
    
    let content = props.content;
    
    if(props.completed){
        content = <del>{props.content}</del> 
    }

    return (
            <li style={{textAlign:"left" }}>
                <input  type="checkbox" 
                        value = {props.content}
                        onChange={() => props.toggleTodo(props.index)} 
                        checked={props.completed? true : false} />
                <label>{content}</label>
            </li>
    )
}

export default connect(null,{toggleTodo})(todo);