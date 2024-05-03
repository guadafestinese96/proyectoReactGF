import { useState } from "react";

const useFilter = (initialFilter = "all") => {
  const [filter, setFilter] = useState(initialFilter);

  const applyFilter = (tasks) => {
    if (filter === "all") {
      return tasks;
    } else if (filter === "femenino") {
      return tasks.filter((task) => task.femenino);
    } else if (filter === "masculino") {
      return tasks.filter((task) => !task.femenino);
    }
  };

  return { filter, setFilter, applyFilter };
};

export default useFilter;