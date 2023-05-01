import { useState, useEffect } from "react"
import axios from "axios"
import '../App.css'

export const Note = ({id}) => {
    const [content, setContent] = useState('')
    const [notes, setNotes] = useState([])
    // console.log(notes)

    const createNotes = async(content) => {
        let response = await axios.post(`/trips/${id}/note/`, {
            'content': content,
        })
        return response.data.note
    }

    
    useEffect(() => { 
        const getNotes = async() =>{
            let response = await axios.get(`/trips/${id}/note/`)
            // console.log(response.data.note)
            setNotes(response.data.note)
        }
        getNotes()
    }, [notes])


    return (
        <div className="tripDetail-form" style={{width:'500px', marginLeft:'40px'}}>
            <h3 style={{paddingLeft:'20px'}}>&#9782; Notes</h3>
            <form style={{display:'flex'}} onSubmit={e=>[e.preventDefault(),createNotes(content), setContent('')]}>
                <div className="note-input">
                    <input style={{width:'400px', height:'50px', marginLeft:'5px', paddingLeft:'10px'}} placeholder='leave your message here...' type="text" value={content} onChange={e=>setContent(e.target.value)}/>
                </div>
                <div >
                    <input className="note-input" type="submit" value='Save' />  
                </div>  
            </form>
            {notes && notes.map(note =>
                <div key={note.id}>
                    <p style={{paddingLeft:'30px'}}>{note.content}</p>
                </div>)}
                    
        </div>
    )
}