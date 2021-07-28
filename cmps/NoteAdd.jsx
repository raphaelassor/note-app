import { IconVideo } from './icon-cmps/IconVideo.jsx'
import { IconImage } from './icon-cmps/IconImage.jsx'
import { IconTodo } from './icon-cmps/IconTodo.jsx'
import { IconText } from './icon-cmps/IconText.jsx'
import { IconMap } from './icon-cmps/IconMap.jsx'
export class NoteAdd extends React.Component {
    state = {
        type: 'NoteText',
        txt: '',
        isFocus: false,
        title:'',
        isInputFocus: false

    }
    getPlaceholder = () => {
        switch (this.state.type) {
            case 'NoteText': return 'Take A Note...'
            case 'NoteImg': return 'Enter An Image Url...'
            case 'NoteTodo': return 'Enter A Comma-Separted List... '
            case 'NoteVideo': return 'Enter A Youtube Url...'
            case 'NoteMap' : return 'Enter Any Location...'

        }
    }
    handleChange = ({ target }) => {
        const field = target.name;
        const val = target.value;
        this.setState({ [field]: val }, () => console.log(this.state))
    }
    onCloseInput = (ev) => {
        ev.stopPropagation()
        this.setState({ isInputFocus: false })
    }
    render() {
        const { type, txt, isInputFocus, title } = this.state

        return <div className={`note-add-container ${isInputFocus && 'expanded-input'}`} name="note-add" onClick={() => {
            this.setState({ isInputFocus: true })
        }} >
            {isInputFocus && <input className="note-add-input-title" type="text" name="title" onChange={this.handleChange} value={title} placeholder="Title" />}
            <input className="note-add-input" type="text" name="txt" placeholder={this.getPlaceholder()} value={txt} onChange={this.handleChange} />
            <div className="input-add-labels">

                <label htmlFor="text-type">
                    <input type="radio" name="type" value='NoteText' id="text-type" onChange={this.handleChange} />
                    <IconText />
                </label>
                <label htmlFor="img-type">
                    <input type="radio" name="type" value='NoteImg' id="img-type" onChange={this.handleChange} />
                    <IconImage />
                </label>
                <label htmlFor="todo-type">
                    <input type="radio" name="type" value='NoteTodo' id="todo-type" onChange={this.handleChange} />
                    <IconTodo />
                </label>
                <label htmlFor="video-type">
                    <input type="radio" name="type" value='NoteVideo' id="video-type" onChange={this.handleChange} />
                    <IconVideo />
                </label>
                <label htmlFor="map-type">
                    <input type="radio" name="type" value='NoteMap' id="map-type" onChange={this.handleChange} />
                    <IconMap/>
                </label>
            </div>
            {isInputFocus &&  <div className="input-add-btns">
               <button onClick={this.onCloseInput}>Close</button>
                <button onClick={() => {
                    this.props.onSaveNote({ type, txt, title })
                    this.setState({ txt: '', title: '' })
                }}>Add</button>
            </div>}
        </div>
    }
}