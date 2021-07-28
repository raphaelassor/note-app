import { IconPlus } from "../../../../../cmps/IconPlus.jsx"
import {IconMinus} from '../../../../../cmps/IconMinus.jsx'
export function FontSizeEditor({note,handleChange}){

  function   getNumFromFontSize(fontSize){
      
        return +note.style.fontSize.substr(0,2)
    }

    return <React.Fragment>
        <button className="plus-btn" onClick={handleChange} value={`${getNumFromFontSize(note.style.fontSize)+1}px`} name="fontSize" data-parent="style" > 
        </button>
        <button onClick={handleChange} value={`${getNumFromFontSize(note.style.fontSize)-1}px`}  name="fontSize" data-parent="style">
        </button>
    </React.Fragment>
     
}