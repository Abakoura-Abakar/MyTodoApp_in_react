import { useState } from "react"

const Footer = (props)=>{
    const { addTask }= props
    const [text, setText] = useState('')

    const handleChange = (e)=>{
        setText(e.target.value)
    }

    const handleSubmit = (e)=>{

        e.preventDefault()

        addTask(text)

        setText("")
    }

    return(
        <footer>
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={handleChange} placeholder="Ajouter une tache"/>
            </form>
        </footer>
    )
}

export default Footer