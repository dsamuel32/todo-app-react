import React, {Component} from 'react'

import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:8080/api/todos'

export default class Todo extends Component {

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"/>
                <TodoForm />
                <TodoList />
            </div>
        )
    }

}