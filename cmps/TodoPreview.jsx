export function TodoPreview({todo,onRemoveTodo,onToggleTodo}){
    if(!todo.txt)return <span></span>
    return <div className="todo-preview" >
        <input type="checkbox" onChange={(ev)=>{
            onToggleTodo(todo.id)
        }} checked={todo.doneAt? true:false}/>
        <span className={(todo.doneAt)? 'todo-marked':'' }  onClick={()=> onToggleTodo(todo.id)} >{todo.txt}</span>
        <button onClick={(ev)=>{
            ev.stopPropagation()
            onRemoveTodo(todo.id)}
            }>X</button>
    </div>
}