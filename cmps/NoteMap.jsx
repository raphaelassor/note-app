import { mapService } from '../services/map-service.js'
export class NoteMap extends React.Component {

    componentDidMount() {

        mapService.connectGoogleApi()
            .then(() => {
                console.log('google available');
                mapService.getPosFromName(this.props.info.locName).
                    then(({ lat, lng }) => {
                       const gMap = new google.maps.Map(
                            document.getElementById(`map-${this.props.note.id}`), {
                            center: { lat, lng },
                            gestureHandling: "none",
                            zoom: 15
                        })
                        const marker = new google.maps.Marker({
                            position: { lat, lng },
                            map:gMap,
                        });
                        google.maps.event.trigger(gMap, 'resize')
                    })
            })
    }

    render() {

        return <div className="map" id={`map-${this.props.note.id}`}></div>
    }
}