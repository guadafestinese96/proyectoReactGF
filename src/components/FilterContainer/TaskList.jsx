
import Item from "../ItemList/Item";

const TaskList = ({ tasks }) => {
    console.log(typeof (tasks));
    console.log(tasks);
    return (
        <div>
             <ul>
                {tasks.map((task, index) => (
                    <Item key={index} item= {task}/> 
                ))}
                </ul>
           
        </div>
    );
};

export default TaskList;