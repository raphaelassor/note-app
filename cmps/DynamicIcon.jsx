import { IconImage } from './icon-cmps/IconImage.jsx';
import { IconMap } from './icon-cmps/IconMap.jsx';
import { IconText } from './icon-cmps/IconText.jsx';
import { IconTodo } from './icon-cmps/IconTodo.jsx';
import { IconVideo } from './icon-cmps/IconVideo.jsx';

export function DynamicIcon({type}){

    switch (type){
        case 'NoteText' :return <IconText/>
        case 'NoteVideo': return <IconVideo/>
        case 'NoteImg': return <IconImage/>
        case 'NoteTodo': return <IconTodo/>
        case 'NoteMap': return <IconMap/>
    }
}