import React, {Component} from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    
    handleAdd() {
        alert('funciona')
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"/>
                <TodoForm handleAdd={this.handleAdd}/>
                <TodoList/>
            </div>
        )
    }

}