import { NoteText } from './NoteText.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteVideo } from './NoteVideo.jsx'
import { NoteTodo } from './NoteTodo.jsx'
import { NoteMap } from '../cmps/NoteMap.jsx'
export const DynamicNote = (props) => {


    switch (props.type) {
        case 'NoteText':
            return <NoteText note={props.note} />
        case 'NoteImg':
            return <NoteImg info={props.note.info} />
        case 'NoteVideo':
            return <NoteVideo info={props.note.info} />
        case 'NoteTodo':
            return <NoteTodo info={props.note.info} note={props.note} {...props} />
        case 'NoteMap':
            return <NoteMap info={props.note.info} {...props}/>
        //   default:
        //     return //...some default error view
    }


}