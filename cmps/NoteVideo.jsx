export function NoteVideo({info}){

    return <iframe className="note-video" src={`https://www.youtube.com/embed/${info.videoId}`}>
    </iframe>
}