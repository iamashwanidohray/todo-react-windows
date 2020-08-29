import React, { Component } from 'react';
import {VISIBILITY_FILTERS} from '../../store/constants/visibilityFilters';
import { connect } from 'react-redux';
import { setFilter } from '../../store/actionCreators/actionCreators';
import './VisibilityFilters.css';


class VisibilityFilters extends Component {

    render() {
        return(
            <ul className="Filters">
                {
                    Object.keys(VISIBILITY_FILTERS).map((filter) => {
                        return <li 
                                className={this.props.currentFilter === VISIBILITY_FILTERS[filter] ? "ListItem Active" : "ListItem"}  
                                key={filter}>
                                    <span onClick={() => this.props.setFilter(filter)}>{VISIBILITY_FILTERS[filter]}</span>
                                </li>
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = (state,props) => {
    return {
            currentFilter : state.visibilityFiltersReuducer
    }
}

export default connect(mapStateToProps,{setFilter})(VisibilityFilters);
