const TaskList = ({tasks}) =>{
    return (
        <div> 
        <h2>Lista de perfumes</h2>
        <ul>
        {tasks.map((task)=>{
            <li key= {task.id}>
        {task.text} - {task.femenino ? "Femenino" : "Masculino"}
        </li>
        })}
        </ul>
        </div>
    )
}

export default TaskList;