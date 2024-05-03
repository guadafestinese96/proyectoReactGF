import { useEffect, useState } from "react";
import TaskList from "./TaskList"
import FilterOptions from "./FilterOptions"
import { getPerfumes } from "../mock/asyncMock"
import useFilter from "./useFilter"
import usePerfumes from "../../hooks/usePerfumes";

const TaskListContainer = () => {
  const [tasks, setTasks] = useState([]);
  const { filter, setFilter, applyFilter } = useFilter();

  const pokemons = usePokemons();
  console.log(pokemons);

  useEffect(() => {
    getTasks().then((tasks) => {
      setTasks(tasks);
    });
  }, []);

  const filteredTasks = applyFilter(tasks);

  if (!tasks.length) return <h1>Cargando...</h1>;

  return (
    <main>
      <h1>Aplicación de Tareas</h1>
      <FilterOptions filter={filter} setFilter={setFilter} />
      <TaskList tasks={filteredTasks} />
    </main>
  );
};

export default TaskListContainer;