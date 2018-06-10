import React from 'react'
import { connect } from 'react-redux'
import {
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo
} from '../actions/todos'
import List from './List'


class Todos extends React.Component{
    generateId(){
        return Math.floor(Math.random()*10000000)
    }

    addItem = (e) => {
        e.preventDefault()

        this.props.dispatch(handleAddTodo(
            this.input.value,
            () => this.input.value = ''
        ))
    }

    removeItem = (item) => {
        this.props.dispatch(handleDeleteTodo(item))
    }

    toggleItem = (item) => {
        this.props.dispatch(handleToggleTodo(item))
    }

    render(){
        return (
            <div>
                <h1>Todos List</h1>
                <input
                    type="text"
                    placeholder="Add Todo"
                    ref = {(input) => this.input = input}
                />

                <button
                    onClick={this.addItem}
                >
                    Add Todo
                </button>
                
                <List 
                    toggleItem = {this.toggleItem}
                    items = {this.props.todos}
                    removeItem = {this.removeItem}
                />
            </div>
        ) 
    }
}

export default connect((state) => ({
    todos:state.todos
}))(Todos)