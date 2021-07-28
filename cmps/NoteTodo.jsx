import {TodoList} from './TodoList.jsx'
import {utilService} from '../../../services/util-service.js'
import {eventBusService} from '../../../services/event-bus-service.js'
import { noteService } from '../services/note-service.js'
export class NoteTodo extends React.Component{

    state={
        note:null,
        inputTodoTxt:''
    }
    componentDidMount(){
            this.setState({note:this.props.note})
    }
    onToggleTodo=(todoId)=>{
        const updatedTodos=this.state.note.info.todos;
        const todoIdx=updatedTodos.findIndex(todo=>todo.id===todoId)
        updatedTodos[todoIdx].doneAt=(updatedTodos[todoIdx].doneAt)? null:Date.now();
        this.updateAndSaveTodos(updatedTodos)
    }
    onRemoveTodo=(todoId)=>{
        const updatedTodos=this.state.note.info.todos;
        const todoIdx=updatedTodos.findIndex(todo=>todo.id===todoId)
        updatedTodos.splice(todoIdx,1)
        this.updateAndSaveTodos(updatedTodos)
    }
    updateAndSaveTodos(updatedTodos){
       
        this.setState(prevState=>({
            note:{
                ...prevState.note,
                style:this.props.note.style,
                info:{
                    ...prevState.note.info,
                    todos:updatedTodos
                }
            }
            }),()=> {
                console.log(this.state.note,'in updated and save todos')
                eventBusService.emit('save-note',this.state.note)
            })
    }
    onAddTodo=()=>{
        const updatedTodos=this.state.note.info.todos;
        updatedTodos.unshift({txt:this.state.inputTodoTxt,doneAt:null,id:utilService.makeId()})
        this.updateAndSaveTodos(updatedTodos)
        this.setState(prevState=>({
            ...prevState,
            inputTodoTxt:''
        }))
        }
    handleChange=({target})=>{
 
        this.setState(prevState=>({
            ...prevState,
            inputTodoTxt:target.value
        }))
    }
    checkEnter=(ev)=>{
        if(ev.keyCode===13)this.onAddTodo()
    }
    render (){
        const {note,todos,inputTodoTxt}=this.state
        if(!note) return <div>loading</div>
        return <div className="note-todo">
          <TodoList todos={note.info.todos} onToggleTodo={this.onToggleTodo} onAddTodo={this.onAddTodo} onRemoveTodo={this.onRemoveTodo}  />
            <input style={this.props.note.style} type="text" value={inputTodoTxt} onChange={this.handleChange} onKeyDown={this.checkEnter} placeholder="add an item to your list..."/>
        </div>
    }

}