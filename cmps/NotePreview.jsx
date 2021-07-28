const { withRouter, Link, Route } = ReactRouterDOM;
import { eventBusService } from '../../../services/event-bus-service.js';
import { DynamicNote } from './DynamicNote.jsx'
import { IconPalette } from './icon-cmps/IconPalette.jsx'
import { IconTrash } from './icon-cmps/iconTrash.jsx'
import { IconPin } from './icon-cmps/IconPin.jsx'
import { IconEdit } from './icon-cmps/IconEdit.jsx'
import { IconEmail } from './icon-cmps/IconEmail.jsx';
import { IconClone } from './icon-cmps/IconClone.jsx';
import { noteService } from '../services/note-service.js';
import { DynamicIcon } from './DynamicIcon.jsx'
class _NotePreview extends React.Component {



    onUpdateColor = ({ target }) => {
        console.log(target.style.backgroundColor)
        this.props.updateColor(this.props.note.id, target.style.backgroundColor)
    }
    render() {
        const { onRemoveNote, onCloneNote, note } = this.props

        return <div className="note-preview" style={note.style} >
            {/* <DynamicIcon type={note.type}/> */}
            <div className="note-preview-header">
                {note.title && <h3>{note.title}</h3>}
            </div>
            <DynamicNote note={note}{...this.props} type={note.type} />
            <div className="note-preview-buttons" onClick={(ev) => ev.stopPropagation()}>
                <IconPalette style={note.style} note={note} updateColor={this.onUpdateColor} mode={'selectionBar'} />
                <Link to={`/keep/edit/${note.id}`}><IconEdit /></Link>
                <button className="pin-btn" onClick={() => this.props.onTogglePinNote(this.props.note)}><IconPin /></button>
                <IconClone onCloneNote={onCloneNote} note={note} />
                <Link to={`/email/compose?subject=${note.title}&body=${note.info.txt}&type=${note.type}`}>
                    <IconEmail  />
                </Link>
                <button onClick={() => onRemoveNote(note.id)}><IconTrash /></button>
            </div>
        </div>

    }
}

export const NotePreview = withRouter(_NotePreview)
