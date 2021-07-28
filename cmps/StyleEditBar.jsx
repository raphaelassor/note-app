import {ColorEditor} from './icon-cmps/style-editors/ColorEditor.jsx'
import {FontFamilyEditor} from './icon-cmps/style-editors/FontFamilyEditor.jsx'
import {FontSizeEditor} from './icon-cmps/style-editors/FontSizeEditor.jsx'
export function StyleEditBar(props)
{
    return <div class='style-edit-bar'>
        <FontFamilyEditor {...props}/>
        <ColorEditor {...props}/>
        <FontSizeEditor {...props}/>
        {/* <TextAlignEditor {...props}/> */}
    </div>
}