import { IconTextColor } from "../IconTextColor.jsx";

export function ColorEditor({note,handleChange}){

    return <label htmlFor="color-editor" >
        <input type="color" name="color" value={note.style.color} data-parent="style" id="color-editor" onChange={handleChange}/>
        <IconTextColor/>
    </label>
}