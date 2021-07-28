import {NotePreview} from '../cmps/NotePreview.jsx'
export function NotesList(props){

    return <section className="notes-container">
        {props.notes.map(note=><NotePreview note={note} key={note.id} {...props} />)}
    </section>
}