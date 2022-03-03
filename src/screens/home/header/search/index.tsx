import { useRef } from "react";
import { SearchIcon } from "components/common/icons";
import { useShowResults } from "components/hooks/search/useShowResults";
import OptionList from "screens/home/header/search/OptionList";

const Search = (): JSX.Element => {
  //Value of the search input
  const inputSearch = useRef(null);
  const [results, setTerm]: any = useShowResults();

  //Handle input submit
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };
  //Handle input change
  const handleChange = (event: any) => {
    const { value } = event.target;
    setTimeout(() => {
      const reference: any = inputSearch.current;
      reference.value === value && setTerm(value);
    }, 1000);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar..."
        className="search-input"
        ref={inputSearch}
        onChange={handleChange}
      />
      {results.length > 0 && <OptionList data={results} />}
      <button className="search-button">
        <SearchIcon className="search-icon" />
      </button>
    </form>
  );
};

export default Search;
