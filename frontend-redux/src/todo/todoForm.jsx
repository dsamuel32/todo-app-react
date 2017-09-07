import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import {add, changeDescription, clear, search} from './todoActions'

class TodoForm extends Component {

    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    keyHandler(e) {
        const {add, clear, search, description} = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render() {
        const {add, search, description} = this.props
        return (
            <div role="form" className="todoForm">
                <Grid cols="12 9 10">
                    <input id="description" className="form-control" 
                            placeholder="Adicione uma Tarefa"
                            value={this.props.description}
                            onKeyUp={this.keyHandler}
                            onChange={this.props.changeDescription}>
                    </input>
                </Grid>
                
                <Grid cols="12 3 2">
                    <IconButton style="primary" icon="plus" hide="false"
                                onClick={() => add(description)}></IconButton>
                    <IconButton style="info" icon="search" hide="false"
                                onClick={search}></IconButton>
                    <IconButton style="default" icon="close" hide="false"
                                onClick={this.props.clear}></IconButton>
                </Grid>
            </div>
        )

    }

    componentWillMount() {
        this.props.search()
    }

}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({add, changeDescription, clear, search}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)