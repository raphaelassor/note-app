import { noteService } from '../services/note-service.js'
import { DynamicNote } from './DynamicNote.jsx'
import { IconImage } from './icon-cmps/IconImage.jsx'
import { IconPalette } from './icon-cmps/IconPalette.jsx'
import { IconText } from './icon-cmps/IconText.jsx'
import { IconVideo } from './icon-cmps/IconVideo.jsx'
import { IconTodo } from './icon-cmps/IconTodo.jsx'
import { eventBusService } from '../../../services/event-bus-service.js'
import { IconPin } from './icon-cmps/IconPin.jsx'
import { StyleEditBar } from './StyleEditBar.jsx'
export class EditNote extends React.Component {

    state = {
        note: null,
        fileInputTxt: '',
        isFileInput: false,

    }
    componentDidMount() {
        const noteId = this.props.match.params.noteId;

        if (!noteId) this.props.history.push('/keep')
        noteService.getNoteById(noteId)
            .then(note => {
                if (!note) {
                    this.props.history.push('/keep')
                    return
                }
              
                this.setState({ note, isFileInput: false })
            })
            .catch(err => { })


    }
    onSubmitEdit = () => {
        console.log(this.state.note,'on submit')
        eventBusService.emit('save-note', this.state.note)
        this.onCloseEdit()

    }
    onCloseEdit = () => {
        this.props.history.push('/keep')
    }
    handleChange = ({ target }) => {
        console.log('in Handle Change ',target)
        const field = target.name
        const value = target.value
        const parentKey = target.dataset.parent
        if (field === 'fileInputTxt') this.setState(prevState => ({ ...prevState, [field]: value }))
        else if (field === 'title') this.setState(prevState => ({
            ...prevState,
            note: {
                ...prevState.note,
                title: value
            }
        }))
        else this.setState(prevState => ({
            ...prevState,
            note: {
                ...prevState.note,
                [parentKey]: {
                    ...prevState.note[parentKey],
                    [field]: value,
                }
            }
        }), () => console.log(this.state.note.style))
    }
    onChangeType = (type, txt) => {
        console.log('Type:', type)
        this.setState(prevState => ({
            ...prevState,
            note: {
                ...prevState.note,
                type: type,
                info: noteService.createNoteInfo({ type, txt })
            }
        }))
    }


    toggleFileInput = (fileType) => {
        console.log('onToggle', fileType)
        this.setState(prevState => ({
            ...prevState,
            isFileInput: !prevState.isFileInput,
            fileType
        }))
    }


    onAddFile = () => {
        this.onChangeType(this.state.fileType, this.state.fileInputTxt)
    }



    render() {
        const { note, fileInputTxt } = this.state
        if (!note) return null
        return <div className="edit-note " style={note.style}>
            <input type="text" placeholder="Enter Your Title" name="title" value={note.title} data-parent onChange={this.handleChange} />
            <div className="edit-content">
                {(note.type === 'NoteText') ?
                    <textarea style={note.style} value={note.info.txt} name="txt" data-parent="info" onChange={this.handleChange}></textarea>
                    : <DynamicNote info={note.info} note={note} {...this.props} type={note.type} />}
            </div>
            {(note.type === 'NoteTodo' || note.type === 'NoteText') && <StyleEditBar note={note} handleChange={this.handleChange} />}
            <div className="edit-btns">
                <button onClick={() => this.toggleFileInput('NoteImg')}><IconImage /></button>
                <IconPalette note={note} style={note.style} updateColor={this.handleChange} mode={'freeSelection'}/>
                <button onClick={() => this.onChangeType('NoteText')}><IconText /></button>
                <button onClick={() => this.onChangeType('NoteTodo')} ><IconTodo /> </button>
                <button onClick={() => this.toggleFileInput('NoteVideo')}><IconVideo /></button>
            </div>
            {this.state.isFileInput && <div class="file-input-field">
                <input type="text" value={fileInputTxt} name="fileInputTxt" onChange={this.handleChange} placeholder="Insert a vail url... "
                    onBlur={() => this.setState({ isFileInput: false })}
                />
                <button onClick={this.onAddFile}>Add</button>
            </div>}
            <div className="action-btns">
                <button onClick={this.onCloseEdit}>Cancel</button>
                <button onClick={this.onSubmitEdit}>Save</button>
            </div>
        </div>
    }

}