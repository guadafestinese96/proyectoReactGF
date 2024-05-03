import { useEffect, useState } from "react";
import TaskList from "./TaskList"
import FilterOptions from "./FilterOptions"
import { getPerfumes } from "../mock/asyncMock"
import useFilter from "./useFilter"
import usePerfumes from "../../hooks/usePerfumes";

const TaskListContainer = () => {
  const [perfumes, setPerfumes] = useState([]);
  const { filter, setFilter, applyFilter } = useFilter();

  const perfumitos = usePerfumes();
  console.log(perfumitos);

  useEffect(() => {
    getPerfumes().then((data) => {
      setPerfumes(data);
    });
  }, []);

  const filteredTasks = applyFilter(perfumes);

  if (!perfumes.length) return <h1>Cargando...</h1>;

  return (
    <main>
      <h1>Perfumes de Mujer</h1>
      <FilterOptions filter={filter} setFilter={setFilter} />
      <TaskList tasks={filteredTasks} />
    </main>
  );
};

export default TaskListContainer;