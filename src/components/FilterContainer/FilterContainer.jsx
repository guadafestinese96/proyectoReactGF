import { useEffect, useState } from "react";
import TaskList from "./TaskList"
import FilterOptions from "./FilterOptions"
import { getPerfumes } from "../mock/asyncMock"
import useFilter from "./useFilter"
import "./FilterContainer.css"

const TaskListContainer = () => {
  const [perfumes, setPerfumes] = useState([]);
  const { filter, setFilter, applyFilter } = useFilter();


  useEffect(() => {
    getPerfumes().then((data) => {
      setPerfumes(data);
    });
  }, []);

  console.log(perfumes);

  const filteredTasks = applyFilter(perfumes);

  if (!perfumes.length) return <h1>Cargando...</h1>;

  return (
    <main>
      <h1 className="titleFilter">FILTRAR PERFUMES</h1>
      <FilterOptions filter={filter} setFilter={setFilter} />
      <TaskList tasks={filteredTasks} />
    </main>
  );
};

export default TaskListContainer;