import { useState } from "react";

const useFilter = (initialFilter = "all") => {
  const [filter, setFilter] = useState(initialFilter);

  const applyFilter = (perfumes) => {
    if (filter === "all") {
      console.log(perfumes);
      return perfumes;
    } else if (filter === "femenino") {
      return perfumes.filter((perfume) => perfume.femenino);
    } else if (filter === "masculino") {
      return perfumes.filter((perfume) => !perfume.femenino);
    }
  };

  return { filter, setFilter, applyFilter };
};

export default useFilter;