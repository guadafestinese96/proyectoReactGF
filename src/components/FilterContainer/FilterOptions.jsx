const FilterOptions = ({ filter, setFilter }) => {
    const handleFilterChange = (e) => {
      setFilter(e.target.value);
    };
  
    return (
      <div>
        <label className="labelFilter" htmlFor="filter">GENERO: </label>
        <select className="optionFilter" id="filter" value={filter} onChange={handleFilterChange}>
          <option className="optionFilter" value="all">Todos</option>
          <option className="optionFilter" value="femenino">Femenino</option>
          <option className="optionFilter" value="masculino">Masculino</option>
        </select>
      </div>
    );
  };
  
  export default FilterOptions;