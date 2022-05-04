

const Header = (props)=>{
    const allTask = props.tasks.length
    const completeTask = props.tasks.filter((t)=> t.done === true)
    const notCompleteTask = props.tasks.filter((t)=> t.done === false)




    return(
        <header className="header">
                <h1>My Todo App</h1>
                <ul>
                    <li><strong>all task: {allTask}</strong></li>
                    <li><strong>task done: {completeTask.length}</strong></li>
                    <li><strong>task not done: {notCompleteTask.length}</strong></li>
                </ul> 
        </header>
    )
}

export default Header