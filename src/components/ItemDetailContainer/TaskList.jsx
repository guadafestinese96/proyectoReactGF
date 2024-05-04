import useCount from "../../hooks/useCount";
import ItemCount from "../ItemCount/ItemCount";
import Item from "../ItemList/Item";

const TaskList = ({ tasks }) => {
    console.log(typeof (tasks));
    console.log(tasks);
    return (
        <div>
            {/* <h2 className="titleFiltrados">PERFUMES FILTRADOS</h2> */}
            <ul>
                {tasks.map((task) => (
                    // <li key={task.id}>
                    //   {task.nombre} - {task.femenino ? "Femenino" : "Masculino"}
                    // </li>
                    <Item item= {task}/>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;