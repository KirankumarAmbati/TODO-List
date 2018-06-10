import API from 'goals-todos-api'

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

// Action Creators
function addTodoAction(todo){
    return{
        type:ADD_TODO,
        todo
    }
}

function removeTodoAction(id){
    return{
        type: REMOVE_TODO,
        id
    }
}

function toggleTodoAction(id){
    return{
        type: TOGGLE_TODO,
        id
    }
}

export function handleAddTodo(name, cb){
    return (dispatch) => {
        return API.saveTodo(name)
            .then((todo) => {
                dispatch(addTodoAction(todo))
                cb()
        }).catch(() => {
            alert('Try again.')
        })
    }
}

export function handleDeleteTodo(todo){
    return (dispatch) => {
        dispatch(removeTodoAction(todo.id))

        return API.deleteTodo(todo.id)
            .catch(() => {
                dispatch(addTodoAction(todo))
                alert('Try Again.')
            })
    }
}

export function handleToggleTodo(item){
    return (dispatch) => {
        dispatch(toggleTodoAction(item.id))

        return API.saveTodoToggle(item.id)
            .catch(() => {
                dispatch(toggleTodoAction(item.id))
                alert('Error.Try again.')
        })
    }
}




      

