import { useState } from "react";
import { useNote } from "../conexte";

function InputSection() {
    
    const [note, setNote] = useState("")

    const {addNote} = useNote()
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!note) {
            alert('add notes')
            return
        }
        addNote({id:Date.now(), noteText: note})
        setNote("")
    }

    return (
        <form onSubmit={handleSubmit} className="flex">
            <input
                type="text"
                placeholder="Write Note..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={note}
                onChange={(e)=>setNote(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default InputSection;

