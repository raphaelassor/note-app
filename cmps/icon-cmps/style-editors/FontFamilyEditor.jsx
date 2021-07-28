export function FontFamilyEditor({note,handleChange}){

    return <React.Fragment>
        <input type="list" list="fonts" id="font-picker" name="fontFamily" data-parent="style" onInput={handleChange} placeholder={note.style.fontFamily}/>
        <datalist id="fonts">
        <option value="Arial"></option>
        <option value="Impact"></option>
        <option value="sans-serif"></option>
        </datalist>
    </React.Fragment>
}