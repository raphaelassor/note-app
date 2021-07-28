export class AudioNote extends React.Component{

    audio= new Audio(`${this.props.info.aduioSrc}`)
    componentDidMount(){
     }

    render(){

        return <div className="audio-note">
            <button onClick={()=>this.audio.play()}>Play</button>
        </div>
    }
}