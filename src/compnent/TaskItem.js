import trashIcon from '../assets/images/trash-can-outline.png'

const TaskItem = ({task, toggleTask, deleteTask})=>{

    
    
    return(
        <>
            <li className='item' key={task.id}><input type="checkbox" 
          onChange={() => toggleTask(task.id)} checked={task.done} />{task.title}<img onClick={()=> deleteTask(task.id)} className='trash-icon' src={trashIcon} alt='delete' /></li>
        </>
    )
}

export default TaskItem