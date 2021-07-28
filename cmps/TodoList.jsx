import {TodoPreview} from './TodoPreview.jsx'
export function TodoList({todos,onToggleTodo,onRemoveTodo}){

    if(!todos) return <div></div>
    return <div className="todo-list">
        {todos.map(todo =><TodoPreview todo={todo} key={todo.id} onRemoveTodo={onRemoveTodo} onToggleTodo={onToggleTodo}/>)}

    </div>
}